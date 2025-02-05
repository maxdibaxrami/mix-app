import { TON_WALLER } from "@/constant";
import { FlashIcon, PerimumIcon, TonCoinIcon } from "@/Icons";
import { Avatar, Button, Card, CardHeader } from "@nextui-org/react";
import { useTonConnectUI } from '@tonconnect/ui-react';

export const EnergyCard = ({ color, title, description, price, type }) => {
  const [tonConnectUI] = useTonConnectUI(); // Initialize TonConnect

  const handleTonPayment = async () => {
    try {
      const tx = {
        validUntil: Date.now() + 1000000,
        messages: [
          {
            address: TON_WALLER, // Add the receiver's TON address
            amount: (price * 1e9).toString(), // Convert price to nanoton (1 TON = 1e9 nanoton)
            payload: '', // Optional payload for the transaction
          },
        ],
      };
      const result = await tonConnectUI.sendTransaction(tx);
      console.log('Transaction successful:', result);

      // Handle success logic (e.g., update user data, give energy)
    } catch (error) {
      console.error('Transaction failed:', error);
    }
  };

  return (
    <Card className="py-2 mb-2">
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
          color={type === "star" ? "secondary" : "primary"}
          radius="full"
          size="sm"
          variant={"solid"}
          onClick={type === "ton" ? handleTonPayment : null} // Add TON payment handler
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
