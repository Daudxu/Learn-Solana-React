import { WalletMultiButton, WalletModalProvider } from "@solana/wallet-adapter-react-ui";
function Wallet() {
    return (
        <div> 
            <h2> Wallet </h2>
            <WalletMultiButton />
         </div>
    )
}

export default Wallet;