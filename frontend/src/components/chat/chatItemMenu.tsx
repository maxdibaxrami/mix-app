import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { DeleteChatIcon, Favorite, MoreIcon } from "@/Icons/index";
import { useTranslation } from "react-i18next";
import { useState, useMemo } from "react";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

const ChatItemMenu = ({ data, HandleBlockUser, HandleAddToFavorite, targetUser, HandleRemoveFromFavorite, handleDelete }) => {
  const { t } = useTranslation();
  const { data: user } = useSelector((state: RootState) => state.user);

  const [isFavorite, setIsFavorite] = useState(false);

  // Update the favorite state based on favoriteUsers
  const targetUserId = targetUser.id ? targetUser.id : targetUser;

  useMemo(() => {
    setIsFavorite(user.favoriteUsers.map(v=> v.id).includes(targetUserId));
  }, [user, targetUserId]);

  const onActive = (key) => {
    switch (key) {
      case "favorite":
        HandleAddToFavorite(targetUser);
        break;
      case "removeFavorite":
        HandleRemoveFromFavorite(targetUser);
        break;
      case "deletechat":
        handleDelete(data.recipientId, data.senderId);
        break;
      case "blockandreport":
        HandleBlockUser(targetUser);
        handleDelete(data.recipientId, data.senderId);
        break;
    }
  };

  return (
    <Dropdown backdrop="opaque">
      <DropdownTrigger>
        <Button
          isIconOnly
          aria-label="More options"
          color="default"
          size="sm"
          variant="light"
        >
          <MoreIcon />
        </Button>
      </DropdownTrigger>
      <DropdownMenu onAction={onActive} aria-label="Dropdown menu with icons" variant="faded">
        {isFavorite ? (
          <DropdownItem key="removeFavorite" startContent={<Favorite status={true} />}>
            {t("Remove_from_favorite")}
          </DropdownItem>
        ) : (
          <DropdownItem key="favorite" startContent={<Favorite status={false} />}>
            {t("addToFavorite")}
          </DropdownItem>
        )}

        <DropdownItem
          key="deletechat"
          className="text-danger"
          color="danger"
          startContent={<DeleteChatIcon />}
        >
          {t("deleteChat")}
        </DropdownItem>

        {/* Uncomment if "Block and Report" is needed */}
        {/* <DropdownItem
          key="blockandreport"
          className="text-danger"
          color="danger"
          startContent={<BlockAndReport />}
        >
          {t("blockAndReport")}
        </DropdownItem> */}
      </DropdownMenu>
    </Dropdown>
  );
};

export default ChatItemMenu;
