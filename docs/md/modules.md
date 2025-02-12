[@paraswap/sdk](README.md) / Exports

# @paraswap/sdk

## Table of contents

### Namespaces

- [&lt;internal\&gt;](modules/internal_.md)

### Enumerations

- [ContractMethod](enums/ContractMethod.md)
- [SwapSide](enums/SwapSide.md)

### Classes

- [FetcherError](classes/FetcherError.md)
- [ParaSwap](classes/ParaSwap.md)

### Interfaces

- [Allowance](interfaces/Allowance.md)
- [BuildNFTOrderDataInput](interfaces/BuildNFTOrderDataInput.md)
- [BuildOrderDataInput](interfaces/BuildOrderDataInput.md)
- [ConstructFetchInput](interfaces/ConstructFetchInput.md)
- [ConstructProviderFetchInput](interfaces/ConstructProviderFetchInput.md)
- [EthersProviderDeps](interfaces/EthersProviderDeps.md)
- [FetcherErrorInterface](interfaces/FetcherErrorInterface.md)
- [TransactionParams](interfaces/TransactionParams.md)
- [TxSendOverrides](interfaces/TxSendOverrides.md)

### Type Aliases

- [Address](modules.md#address)
- [AddressOrSymbol](modules.md#addressorsymbol)
- [AllSDKMethods](modules.md#allsdkmethods)
- [ApproveTokenForLimitOrderFunctions](modules.md#approvetokenforlimitorderfunctions)
- [ApproveTokenForNFTOrderFunctions](modules.md#approvetokenfornftorderfunctions)
- [ApproveTokenFunctions](modules.md#approvetokenfunctions)
- [AssetTypeVariant](modules.md#assettypevariant)
- [BuildLimitOrderFunctions](modules.md#buildlimitorderfunctions)
- [BuildLimitOrderInput](modules.md#buildlimitorderinput)
- [BuildLimitOrderTxInput](modules.md#buildlimitordertxinput)
- [BuildLimitOrdersTxFunctions](modules.md#buildlimitorderstxfunctions)
- [BuildNFTOrderFunctions](modules.md#buildnftorderfunctions)
- [BuildNFTOrderInput](modules.md#buildnftorderinput)
- [BuildNFTOrderTxInput](modules.md#buildnftordertxinput)
- [BuildNFTOrdersTxFunctions](modules.md#buildnftorderstxfunctions)
- [BuildOptions](modules.md#buildoptions)
- [BuildOptionsBase](modules.md#buildoptionsbase)
- [BuildOptionsWitWithMaxFee](modules.md#buildoptionswitwithmaxfee)
- [BuildOptionsWithGasPrice](modules.md#buildoptionswithgasprice)
- [BuildSwapAndLimitOrderTxInput](modules.md#buildswapandlimitordertxinput)
- [BuildSwapAndNFTOrderTxInput](modules.md#buildswapandnftordertxinput)
- [BuildSwapTxInput](modules.md#buildswaptxinput)
- [BuildTxFunctions](modules.md#buildtxfunctions)
- [BuildTxInput](modules.md#buildtxinput)
- [CancelLimitOrderFunctions](modules.md#cancellimitorderfunctions)
- [CancelNFTOrderFunctions](modules.md#cancelnftorderfunctions)
- [GetAdaptersFunctions](modules.md#getadaptersfunctions)
- [GetBalancesFunctions](modules.md#getbalancesfunctions)
- [GetLimitOrdersContractFunctions](modules.md#getlimitorderscontractfunctions)
- [GetLimitOrdersFunctions](modules.md#getlimitordersfunctions)
- [GetNFTOrdersContractFunctions](modules.md#getnftorderscontractfunctions)
- [GetNFTOrdersFunctions](modules.md#getnftordersfunctions)
- [GetRateFunctions](modules.md#getratefunctions)
- [GetSpenderFunctions](modules.md#getspenderfunctions)
- [GetTokensFunctions](modules.md#gettokensfunctions)
- [LimitOrder](modules.md#limitorder)
- [LimitOrderApiResponse](modules.md#limitorderapiresponse)
- [LimitOrderEvent](modules.md#limitorderevent)
- [LimitOrderFromApi](modules.md#limitorderfromapi)
- [LimitOrderHandlers](modules.md#limitorderhandlers)
- [LimitOrderState](modules.md#limitorderstate)
- [LimitOrderStatus](modules.md#limitorderstatus)
- [LimitOrderToSend](modules.md#limitordertosend)
- [LimitOrderTransaction](modules.md#limitordertransaction)
- [LimitOrderType](modules.md#limitordertype)
- [LimitOrdersApiResponse](modules.md#limitordersapiresponse)
- [LimitOrdersUserParams](modules.md#limitordersuserparams)
- [NFTOrderApiResponse](modules.md#nftorderapiresponse)
- [NFTOrderData](modules.md#nftorderdata)
- [NFTOrderFromAPI](modules.md#nftorderfromapi)
- [NFTOrderHandlers](modules.md#nftorderhandlers)
- [NFTOrderState](modules.md#nftorderstate)
- [NFTOrderToSend](modules.md#nftordertosend)
- [NFTOrderTransaction](modules.md#nftordertransaction)
- [NFTOrderType](modules.md#nftordertype)
- [NFTOrdersApiResponse](modules.md#nftordersapiresponse)
- [NFTOrdersUserParams](modules.md#nftordersuserparams)
- [OptimalRate](modules.md#optimalrate)
- [OptionalRate](modules.md#optionalrate)
- [OrderData](modules.md#orderdata)
- [PostLimitOrderFunctions](modules.md#postlimitorderfunctions)
- [PostNFTOrderFunctions](modules.md#postnftorderfunctions)
- [PriceString](modules.md#pricestring)
- [SDKConfig](modules.md#sdkconfig)
- [SignLimitOrderFunctions](modules.md#signlimitorderfunctions)
- [SignNFTOrderFunctions](modules.md#signnftorderfunctions)
- [SignableNFTOrderData](modules.md#signablenftorderdata)
- [SignableOrderData](modules.md#signableorderdata)
- [SignableTypedData](modules.md#signabletypeddata)
- [SimpleFetchSDK](modules.md#simplefetchsdk)
- [SimpleSDK](modules.md#simplesdk)
- [SubmitLimitOrderFuncs](modules.md#submitlimitorderfuncs)
- [SubmitNFTOrderFuncs](modules.md#submitnftorderfuncs)
- [SwapSDKMethods](modules.md#swapsdkmethods)
- [SwappableNFTOrder](modules.md#swappablenftorder)
- [SwappableOrder](modules.md#swappableorder)
- [Token](modules.md#token)
- [TxHash](modules.md#txhash)
- [Web3UnpromiEvent](modules.md#web3unpromievent)

### Variables

- [API\_URL](modules.md#api_url)
- [AssetType](modules.md#assettype)

### Functions

- [constructAllLimitOrdersHandlers](modules.md#constructalllimitordershandlers)
- [constructAllNFTOrdersHandlers](modules.md#constructallnftordershandlers)
- [constructApproveToken](modules.md#constructapprovetoken)
- [constructApproveTokenForLimitOrder](modules.md#constructapprovetokenforlimitorder)
- [constructApproveTokenForNFTOrder](modules.md#constructapprovetokenfornftorder)
- [constructAxiosFetcher](modules.md#constructaxiosfetcher)
- [constructBuildLimitOrder](modules.md#constructbuildlimitorder)
- [constructBuildLimitOrderTx](modules.md#constructbuildlimitordertx)
- [constructBuildNFTOrder](modules.md#constructbuildnftorder)
- [constructBuildNFTOrderTx](modules.md#constructbuildnftordertx)
- [constructBuildTx](modules.md#constructbuildtx)
- [constructCancelLimitOrder](modules.md#constructcancellimitorder)
- [constructCancelNFTOrder](modules.md#constructcancelnftorder)
- [constructEthersContractCaller](modules.md#constructetherscontractcaller)
- [constructFetchFetcher](modules.md#constructfetchfetcher)
- [constructFullSDK](modules.md#constructfullsdk)
- [constructGetAdapters](modules.md#constructgetadapters)
- [constructGetBalances](modules.md#constructgetbalances)
- [constructGetLimitOrders](modules.md#constructgetlimitorders)
- [constructGetLimitOrdersContract](modules.md#constructgetlimitorderscontract)
- [constructGetNFTOrders](modules.md#constructgetnftorders)
- [constructGetNFTOrdersContract](modules.md#constructgetnftorderscontract)
- [constructGetRate](modules.md#constructgetrate)
- [constructGetSpender](modules.md#constructgetspender)
- [constructGetTokens](modules.md#constructgettokens)
- [constructPartialSDK](modules.md#constructpartialsdk)
- [constructPostLimitOrder](modules.md#constructpostlimitorder)
- [constructPostNFTOrder](modules.md#constructpostnftorder)
- [constructSignLimitOrder](modules.md#constructsignlimitorder)
- [constructSignNFTOrder](modules.md#constructsignnftorder)
- [constructSimpleSDK](modules.md#constructsimplesdk)
- [constructSubmitLimitOrder](modules.md#constructsubmitlimitorder)
- [constructSubmitNFTOrder](modules.md#constructsubmitnftorder)
- [constructSwapSDK](modules.md#constructswapsdk)
- [constructToken](modules.md#constructtoken)
- [constructWeb3ContractCaller](modules.md#constructweb3contractcaller)
- [isAllowance](modules.md#isallowance)
- [isFetcherError](modules.md#isfetchererror)

## Type Aliases

### Address

Ƭ **Address**: `string`

#### Defined in

[src/helpers/token.ts:6](https://github.com/paraswap/paraswap-sdk/blob/master/src/helpers/token.ts#L6)

___

### AddressOrSymbol

Ƭ **AddressOrSymbol**: `string`

#### Defined in

[src/helpers/token.ts:10](https://github.com/paraswap/paraswap-sdk/blob/master/src/helpers/token.ts#L10)

___

### AllSDKMethods

Ƭ **AllSDKMethods**<`TxResponse`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `TxResponse` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `limitOrders` | [`LimitOrderHandlers`](modules.md#limitorderhandlers)<`TxResponse`\> |
| `nftOrders` | [`NFTOrderHandlers`](modules.md#nftorderhandlers)<`TxResponse`\> |
| `swap` | [`SwapSDKMethods`](modules/internal_.md#swapsdkmethods)<`TxResponse`\> |

#### Defined in

[src/sdk/full.ts:27](https://github.com/paraswap/paraswap-sdk/blob/master/src/sdk/full.ts#L27)

___

### ApproveTokenForLimitOrderFunctions

Ƭ **ApproveTokenForLimitOrderFunctions**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `approveMakerTokenForLimitOrder` | [`ApproveToken`](modules/internal_.md#approvetoken)<`T`\> | **`Description`**  approving AugustusRFQ as spender for makerAsset |
| `approveTakerTokenForLimitOrder` | [`ApproveToken`](modules/internal_.md#approvetoken)<`T`\> | **`Description`**  approving AugustusSwapper as spender for takerAsset for Limit Orders that will be executed through it |

#### Defined in

[src/methods/limitOrders/approveForOrder.ts:6](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/approveForOrder.ts#L6)

___

### ApproveTokenForNFTOrderFunctions

Ƭ **ApproveTokenForNFTOrderFunctions**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `approveERC20ForNFTOrder` | [`ApproveToken`](modules/internal_.md#approvetoken)<`T`\> | **`Description`**  approving AugustusSwapper as spender for takerAsset (ERC20) for Limit Orders that will be executed through it |
| `approveNFTorNFTOrder` | [`ApproveNFT`](modules/internal_.md#approvenft)<`T`\> | **`Description`**  approving AugustusRFQ as spender for makerAsset (NFT) |

#### Defined in

[src/methods/nftOrders/approveForOrder.ts:16](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/nftOrders/approveForOrder.ts#L16)

___

### ApproveTokenFunctions

Ƭ **ApproveTokenFunctions**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approveToken` | [`ApproveToken`](modules/internal_.md#approvetoken)<`T`\> |
| `approveTokenBulk` | [`ApproveTokenBulk`](modules/internal_.md#approvetokenbulk)<`T`\> |

#### Defined in

[src/methods/swap/approve.ts:17](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/approve.ts#L17)

___

### AssetTypeVariant

Ƭ **AssetTypeVariant**: typeof [`AssetType`](modules.md#assettype)[keyof typeof [`AssetType`](modules.md#assettype)]

#### Defined in

[src/methods/nftOrders/helpers/types.ts:50](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/nftOrders/helpers/types.ts#L50)

___

### BuildLimitOrderFunctions

Ƭ **BuildLimitOrderFunctions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `buildLimitOrder` | [`BuildLimitOrder`](modules/internal_.md#buildlimitorder) | **`Description`**  Build Orders that will be excuted through AugustusSwapper |

#### Defined in

[src/methods/limitOrders/buildOrder.ts:20](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/buildOrder.ts#L20)

___

### BuildLimitOrderInput

Ƭ **BuildLimitOrderInput**: [`Omit`](modules/internal_.md#omit)<[`BuildOrderDataInput`](interfaces/BuildOrderDataInput.md), ``"chainId"`` \| ``"verifyingContract"`` \| ``"AugustusAddress"``\>

#### Defined in

[src/methods/limitOrders/buildOrder.ts:10](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/buildOrder.ts#L10)

___

### BuildLimitOrderTxInput

Ƭ **BuildLimitOrderTxInput**: [`BuildTxInputBaseBUYForOrders`](modules/internal_.md#buildtxinputbasebuyfororders) & { `destDecimals`: `number` ; `orders`: [`SwappableOrder`](modules.md#swappableorder)[] ; `srcDecimals`: `number`  }

#### Defined in

[src/methods/swap/transaction.ts:95](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L95)

___

### BuildLimitOrdersTxFunctions

Ƭ **BuildLimitOrdersTxFunctions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `buildLimitOrderTx` | [`BuildLimitOrdersTx`](modules/internal_.md#buildlimitorderstx) |
| `buildSwapAndLimitOrderTx` | [`BuildSwapAndLimitOrdersTx`](modules/internal_.md#buildswapandlimitorderstx) |
| `getLimitOrdersRate` | [`GetLimitOrdersRate`](modules/internal_.md#getlimitordersrate) |

#### Defined in

[src/methods/limitOrders/transaction.ts:41](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/transaction.ts#L41)

___

### BuildNFTOrderFunctions

Ƭ **BuildNFTOrderFunctions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `buildNFTOrder` | [`BuildNFTOrder`](modules/internal_.md#buildnftorder) | **`Description`**  Build Orders that will be excuted through AugustusSwapper |

#### Defined in

[src/methods/nftOrders/buildOrder.ts:20](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/nftOrders/buildOrder.ts#L20)

___

### BuildNFTOrderInput

Ƭ **BuildNFTOrderInput**: [`Omit`](modules/internal_.md#omit)<[`BuildNFTOrderDataInput`](interfaces/BuildNFTOrderDataInput.md), ``"chainId"`` \| ``"verifyingContract"`` \| ``"AugustusAddress"``\>

#### Defined in

[src/methods/nftOrders/buildOrder.ts:10](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/nftOrders/buildOrder.ts#L10)

___

### BuildNFTOrderTxInput

Ƭ **BuildNFTOrderTxInput**: [`BuildTxInputBaseBUYForOrders`](modules/internal_.md#buildtxinputbasebuyfororders)<``"destDecimals"``\> & { `orders`: [`SwappableNFTOrder`](modules.md#swappablenftorder)[] ; `srcDecimals`: `number`  }

#### Defined in

[src/methods/swap/transaction.ts:102](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L102)

___

### BuildNFTOrdersTxFunctions

Ƭ **BuildNFTOrdersTxFunctions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `buildNFTOrderTx` | [`BuildNFTOrdersTx`](modules/internal_.md#buildnftorderstx) |
| `buildSwapAndNFTOrderTx` | [`BuildSwapAndNFTOrdersTx`](modules/internal_.md#buildswapandnftorderstx) |
| `getNFTOrdersRate` | [`GetNFTOrdersRate`](modules/internal_.md#getnftordersrate) |

#### Defined in

[src/methods/nftOrders/transaction.ts:41](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/nftOrders/transaction.ts#L41)

___

### BuildOptions

Ƭ **BuildOptions**: [`BuildOptionsWithGasPrice`](modules.md#buildoptionswithgasprice) \| [`BuildOptionsWitWithMaxFee`](modules.md#buildoptionswitwithmaxfee)

#### Defined in

[src/methods/swap/transaction.ts:153](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L153)

___

### BuildOptionsBase

Ƭ **BuildOptionsBase**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ignoreChecks?` | `boolean` |
| `ignoreGasEstimate?` | `boolean` |
| `onlyParams?` | `boolean` |
| `simple?` | `boolean` |

#### Defined in

[src/methods/swap/transaction.ts:143](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L143)

___

### BuildOptionsWitWithMaxFee

Ƭ **BuildOptionsWitWithMaxFee**: [`BuildOptionsBase`](modules.md#buildoptionsbase) & [`Partial`](modules/internal_.md#partial)<[`WithMaxFee`](modules/internal_.md#withmaxfee)\>

#### Defined in

[src/methods/swap/transaction.ts:151](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L151)

___

### BuildOptionsWithGasPrice

Ƭ **BuildOptionsWithGasPrice**: [`BuildOptionsBase`](modules.md#buildoptionsbase) & [`Partial`](modules/internal_.md#partial)<[`WithGasPrice`](modules/internal_.md#withgasprice)\>

#### Defined in

[src/methods/swap/transaction.ts:150](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L150)

___

### BuildSwapAndLimitOrderTxInput

Ƭ **BuildSwapAndLimitOrderTxInput**: [`BuildTxInputBaseBUYForOrders`](modules/internal_.md#buildtxinputbasebuyfororders) & { `destDecimals`: `number` ; `orders`: [`SwappableOrder`](modules.md#swappableorder)[] ; `priceRoute`: [`OptimalRate`](modules.md#optimalrate)  }

#### Defined in

[src/methods/swap/transaction.ts:118](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L118)

___

### BuildSwapAndNFTOrderTxInput

Ƭ **BuildSwapAndNFTOrderTxInput**: [`BuildTxInputBaseBUYForOrders`](modules/internal_.md#buildtxinputbasebuyfororders) & { `orders`: [`SwappableNFTOrder`](modules.md#swappablenftorder)[] ; `priceRoute`: [`OptimalRate`](modules.md#optimalrate)  }

#### Defined in

[src/methods/swap/transaction.ts:129](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L129)

___

### BuildSwapTxInput

Ƭ **BuildSwapTxInput**: [`BuildTxInputBase`](modules/internal_.md#buildtxinputbase) & { `priceRoute`: [`OptimalRate`](modules.md#optimalrate)  } & [`TxInputAmountsPartSell`](modules/internal_.md#txinputamountspartsell) \| [`TxInputAmountsPartBuy`](modules/internal_.md#txinputamountspartbuy) \| [`TxInputAmountsPartBuyOrSell`](modules/internal_.md#txinputamountspartbuyorsell)

#### Defined in

[src/methods/swap/transaction.ts:74](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L74)

___

### BuildTxFunctions

Ƭ **BuildTxFunctions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `buildTx` | [`BuildTx`](modules/internal_.md#buildtx) |

#### Defined in

[src/methods/swap/transaction.ts:161](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L161)

___

### BuildTxInput

Ƭ **BuildTxInput**: [`BuildSwapTxInput`](modules.md#buildswaptxinput) \| [`BuildLimitOrderTxInput`](modules.md#buildlimitordertxinput) \| [`BuildNFTOrderTxInput`](modules.md#buildnftordertxinput) \| [`BuildSwapAndLimitOrderTxInput`](modules.md#buildswapandlimitordertxinput) \| [`BuildSwapAndNFTOrderTxInput`](modules.md#buildswapandnftordertxinput)

#### Defined in

[src/methods/swap/transaction.ts:136](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L136)

___

### CancelLimitOrderFunctions

Ƭ **CancelLimitOrderFunctions**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cancelLimitOrder` | [`CancelOrder`](modules/internal_.md#cancelorder)<`T`\> |
| `cancelLimitOrderBulk` | [`CancelOrderBulk`](modules/internal_.md#cancelorderbulk)<`T`\> |

#### Defined in

[src/methods/limitOrders/cancelOrder.ts:17](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/cancelOrder.ts#L17)

___

### CancelNFTOrderFunctions

Ƭ **CancelNFTOrderFunctions**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cancelNFTOrder` | [`CancelOrder`](modules/internal_.md#cancelorder-1)<`T`\> |
| `cancelNFTOrderBulk` | [`CancelOrderBulk`](modules/internal_.md#cancelorderbulk-1)<`T`\> |

#### Defined in

[src/methods/nftOrders/cancelOrder.ts:14](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/nftOrders/cancelOrder.ts#L14)

___

### GetAdaptersFunctions

Ƭ **GetAdaptersFunctions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getAdapters` | [`GetAdaptersFunc`](interfaces/internal_.GetAdaptersFunc.md) |

#### Defined in

[src/methods/swap/adapters.ts:35](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/adapters.ts#L35)

___

### GetBalancesFunctions

Ƭ **GetBalancesFunctions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getAllowance` | [`GetAllowance`](modules/internal_.md#getallowance) |
| `getAllowances` | [`GetAllowances`](modules/internal_.md#getallowances) |
| `getBalance` | [`GetBalance`](modules/internal_.md#getbalance) |
| `getBalances` | [`GetBalances`](modules/internal_.md#getbalances) |

#### Defined in

[src/methods/swap/balance.ts:46](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/balance.ts#L46)

___

### GetLimitOrdersContractFunctions

Ƭ **GetLimitOrdersContractFunctions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getLimitOrdersContract` | [`GetSpender`](modules/internal_.md#getspender) |
| `getTokenTransferProxy` | [`GetSpender`](modules/internal_.md#getspender) |

#### Defined in

[src/methods/limitOrders/getOrdersContract.ts:4](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/getOrdersContract.ts#L4)

___

### GetLimitOrdersFunctions

Ƭ **GetLimitOrdersFunctions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getLimitOrderByHash` | [`GetLimitOrderByHash`](modules/internal_.md#getlimitorderbyhash) |
| `getLimitOrders` | [`GetLimitOrders`](modules/internal_.md#getlimitorders) |

#### Defined in

[src/methods/limitOrders/getOrders.ts:39](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/getOrders.ts#L39)

___

### GetNFTOrdersContractFunctions

Ƭ **GetNFTOrdersContractFunctions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getNFTOrdersContract` | [`GetSpender`](modules/internal_.md#getspender) |
| `getTokenTransferProxy` | [`GetSpender`](modules/internal_.md#getspender) |

#### Defined in

[src/methods/nftOrders/getOrdersContract.ts:4](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/nftOrders/getOrdersContract.ts#L4)

___

### GetNFTOrdersFunctions

Ƭ **GetNFTOrdersFunctions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getNFTOrderByHash` | [`GetNFTOrderByHash`](modules/internal_.md#getnftorderbyhash) |
| `getNFTOrders` | [`GetNFTOrders`](modules/internal_.md#getnftorders) |

#### Defined in

[src/methods/nftOrders/getOrders.ts:27](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/nftOrders/getOrders.ts#L27)

___

### GetRateFunctions

Ƭ **GetRateFunctions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getRate` | [`GetRate`](modules/internal_.md#getrate) |
| `getRateByRoute` | [`GetRateByRoute`](modules/internal_.md#getratebyroute) |

#### Defined in

[src/methods/swap/rates.ts:61](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/rates.ts#L61)

___

### GetSpenderFunctions

Ƭ **GetSpenderFunctions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getAugustusRFQ` | [`GetSpender`](modules/internal_.md#getspender) |
| `getAugustusSwapper` | [`GetSpender`](modules/internal_.md#getspender) |
| `getContracts` | [`GetContracts`](modules/internal_.md#getcontracts) |
| `getSpender` | [`GetSpender`](modules/internal_.md#getspender) |

#### Defined in

[src/methods/swap/spender.ts:8](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/spender.ts#L8)

___

### GetTokensFunctions

Ƭ **GetTokensFunctions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getTokens` | [`GetTokens`](modules/internal_.md#gettokens) |

#### Defined in

[src/methods/swap/token.ts:11](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/token.ts#L11)

___

### LimitOrder

Ƭ **LimitOrder**: [`LimitOrderFromApi`](modules.md#limitorderfromapi) & { `amountFilled?`: `string` ; `status`: [`LimitOrderStatus`](modules.md#limitorderstatus) ; `transactionHashes?`: `string`[]  }

#### Defined in

[src/methods/limitOrders/helpers/types.ts:13](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/types.ts#L13)

___

### LimitOrderApiResponse

Ƭ **LimitOrderApiResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `order` | [`LimitOrderFromApi`](modules.md#limitorderfromapi) |

#### Defined in

[src/methods/limitOrders/helpers/types.ts:30](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/types.ts#L30)

___

### LimitOrderEvent

Ƭ **LimitOrderEvent**: ``""``

#### Defined in

[src/methods/limitOrders/helpers/types.ts:39](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/types.ts#L39)

___

### LimitOrderFromApi

Ƭ **LimitOrderFromApi**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `chainId` | `number` | - |
| `createdAt` | `number` | - |
| `expiry` | `number` | - |
| `fillableBalance` | `string` | - |
| `maker` | `string` | - |
| `makerAmount` | `string` | - |
| `makerAsset` | `string` | - |
| `makerBalance` | `string` | - |
| `nonceAndMeta` | `string` | - |
| `orderHash` | `string` | - |
| `permitMakerAsset` | ``null`` \| `string` | - |
| `reservedBalance` | `string` | - |
| `signature` | `string` | - |
| `state` | [`LimitOrderState`](modules.md#limitorderstate) | - |
| `swappableBalance` | `string` | - |
| `taker` | `string` | - |
| `takerAmount` | `string` | - |
| `takerAsset` | `string` | - |
| `takerFromMeta` | `string` | - |
| `transactionHash` | ``null`` \| `string` | **`Description`**  transaction with the last event pertaining to the order: OrderFilled or OrderCancelled |
| `type` | [`LimitOrderType`](modules.md#limitordertype) | - |
| `updatedAt` | `number` | - |

#### Defined in

[src/methods/limitOrders/helpers/types.ts:46](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/types.ts#L46)

___

### LimitOrderHandlers

Ƭ **LimitOrderHandlers**<`T`\>: [`SubmitLimitOrderFuncs`](modules.md#submitlimitorderfuncs) & [`BuildLimitOrderFunctions`](modules.md#buildlimitorderfunctions) & [`SignLimitOrderFunctions`](modules.md#signlimitorderfunctions) & [`PostLimitOrderFunctions`](modules.md#postlimitorderfunctions) & [`GetLimitOrdersFunctions`](modules.md#getlimitordersfunctions) & [`GetLimitOrdersContractFunctions`](modules.md#getlimitorderscontractfunctions) & [`BuildLimitOrdersTxFunctions`](modules.md#buildlimitorderstxfunctions) & [`CancelLimitOrderFunctions`](modules.md#cancellimitorderfunctions)<`T`\> & [`ApproveTokenForLimitOrderFunctions`](modules.md#approvetokenforlimitorderfunctions)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/methods/limitOrders/index.ts:102](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/index.ts#L102)

___

### LimitOrderState

Ƭ **LimitOrderState**: ``"PENDING"`` \| ``"FULFILLED"`` \| ``"CANCELLED"`` \| ``"EXPIRED"``

#### Defined in

[src/methods/limitOrders/helpers/types.ts:37](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/types.ts#L37)

___

### LimitOrderStatus

Ƭ **LimitOrderStatus**: ``"open"`` \| ``"filled"`` \| ``"partiallyFilled"`` \| ``"expired"`` \| ``"canceled"`` \| ``"unknown"``

#### Defined in

[src/methods/limitOrders/helpers/types.ts:3](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/types.ts#L3)

___

### LimitOrderToSend

Ƭ **LimitOrderToSend**: [`OrderData`](modules.md#orderdata) & { `permitMakerAsset?`: `string` ; `signature`: `string`  }

#### Defined in

[src/methods/limitOrders/helpers/types.ts:18](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/types.ts#L18)

___

### LimitOrderTransaction

Ƭ **LimitOrderTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `event_type` | ``"OrderFilled"`` \| ``"OrderCancelled"`` |
| `hash` | `string` |

#### Defined in

[src/methods/limitOrders/helpers/types.ts:41](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/types.ts#L41)

___

### LimitOrderType

Ƭ **LimitOrderType**: ``"LIMIT"`` \| ``"P2P"``

#### Defined in

[src/methods/limitOrders/helpers/types.ts:11](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/types.ts#L11)

___

### LimitOrdersApiResponse

Ƭ **LimitOrdersApiResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hasMore` | `boolean` |
| `limit` | `number` |
| `offset` | `number` |
| `orders` | [`LimitOrderFromApi`](modules.md#limitorderfromapi)[] |
| `total` | `number` |

#### Defined in

[src/methods/limitOrders/helpers/types.ts:23](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/types.ts#L23)

___

### LimitOrdersUserParams

Ƭ **LimitOrdersUserParams**: { `maker`: [`Address`](modules.md#address) ; `type`: [`LimitOrderType`](modules.md#limitordertype)  } \| { `taker`: [`Address`](modules.md#address) ; `type`: [`LimitOrderType`](modules.md#limitordertype)  } & [`PaginationParams`](interfaces/internal_.PaginationParams.md)

#### Defined in

[src/methods/limitOrders/getOrders.ts:24](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/getOrders.ts#L24)

___

### NFTOrderApiResponse

Ƭ **NFTOrderApiResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `order` | [`NFTOrderFromAPI`](modules.md#nftorderfromapi) |

#### Defined in

[src/methods/nftOrders/helpers/types.ts:46](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/nftOrders/helpers/types.ts#L46)

___

### NFTOrderData

Ƭ **NFTOrderData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `expiry` | `number` |
| `maker` | [`Address`](modules.md#address) |
| `makerAmount` | [`BigIntAsString`](modules/internal_.md#bigintasstring) |
| `makerAsset` | [`BigIntAsString`](modules/internal_.md#bigintasstring) |
| `makerAssetId` | [`BigIntAsString`](modules/internal_.md#bigintasstring) |
| `nonceAndMeta` | [`BigIntAsString`](modules/internal_.md#bigintasstring) |
| `taker` | [`Address`](modules.md#address) |
| `takerAmount` | [`BigIntAsString`](modules/internal_.md#bigintasstring) |
| `takerAsset` | [`BigIntAsString`](modules/internal_.md#bigintasstring) |
| `takerAssetId` | [`BigIntAsString`](modules/internal_.md#bigintasstring) |

#### Defined in

[src/methods/nftOrders/helpers/buildOrderData.ts:56](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/nftOrders/helpers/buildOrderData.ts#L56)

___

### NFTOrderFromAPI

Ƭ **NFTOrderFromAPI**: [`NFTOrderToSend`](modules.md#nftordertosend) & { `chainId`: `number` ; `createdAt`: `number` ; `fillableBalance`: `string` ; `makerAsset`: [`Address`](modules.md#address) ; `makerAssetType`: [`AssetTypeVariant`](modules.md#assettypevariant) ; `makerBalance`: `string` ; `orderHash`: `string` ; `permitMakerAsset`: ``null`` \| `string` ; `state`: [`NFTOrderState`](modules.md#nftorderstate) ; `takerAsset`: [`Address`](modules.md#address) ; `takerAssetType`: [`AssetTypeVariant`](modules.md#assettypevariant) ; `takerFromMeta`: `string` ; `transactionHash`: ``null`` \| `string` ; `type`: [`NFTOrderType`](modules.md#nftordertype) ; `updatedAt`: `number`  }

#### Defined in

[src/methods/nftOrders/helpers/types.ts:22](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/nftOrders/helpers/types.ts#L22)

___

### NFTOrderHandlers

Ƭ **NFTOrderHandlers**<`T`\>: [`SubmitNFTOrderFuncs`](modules.md#submitnftorderfuncs) & [`BuildNFTOrderFunctions`](modules.md#buildnftorderfunctions) & [`SignNFTOrderFunctions`](modules.md#signnftorderfunctions) & [`PostNFTOrderFunctions`](modules.md#postnftorderfunctions) & [`GetNFTOrdersFunctions`](modules.md#getnftordersfunctions) & [`GetNFTOrdersContractFunctions`](modules.md#getnftorderscontractfunctions) & [`BuildNFTOrdersTxFunctions`](modules.md#buildnftorderstxfunctions) & [`CancelNFTOrderFunctions`](modules.md#cancelnftorderfunctions)<`T`\> & [`ApproveTokenForNFTOrderFunctions`](modules.md#approvetokenfornftorderfunctions)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/methods/nftOrders/index.ts:95](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/nftOrders/index.ts#L95)

___

### NFTOrderState

Ƭ **NFTOrderState**: ``"PENDING"`` \| ``"FULFILLED"`` \| ``"CANCELLED"`` \| ``"EXPIRED"``

#### Defined in

[src/methods/nftOrders/helpers/types.ts:20](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/nftOrders/helpers/types.ts#L20)

___

### NFTOrderToSend

Ƭ **NFTOrderToSend**: [`NFTOrderData`](modules.md#nftorderdata) & { `permitMakerAsset?`: `string` ; `signature`: `string`  }

#### Defined in

[src/methods/nftOrders/helpers/types.ts:12](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/nftOrders/helpers/types.ts#L12)

___

### NFTOrderTransaction

Ƭ **NFTOrderTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `event_type` | ``"OrderFilled"`` \| ``"OrderCancelled"`` |
| `hash` | `string` |

#### Defined in

[src/methods/nftOrders/helpers/types.ts:5](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/nftOrders/helpers/types.ts#L5)

___

### NFTOrderType

Ƭ **NFTOrderType**: ``"LIMIT"`` \| ``"P2P"``

#### Defined in

[src/methods/nftOrders/helpers/types.ts:10](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/nftOrders/helpers/types.ts#L10)

___

### NFTOrdersApiResponse

Ƭ **NFTOrdersApiResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `orders` | [`NFTOrderFromAPI`](modules.md#nftorderfromapi)[] |

#### Defined in

[src/methods/nftOrders/helpers/types.ts:43](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/nftOrders/helpers/types.ts#L43)

___

### NFTOrdersUserParams

Ƭ **NFTOrdersUserParams**: { `maker`: [`Address`](modules.md#address) ; `type`: [`NFTOrderType`](modules.md#nftordertype)  } \| { `taker`: [`Address`](modules.md#address) ; `type`: [`NFTOrderType`](modules.md#nftordertype)  }

#### Defined in

[src/methods/nftOrders/getOrders.ts:15](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/nftOrders/getOrders.ts#L15)

___

### OptimalRate

Ƭ **OptimalRate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bestRoute` | [`OptimalRoute`](modules/internal_.md#optimalroute)[] |
| `blockNumber` | `number` |
| `contractAddress` | [`Address`](modules/internal_.md#address) |
| `contractMethod` | `string` |
| `destAmount` | [`NumberAsString`](modules/internal_.md#numberasstring) |
| `destDecimals` | `number` |
| `destToken` | [`Address`](modules/internal_.md#address) |
| `destUSD` | [`NumberAsString`](modules/internal_.md#numberasstring) |
| `gasCost` | [`NumberAsString`](modules/internal_.md#numberasstring) |
| `gasCostUSD` | [`NumberAsString`](modules/internal_.md#numberasstring) |
| `hmac` | `string` |
| `maxImpact?` | `number` |
| `maxImpactReached?` | `boolean` |
| `maxUSDImpact?` | `number` |
| `network` | `number` |
| `others?` | [`OptionalRate`](modules.md#optionalrate)[] |
| `partner?` | `string` |
| `partnerFee` | `number` |
| `side` | [`SwapSide`](enums/SwapSide.md) |
| `srcAmount` | [`NumberAsString`](modules/internal_.md#numberasstring) |
| `srcDecimals` | `number` |
| `srcToken` | [`Address`](modules/internal_.md#address) |
| `srcUSD` | [`NumberAsString`](modules/internal_.md#numberasstring) |
| `tokenTransferProxy` | [`Address`](modules/internal_.md#address) |

#### Defined in

node_modules/paraswap-core/build/types.d.ts:36

___

### OptionalRate

Ƭ **OptionalRate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data?` | `any` |
| `destAmount` | [`NumberAsString`](modules/internal_.md#numberasstring) |
| `exchange` | `string` |
| `srcAmount` | [`NumberAsString`](modules/internal_.md#numberasstring) |
| `unit?` | [`NumberAsString`](modules/internal_.md#numberasstring) |

#### Defined in

node_modules/paraswap-core/build/types.d.ts:29

___

### OrderData

Ƭ **OrderData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `expiry` | `number` |
| `maker` | `string` |
| `makerAmount` | `string` |
| `makerAsset` | `string` |
| `nonceAndMeta` | `string` |
| `taker` | `string` |
| `takerAmount` | `string` |
| `takerAsset` | `string` |

#### Defined in

[src/methods/limitOrders/helpers/buildOrderData.ts:43](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/buildOrderData.ts#L43)

___

### PostLimitOrderFunctions

Ƭ **PostLimitOrderFunctions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `postLimitOrder` | [`PostLimitOrder`](modules/internal_.md#postlimitorder) |
| `postP2POrder` | [`PostLimitOrder`](modules/internal_.md#postlimitorder) |

#### Defined in

[src/methods/limitOrders/postOrder.ts:16](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/postOrder.ts#L16)

___

### PostNFTOrderFunctions

Ƭ **PostNFTOrderFunctions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `postNFTLimitOrder` | [`PostNFTOrder`](modules/internal_.md#postnftorder) |
| `postNFTP2POrder` | [`PostNFTOrder`](modules/internal_.md#postnftorder) |

#### Defined in

[src/methods/nftOrders/postOrder.ts:16](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/nftOrders/postOrder.ts#L16)

___

### PriceString

Ƭ **PriceString**: `string`

#### Defined in

[src/helpers/token.ts:14](https://github.com/paraswap/paraswap-sdk/blob/master/src/helpers/token.ts#L14)

___

### SDKConfig

Ƭ **SDKConfig**<`TxResponse`\>: [`ConstructProviderFetchInput`](interfaces/ConstructProviderFetchInput.md)<`TxResponse`, ``"staticCall"`` \| ``"transactCall"`` \| ``"signTypedDataCall"``\> & [`ConstructFetchInput`](interfaces/ConstructFetchInput.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TxResponse` | `any` |

#### Defined in

[src/sdk/partial.ts:14](https://github.com/paraswap/paraswap-sdk/blob/master/src/sdk/partial.ts#L14)

___

### SignLimitOrderFunctions

Ƭ **SignLimitOrderFunctions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `signLimitOrder` | (`signableOrderData`: [`SignableOrderData`](modules.md#signableorderdata)) => `Promise`<`string`\> |

#### Defined in

[src/methods/limitOrders/signOrder.ts:5](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/signOrder.ts#L5)

___

### SignNFTOrderFunctions

Ƭ **SignNFTOrderFunctions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `signNFTOrder` | (`signableOrderData`: [`SignableNFTOrderData`](modules.md#signablenftorderdata)) => `Promise`<`string`\> |

#### Defined in

[src/methods/nftOrders/signOrder.ts:5](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/nftOrders/signOrder.ts#L5)

___

### SignableNFTOrderData

Ƭ **SignableNFTOrderData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`NFTOrderData`](modules.md#nftorderdata) |
| `domain` | [`Domain`](modules/internal_.md#domain) |
| `types` | { `OrderNFT`: typeof [`OrderNFT`](modules/internal_.md#ordernft)  } |
| `types.OrderNFT` | typeof [`OrderNFT`](modules/internal_.md#ordernft) |

#### Defined in

[src/methods/nftOrders/helpers/buildOrderData.ts:48](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/nftOrders/helpers/buildOrderData.ts#L48)

___

### SignableOrderData

Ƭ **SignableOrderData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`OrderData`](modules.md#orderdata) |
| `domain` | [`Domain`](modules/internal_.md#domain) |
| `types` | { `Order`: typeof [`Order`](modules/internal_.md#order)  } |
| `types.Order` | typeof [`Order`](modules/internal_.md#order) |

#### Defined in

[src/methods/limitOrders/helpers/buildOrderData.ts:37](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/helpers/buildOrderData.ts#L37)

___

### SignableTypedData

Ƭ **SignableTypedData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`Record`](modules/internal_.md#record)<`string`, `any`\> |
| `domain` | [`TypedDataDomain`](modules/internal_.md#typeddatadomain) |
| `types` | [`Record`](modules/internal_.md#record)<`string`, [`TypedDataField`](interfaces/internal_.TypedDataField.md)[]\> |

#### Defined in

[src/methods/common/orders/buildOrderData.ts:14](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/common/orders/buildOrderData.ts#L14)

___

### SimpleFetchSDK

Ƭ **SimpleFetchSDK**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `limitOrders` | [`LimitOrdersFetchMethods`](modules/internal_.md#limitordersfetchmethods) |
| `nftOrders` | [`NFTOrdersFetchMethods`](modules/internal_.md#nftordersfetchmethods) |
| `swap` | [`SwapFetchMethods`](modules/internal_.md#swapfetchmethods) |

#### Defined in

[src/sdk/simple.ts:113](https://github.com/paraswap/paraswap-sdk/blob/master/src/sdk/simple.ts#L113)

___

### SimpleSDK

Ƭ **SimpleSDK**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `limitOrders` | [`LimitOrderHandlers`](modules.md#limitorderhandlers)<[`TxHash`](modules.md#txhash)\> |
| `nftOrders` | [`NFTOrderHandlers`](modules.md#nftorderhandlers)<[`TxHash`](modules.md#txhash)\> |
| `swap` | [`SwapSDKMethods`](modules/internal_.md#swapsdkmethods)<[`TxHash`](modules.md#txhash)\> |

#### Defined in

[src/sdk/simple.ts:119](https://github.com/paraswap/paraswap-sdk/blob/master/src/sdk/simple.ts#L119)

___

### SubmitLimitOrderFuncs

Ƭ **SubmitLimitOrderFuncs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `submitLimitOrder` | [`SubmitLimitOrder`](modules/internal_.md#submitlimitorder) |
| `submitP2POrder` | [`SubmitP2POrder`](modules/internal_.md#submitp2porder) |

#### Defined in

[src/methods/limitOrders/index.ts:41](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/limitOrders/index.ts#L41)

___

### SubmitNFTOrderFuncs

Ƭ **SubmitNFTOrderFuncs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `submitNFTOrder` | [`SubmitNFTOrder`](modules/internal_.md#submitnftorder) |
| `submitP2POrder` | [`SubmitNFTOrder`](modules/internal_.md#submitnftorder) |

#### Defined in

[src/methods/nftOrders/index.ts:34](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/nftOrders/index.ts#L34)

___

### SwapSDKMethods

Ƭ **SwapSDKMethods**<`TxResponse`\>: [`GetBalancesFunctions`](modules.md#getbalancesfunctions) & [`GetTokensFunctions`](modules.md#gettokensfunctions) & [`GetSpenderFunctions`](modules.md#getspenderfunctions) & [`ApproveTokenFunctions`](modules.md#approvetokenfunctions)<`TxResponse`\> & [`BuildTxFunctions`](modules.md#buildtxfunctions) & [`GetAdaptersFunctions`](modules.md#getadaptersfunctions) & [`GetRateFunctions`](modules.md#getratefunctions)

#### Type parameters

| Name |
| :------ |
| `TxResponse` |

#### Defined in

[src/methods/swap/index.ts:11](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/index.ts#L11)

___

### SwappableNFTOrder

Ƭ **SwappableNFTOrder**: [`SwappableOrder`](modules.md#swappableorder) & { `makerAssetId`: `string` ; `makerAssetType`: [`AssetTypeVariant`](modules.md#assettypevariant) ; `takerAssetId`: `string` ; `takerAssetType`: [`AssetTypeVariant`](modules.md#assettypevariant)  }

#### Defined in

[src/methods/swap/transaction.ts:33](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L33)

___

### SwappableOrder

Ƭ **SwappableOrder**: [`OrderData`](modules.md#orderdata) & { `permitMakerAsset?`: `string` ; `signature`: `string`  }

#### Defined in

[src/methods/swap/transaction.ts:28](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L28)

___

### Token

Ƭ **Token**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `allowance?` | `string` |
| `balance?` | `string` |
| `connectors` | `string`[] |
| `decimals` | `number` |
| `img?` | `string` |
| `mainConnector` | `string` |
| `network` | `number` |
| `symbol?` | `string` |
| `tokenType` | [`LendingToken`](modules/internal_.md#lendingtoken) \| [`TokenType`](modules/internal_.md#tokentype) |

#### Defined in

[src/helpers/token.ts:37](https://github.com/paraswap/paraswap-sdk/blob/master/src/helpers/token.ts#L37)

___

### TxHash

Ƭ **TxHash**: `string`

#### Defined in

[src/helpers/token.ts:18](https://github.com/paraswap/paraswap-sdk/blob/master/src/helpers/token.ts#L18)

___

### Web3UnpromiEvent

Ƭ **Web3UnpromiEvent**: [`Pick`](modules/internal_.md#pick)<[`PromiEvent`](interfaces/internal_.PromiEvent.md)<[`Contract`](classes/internal_.Contract.md)\>, ``"on"`` \| ``"once"``\>

#### Defined in

[src/helpers/providers/web3.ts:22](https://github.com/paraswap/paraswap-sdk/blob/master/src/helpers/providers/web3.ts#L22)

## Variables

### API\_URL

• `Const` **API\_URL**: ``"https://api.paraswap.io"``

#### Defined in

[src/constants.ts:3](https://github.com/paraswap/paraswap-sdk/blob/master/src/constants.ts#L3)

___

### AssetType

• `Const` **AssetType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ERC1155` | ``1`` |
| `ERC20` | ``0`` |
| `ERC721` | ``2`` |

#### Defined in

[src/methods/nftOrders/helpers/misc.ts:21](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/nftOrders/helpers/misc.ts#L21)

## Functions

### constructAllLimitOrdersHandlers

▸ **constructAllLimitOrdersHandlers**<`TxResponse`\>(`options`): [`LimitOrderHandlers`](modules.md#limitorderhandlers)<`TxResponse`\>

**`Description`**

construct SDK with every LimitOrders-related method, fetching from API and contract calls

#### Type parameters

| Name |
| :------ |
| `TxResponse` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ConstructProviderFetchInput`](interfaces/ConstructProviderFetchInput.md)<`TxResponse`, ``"staticCall"`` \| ``"transactCall"`` \| ``"signTypedDataCall"``\> |

#### Returns

[`LimitOrderHandlers`](modules.md#limitorderhandlers)<`TxResponse`\>

___

### constructAllNFTOrdersHandlers

▸ **constructAllNFTOrdersHandlers**<`TxResponse`\>(`options`): [`NFTOrderHandlers`](modules.md#nftorderhandlers)<`TxResponse`\>

**`Description`**

construct SDK with every NFTOrders-related method, fetching from API and contract calls

#### Type parameters

| Name |
| :------ |
| `TxResponse` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ConstructProviderFetchInput`](interfaces/ConstructProviderFetchInput.md)<`TxResponse`, ``"staticCall"`` \| ``"transactCall"`` \| ``"signTypedDataCall"``\> |

#### Returns

[`NFTOrderHandlers`](modules.md#nftorderhandlers)<`TxResponse`\>

___

### constructApproveToken

▸ **constructApproveToken**<`T`\>(`options`): [`ApproveTokenFunctions`](modules.md#approvetokenfunctions)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ConstructProviderFetchInput`](interfaces/ConstructProviderFetchInput.md)<`T`, ``"transactCall"``\> |

#### Returns

[`ApproveTokenFunctions`](modules.md#approvetokenfunctions)<`T`\>

___

### constructApproveTokenForLimitOrder

▸ **constructApproveTokenForLimitOrder**<`T`\>(`options`): [`ApproveTokenForLimitOrderFunctions`](modules.md#approvetokenforlimitorderfunctions)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ConstructProviderFetchInput`](interfaces/ConstructProviderFetchInput.md)<`T`, ``"transactCall"``\> |

#### Returns

[`ApproveTokenForLimitOrderFunctions`](modules.md#approvetokenforlimitorderfunctions)<`T`\>

___

### constructApproveTokenForNFTOrder

▸ **constructApproveTokenForNFTOrder**<`T`\>(`options`): [`ApproveTokenForNFTOrderFunctions`](modules.md#approvetokenfornftorderfunctions)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ConstructProviderFetchInput`](interfaces/ConstructProviderFetchInput.md)<`T`, ``"transactCall"``\> |

#### Returns

[`ApproveTokenForNFTOrderFunctions`](modules.md#approvetokenfornftorderfunctions)<`T`\>

___

### constructAxiosFetcher

▸ **constructAxiosFetcher**(`axios`): [`FetcherFunction`](modules/internal_.md#fetcherfunction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `axios` | [`AxiosStatic`](interfaces/internal_.AxiosStatic.md) |

#### Returns

[`FetcherFunction`](modules/internal_.md#fetcherfunction)

___

### constructBuildLimitOrder

▸ **constructBuildLimitOrder**(`options`): [`BuildLimitOrderFunctions`](modules.md#buildlimitorderfunctions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ConstructFetchInput`](interfaces/ConstructFetchInput.md) |

#### Returns

[`BuildLimitOrderFunctions`](modules.md#buildlimitorderfunctions)

___

### constructBuildLimitOrderTx

▸ **constructBuildLimitOrderTx**(`__namedParameters`): [`BuildLimitOrdersTxFunctions`](modules.md#buildlimitorderstxfunctions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`ConstructFetchInput`](interfaces/ConstructFetchInput.md) |

#### Returns

[`BuildLimitOrdersTxFunctions`](modules.md#buildlimitorderstxfunctions)

___

### constructBuildNFTOrder

▸ **constructBuildNFTOrder**(`options`): [`BuildNFTOrderFunctions`](modules.md#buildnftorderfunctions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ConstructFetchInput`](interfaces/ConstructFetchInput.md) |

#### Returns

[`BuildNFTOrderFunctions`](modules.md#buildnftorderfunctions)

___

### constructBuildNFTOrderTx

▸ **constructBuildNFTOrderTx**(`__namedParameters`): [`BuildNFTOrdersTxFunctions`](modules.md#buildnftorderstxfunctions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`ConstructFetchInput`](interfaces/ConstructFetchInput.md) |

#### Returns

[`BuildNFTOrdersTxFunctions`](modules.md#buildnftorderstxfunctions)

___

### constructBuildTx

▸ **constructBuildTx**(`__namedParameters`): [`BuildTxFunctions`](modules.md#buildtxfunctions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`ConstructFetchInput`](interfaces/ConstructFetchInput.md) |

#### Returns

[`BuildTxFunctions`](modules.md#buildtxfunctions)

___

### constructCancelLimitOrder

▸ **constructCancelLimitOrder**<`T`\>(`options`): [`CancelLimitOrderFunctions`](modules.md#cancellimitorderfunctions)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ConstructProviderFetchInput`](interfaces/ConstructProviderFetchInput.md)<`T`, ``"transactCall"``\> |

#### Returns

[`CancelLimitOrderFunctions`](modules.md#cancellimitorderfunctions)<`T`\>

___

### constructCancelNFTOrder

▸ **constructCancelNFTOrder**<`T`\>(`options`): [`CancelNFTOrderFunctions`](modules.md#cancelnftorderfunctions)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ConstructProviderFetchInput`](interfaces/ConstructProviderFetchInput.md)<`T`, ``"transactCall"``\> |

#### Returns

[`CancelNFTOrderFunctions`](modules.md#cancelnftorderfunctions)<`T`\>

___

### constructEthersContractCaller

▸ **constructEthersContractCaller**(`__namedParameters`, `account?`): [`ContractCallerFunctions`](interfaces/internal_.ContractCallerFunctions.md)<[`ContractTransaction`](interfaces/internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`EthersProviderDeps`](interfaces/EthersProviderDeps.md) |
| `account?` | `string` |

#### Returns

[`ContractCallerFunctions`](interfaces/internal_.ContractCallerFunctions.md)<[`ContractTransaction`](interfaces/internal_.ContractTransaction.md)\>

___

### constructFetchFetcher

▸ **constructFetchFetcher**(`fetch`): [`FetcherFunction`](modules/internal_.md#fetcherfunction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fetch` | (`input`: [`RequestInfo`](modules/internal_.md#requestinfo), `init?`: [`RequestInit`](interfaces/internal_.RequestInit.md)) => `Promise`<[`Response`](modules/internal_.md#response)\> |

#### Returns

[`FetcherFunction`](modules/internal_.md#fetcherfunction)

___

### constructFullSDK

▸ **constructFullSDK**<`TxResponse`\>(`config`): [`AllSDKMethods`](modules.md#allsdkmethods)<`TxResponse`\>

**`Description`**

construct SDK with every method, for swap and limitOrders

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TxResponse` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`SDKConfig`](modules.md#sdkconfig)<`TxResponse`\> |

#### Returns

[`AllSDKMethods`](modules.md#allsdkmethods)<`TxResponse`\>

___

### constructGetAdapters

▸ **constructGetAdapters**(`__namedParameters`): [`GetAdaptersFunctions`](modules.md#getadaptersfunctions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`ConstructFetchInput`](interfaces/ConstructFetchInput.md) |

#### Returns

[`GetAdaptersFunctions`](modules.md#getadaptersfunctions)

___

### constructGetBalances

▸ **constructGetBalances**(`__namedParameters`): [`GetBalancesFunctions`](modules.md#getbalancesfunctions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`ConstructFetchInput`](interfaces/ConstructFetchInput.md) |

#### Returns

[`GetBalancesFunctions`](modules.md#getbalancesfunctions)

___

### constructGetLimitOrders

▸ **constructGetLimitOrders**(`__namedParameters`): [`GetLimitOrdersFunctions`](modules.md#getlimitordersfunctions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`ConstructFetchInput`](interfaces/ConstructFetchInput.md) |

#### Returns

[`GetLimitOrdersFunctions`](modules.md#getlimitordersfunctions)

___

### constructGetLimitOrdersContract

▸ **constructGetLimitOrdersContract**(`options`): [`GetLimitOrdersContractFunctions`](modules.md#getlimitorderscontractfunctions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ConstructFetchInput`](interfaces/ConstructFetchInput.md) |

#### Returns

[`GetLimitOrdersContractFunctions`](modules.md#getlimitorderscontractfunctions)

___

### constructGetNFTOrders

▸ **constructGetNFTOrders**(`__namedParameters`): [`GetNFTOrdersFunctions`](modules.md#getnftordersfunctions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`ConstructFetchInput`](interfaces/ConstructFetchInput.md) |

#### Returns

[`GetNFTOrdersFunctions`](modules.md#getnftordersfunctions)

___

### constructGetNFTOrdersContract

▸ **constructGetNFTOrdersContract**(`options`): [`GetNFTOrdersContractFunctions`](modules.md#getnftorderscontractfunctions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ConstructFetchInput`](interfaces/ConstructFetchInput.md) |

#### Returns

[`GetNFTOrdersContractFunctions`](modules.md#getnftorderscontractfunctions)

___

### constructGetRate

▸ **constructGetRate**(`__namedParameters`): [`GetRateFunctions`](modules.md#getratefunctions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`ConstructFetchInput`](interfaces/ConstructFetchInput.md) |

#### Returns

[`GetRateFunctions`](modules.md#getratefunctions)

___

### constructGetSpender

▸ **constructGetSpender**(`__namedParameters`): [`GetSpenderFunctions`](modules.md#getspenderfunctions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`ConstructFetchInput`](interfaces/ConstructFetchInput.md) |

#### Returns

[`GetSpenderFunctions`](modules.md#getspenderfunctions)

___

### constructGetTokens

▸ **constructGetTokens**(`__namedParameters`): [`GetTokensFunctions`](modules.md#gettokensfunctions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`ConstructFetchInput`](interfaces/ConstructFetchInput.md) |

#### Returns

[`GetTokensFunctions`](modules.md#gettokensfunctions)

___

### constructPartialSDK

▸ **constructPartialSDK**<`Config`, `Funcs`\>(`config`, ...`funcs`): [`InferWithTxResponse`](modules/internal_.md#inferwithtxresponse)<`Config`, `Funcs`\>

**`Description`**

construct composable SDK with methods you choose yourself

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Config` | extends [`ConstructBaseInput`](interfaces/internal_.ConstructBaseInput.md) |
| `Funcs` | extends [[`SDKFunction`](modules/internal_.md#sdkfunction)<`Config`\>, ...SDKFunction<Config\>[]] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Config` |
| `...funcs` | `Funcs` |

#### Returns

[`InferWithTxResponse`](modules/internal_.md#inferwithtxresponse)<`Config`, `Funcs`\>

___

### constructPostLimitOrder

▸ **constructPostLimitOrder**(`__namedParameters`): [`PostLimitOrderFunctions`](modules.md#postlimitorderfunctions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`ConstructFetchInput`](interfaces/ConstructFetchInput.md) |

#### Returns

[`PostLimitOrderFunctions`](modules.md#postlimitorderfunctions)

___

### constructPostNFTOrder

▸ **constructPostNFTOrder**(`__namedParameters`): [`PostNFTOrderFunctions`](modules.md#postnftorderfunctions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`ConstructFetchInput`](interfaces/ConstructFetchInput.md) |

#### Returns

[`PostNFTOrderFunctions`](modules.md#postnftorderfunctions)

___

### constructSignLimitOrder

▸ **constructSignLimitOrder**(`options`): [`SignLimitOrderFunctions`](modules.md#signlimitorderfunctions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Pick`](modules/internal_.md#pick)<[`ConstructProviderFetchInput`](interfaces/ConstructProviderFetchInput.md)<`any`, ``"signTypedDataCall"``\>, ``"contractCaller"``\> |

#### Returns

[`SignLimitOrderFunctions`](modules.md#signlimitorderfunctions)

___

### constructSignNFTOrder

▸ **constructSignNFTOrder**(`options`): [`SignNFTOrderFunctions`](modules.md#signnftorderfunctions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Pick`](modules/internal_.md#pick)<[`ConstructProviderFetchInput`](interfaces/ConstructProviderFetchInput.md)<`any`, ``"signTypedDataCall"``\>, ``"contractCaller"``\> |

#### Returns

[`SignNFTOrderFunctions`](modules.md#signnftorderfunctions)

___

### constructSimpleSDK

▸ **constructSimpleSDK**(`options`): [`SimpleFetchSDK`](modules.md#simplefetchsdk)

**`Description`**

construct SDK with methods that fetch from API and optionally with blockchain provider calling methods

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SimpleOptions`](modules/internal_.md#simpleoptions) |

#### Returns

[`SimpleFetchSDK`](modules.md#simplefetchsdk)

▸ **constructSimpleSDK**(`options`, `providerOptions`): [`SimpleSDK`](modules.md#simplesdk)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SimpleOptions`](modules/internal_.md#simpleoptions) |
| `providerOptions` | [`ProviderOptions`](modules/internal_.md#provideroptions) |

#### Returns

[`SimpleSDK`](modules.md#simplesdk)

___

### constructSubmitLimitOrder

▸ **constructSubmitLimitOrder**(`options`): [`SubmitLimitOrderFuncs`](modules.md#submitlimitorderfuncs)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ConstructProviderFetchInput`](interfaces/ConstructProviderFetchInput.md)<`any`, ``"signTypedDataCall"``\> |

#### Returns

[`SubmitLimitOrderFuncs`](modules.md#submitlimitorderfuncs)

___

### constructSubmitNFTOrder

▸ **constructSubmitNFTOrder**(`options`): [`SubmitNFTOrderFuncs`](modules.md#submitnftorderfuncs)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ConstructProviderFetchInput`](interfaces/ConstructProviderFetchInput.md)<`any`, ``"signTypedDataCall"``\> |

#### Returns

[`SubmitNFTOrderFuncs`](modules.md#submitnftorderfuncs)

___

### constructSwapSDK

▸ **constructSwapSDK**<`TxResponse`\>(`config`): [`SwapSDKMethods`](modules.md#swapsdkmethods)<`TxResponse`\>

**`Description`**

construct SDK with every Swap-related method, fetching from API and token approval

#### Type parameters

| Name |
| :------ |
| `TxResponse` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`SDKConfig`](modules.md#sdkconfig)<`TxResponse`\> |

#### Returns

[`SwapSDKMethods`](modules.md#swapsdkmethods)<`TxResponse`\>

___

### constructToken

▸ **constructToken**(`tokenProps`): [`Token`](modules.md#token)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenProps` | [`ConstructTokenInput`](modules/internal_.md#constructtokeninput) |

#### Returns

[`Token`](modules.md#token)

___

### constructWeb3ContractCaller

▸ **constructWeb3ContractCaller**(`web3`, `account?`): [`ContractCallerFunctions`](interfaces/internal_.ContractCallerFunctions.md)<[`Web3UnpromiEvent`](modules.md#web3unpromievent)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `web3` | [`default`](classes/internal_.default.md) |
| `account?` | `string` |

#### Returns

[`ContractCallerFunctions`](interfaces/internal_.ContractCallerFunctions.md)<[`Web3UnpromiEvent`](modules.md#web3unpromievent)\>

___

### isAllowance

▸ **isAllowance**(`arg`): arg is Allowance

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | [`Allowance`](interfaces/Allowance.md) \| { `message`: ``"Not Found"`` = 'Not Found' } |

#### Returns

arg is Allowance

___

### isFetcherError

▸ **isFetcherError**(`error`): error is FetcherError

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |

#### Returns

error is FetcherError
