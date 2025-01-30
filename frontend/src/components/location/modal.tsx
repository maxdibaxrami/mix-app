import { updateUserData } from "@/features/userSlice";
import { LocationIcon } from "@/Icons";
import { LocationIconSVG } from "@/Icons/LocationIcon";
import { getLocation } from "@/Location";
import { AppDispatch, RootState } from "@/store";
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Button,
  ModalBody,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

const LocationModal = () => {

  const { t } = useTranslation();
  const { data: user } = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();

  const [loading, setLoading] = useState(false)

  const [location, setLocation] = useState(''); 
  const [coordinates, setCoordinates] = useState({ lat: null, lon: null });
  const [error, setError] = useState('');
  
  console.log(error)

  useEffect(() => {
    getLocation(setError, setLocation, setCoordinates);
  }, []);

  const onPress = async () => {

    setLoading(true)

    await dispatch(updateUserData({ userId: user.id.toString(), updatedData:{
        country: location.split(',')[1].trim(),
        city: location.split(',')[0], 
        lat: Number(coordinates.lat),
        lon: Number(coordinates.lon),
    } }));

    setLoading(false)

    
  }

  return (
    <Modal
      backdrop="opaque"
      classNames={{
        base: "absolute border-bottom-0 z-50 px-0 backdrop-saturate-150 backdrop-blur bg-background/90 mb-0",
      }}
      isOpen={user.lat === null}
      size={"5xl"}
      style={{ zIndex: "1000" }}
    >
      <ModalContent>
        <ModalHeader className="flex items-center gap-1"><LocationIcon/>{t("location")}</ModalHeader>
        <ModalBody>
            <div className="flex items-center flex-col justify-center"> 
                <LocationIconSVG/>
                <p className="text-center text-tiny">{t("location_access_prompt")}</p>
            </div>
        </ModalBody>

        <ModalFooter>
          <Button  isLoading={loading} color="secondary" onPress={()=> getLocation(setError, setLocation, setCoordinates)}>
            <LocationIcon className="size-5"/>
            {t("access_to_location")}
          </Button>
          <Button isLoading={loading} color="success" onPress={onPress}>
            {t("Save")}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};


export default LocationModal;
