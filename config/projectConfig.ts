const projectConfig = {
  nftName: 'SoulNfts',

  nftSymbol: 'SOULD',

  maxSupply: 4444,

  maxMintAmountPerTxn: 4,

  mintCost: process.env.NODE_ENV === 'production' ? 0 : 0,

  networkName:
    process.env.NODE_ENV === 'production'
      ? 'Rinkeby Testnet' // 'Ethereum Mainnet'
      : 'Rinkeby Testnet', // 'Rinkeby Testnet'

  chainName: 'ETH', // 'ETH'

  chainId: process.env.NODE_ENV === 'production' ? 4 : 4, // Ethereum (1), Rinkeby (4)

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
      ? 'https://opensea.io/collection/'
      : 'https://opensea.io/collection/',

  contractAddress:
    process.env.NODE_ENV === 'production'
      ? '0x94333426Aa71811730414759939A5c44580f4F99'
      : '0x94333426Aa71811730414759939A5c44580f4F99',

  scanUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://rinkeby.etherscan.io/address/0x94333426Aa71811730414759939A5c44580f4F99'
      : 'https://rinkeby.etherscan.io/address/0x94333426Aa71811730414759939A5c44580f4F99',
  // 'https://polygonscan.com/address/0x37D23eABe6dB1d4152261f204A8A25d902cFd81d'
  // 'https://polygonscan.com/address/0x37D23eABe6dB1d4152261f204A8A25d902cFd81d'
};

export default projectConfig;
