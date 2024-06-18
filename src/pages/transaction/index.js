import React, { useEffect, useState } from 'react';  
import { Connection, PublicKey, clusterApiUrl, Transaction, SystemProgram, LAMPORTS_PER_SOL, Keypair, TransactionInstruction } from '@solana/web3.js';  
import { useWallet } from '@solana/wallet-adapter-react';  
  
function TransactionComponent() {  
    const { publicKey: walletPublicKey, connected, sendTransaction } = useWallet();  
    const targetPublicKey = new PublicKey('3LwnjQFfqqg8jVvzT1UcoFqeqzz27z8L9xnhbxE7mgQk'); // 目标公钥  
  
    useEffect(() => {  
        // ...（你已有的 useEffect 逻辑）  
        console.log("walletPublicKey" ,walletPublicKey)
    }, [connected, walletPublicKey]);  
  
    const handleClickTransaction = async () => {  
        if (!connected || !walletPublicKey) {  
            console.error('Wallet not connected');  
            return;  
        }
  
        try {  
            // 1 SOL in lamports  
            const amount = LAMPORTS_PER_SOL;  
  
            // 创建一个新的交易  
            const transaction = new Transaction();  
  
            // 添加转账指令  
            transaction.add(  
                SystemProgram.transfer({  
                    fromPubkey: walletPublicKey,  
                    toPubkey: targetPublicKey,  
                    lamports: amount,  
                })  
            );  
  
            // 获取最近的区块哈希并设置到交易中  
            const { blockhash } = await connection.getRecentBlockhash();  
            transaction.recentBlockhash = blockhash;  
  
            // 签名交易  
            transaction.feePayer = walletPublicKey;  
            const signed = await wallet.signTransaction(transaction);  
  
            // 使用 sendTransaction 钩子发送交易（如果可用）  
            if (sendTransaction) {  
                await sendTransaction(signed, connection);  
                console.log('Transaction sent');  
            } else {  
                // 如果 sendTransaction 钩子不可用，则直接发送原始交易  
                const txid = await connection.sendRawTransaction(signed.serialize());  
                console.log('Transaction sent', txid);  
  
                // 等待交易确认（可选）  
                // await connection.confirmTransaction(txid);  
                // console.log('Transaction confirmed', txid);  
            }  
  
        } catch (error) {  
            console.error('Error sending transaction:', error);  
        }  
    };  
  
    // ...（你已有的渲染逻辑）  
  
    return (  
        <div>  
            <h2>Transaction</h2>  
            <button onClick={() => handleClickTransaction()}>Send 1 SOL</button>  
        </div>  
    );  
}  
  
// 设置默认的 Solana 网络（例如 devnet）  
const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');  
  
export default TransactionComponent
;