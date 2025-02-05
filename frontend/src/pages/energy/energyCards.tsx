import { FlashIcon, PerimumIcon, TonCoinIcon } from "@/Icons";
import { connectTONWallet, sendTransaction } from "@/ton";
import { Avatar, Button, Card, CardHeader } from "@nextui-org/react";

export const EnergyCard = ({ color, title, description, price, type }) => {

  const handlePaymentTon = async () => {
    try {
      // Step 1: Connect the wallet
      const isWalletConnected = await connectTONWallet();

      if (!isWalletConnected) {
        alert("Please connect your TON wallet to proceed.");
        return;
      }

      // Step 2: Proceed with the transaction logic
      console.log("Proceeding to payment...");

      // Send the transaction
      await sendTransaction({ amount: price });

      // If the transaction is successful
      alert("Transaction successful!");
    } catch (error) {
      // Handle errors during wallet connection or transaction
      alert("Transaction failed: " + error.message);
    }
  };

  return (
    <Card className="py-2 mb-2  bg-background/70">
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
          color={type === "star" ? "secondary" : "default"}
          radius="full"
          size="sm"
          variant={"solid"}
          onClick={type === "ton" ? handlePaymentTon : undefined} // Trigger wallet connection and payment on click
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
