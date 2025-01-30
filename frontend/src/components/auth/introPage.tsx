import { Chip, Avatar, Checkbox } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { cloudStorage } from '@telegram-apps/sdk';
import FontHandller from "../FontHandller";


const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1, 
    scale: 1,
    transition: {
      delayChildren: 0.3, 
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const IntroPage = ({ setSlideUnAvailable, setSlideAvailable, user }) => {
  const { t, i18n } = useTranslation();

  const [isSelected, setIsSelected] = useState(i18n.language); // Initialize empty, we'll set this in useEffect

  // Function to change language in i18n
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Function to retrieve language from cloud storage or local storage
  const GetStoredLanguage = async () => {
    if (cloudStorage.isSupported()) {
      const storedLang = await cloudStorage.getItem('lang');
      return storedLang || ''; // Return empty string if no language is stored
    } else {
      // Fallback to localStorage
      return localStorage.getItem('lang') || ''; // Return empty string if nothing in localStorage
    }
  };

  // Function to store selected language in cloud storage or localStorage
  const StoreLanguage = async (lang) => {
    if (cloudStorage.isSupported()) {
      await cloudStorage.setItem('lang', lang);
    } else {
      // Fallback to localStorage
      localStorage.setItem('lang', lang);
    }
  };

  // Effect to load stored language on component mount
  useEffect(() => {
    const loadLanguage = async () => {
      const storedLang = await GetStoredLanguage();
      if (storedLang) {
        setIsSelected(storedLang); // Set the stored language as default
        changeLanguage(storedLang); // Apply the language in i18n
      } else if (user.language) {
        setIsSelected(user.language); // Fallback to user's language if no stored language
        changeLanguage(user.language);
      }
    };

    loadLanguage();

    document.documentElement.lang = isSelected;
    document.documentElement.dir = ['ar', 'fa'].includes(isSelected) ? 'rtl' : 'ltr';
    FontHandller();
    
  }, [user.language]); // Run once when the component mounts

  // Effect to handle changes in the selected language
  useEffect(() => {
    if (isSelected) {

      changeLanguage(isSelected); // Change the language in i18n
      setSlideAvailable("language", isSelected); // Notify that language is selected
      StoreLanguage(isSelected); // Store selected language in cloud storage or localStorage
 
    } else {
      setSlideUnAvailable("language", isSelected); // Handle case when no language is selected
    }

    document.documentElement.lang = isSelected;
    document.documentElement.dir = ['ar', 'fa'].includes(isSelected) ? 'rtl' : 'ltr';
    FontHandller();
  }, [isSelected]);

  return (
    <div className="flex items-center justify-between h-full px-6 flex-col pt-8 pb-4">
      <div className="pt-16 flex flex-col">
        <p className="mb-2 text-center font-bold text-medium">
          {t('Selectlanguageforcontinue')}
        </p>

        <motion.ul
          animate="visible"
          className="container flex gap-2 items-center justify-center flex-wrap"
          initial="hidden"
          variants={container}
        >
          <motion.li className="item" variants={item}>
            <Chip
              avatar={
                <Avatar name="en" size="md" src="/assets/gb.svg" />
              }
              endContent={
                <Checkbox
                  classNames={{ wrapper: "m-0" }}
                  isSelected={isSelected === "en"}
                  radius="full"
                  size="md"
                  onClick={() => setIsSelected("en")}
                />
              }
              size="lg"
              variant="flat"
              onClick={() => setIsSelected("en")}
            >
              English
            </Chip>
          </motion.li>

          <motion.li className="item" variants={item}>
            <Chip
              avatar={
                <Avatar name="ru" size="md" src="/assets/ru.svg" />
              }
              endContent={
                <Checkbox
                  classNames={{ wrapper: "m-0" }}
                  isSelected={isSelected === "ru"}
                  radius="full"
                  size="md"
                  onClick={() => setIsSelected("ru")}
                />
              }
              size="lg"
              variant="flat"
              onClick={() => setIsSelected("ru")}
            >
              Russian
            </Chip>
          </motion.li>

          <motion.li className="item" variants={item}>
            <Chip
              avatar={
                <Avatar name="fa" size="md" src="/assets/ir.svg" />
              }
              endContent={
                <Checkbox
                  classNames={{ wrapper: "m-0" }}
                  isSelected={isSelected === "fa"}
                  radius="full"
                  size="md"
                  onClick={() => setIsSelected("fa")}
                />
              }
              size="lg"
              variant="flat"
              onClick={() => setIsSelected("fa")}
            >
              Farsi
            </Chip>
          </motion.li>

          <motion.li className="item" variants={item}>
            <Chip
              avatar={
                <Avatar name="ar" size="md" src="/assets/sa.svg" />
              }
              endContent={
                <Checkbox
                  classNames={{ wrapper: "m-0" }}
                  isSelected={isSelected === "ar"}
                  radius="full"
                  size="md"
                  onClick={() => setIsSelected("ar")}
                />
              }
              size="lg"
              variant="flat"
              onClick={() => setIsSelected("ar")}
            >
              Arabic
            </Chip>
          </motion.li>
        </motion.ul>

      </div>
    </div>
  );
};

export default IntroPage;
