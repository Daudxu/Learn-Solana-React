import { useEffect } from 'react';  
// import { useWallet } from '@solana/wallet-adapter-react';  
import { WalletMultiButton, WalletDisconnectButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

function Wallet() {
    const { wallet, publicKey } = useWallet();  

    if (!wallet && !publicKey) {  
        return  (
            <div> 
                <h2> Wallet </h2>
                <WalletMultiButton />
             </div>
        );  
    } 
    return (
        <div> 
            <h2> Wallet </h2>
            <p>Connected Wallet Public Key: {publicKey?.toBase58()}</p>  
            <div> 
            <WalletDisconnectButton />
            </div>
         </div>
    )
}

export default Wallet;