import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import { IconContext } from 'react-icons';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';

import ABI from '../config/abi.json';
import rpcConfig from '../config/rpcConfig';
import projectConfig from '../config/projectConfig';
import { useEthereumProvider } from '../hooks/useEthereumProvider';
import Logo from '../public/assets/logo.png';

export default function Minting() {
  const { account, active, chainId } = useWeb3React();
  const { ethereumProvider } = useEthereumProvider();

  const [message, setMessage] = useState('');
  const [connErrMsg, setConnErrMsg] = useState('');
  const [totalSupply, setTotalSupply] = useState('?');
  const [isPending, setIsPending] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const [mintAmount, setMintAmount] = useState(1);
  const [mintStatus, setMintStatus] = useState(0);
  const [mintTitle, setMintTitle] = useState('');
  const [mintCost, setMintCost] = useState(0);

  async function mintNFTs() {
    if (account && ethereumProvider) {
      setMessage('');
      setIsPending(true);
      try {
        const web3Provider = new ethers.providers.Web3Provider(
          ethereumProvider
        );
        const signer = web3Provider.getSigner();
        const contract = new ethers.Contract(
          projectConfig.contractAddress,
          ABI,
          signer
        );
        console.log("onlyOG", await contract.onlyOG());
        const onlyOG = await contract.onlyOG();
        const onlyWhitelisted = await contract.onlyWhitelisted();
        if (onlyOG == true) {
          setMintStatus(0);
        } else if (onlyWhitelisted == true) {
          setMintStatus(1);
        } else {
          setMintStatus(2);
        }
        console.log("mintstatus", mintStatus)
        const totalMintCost = (mintCost * mintAmount).toString();
        const totalWei = ethers.utils.parseEther(totalMintCost).toBigInt();
        let transaction;
        if (mintStatus == 0) {
          console.log("here");
          transaction = await contract.ogmint(mintAmount, {
            value: totalWei,
          });
        } else if (mintStatus == 1) {
          transaction = await contract.whitelistmint(mintAmount, {
            value: totalWei,
          });
        } else {
          transaction = await contract.mint(mintAmount, {
            value: totalWei,
          });
        }
        
        setIsPending(false);
        setIsMinting(true);
        await transaction.wait();
        setIsMinting(false);
        setMessage(
          `Yay! ${mintAmount} ${
            projectConfig.nftSymbol
          } successfully sent to ${account.substring(
            0,
            6
          )}...${account.substring(account.length - 4)}`
        );
      } catch (error) {
        setIsPending(false);
      }
    }
  }

  function decrementMintAmount() {
    if (mintAmount > 1) {
      setMintAmount(mintAmount - 1);
    }
  }

  function incrementMintAmount() {
    if (mintAmount < projectConfig.maxMintAmountPerTxn) {
      setMintAmount(mintAmount + 1);
    }
  }

  useEffect(() => {
    if (!active) {
      setConnErrMsg('Not connected to your wallet.');
    } else {
      if (chainId !== projectConfig.chainId) {
        setConnErrMsg(`Change the network to ${projectConfig.networkName}.`);
      } else {
        setConnErrMsg('');
      }
    }
  }, [active, chainId]);

  useEffect(() => {
    async function fetchTotalSupply() {
      const web3Provider = new ethers.providers.JsonRpcProvider(
        rpcConfig(process.env.NEXT_PUBLIC_INFURA_KEY)
      );
      const contract = new ethers.Contract(
        projectConfig.contractAddress,
        ABI,
        web3Provider
      );
      setTotalSupply((await contract.totalSupply()).toString());
      const onlyOG = await contract.onlyOG();
      const onlyWhitelisted = await contract.onlyWhitelisted();
      if (onlyOG == true) {
        setMintTitle('OG MINT');
        setMintCost(0);
      } else if (onlyWhitelisted == true) {
        setMintTitle('WHITELIST MINT');
        setMintCost(0.006);
      } else {
        setMintTitle('PUBLIC MINT');
        setMintCost(0.009);
      }
    }

    fetchTotalSupply();

    // cleanup
    return () => setTotalSupply('?');
  }, []);

  return (
    <>
    
      <h2 className="text-4xl mb-4"></h2>
      

      <div className="bg-black border border-white rounded p-8 space-y-4">
        <div className="text-3xl font-bold text-center">

        <p className="text-4xl">
          {mintTitle}

          </p>
          
          <div></div>
       
          <span className="text-red-700">{totalSupply}</span> /{' '}
          {projectConfig.maxSupply}
        </div>

        <div className="text-center">
          <p className="text-xl">
            Total price: {mintCost * mintAmount}{' '}
            {projectConfig.chainName}
          </p>
         
         
          <p className="text-red-700"></p>
        </div>

        <div className="flex justify-center items-center space-x-4">
          <IconContext.Provider value={{ size: '1.5em' }}>
            <button
              type="button"
              className={mintAmount <= 1 ? 'text-red-700 cursor-default' : ''}
              onClick={decrementMintAmount}
              disabled={false}
            >
              <FaMinusCircle />
            </button>
            <span className="text-xl">{mintAmount}</span>
            <button
              type="button"
              className={
                mintAmount >= projectConfig.maxMintAmountPerTxn
                  ? 'text-white cursor-default'
                  : ''
              }
              onClick={incrementMintAmount}
              disabled={false}
            >
              <FaPlusCircle />
            </button>
          </IconContext.Provider>
        </div>

        <div className="flex justify-center">
          {active && !connErrMsg ? (
            <>
              {isPending || isMinting ? (
                <button
                  type="button"
                  className="flex justify-center items-center rounded px-4 py-2 bg-red-700 font-bold w-40 cursor-not-allowed"
                  disabled
                >
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {isPending && 'Pending'}
                  {isMinting && 'Minting'}
                  {!isPending && !isMinting && 'Processing'}
                </button>
              ) : (
                <button
                  type="button"
                  className={`rounded px-4 py-2 bg-red-700 hover:bg-blue-600 font-bold w-40`}
                  onClick={mintNFTs}
                >
                  Mint
                </button>
              )}
            </>
          ) : (
            <button
              type="button"
              className={`rounded px-4 py-2 bg-red-700 font-bold w-40 cursor-not-allowed`}
              disabled={true}
              onClick={mintNFTs}
            >
              Mint
            </button>
          )}
        </div>

        {message && <div className="text-green-500 text-center">{message}</div>}
        {connErrMsg && (
          <div className="text-red-500 text-center">{connErrMsg}</div>
        )}
      </div>

      <div className="text-white mt-2">
        Please make sure you are connected to the correct address and the
        correct network ({projectConfig.networkName}) before purchasing. The
        operation cannot be undone after purchase.
      </div>
    </>
  );
}
