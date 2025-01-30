// @ts-ignore
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalFooter,
  Button,
  useDisclosure,
  ModalBody,
  ModalHeader,
} from "@nextui-org/react";

import { useTranslation } from "react-i18next";
import InterestingList from "../core/InterstingList";
import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";
import { updateUserData } from "@/features/userSlice";
import { HashtagIcon } from "@/Icons";

const EditIntersting = ({user,children,loading}) => {
  const { t } = useTranslation();
  const [selectedData, setSelectedData] = useState(user)
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch: AppDispatch = useDispatch();

  const onChangeValue = (value) => {
    setSelectedData(new Set(value))
  }

    // Dynamically create the payload with only modified fields
    const handleSaveData = async () => {
      const updatedData: any = {};
      console.log(selectedData)
      if (selectedData !== user.interests) {
        updatedData.interests = Array.from(selectedData);
      }
      if (Object.keys(updatedData).length > 0) {
        // Dispatch the update action only if there are changes
        await dispatch(updateUserData({ userId: user.id, updatedData }));
      }
  
      onClose(); // Close the modal after saving
  };

  return (
    <>
      <div onClick={onOpen} className="flex flex-wrap">
        {children}
      </div>
      <Modal classNames={{"base":"px-0 backdrop-saturate-150 backdrop-blur-lg bg-background/90"}} hideCloseButton backdrop="opaque" isOpen={isOpen} size={"5xl"} onClose={onClose}>
        <ModalContent>
        <ModalHeader className="flex font-bold flex-col gap-1">

            <div className="flex items-center gap-2">
              <HashtagIcon className="size-5" />
              {t("interested")}
            </div>

          </ModalHeader>
          <ModalBody className="">
            <InterestingList user={user} onChangeValue={onChangeValue}/>
          </ModalBody>

          <ModalFooter>
            <Button color="default" variant="solid" onPress={onClose}>
              {t("close")}
            </Button>
            <Button isLoading={loading} isDisabled={Array.from(selectedData).length === 0} color="success" onPress={handleSaveData}>
              {t("save")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditIntersting;
