import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";

export function RequestAirdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  function requestAirdrop() {
    const publickey = wallet.publicKey;
    const amount = document.getElementById("amount").value;
    connection.requestAirdrop(publickey, amount * LAMPORTS_PER_SOL);
  }

  return (
    <div>
      <input id="amount" type="text" placeholder="Amount" /> <br />
      <button onClick={requestAirdrop}>Request Airdrop</button>
      {/* if wallet.publickey exist then call tobase58 and vice versa */}
      {/* {wallet.publicKey?.toBase58()} */}
    </div>
  );
}
