import { useEffect } from 'react';  
import { useWallet } from '@solana/wallet-adapter-react';  
import { WalletMultiButton, WalletDisconnectButton } from "@solana/wallet-adapter-react-ui";

function Wallet() {
    // const { wallet, publicKey } = useWallet();  

    // if (!wallet || !wallet.connected || !publicKey) {  
    //     return <div>Wallet not connected or not available</div>;  
    // }  
    
    return (
        <div> 
            <h2> Wallet </h2>
            <p>Connected Wallet Public Key:</p>  
            <WalletMultiButton />
            <WalletDisconnectButton />
         </div>
    )
}

export default Wallet;