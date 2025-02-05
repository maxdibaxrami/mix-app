import { TonConnect } from "@tonconnect/sdk";
import { TON_WALLET } from "./constant";

// Initialize the TonConnect instance
const connector = new TonConnect();

export const connectTONWallet = async () => {
  try {
    if (connector.connected) {
      console.log("Wallet is already connected.");
      return true; // Wallet is already connected
    }

    const wallets = await connector.getWallets();
    if (wallets.length === 0) {
      alert("No TON wallet found, please install a wallet.");
      return false;
    }

    await connector.connect(wallets[0]);
    console.log("Wallet connected successfully.");
    return true;
  } catch (error) {
    console.error("Failed to connect TON wallet:", error);
    return false;
  }
};

export const sendTransaction = async ({ amount, type }) => {
  try {
    // Ensure the wallet is connected
    if (!connector.connected) {
      const isConnected = await connectTONWallet(); // Try reconnecting if not connected
      if (!isConnected) {
        throw new Error("Wallet is still not connected.");
      }
    }

    // Transaction payload
    const transaction = {
      valid_until: Math.floor(Date.now() / 1000) + 60, // Transaction valid for 60 seconds
      messages: [
        {
          address: TON_WALLET, // Owner's wallet address
          amount: (amount * Math.pow(10, 9)).toString(), // Amount in nanoTON
          payload: type === "star" ? "Star Package" : "Regular Package", // Optional message or payload
        },
      ],
    };

    // Send the transaction using the connector
    // @ts-ignore
    await connector.sendTransaction(transaction);
    console.log("Transaction sent successfully.");

    return true;
  } catch (error) {
    console.error("Transaction failed:", error);
    alert(`Transaction failed: ${error.message || "Unknown error"}`);
    return false;
  }
};
