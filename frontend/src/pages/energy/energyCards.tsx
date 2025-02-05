import { FlashIcon, PerimumIcon, TonCoinIcon } from "@/Icons";
import { connectTONWallet, sendTransaction } from "@/ton";
import { Avatar, Button, Card, CardHeader } from "@nextui-org/react";
import { useState } from "react";

export const EnergyCard = ({ color, title, description, price, type }) => {
  const [isProcessing, setIsProcessing] = useState(false); // State for handling button disable during transaction

  const handlePaymentTon = async () => {
    setIsProcessing(true); // Disable button during transaction process
    try {
      console.log("Starting payment process...");

      // Step 1: Connect the wallet if not connected
      const isWalletConnected = await connectTONWallet();
      console.log("Wallet connected:", isWalletConnected);

      if (!isWalletConnected) {
        alert("Please connect your TON wallet to proceed.");
        return;
      }

      // Step 2: Send the transaction
      console.log("Sending transaction...");
      const transactionSuccess = await sendTransaction({ amount: price });

      // Step 3: Check transaction result and alert the user
      if (transactionSuccess) {
        console.log("Transaction successful.");
        alert("Transaction successful!");
      } else {
        console.log("Transaction failed.");
        alert("Transaction failed.");
      }
    } catch (error) {
      // Handle any errors during the connection or transaction
      console.error("Error during transaction:", error);
      alert("Transaction failed: " + (error.message || "Unknown error"));
    } finally {
      setIsProcessing(false); // Enable the button again after process
    }
  };

  return (
    <Card className="py-2 mb-2 bg-background/70">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            color={color}
            icon={<FlashIcon className="size-5" />}
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{title}</h4>
            <h5 className="text-small tracking-tight text-default-400">{description}</h5>
          </div>
        </div>
        <Button
          disabled={isProcessing} // Disable button during processing
          color={type === "star" ? "secondary" : "default"}
          radius="full"
          size="sm"
          variant={"solid"}
          onClick={type === "ton" ? handlePaymentTon : undefined} // Trigger TON payment
        >
          {type === "star" ? (
            <PerimumIcon stroke="#FFF" fill="#FFF" className="size-5" />
          ) : (
            <TonCoinIcon className="size-5" />
          )}
          {price}
        </Button>
      </CardHeader>
    </Card>
  );
};
