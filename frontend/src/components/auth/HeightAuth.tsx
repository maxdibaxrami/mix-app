import {
    cn,
    Radio,
    Slider,
    SliderValue,
  } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
  

  export const CustomRadio = (props) => {
    const {children, ...otherProps} = props;
  
    return (
      <Radio
        {...otherProps}
        classNames={{
          base: cn(
          "inline-flex m-0 bg-neutral/20 hover:bg-content items-center justify-between",
          "flex-row-reverse max-w-full cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary data-[selected=true]:bg-primary/10"
   
          ),
        }}
      >
        {children}
      </Radio>
    );
  };
  
const HeightAuth = ({setSlideAvailable, setSlideUnAvailable, user}) => {
    const { t } = useTranslation();
    const [value, setValue] = useState<SliderValue>(user.moreAboutMe.height);

    useEffect(()=>{
      if(value !== null ){
        setSlideAvailable("height",value)
      }else{
        setSlideUnAvailable("height",value)
      }
  
    },[value])
    
    return (
      <div className="flex  justify-between flex-col px-6 pb-4">
        <form className="flex w-full flex-col gap-4">
                <Slider
                  color="primary"
                  label={t('Height')}
                  maxValue={250}
                  getValue={(a) => `${a} cm`}
                  minValue={100}
                  size="lg"
                  value={value}
                  onChange={setValue}
                />
        </form>
      </div>
    );
  };
  

  
  export default HeightAuth;
  
