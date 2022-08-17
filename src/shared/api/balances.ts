import { BigNumber, ethers } from 'ethers';

import { BridgeToken__factory } from '@nomad-xyz/contracts-bridge';
import { BLOCK_BEFORE_HACK, BRIDGE_ROUTER_ADDR, ETHEREUM_RPC, RECOVERY_ADDR, TOKENS } from '@shared/config/api';
import { Token } from '@shared/types';

import { BalancesRecovered, TokenBalances } from './model';

const getAllTokenBalances = async (addr: string, tokenList: Token[], block: number) => {
  const results: TokenBalances = {};

  if (!ETHEREUM_RPC) {
    throw new Error('Missing ETHEREUM_RPC in .env');
  }

  const provider = new ethers.providers.StaticJsonRpcProvider(ETHEREUM_RPC);
  for (const tkn of tokenList) {
    const erc20 = new ethers.Contract(tkn.address, BridgeToken__factory.abi, provider);

    const balance = await erc20.balanceOf(addr, {
      blockTag: +block,
    });
    results[tkn.symbol] = {
      balance: balance.toString(),
    };
  }

  return results;
};

const getReturnedTokenBalances = async (addr: string, tokenList: Token[], balances: TokenBalances) => {
  const results: BalancesRecovered = {};
  if (!ETHEREUM_RPC) {
    throw new Error('Missing ETHEREUM_RPC in .env');
  }

  const provider = new ethers.providers.StaticJsonRpcProvider(ETHEREUM_RPC);

  for (const tkn of tokenList) {
    const erc20 = new ethers.Contract(tkn.address, BridgeToken__factory.abi, provider);
    const recovered = await erc20.balanceOf(addr);
    const prevBalance = BigNumber.from(balances[tkn.symbol].balance);

    let percentRecovered;
    if (!prevBalance.isZero()) {
      percentRecovered = Math.floor(recovered.mul(100).div(prevBalance).toNumber());
    }

    const formattedBalance = ethers.utils.formatUnits(prevBalance.toString(), tkn.decimals);
    const formattedRecovered = ethers.utils.formatUnits(recovered.toString(), tkn.decimals);

    results[tkn.symbol] = {
      balance: formattedBalance,
      recovered: formattedRecovered,
      percentRecovered,
    };
  }
  return results;
};

export const getBalance = async () => {
  const balances = await getAllTokenBalances(BRIDGE_ROUTER_ADDR, TOKENS, BLOCK_BEFORE_HACK);
  const result = await getReturnedTokenBalances(RECOVERY_ADDR, TOKENS, balances);

  return result;
};
