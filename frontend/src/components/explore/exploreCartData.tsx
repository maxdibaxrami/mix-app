import { Avatar } from "@nextui-org/react";
import {  motion } from "framer-motion";
import {  useEffect, useMemo, useState } from "react";
import PropTypes from 'prop-types';
import {
  AboutMeSolid,
  HashtagIcon,
  DrinkStatusIcon,
  HeightIcon,
  KidStatusIcon,
  LanguageIcon,
  LikeIcon,
  PetStatusIcon,
  SexualityIcon,
  SmokingStatusIcon,
  EducationIcon
} from "@/Icons";
import { Listbox, ListboxSection, ListboxItem, Chip } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { getStaticData } from "@/constant";
import IconWrapper  from "@/Icons/iconWapper";
import React from "react";

// Static Data moved outside component for better memoization


const ExploreCartData = ({ profile, openFooter }) => {
  const { t } = useTranslation();
  const [slideCount, setSlideCount] = useState(0);

  // Memoize static data to avoid recalculating on every render
  const staticData = useMemo(() => getStaticData(t), [t]);

  const profileItems = useMemo(() => [
    {
      key: 1,
      color: "danger",
      icon: <EducationIcon className="size-6" />,
      label: t("Education"),
      text: profile.profileData.education.replace("_"," "),
    },
    {
      key: 2,
      color: "primary",
      icon: <AboutMeSolid className="size-6" />,
      label: `${t("Bio")}:`,
      text: profile.profileData.bio,
    },
    {
      key: 3,
      color: "success",
      // Now you can render the icon component here as JSX
      icon: staticData.Items.find(item => item.id === profile.profileData.lookingFor)?.icon && 
            React.createElement(staticData.Items.find(item => item.id === profile.profileData.lookingFor)?.icon, { className: "size-6" }),
      label: t("lookingFor"),
      text: staticData.Items.find(item => item.id === profile.profileData.lookingFor)?.title,
    }
  ].filter((value) => value.text), [profile, staticData.Items, t]);

  const currentSlide = useMemo(() => slideCount % profileItems.length, [slideCount, profileItems]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideCount((prev) => prev + 1); // Update slide count every 3 seconds
    }, 3000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);
  
  const ProfileCard = useMemo(() => ({ color, icon, label, text }) => {
    return (
      <motion.div
        className="flex gap-3 mt-1"
        initial={openFooter ? { opacity: 1 } : { opacity: 0 }}
        style={{ marginLeft: "4px" }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex items-center justify-center">

          <Avatar
            color={color}
            radius="full"
            icon={icon}
            size="md"
            classNames={{
              icon: "text-white/90 size-6",
            }}
          />
          
        </div>
        <div className="flex flex-col">
          <p className="text-small font-bold">{label}</p>
          <p className="text-xs text-default-500">{text}</p>
        </div>
      </motion.div>
    );
  }, [openFooter]);

  
  return (
    <div>
        {openFooter ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
          >
            {profileItems.map(item => (
              <ProfileCard
                key={item.key}
                color={item.color}
                icon={item.icon}
                label={item.label}
                text={item.text}
              />
            ))}
            {/* More About Me Section */}
            <motion.div
              className="w-full mb-4 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Listbox className="py-2" style={{ borderRadius: "8px" }} aria-label={t("moreAboutMe")}>
                <ListboxSection title={t("moreAboutMe")}>
                  {/* Looping through staticData for optimized rendering */}
                  {[
                    { icon: <LikeIcon/> , color: "primary", label: t("relationStatus"), description: staticData.RealationStatus.find(status => status.key === profile.moreAboutMe.relationStatus)?.label },
                    { icon: <HeightIcon />, color: "secondary", label: t("height"), description: `${profile.moreAboutMe.height} cm` },
                    { icon: <LanguageIcon />, color: "success", label: t("language"), description: profile.moreAboutMe.languages.map(lang => staticData.languages.find(l => l.key === lang).label).join(", ") },
                    { icon: <SexualityIcon />, color: "warning", label: t("sexuality"), description: staticData.SexualityStatus.find(sex => sex.key === profile.moreAboutMe.sexuality)?.label },
                    { icon: <KidStatusIcon />, color: "danger", label: t("kids"), description: staticData.KidStatus.find(kid => kid.key === profile.moreAboutMe.kids)?.label },
                    { icon: <SmokingStatusIcon />, color: "primary", label: t("SmokingStatus"), description: staticData.SmokingStatus.find(smoke => smoke.key === profile.moreAboutMe.smoking)?.label },
                    { icon: <DrinkStatusIcon />, color: "secondary", label: t("DrinkStatus"), description: staticData.DrinkStatus.find(drink => drink.key === profile.moreAboutMe.drink)?.label },
                    { icon: <PetStatusIcon />, color: "success", label: t("PetStatus"), description: staticData.PetStatus.find(pet => pet.key === profile.moreAboutMe.pets)?.label },
                  ].map((item, idx) => (
                    <ListboxItem isReadOnly className="px-0" key={idx} startContent={<IconWrapper className={`size-5 text-${item.color}`}>{item.icon}</IconWrapper>} description={item.description}>
                      {item.label}:
                    </ListboxItem>
                  ))}

                </ListboxSection>
                <ListboxSection title={t("interests")}>
                  {Array.isArray(profile.interests) && profile.interests.length > 0 && (
                    <ListboxItem isReadOnly className="px-0" key={"asddsa123"}>
                      <div className="flex flex-wrap">
                        {profile.interests.map((interest, index) => (
                          <Chip key={index} className="m-1 bg-neutral/40" startContent={<HashtagIcon className="size-4" />} variant="solid">
                            {staticData.hobbies.find(hobbie => hobbie.id == parseInt(interest))?.name}
                          </Chip>
                        ))}
                      </div>
                    </ListboxItem>
                  )}
                </ListboxSection>
              </Listbox>
            </motion.div>
          </motion.div>
        ) : (
          <ProfileCard {...profileItems[currentSlide]} />
        )}
    </div>
  );
};

// Prop Types
ExploreCartData.propTypes = {
  slideCount: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired,
  openFooter: PropTypes.bool.isRequired,
};



export default ExploreCartData;
