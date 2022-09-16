// For Ethereum, use the Infura endpoints
export default function rpcConfig(infuraKey?: string) {
  return process.env.NODE_ENV === 'production'
    ? 'https://rinkeby.infura.io/v3/f1d2578744cd42d2bbb8b59f05bc8cf0' // `https://mainnet.infura.io/v3/${infuraKey}`
    : 'https://rinkeby.infura.io/v3/f1d2578744cd42d2bbb8b59f05bc8cf0'; // `https://rinkeby.infura.io/v3/f1d2578744cd42d2bbb8b59f05bc8cf0`
}
