const projectConfig = {
  nftName: 'SoulNfts',

  nftSymbol: 'SOULS',

  maxSupply: 4444,

  maxMintAmountPerTxn: 4,

  mintCost: process.env.NODE_ENV === 'production' ? 0.006 : 0.006,

  networkName:
    process.env.NODE_ENV === 'production'
      ? 'Ethereum Mainnet' // 'Ethereum Mainnet'
      : 'Ethereum Mainnet', // 'Rinkeby Testnet'

  chainName: 'ETH', // 'ETH'

  chainId: process.env.NODE_ENV === 'production' ? 1 : 1, // Ethereum (1), Rinkeby (4)

  siteDomain: 'www.yourdomain.com',

  siteUrl:
    process.env.NODE_ENV === 'production'
      ? `https://soulnfts.vercel.app/`
      : 'https://soulnfts.vercel.app/',

  twitterUsername: '@CRYPTOVAULTT',

  twitterUrl: 'https://twitter.com/Souls_nfts',

  discordUrl: 'https://discord.gg/7fDu3Q7jpf',

  openseaCollectionUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://opensea.io/collection/-soulsnfts'
      : 'https://opensea.io/collection/-soulsnfts',

  contractAddress:
    process.env.NODE_ENV === 'production'
      ? '0x34275c6fcfb7a71da36c055d8ad474e8d5737290'
      : '0x34275c6fcfb7a71da36c055d8ad474e8d5737290',

  scanUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://etherscan.io/address/0x34275c6fcfb7a71da36c055d8ad474e8d5737290'
      : 'https://etherscan.io/address/0x34275c6fcfb7a71da36c055d8ad474e8d5737290',
  // 'https://polygonscan.com/address/0x37D23eABe6dB1d4152261f204A8A25d902cFd81d'
  // 'https://polygonscan.com/address/0x37D23eABe6dB1d4152261f204A8A25d902cFd81d'
};

export default projectConfig;
