import React, { useEffect, useState } from 'react';
import {
    getOrCreateAssociatedTokenAccount,
  } from "@solana/spl-token";
  import { useConnection, useWallet } from '@solana/wallet-adapter-react';  
import {
    LAMPORTS_PER_SOL,
    PublicKey,
    Transaction,
  } from "@solana/web3.js";

function TokenTransfer() {
    const { publicKey:walletPublicKey, connected, sendTransaction } = useWallet();
    const { connection } = useConnection();

    const handleClickSendTransaction = async () => {
        if (!connection || !walletPublicKey || !connected) {
            console.error('Not connected to wallet or connection not established.');
            return;
        }

        try {
        
            // step 1: create transaction
            const toPublicKey = new PublicKey('3LwnjQFfqqg8jVvzT1UcoFqeqzz27z8L9xnhbxE7mgQk')
            const mint = new PublicKey('Edf9v3mRLBEzUPBpCTBp2WNLoBtgXsEq5iQzs9tAgE5e')
            const transaction = new Transaction()
            // up rewrite function
            const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
                connection,
                walletPublicKey,
                mint,
                walletPublicKey,
                sendTransaction,
            )
            console.log("fromTokenAccount", fromTokenAccount)
            // const toTokenAccount = await getOrCreateAssociatedTokenAccount(
            //     connection,
            //     publicKey,
            //     mint,
            //     toPublicKey,
            //     sendTransaction,
            // )

            // const instruction = createTransferCheckedInstruction(
            //     fromTokenAccount.address,
            //     mint,
            //     toTokenAccount.address,
            //     publicKey,
            //     [],
            //     1,
            // )

        
            // transaction.add(instruction)
        
            // step 2: sign&send transaction
            // const result = await sendTransaction(transaction, connection)
        } catch (error) {
            console.error('Error sending transaction:', error);
        }
    };

    return (
        <div>
            <h2>Token Transfer</h2>
            <button onClick={handleClickSendTransaction} disabled={!connected}>
                Send Transaction
            </button>
        </div>
    );
}

export default TokenTransfer;
