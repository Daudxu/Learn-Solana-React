import {
    Connection,
    PublicKey,
    // SystemProgram,
    // SYSVAR_CLOCK_PUBKEY,
    // SYSVAR_RENT_PUBKEY,
    // Transaction as sendTransaction,
    // sendAndConfirmTransaction,
    // TransactionInstruction
    // LAMPORTS_PER_SOL
  } from '@solana/web3.js'

  import { useWallet } from '@solana/wallet-adapter-react';  

//   import {
//     Token, ASSOCIATED_TOKEN_PROGRAM_ID,
//     TOKEN_PROGRAM_ID
//   } from '@solana/spl-token'

function Transaction () {
  const { wallet, publicKey } = useWallet();  

  if (!wallet || !wallet.connected || !publicKey) {  
    return <div>Wallet not connected or not available</div>;  
  }  
  

     
    // console.log("connection", connection)
    // console.log("sa", sa)

    return (
        <div>
            <h2> transaction </h2>
            <p>Connected Wallet Public Key: {publicKey}</p>  
        </div>
    )
}

export default Transaction;