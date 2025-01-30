import { Textarea, Button } from "@nextui-org/react";

import { SendIcon, PhotoIcon } from "@/Icons/index";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import axios from '@/api/base';

const ChatInput = ({inputMessage, setInputMessage, onSendMessage,onSendImage}) => {
  const { t, i18n } = useTranslation();
  const [isUploading, setIsUploading] = useState(false); // Track the uploading state
  const fileInputRef = useRef(null); // Ref to control file input

   // Handle file selection
   const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadFile(file)
      fileInputRef.current.disabled = true; // Disable the file input after selection
    }
  };


  const uploadFile = async (file) => {

    setIsUploading(true); // Set uploading state to true

    const formData = new FormData();
    formData.append("file", file);

    try {
      // Send file to the server
      const response = await axios.post("/messages/upload", formData);

      if (response.data && response.data.mediaUrl) {
        // Successfully uploaded file
        onSendImage(response.data.mediaUrl)
        setIsUploading(false); // Reset uploading state

        return response.data.mediaUrl; // Return the media URL
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setIsUploading(false); // Reset uploading state
    }
  };

  return (
    <div
      className="flex right-0 left-0 items-center justify-between bottom-0"
      style={{ width: "100%"}}
    >
      <input
              type="file"
              accept="image/*, .heic"  // Include HEIC format along with image types
              className="hidden"
              onChange={handleFileChange}
              ref={fileInputRef} // Link file input with ref
      />

      <Textarea
        className="w-full"
        value={inputMessage}
        onValueChange={setInputMessage}
        endContent={
          <Button
            isIconOnly
            color="primary"
            size="sm"
            radius="full"
            type="button"
            style={{transform:`${i18n.language==="ar" || i18n.language === 'fa'?"rotate(180deg)":"rotate(0deg)"}`}}
            onClick={onSendMessage}
          >
            <SendIcon />
          </Button>
        }
        minRows={1}
        placeholder={t("enterMessage")}
        size="lg"
        startContent={
          <Button
            isIconOnly
            aria-label="Take a photo"
            className="mr-1"
            color="default"
            radius="full"
            onClick={() => fileInputRef.current.click()} 
            size="sm"
            isLoading={isUploading}
          >
            <PhotoIcon />
          </Button>
        }
        variant="flat"
      />
    </div>
  );
};

export default ChatInput;