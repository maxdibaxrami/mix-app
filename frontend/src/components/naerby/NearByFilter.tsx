import { forwardRef, useImperativeHandle, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Button,
  useDisclosure,
  ModalBody,
  Slider,
  ButtonGroup,
} from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { fetchNearBySliceUsers, setFilters } from "@/features/nearBySlice";
import type { SliderValue } from "@nextui-org/react";
import type { Selection } from "@nextui-org/react";
import { getlanguages } from "@/constant";
// @ts-ignore
const ExploreFilter = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, filters,genderFilter } = useSelector((state: RootState) => state.nearBy); // Get filters from the store
  const { data } = useSelector((state: RootState) => state.user);

  // Initialize state with default values from Redux (if available)
  const [locationValue, setLocationValue] = useState(filters.city ? "city" : (filters.country ? "country" : ""));
  const [age, setAge] = useState<SliderValue>(filters.ageRange ? filters.ageRange.split(',').map(Number) : [18, 100]);
  const [language, setLanguage] = useState<Selection>(new Set(filters.languages ? filters.languages.split(',') : []));
  const [selectGender, setSelectGender] = useState(genderFilter === "male" ? "male" : (genderFilter ? "female" : ""))

  // Languages options
  const languages = getlanguages(t)

  const { isOpen, onOpen, onClose } = useDisclosure();

  // Expose modal controls via ref
  useImperativeHandle(ref, () => ({
    openModal: onOpen,
    closeModal: onClose,
  }));

  const onSetFilter = () => {
    // Update filters in the Redux store
    const updatedFilters = {
      ageRange: `${age[0]},${age[1]}`,
      city: locationValue === "city" ? data.city : null,
      country: locationValue === "country" ? data.country : null,
      languages: Array.from(language).length !== 0 ? Array.from(language).join(",") : null,
      genderFilter: selectGender || null,  // Add genderFilter to updated filters
    };
  
    // Dispatch filters to Redux store
    dispatch(setFilters(updatedFilters));
  
    // Fetch users based on the updated filters
    dispatch(
      fetchNearBySliceUsers({
        userId: data.id.toString(),
        ageRange: `${age[0]},${age[1]}`,
        city: locationValue === "city" ? data.city : null,
        country: locationValue === "country" ? data.country : null,
        languages: Array.from(language).length !== 0 ? Array.from(language).join(",") : null,
        latitude: null,
        longitude: null,
        radius: null,
        page: 1,
        limit: 50,
        genderFilter: selectGender || null, // Include genderFilter in API call
      })
    );
  
    // Close the modal after applying filters
    onClose();
  };
  

  return (
    <Modal
      backdrop="opaque"
      classNames={{
        base: "absolute border-bottom-0 z-50 px-0 backdrop-saturate-150 backdrop-blur bg-background/90 mb-0",
      }}
      isOpen={isOpen}
      size={"5xl"}
      style={{ zIndex: "1000" }}
      onClose={onClose}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">{t("Setfilters")}</ModalHeader>
        <ModalBody>
          <form className="flex flex-col gap-4">
            <ButtonGroup className="w-full flex">
              <Button
                onPress={() => setLocationValue("city")}
                color={locationValue === "city" ? "primary" : "default"}
                className="grow"
              >
                {t("cityButton")}
              </Button>
              <Button
                onPress={() => setLocationValue("country")}
                color={locationValue === "country" ? "primary" : "default"}
                className="grow"
              >
                {t("countryButton")}
              </Button>
              <Button
                onPress={() => setLocationValue("")}
                color={locationValue === "" ? "primary" : "default"}
                className="grow"
              >
                {t("globalButton")}
              </Button>
            </ButtonGroup>

            <Slider
              className="w-full"
              label={t("age")}
              maxValue={100}
              minValue={18}
              step={1}
              value={age}
              onChange={setAge}
              color="secondary"
            />

            <ButtonGroup className="w-full flex">
              <Button
                onPress={() => setSelectGender("male")}
                color={selectGender === "male" ? "primary" : "default"}
                className="grow"
              >
                {t("Male")}
              </Button>
              <Button
                onPress={() => setSelectGender("female")}
                color={selectGender === "female" ? "primary" : "default"}
                className="grow"
              >
                {t("Female")}
              </Button>
              <Button
                onPress={() => setSelectGender("")}
                color={selectGender === "" ? "primary" : "default"}
                className="grow"
              >
                {t("All")}
              </Button>
            </ButtonGroup>


            <Select
              className="w-full"
              label={t("Languages")}
              placeholder={t("Languages")}
              selectionMode="multiple"
              selectedKeys={language}
              onSelectionChange={setLanguage}
            >
              {languages.map((languageItem) => (
                <SelectItem key={languageItem.key}>{languageItem.label}</SelectItem>
              ))}
            </Select>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button color="default" variant="solid" onPress={onClose}>
            {t("Close")}
          </Button>
          <Button isLoading={loading} color="success" onPress={onSetFilter}>
            {t("Save")}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});

ExploreFilter.displayName = "ExploreFilter";

export default ExploreFilter;
