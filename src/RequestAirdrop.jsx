import { useWallet } from "@solana/wallet-adapter-react";

export function RequestAirdrop() {
  const wallet = useWallet();
  function requestAirdrop() {
    alert("hi");
  }

  return (
    <div>
      <input id="amount" type="text" placeholder="Amount" />
      <button onClick={requestAirdrop}>Request Airdrop</button>
    </div>
  );
}
