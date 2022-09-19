const projectConfig = {
  nftName: 'SoulsNfts',

  nftSymbol: 'Souls',

  maxSupply: 4444,

  maxMintAmountPerTxn: 5,

  mintCost: process.env.NODE_ENV === 'production' ? 0.006 : 0.006,

  networkName:
    process.env.NODE_ENV === 'production'
      ? 'Rinkeby Testnet' // 'Ethereum Mainnet'
      : 'Rinkeby Testnet', // 'Rinkeby Testnet'

  chainName: 'ETH', // 'ETH'

  chainId: process.env.NODE_ENV === 'production' ? 4 : 4, // Ethereum (1), Rinkeby (4)

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
      ? '0x94333426Aa71811730414759939A5c44580f4F99'
      : '0x94333426Aa71811730414759939A5c44580f4F99',

  scanUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://rinkeby.etherscan.io/address/0x94333426aa71811730414759939a5c44580f4f99'
      : 'https://rinkeby.etherscan.io/address/0x94333426aa71811730414759939a5c44580f4f99',
  // 'https://polygonscan.com/address/0x37D23eABe6dB1d4152261f204A8A25d902cFd81d'
  // 'https://polygonscan.com/address/0x37D23eABe6dB1d4152261f204A8A25d902cFd81d'
};

export default projectConfig;
