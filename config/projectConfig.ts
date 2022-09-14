const projectConfig = {
  nftName: 'SoulNfts',

  nftSymbol: 'SoulNfts',

  maxSupply: 4444,

  maxMintAmountPerTxn: 5,

  mintCost: process.env.NODE_ENV === 'production' ? 0 : 0,

  networkName:
    process.env.NODE_ENV === 'production'
      ? 'Ethereum Mainnet' // 'Ethereum Mainnet'
      : 'Ethereum Mainnet', // 'Rinkeby Testnet'

  chainName: 'ETH', // 'ETH'

  chainId: process.env.NODE_ENV === 'production' ? 1 : 1, // Ethereum (1), Rinkeby (4)

  siteDomain: 'www.yourdomain.com',

  siteUrl:
    process.env.NODE_ENV === 'production'
      ? `https://your_site_domain`
      : 'http://localhost:3000',

  twitterUsername: '@CRYPTOVAULTT',

  twitterUrl: 'https://twitter.com/Souls_nfts',

  discordUrl: 'https://discord.gg/7fDu3Q7jpf',

  openseaCollectionUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://opensea.io/collection/'
      : 'https://opensea.io/collection/',

  contractAddress:
    process.env.NODE_ENV === 'production'
      ? '0x7B0D3cbE36C2cBE71285cd4F2104c12e84cfEfA8'
      : '0x7B0D3cbE36C2cBE71285cd4F2104c12e84cfEfA8',

  scanUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://etherscan.io/address/0x7b0d3cbe36c2cbe71285cd4f2104c12e84cfefa8'
      : 'https://etherscan.io/address/0x7b0d3cbe36c2cbe71285cd4f2104c12e84cfefa8',
  // 'https://polygonscan.com/address/0x37D23eABe6dB1d4152261f204A8A25d902cFd81d'
  // 'https://polygonscan.com/address/0x37D23eABe6dB1d4152261f204A8A25d902cFd81d'
};

export default projectConfig;
