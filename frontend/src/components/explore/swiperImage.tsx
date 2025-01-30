import { BASEURL } from "@/constant";
import { Image } from "@nextui-org/react";

const SwiperImages = ({ url }) => {


  return (
    <Image
      alt="Profile hero Image"
      className="w-full h-full"
      classNames={{
        wrapper: "w-full maxcontentimportant",
      }}
      src={`${BASEURL}${url}`}
      radius="lg"
      loading="lazy"
      
      style={{
        objectFit: "cover",
        height: "calc(100vh - 250px)", // Dynamic height based on status
        transition: "height 0.2s", // Smooth transition for height change
        transitionDelay: "0.5s"
      }}
    />
  );
};

export default SwiperImages;
