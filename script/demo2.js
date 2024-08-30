import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";
import { mplCandyMachine } from "@metaplex-foundation/mpl-candy-machine";
import { useWallet } from '@solana/wallet-adapter-react'
import { publicKey } from '@metaplex-foundation/umi'

const publicKey = publicKey('tst24HZ6pbcnraCv4r8acexfgXvyQwMSRgZRCg9gEX1')

console.log("publicKey", publicKey);

const useUmi = () => {
    // Import useWallet hook

    const wallet = useWallet()

    // Create Umi instance
    const umi = createUmi('https://api.mainnet-beta.solana.com')
      .use(mplTokenMetadata())
      .use(mplCandyMachine())
      // Register Wallet Adapter to Umi
      .use(walletAdapterIdentity(wallet))
  
    return umi
  }

  export default useUmi
