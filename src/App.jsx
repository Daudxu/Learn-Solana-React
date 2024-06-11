import { useRoutes } from "react-router-dom";
import routes from "./router";

import "./App.css";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";

function App() {
  const endpoint = clusterApiUrl("devnet");
  const wallet = new PhantomWalletAdapter();
  const routeElement = useRoutes(routes);

  return (
    <>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={[wallet]}>
          <WalletModalProvider>{routeElement}</WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
}

export default App;
