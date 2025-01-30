import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { BlockAndReport, MoreIcon, ReportIcon } from "@/Icons/index";

const ExploreCardOption = () => {
  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button
          isIconOnly
          className="right-4 top-4 z-50"
          color="primary"
          style={{
            position: "absolute",
          }}
          variant="flat"
        >
          <MoreIcon stroke="#FFF"/>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" variant="solid">
        <DropdownItem key="delete" startContent={<ReportIcon />}>
          Report
        </DropdownItem>

        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          startContent={<BlockAndReport />}
        >
          Block and report
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ExploreCardOption;
