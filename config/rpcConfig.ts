// For Ethereum, use the Infura endpoints
export default function rpcConfig(infuraKey?: string) {
  return process.env.NODE_ENV === 'production'
    ? 'https://rinkeby.infura.io/v3/8b71287b84ee446dbbdb90739b291480' // `https://mainnet.infura.io/v3/${infuraKey}`
    : 'https://rinkeby.infura.io/v3/8b71287b84ee446dbbdb90739b291480'; // `https://rinkeby.infura.io/v3/f1d2578744cd42d2bbb8b59f05bc8cf0`
}
