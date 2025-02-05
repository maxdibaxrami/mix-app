import { TonConnect } from "@tonconnect/sdk";
import { TON_WALLET } from "./constant";

// Initialize the TonConnect instance
const connector = new TonConnect();

export const connectTONWallet = async () => {
  try {
    if (connector.connected) {
      return true; // Wallet is already connected
    }

    const wallets = await connector.getWallets();
    if (wallets.length === 0) {
      alert("No TON wallet found, please install a wallet.");
      return false;
    }

    await connector.connect(wallets[0]);

    return true;
  } catch (error) {
    console.error("Failed to connect TON wallet:", error);
    return false;
  }
};

export const sendTransaction = async ({ amount, type }) => {
  try {
    const ownerWallet = TON_WALLET; // Owner's wallet address

    if (!connector.connected) {
      throw new Error("Wallet is not connected.");
    }

    // Transaction payload
    const transaction = {
      valid_until: Math.floor(Date.now() / 1000) + 60, // Transaction valid for 60 seconds
      messages: [
        {
          address: ownerWallet, // Owner's wallet address
          amount: (amount * Math.pow(10, 9)).toString(), // Amount in nanoTON (1 TON = 10^9 nanoTON)
          payload: type === "star" ? "Star Package" : "Regular Package", // Optional message or payload
        },
      ],
    };

    // Send the transaction using the connector
    // @ts-ignore
    await connector.sendTransaction(transaction);

    return true;
  } catch (error) {
    console.error("Transaction failed:", error);
    throw error;
  }
};
