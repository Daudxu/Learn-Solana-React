import React, { useState } from 'react';  
import { useConnection, useWallet } from '@solana/wallet-adapter-react';  
import * as web3 from '@solana/web3.js';

function Transaction() {
    const { publicKey: walletPublicKey, connected, sendTransaction } = useWallet();  
    const { connection } = useConnection();

    const [recipientAddress, setRecipientAddress] = useState('');
    const [amount, setAmount] = useState('');

    const handleClickTransaction = async () => {
        if (!connection || !walletPublicKey || !connected) {
            console.error("Wallet not connected or connection not available");
            return;
        }

        try {
            const recipientPublicKey = new web3.PublicKey(recipientAddress);
            const lamports = parseFloat(amount) * web3.LAMPORTS_PER_SOL;

            const transaction = new web3.Transaction();

            const instruction = web3.SystemProgram.transfer({
                fromPubkey: walletPublicKey,
                toPubkey: recipientPublicKey,
                lamports,
            });

            transaction.add(instruction);

            const signature = await sendTransaction(transaction, connection);
            console.log("Transaction signature:", signature);

            // Confirm the transaction
            const confirmation = await connection.confirmTransaction(signature, 'processed');
            console.log("Transaction confirmed:", confirmation);
        } catch (error) {
            console.error("Transaction failed:", error);
        }
    };

    return (
        <div>
            <h2>Send SOL Transaction</h2>
            <div>
                <label>Recipient Address:</label>
                <input 
                    type="text" 
                    value={recipientAddress}
                    onChange={(e) => setRecipientAddress(e.target.value)}
                    placeholder="Recipient Wallet Address"
                />
            </div>
            <div>
                <label>Amount (SOL):</label>
                <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount in SOL"
                />
            </div>
            <button onClick={handleClickTransaction}>Send Transaction</button>
        </div>
    );
}

export default Transaction;
