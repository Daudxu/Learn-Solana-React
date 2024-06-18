import React, { useEffect } from 'react';  
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';  
import { useWallet } from '@solana/wallet-adapter-react';  

function Transaction () {
    const { publicKey, connected } = useWallet();  
  
    useEffect(() => {  
      if (connected) {  
        const fetchAccountInfo = async () => {  
          try {  
            console.log("publicKey", publicKey?.toBase58())
            const targetPublicKey = new PublicKey(publicKey?.toBase58());  
            const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
            const accountInfo = await connection.getAccountInfo(targetPublicKey);  
            if (accountInfo) {  
              console.log("Account Info:", accountInfo);  
            } else {  
              console.log("Account not found");  
            }  
          } catch (error) {  
            console.error("Error fetching account info:", error);  
          }  
        };  
    
        fetchAccountInfo();  
      }  
    }, [connected, publicKey]); 


    const handleClickTransaction = () => {
        toAccounts()
    }

    return (
        <div>
            <h2> transaction </h2>
            <button onClick={() => handleClickTransaction()} >Transaction </button>
        </div>
    )
}

export default Transaction;