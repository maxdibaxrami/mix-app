
// ton.ts (wallet connection and transaction functions)

import { TonConnect } from "@tonconnect/sdk";
import { TON_WALLET } from "./constant";

// Initialize the TonConnect instance
const tonConnect = new TonConnect({
  manifestUrl: "/tonconnect-manifest.json",  // Point to your hosted manifest.json
});
export const connectTONWallet = async () => {
  try {
    // Check if the wallet is connected
    if (tonConnect.connected) {
      console.log("Wallet is already connected.");
      return true;
    }

    // Fetch available wallets
    const wallets = await tonConnect.getWallets();
    if (wallets.length === 0) {
      alert("No TON wallet found. Please install a wallet.");
      return false;
    }

    // Connect to the first available wallet
    await tonConnect.connect(wallets[0]);
    console.log("Wallet connected successfully.");
    return true;
  } catch (error) {
    console.error("Failed to connect TON wallet:", error);
    alert("Failed to connect the TON wallet. Please try again.");
    return false;
  }
};


export const sendTransaction = async ({ amount }) => {
  try {
    if (!tonConnect.connected) {
      console.log("No active connection. Reconnecting...");
      const isConnected = await connectTONWallet();
      if (!isConnected) {
        throw new Error("Wallet is still not connected.");
      }
    }

    const transaction = {
      validUntil: Math.floor(Date.now() / 1000) + 60, // Transaction valid for 60 seconds
      messages: [
        {
          address: TON_WALLET, // Wallet address to send to
          amount: (amount * Math.pow(10, 9)).toString(), // Amount in nanoTON
          payload: `Payment of ${amount} TON`, // Optional message payload
        },
      ],
    };

    console.log("Transaction object:", transaction);

    // Send the transaction using the connector
    await tonConnect.sendTransaction(transaction);
    console.log("Transaction sent successfully.");
    return true; // Transaction was successful
  } catch (error) {
    console.error("Transaction failed:", error);
    alert(`Transaction failed: ${error.message || "Unknown error"}`);
    return false; // Transaction failed
  }
};
