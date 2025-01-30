import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { CameraIcon } from "@/Icons/index";
import { useTranslation } from "react-i18next";
import SelectedProfileImageCard from "./selectedProfileImageCard";

const ImageDataAuth = ({ setSlideAvailable, setSlideUnAvailable, setUserPhoto, userPhoto }) => {
  const { t } = useTranslation();
  const [selectedImages, setSelectedImages] = useState(userPhoto);
  const [loading, setLoading] = useState(false);  // Loading state for file reading

  // Handle file selection
  const handleFileChange = async (event) => {
    const files = Array.from(event.target.files);
    if (files.length + selectedImages.length > 6) {
      alert("You can only upload a maximum of 6 images.");
      return;
    }

    setLoading(true);  // Set loading to true during file processing
    
    const newImages = [];
    for (const file of files) {
        const reader = new FileReader();
        reader.onload = (e) => {
          newImages.push(e.target.result);
          if (newImages.length === files.length) {  // Wait for all files to be processed
            setSelectedImages((prevImages) => [...prevImages, ...newImages]);
            setLoading(false);  // Stop loading once all images are processed
          }
        };
        reader.onerror = () => {
          console.error("Error reading file");
          setLoading(false);
        };
                // @ts-ignore
        reader.readAsDataURL(file);
    }
  };

  // Handle image deletion
  const handleDeleteImage = (imageUrl) => {
    setSelectedImages((prevImages) =>
      prevImages.filter((img) => img !== imageUrl)
    );
  };

  useEffect(() => {
    if (selectedImages.length >= 1) {
      setSlideAvailable();
      setUserPhoto(selectedImages);
    } else {
      setSlideUnAvailable();
      setUserPhoto(selectedImages);
    }
  }, [selectedImages]);

  useEffect(() => {
    console.log(selectedImages)
  }, [selectedImages]);
  return (
    <div className="flex justify-between flex-col px-6 pb-4">
      <form className="flex w-full flex-col gap-4">

        <div>
          <input
            type="file"
            id="file-upload"
            accept="image/*"
            hidden
            onChange={handleFileChange}
          />
          <Button
            size="lg"
            className="w-full mb-2 font-bold"
            radius="lg"
            color="success"
            isDisabled={selectedImages.length >= 6 || loading}  // Disable button if loading or max images reached
            endContent={<CameraIcon />}
            onPress={() => document.getElementById("file-upload").click()}
          >
            {loading ? t("Uploading...") : t("addPhoto")}
          </Button>

          <div className="w-full h-full pb-4 gap-2 grid grid-cols-2 sm:grid-cols-3">
            {selectedImages.map((imageUrl, index) => (
              <SelectedProfileImageCard
                key={index}
                imageUrl={imageUrl}
                onDelete={() => handleDeleteImage(imageUrl)}
              />
            ))}
          </div>


          <p className="mb-1 text-small text-warning">
            {t("youshoulduploadminimum3photoandmaximum6photo")}
          </p>
        </div>
      </form>
    </div>
  );
};

export default ImageDataAuth;
