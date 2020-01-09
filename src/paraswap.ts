import axios, {AxiosError, AxiosResponse} from 'axios';
import Web3 = require("web3");

import {Address, APIError, EXCHANGES, NetworkID, OptimalRates, PriceString, Token, Transaction} from "./types";
import * as ERC20_ABI from "./abi/erc20.json";
import * as AUGUSTUS_ABI from "./abi/augustus.json";
import {ParaswapFeed} from "./paraswap-feed";

const PROVIDER_URL = process.env.PROVIDER_URL;
declare let web3: any;

export class ParaSwap {
  constructor(private network: number, private apiURL: string) {
  }

  handleAPIError(e: AxiosError): APIError {
    if (e.response) {
      const {data, status} = e.response!;
      return {status, message: data.error};
    }
    return new Error(e.message);
  }

  async getTokens() {
    try {
      const tokensURL = `${this.apiURL}/tokens/${this.network}`;
      const {data} = await axios.get(tokensURL);
      return (data.tokens as Token[]).map(t => new Token(t.address, t.decimals, t.symbol));
    } catch (e) {
      return this.handleAPIError(e);
    }
  }

  async getContractRate(srcToken: Address, destToken: Address, srcAmount: PriceString): Promise<OptimalRates | APIError> {
    return await new ParaswapFeed(this.network).getRate(srcToken, destToken, srcAmount);
  }

  async getRate(srcToken: Address, destToken: Address, srcAmount: PriceString, exchanges: string = ''): Promise<OptimalRates | APIError> {
    try {
      if (exchanges) {
        const targetDEXs = exchanges.split(',');

        if (!targetDEXs.length) {
          throw new Error('Invalid DEX list');
        }
      }

      const pricesURL = `${this.apiURL}/prices/${this.network}/${srcToken}/${destToken}/${srcAmount}/${exchanges}`;
      const {data} = await axios.get(pricesURL);
      return data.priceRoute as OptimalRates;
    } catch (e) {
      return this.handleAPIError(e);
    }
  }

  async buildTx(srcToken: Address, destToken: Address, srcAmount: PriceString, destAmount: PriceString, priceRoute: OptimalRates, userAddress: Address, referrer: string, payTo?: Address) {
    try {
      const txURL = `${this.apiURL}/transactions/${this.network}`;

      const txConfig = {
        priceRoute,
        srcToken,
        destToken,
        srcAmount,
        destAmount,
        userAddress,
        referrer,
        payTo: payTo || ''
      };

      const {data} = await axios.post(txURL, txConfig);

      return data as Transaction;
    } catch (e) {
      return this.handleAPIError(e);
    }
  }

  private async getSpender(network: NetworkID, provider: Web3): Promise<Address> {
    const augustusAddress = AUGUSTUS_ABI.addresses[network];

    const augustusContract = new provider.eth.Contract(AUGUSTUS_ABI.abi, augustusAddress);

    return augustusContract.methods.getTokenTransferProxy().call();
  }

  async getAllowance(userAddress: Address, tokenAddress: Address, network: NetworkID) {
    const provider = new Web3(new Web3.providers.HttpProvider(PROVIDER_URL!));

    const spender = await this.getSpender(network, provider);

    const contract = new provider.eth.Contract(ERC20_ABI, tokenAddress);

    return contract.methods.allowance(userAddress, spender).call();
  }

  async approveToken(amount: PriceString, userAddress: Address, tokenAddress: Address, network: NetworkID): Promise<string> {
    return new Promise(async (resolve, reject) => {
      const provider = new Web3(web3.currentProvider);

      const spender = await this.getSpender(network, provider);

      const contract: any = new provider.eth.Contract(ERC20_ABI, tokenAddress);

      return contract.methods.approve(spender, amount).send({from: userAddress},
        (err: any, txHash: string) => {
          if (err) return reject(err.message);
          resolve(txHash);
        });
    })
  }
}
