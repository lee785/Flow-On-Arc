// Contract addresses - Update these with your deployed contract addresses
export const CONTRACTS = {
  // Token addresses
  CAT: '0xc3328be246C5DB1a2EBA7d0533e275a0a7249834',
  DARC: '0x8959ed0D7220e1bAa445106F48829Df0bF1e5F83',
  PANDA: '0x48Ff1CCb0f75e5A8C732b6c10ffc8f5dF6ef5311',
  USDC: '0x3600000000000000000000000000000000000000',

  // Contract addresses
  FAUCET: '0xEd2520116C9e6F2517daa20Eb7FFF4EeA5bE6847',
  SWAP_ROUTER: '0x49f9636FE15883e16d5E356A4eA08C9Fe6BC219B',
  LENDING_POOL: '0x626556a164918231bc9F73Dac17a5BC07d3865Cf',
  // Pool IDs (for FLOWSWAPAMM) - Use these to lookup pool data & user liquidity
  POOL_ID_USDC_CAT: '0x42c345f188ac8e7044601da9854ce263ad27a6fcf501c34c7b171c87f08d4b95',
  POOL_ID_USDC_DARC: '0x3758fb869e589ff026001820d4660afb1d1948e51a08b062dd865c918bc53bac',
  POOL_ID_USDC_PANDA: '0x8e76eaa63d91af891bc30ac461b2f4cc6d4cda7041322eb66e3c04ed6386a080',
};

// Arc Testnet chain configuration
export const ARC_TESTNET = {
  id: 5042002,
  name: 'Arc Testnet',
  nativeCurrency: {
    decimals: 6,
    name: 'USDC',
    symbol: 'USDC',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.testnet.arc.network'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Explorer',
      url: 'https://testnet.arcscan.app',
    },
  },
  testnet: true,
};

