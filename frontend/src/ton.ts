
// ton.ts (wallet connection and transaction functions)

import { TonConnect } from "@tonconnect/sdk";
import { TON_WALLET } from "./constant";

// Initialize the TonConnect instance
const connector = new TonConnect();

export const connectTONWallet = async () => {
  try {
    if (connector.connected) {
      console.log("Wallet is already connected.");
      return true; // If wallet is already connected, return true
    }

    // Fetch available wallets
    const wallets = await connector.getWallets();
    console.log("Available wallets:", wallets);

    if (wallets.length === 0) {
      alert("No TON wallet found. Please install a wallet.");
      return false;
    }

    // Connect to the first available wallet
    await connector.connect(wallets[0]);
    console.log("Wallet connected successfully.");
    return true;
  } catch (error) {
    console.error("Failed to connect TON wallet:", error);
    return false;
  }
};

export const sendTransaction = async ({ amount }) => {
  try {
    // Ensure the wallet is connected before proceeding
    if (!connector.connected) {
      const isConnected = await connectTONWallet(); // Try to reconnect
      if (!isConnected) {
        throw new Error("Wallet is still not connected.");
      }
    }

    // Create the transaction object
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
    await connector.sendTransaction(transaction);
    console.log("Transaction sent successfully.");
    return true; // Transaction was successful
  } catch (error) {
    console.error("Transaction failed:", error);
    alert(`Transaction failed: ${error.message || "Unknown error"}`);
    return false; // Transaction failed
  }
};
