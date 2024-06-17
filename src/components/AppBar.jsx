import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

export const AppBar = () => {
    return (
        <div >
            <span>Wallet-Adapter Example</span>
            <WalletMultiButton />
        </div>
    )
}