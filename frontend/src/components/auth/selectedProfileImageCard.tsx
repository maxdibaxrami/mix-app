import { Card, Button, Image } from "@nextui-org/react";
import { DeleteChatIcon } from "@/Icons";
import PropTypes from "prop-types";

const SelectedProfileImageCard = ({ imageUrl, onDelete }) => {
  return (
    <Card isFooterBlurred className="border-none relative" radius="lg">
      <Image
        alt="Selected profile"
        className="object-cover aspect-square	"
        height={200}
        src={imageUrl}
        width={200}
      />
      <div
        style={{
          position: "absolute",
          bottom: "0.25rem",
          right: "0.25rem",
          zIndex: 50,
        }}
      >
        <Button
          className="text-tiny text-white p-0"
          color="danger"
          radius="full"
          isIconOnly
          size="sm"
          variant="shadow"
          onPress={onDelete}
        >
          <DeleteChatIcon />
        </Button>
      </div>
    </Card>
  );
};

SelectedProfileImageCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default SelectedProfileImageCard;
