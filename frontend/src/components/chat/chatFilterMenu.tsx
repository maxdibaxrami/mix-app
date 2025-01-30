import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { FilterButton, NewIcon, FavoriteColor } from "@/Icons/index";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";





const ChatFiltermenu = ({chatOrder, setChatOrder}) => {

  const { t } = useTranslation();

  const selectedValue = useMemo(
    () => Array.from(chatOrder).join(", ").replace(/_/g, ""),
    [chatOrder],
  );

  return (
    <Dropdown
    backdrop="blur">
      <DropdownTrigger>
        <Button className="text-foreground" aria-label="Filter" variant="flat" color="default" size="sm">
          <FilterButton className="size-5" />
          <p className="capitalize font-bold">{selectedValue}</p>
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Static Actions" 
        disallowEmptySelection
        selectedKeys={chatOrder}
        selectionMode="single"
        variant="flat"
        onSelectionChange={setChatOrder}
      >
        <DropdownItem key="new" startContent={<NewIcon />}>
          <p className="font-bold">{t("new")}</p>
        </DropdownItem>
        <DropdownItem className="text-warning" key="Favorite" startContent={<FavoriteColor stroke="#c98927" fill="#c98927"/>}>
          <p className="text-warning/70 font-bold">{t("favorite")}</p>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ChatFiltermenu;
