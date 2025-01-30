import { ChatIcon, FireIcon, HeartIcon } from "@/Icons";
import { Avatar, cn, Radio, RadioGroup } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Define the allowed color types
type AvatarColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger";

// Define the structure for each item
interface Item {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  color: AvatarColor;
}

// List of items with proper type for 'color'

// Custom Radio component
export const CustomRadio = (props: any) => {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "inline-flex m-0 bg-neutral/20 hover:bg-content items-center justify-between",
          "flex-row-reverse max-w-full cursor-pointer rounded-lg p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary data-[selected=true]:bg-primary/10"
        ),
      }}
    >
      {children}
    </Radio>
  );
};

// Main component rendering the RadioGroup
const WhyIamHereAuth = ({setSlideAvailable, setSlideUnAvailable, user}) => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(user.lookingFor);
  
  useEffect(()=>{
    if(selected !== ""){
      setSlideAvailable("lookingFor",selected)
    }else{
      setSlideUnAvailable("lookingFor",selected)
    }

  },[selected])

  const Items: Item[] = [
  {
    id: 1,
    title: t("Heretodate"),
    description: t("IwanttogoondatesandhaveagoodtimeNolabels"),
    icon: <FireIcon />,
    color: "success" // Valid color
  },
  {
    id: 2,
    title: t("Opentochat"),
    description: t("ImheretochatandseewhereitgoesNopressure"),
    icon: <ChatIcon />,
    color: "warning" // Valid color
  },
  {
    id: 3,
    title: t("Readyforarelationship"),
    description: t("ImlookingforsomethingthatlastsNogames"),
    icon: <HeartIcon fill="#FFF" />,
    color: "danger" // Valid color
  },
];
  return (
    <div className="flex justify-between flex-col px-6 pb-4">
      <form className="flex w-full flex-col gap-4">
        <RadioGroup classNames={{"label":"font-medium","description":"font-medium"}}  value={selected} onValueChange={setSelected} description={t("Selectedplancanbechangedatanytime")}>
          {Items.map((item) => (
            <CustomRadio key={item.id} value={item.id.toString()}>
              <div className="flex px-0 items-center">
                <Avatar icon={item.icon} color={item.color} /> 
                <p className="mx-2">{item.title}</p>
              </div>
            </CustomRadio>
          ))}
        </RadioGroup>
      </form>
    </div>
  );
};

export default WhyIamHereAuth;
