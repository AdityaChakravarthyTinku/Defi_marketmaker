import { useEthers } from "../context/EthersContext"
import Button from "../components/Button"
import { useState } from "react"
import Link from "next/link"
require("dotenv").config({ path: ".env" });
import { ethers } from "ethers"
import Erc20 from "../contracts/Erc20.json"
import Modal from "../components/Modal";

export default function GetToken() {

  const { isValidChain, account, requestAccount, setNotificationStatus } = useEthers()
  const [loading, setLoading] = useState(false)

  const daiAddress = "0x1685264bF5845711A1f544df984C5611233C1b6A"
  const busdAddress = "0x4552169AD309A7B915bB09B4b564d1a405B7ceF3"
  

  async function addTokenToMetamask(address) {
    const tokenAddress = address
    const tokenSymbol = address === daiAddress ? "DAI" : "BUSD"
    const tokenDecimals = 18

    try {
      const wasAdded = await ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals: tokenDecimals,
          },
        },
      });

      if (wasAdded) {
        console.log('token added to your wallet');
      } else {
        console.log('Could not add token to your wallet');
      }
    } catch (e) {
      console.log(e);
    }
  }
  //const hexValue='0x0Bc260a9F16ed6C34D0c8B791c17a8cC43269E36'
  //const NEXT_PUBLIC_TOKEN_WALLET=ethers.utils.hexlify(hexValue)
  const  METAMASK_PRIVATEKEY='3b52897d72ef6528e295acccebc4e8b4f234f6aeaadb8e104e7bc3e64c354b59'
  async function transferToken(tokenAddress) {
  
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    console.log("Private Key:",METAMASK_PRIVATEKEY);
    const signer = new ethers.Wallet(METAMASK_PRIVATEKEY, provider);
    
    const token = new ethers.Contract(tokenAddress, Erc20.abi, signer)
  
    setLoading(true)
    try {
      if (!account || !isValidChain())
        requestAccount()

      await token.transfer(account, ethers.utils.parseEther("3"))
      setNotificationStatus({ show: true, error: false })
    } catch(e) {
      console.log(e)
      setNotificationStatus({ show: true, error: false })
    }
    setLoading(false)
    addTokenToMetamask(tokenAddress)
  }

  return (
    <div className="space-y-4 text-center">
      <Link href="/">
        <span className="cursor-pointer text-purple-800 underline underline-offset-1">Go back</span>
      </Link>
      <Button loading={loading} disabled={!account || loading} onClick={() => transferToken(daiAddress)}>Import DAI Token Address in Account</Button>
      <Button loading={loading} disabled={!account || loading} onClick={() => transferToken(busdAddress)}>Import BUSD Token Address in Account</Button>
      <p className="text-purple-800">Just connect your wallet and get some tokens to test the AMM functionality.</p>
      <p className="text-purple-800 border-gray-300">
        If you need BNB, you can get some at the <a className=" underline underline-offset-2" href="https://testnet.binance.org/faucet-smart" target="_blank" rel="noopener noreferrer">BSC faucet</a>.
      </p>
    </div>
  )

}