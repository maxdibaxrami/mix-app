import { RadioGroup, Radio, cn, Avatar } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { cloudStorage } from '@telegram-apps/sdk';
import FontHandller from "../FontHandller";

export const CustomRadio = (props) => {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "inline-flex m-0 bg-neutral/20 items-center justify-between font-medium",
          "flex-row-reverse max-w-[100%] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary data-[selected=true]:bg-primary/10",
        ),
      }}
    >
      <div className="flex items-center">
        {children}
      </div>
    </Radio>
  );
};

export default function LanguageSection() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); 

  // Function to get the stored language from cloud storage or localStorage
  const GetStoredLanguage = async () => {
    if (cloudStorage.isSupported()) {
      const storedLang = await cloudStorage.getItem('lang');
      return storedLang || ''; // Return empty string if no language is stored
    } else {
      // Fallback to localStorage
      return localStorage.getItem('lang') || ''; // Return empty string if nothing in localStorage
    }
  };

  // Function to store the selected language in cloud storage or localStorage
  const StoreLanguage = async (lang) => {
    if (cloudStorage.isSupported()) {
      await cloudStorage.setItem('lang', lang);
    } else {
      localStorage.setItem('lang', lang);
    }
  };
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  // Use effect to load the language from storage and set it in the state on component mount
  useEffect(() => {
    const loadLanguage = async () => {
      const storedLang = await GetStoredLanguage();
      if (storedLang) {
        changeLanguage(storedLang); // Apply the language in i18n
      }  else {
        changeLanguage(localStorage.getItem("lang"));
      }
    };

    loadLanguage();
  }, []); // Empty dependency array to run only once on mount

  // Use effect to change language and store the new language whenever it changes
  useEffect(() => {
    if (selectedLanguage) {
      i18n.changeLanguage(selectedLanguage); // Change the language in i18n
      StoreLanguage(selectedLanguage);  
      document.documentElement.lang = selectedLanguage;
      document.documentElement.dir = ['ar', 'fa'].includes(selectedLanguage) ? 'rtl' : 'ltr';
      FontHandller();
    }
  }, [selectedLanguage]); // Only run when selectedLanguage changes

  return (
    <>
      <RadioGroup classNames={{"label":"font-bold"}} value={selectedLanguage} onValueChange={setSelectedLanguage} label={t('language')}>
        <CustomRadio value="en">
          <Avatar name="en" size="md" src="/assets/gb.svg" />
          <p className="text-bold mx-2">English</p>
        </CustomRadio>
        <CustomRadio value="ru">
          <Avatar name="ru" size="md" src="/assets/ru.svg" />
          <p className="text-bold mx-2">Russian</p>
        </CustomRadio>
        <CustomRadio value="fa">
          <Avatar name="fa" size="md" src="/assets/ir.svg" />
          <p className="text-bold mx-2">Farsi</p>
        </CustomRadio>
        <CustomRadio value="ar">
          <Avatar name="ar" size="md" src="/assets/sa.svg" />
          <p className="text-bold mx-2">Arabic</p>
        </CustomRadio>
      </RadioGroup>
    </>
  );
}
