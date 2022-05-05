import type { Address } from '../../../types';

// @TODO either fill in or fetch from API
export const chainId2verifyingContract: Record<number, Address> = {
  1: '0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57',
  3: '0x1944d770dE8Bcf958305C68FA821936e16af35a6',
};

export const chainId2BlockContractDeployedAt: Record<number, number> = {
  3: 12240016,
};
