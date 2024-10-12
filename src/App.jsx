import React, { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

import "@solana/wallet-adapter-react-ui/styles.css";
// import { SignMessage } from "./SignMessage";
import "./App.css";
import { RequestAirdrop } from "./RequestAirDrop";
import { ShowSolBalance } from "./ShowBalance";
import { SendTokens } from "./SendTokens";

function App() {
  return (
    // connnection to rpc
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <WalletMultiButton />
          </div>
          {/* <RequestAirdrop />
          <ShowSolBalance /> */}
          <SendTokens />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
