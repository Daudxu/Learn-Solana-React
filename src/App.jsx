import { useState, useEffect } from 'react'
import './App.css'
// import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
// import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
// // import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
// import { WalletModalProvider, WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
// import { clusterApiUrl, Keypair } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';
import {
  ConnectionProvider,
  WalletProvider,
  useConnection, 
  useWallet
} from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import * as web3 from "@solana/web3.js";
import {
  WalletModalProvider,
  WalletMultiButton,
  WalletConnectButton,
  WalletModal,
  WalletModalButton,
  WalletDisconnectButton,
  WalletIcon,
} from "@solana/wallet-adapter-react-ui";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

function App() {
  const endpoint = web3.clusterApiUrl("devnet");
  const wallet = new PhantomWalletAdapter();

 
 const handleClick = () => {
    const keypair = Keypair.generate();
    console.log("keypair", keypair._keypair.publicKey)
    console.log("keypair", keypair._keypair.secretKey)
 }

 const [balance, setBalance] = useState(0);
 const { connection } = useConnection();
 const { publicKey } = useWallet();

 useEffect(() => {
  if (!connection || !publicKey) {
    return;
  }

  connection.onAccountChange(
    publicKey,
    (updatedAccountInfo) => {
      setBalance(updatedAccountInfo.lamports / LAMPORTS_PER_SOL);
    },
    "confirmed",
  );

  connection.getAccountInfo(publicKey).then((info) => {
    setBalance(info.lamports);
  });
}, [connection, publicKey]);

  return (
    <> 
 <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[wallet]}>
        <WalletModalProvider>
          <WalletMultiButton />
          <p>Put the rest of your app here</p>
          <div>
            <p>{publicKey ? `Balance: ${balance / LAMPORTS_PER_SOL} SOL` : ""}</p>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
    </>
  )
}

export default App
