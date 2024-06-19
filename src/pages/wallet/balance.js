import { useConnection } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";

function Balance() {
    const {  publicKey } = useWallet();
    const [balance, setBalance] = useState(0);
    const { connection } = useConnection();
    useEffect(() => {
        if (!connection || !publicKey) {
          return;
        }
    
        connection.onAccountChange(
          publicKey,
          (updatedAccountInfo) => {
            setBalance(updatedAccountInfo.lamports / LAMPORTS_PER_SOL);
          },
          "confirmed"
        );
    
        connection.getAccountInfo(publicKey).then((info) => {
          setBalance(info.lamports);
        });
      }, [connection, publicKey]);

    return (
        <div>
                <p>{publicKey ? `Balance: ${balance / LAMPORTS_PER_SOL} SOL` : ""}</p>
        </div>
    )
}

export default Balance