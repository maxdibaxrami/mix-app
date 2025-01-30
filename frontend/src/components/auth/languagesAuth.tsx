import { getlanguages } from "@/constant";
import {
    CheckboxGroup,
    cn,
    Checkbox,
  } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
  

  export const CustomCheckBox = (props) => {
    const {children, ...otherProps} = props;
  
    return (
      <Checkbox
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
      </Checkbox>
    );
  };
  
const LanguageAuth = ({setSlideAvailable, setSlideUnAvailable, user}) => {
  const [selected, setSelected] = useState(user.moreAboutMe.languages);
  const { t } = useTranslation();

  useEffect(()=>{
    if(selected.length !== 0){
      setSlideAvailable("languages", selected)
    }else{
      setSlideUnAvailable("languages", selected)
    }

  },[selected])
  
  const languages = getlanguages(t)
    return (
      <div className="flex  justify-between flex-col px-6  pb-4">
        <form className="flex w-full flex-col gap-4">
            <CheckboxGroup value={selected} onChange={setSelected} description={t("Selectedplancanbechangedatanytime")}>
                {languages.map((value)=> {
                    return <CustomCheckBox value={value.key}>
                    {value.label}
                </CustomCheckBox>
                })}
            
            </CheckboxGroup>
        </form>
      </div>
    );
  };
  

  
  export default LanguageAuth;
  

  
  
  