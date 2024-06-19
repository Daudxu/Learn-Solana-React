import React, { useState } from 'react';  
import { useConnection, useWallet } from '@solana/wallet-adapter-react';  
import * as web3 from '@solana/web3.js';

function Transaction() {
    const { publicKey: walletPublicKey, connected } = useWallet();  
    const { connection } = useConnection();
    const [airdropAmount, setAirdropAmount] = useState('');


    const handleAirdrop = async () => {
        if (!connection || !walletPublicKey || !connected) {
            console.error("Wallet not connected or connection not available");
            return;
        }

        try {
            const lamports = parseFloat(airdropAmount) * web3.LAMPORTS_PER_SOL;
            const signature = await connection.requestAirdrop(walletPublicKey, lamports);
            console.log("Airdrop signature:", signature);

            // Confirm the airdrop
            const confirmation = await connection.confirmTransaction(signature, 'processed');
            console.log("Airdrop confirmed:", confirmation);
        } catch (error) {
            console.error("Airdrop failed:", error);
        }
    };

    return (
        <div>
            <h2>Airdrop SOL</h2>
            <div>
                <label>Airdrop Amount (SOL):</label>
                <input 
                    type="number" 
                    value={airdropAmount}
                    onChange={(e) => setAirdropAmount(e.target.value)}
                    placeholder="Airdrop Amount in SOL"
                />
            </div>
            <button onClick={handleAirdrop}>Request Airdrop</button>
        </div>
    );
}

export default Transaction;
