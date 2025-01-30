import { Image, User, Button, cn} from "@nextui-org/react";
import { Pagination, Autoplay } from 'swiper/modules';
import { shareURL } from "@telegram-apps/sdk-react";

import {
  VerifyIconFill,
  PerimumIcon,
  SettingIcon,
  PenIcon,
  EnergyIcon,
  FirendsIcon,
  FlashIcon,
} from "@/Icons/index";

import DataList from "./dataList";
import { Link } from "react-router-dom";
import { Swiper ,SwiperSlide } from "swiper/react";
import { useState } from "react";
import { BASEURL } from "@/constant";

import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useTranslation } from "react-i18next";

const ProfilePage = () => {
  
  const { t } = useTranslation();
  const [slideCountrt, setSlideCounter] = useState<number>(1);
  const { data: user, verifiedAccountLoading } = useSelector((state: RootState) => state.user);
  const { data: referral } = useSelector((state: RootState) => state.referral);


    const AddFirendsDialog = () => {
      if (shareURL && referral) {
        // Only share when referral is available
        shareURL(referral, t("share_link"));
      } else {
        console.error('shareURL is not available or referral data is missing');
      }
    };
  

  return (
    <div
      className="w-full h-full pb-16 text-default-700"
      style={{
        maxHeight: "100%",
        height:"100%",
        marginTop:"4rem",
        marginBottom:"5rem",
        width:"calc( 100vw - 36px )"
      }}
    >
      <div className="flex mb-1 w-full  justify-between items-center">
        <div className="flex w-full flex-col">
          <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{ clickable: false }}
              navigation={false}
              modules={[Pagination, Autoplay]}
              autoplay={{
                delay: 4000, // 4 seconds delay
                disableOnInteraction: false, // Continue autoplay after user interaction
              }}
              className="mySwiper"
              onSlideChange={() => setSlideCounter(slideCountrt + 1)}
            >
              {[...user.photos].slice().sort((ph1, ph2) => ph1.order - ph2.order).map((_photo, index) => (
                <SwiperSlide key={index}>
                    <Image 
                        alt="Profile hero Image"
                        className="w-full h-full"
                        classNames={{
                            wrapper: "w-full maxcontentimportant",
                        }}
                        
                        loading="lazy"
                        src={`${BASEURL}${_photo.largeUrl}`} // dynamic image URL
                        style={{
                            objectFit: "cover",
                            height:"55vh"
                        }}
                    />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      <div className="flex items-center justify-between mt-1">
        <div className="flex justify-between w-full">
          <div className="flex">
            <User
              avatarProps={{
                className: "hidden",
              }}
              className="mt-2"
              classNames={{
                name:"text-foreground font-bold text-xl",
                description:"text-foreground text-xs"
              }}
              description={`${user.country} , ${user.city}`}
              name={
              <div className="flex items-center">
                {user.firstName}
                {user.verifiedAccount &&< VerifyIconFill fill="#21b6a8" className="ml-2 size-6" />}
                {user.premium && <PerimumIcon />}
              </div>
              }
            />
          </div>

          <div className="flex items-center">

            <Button radius="full" startContent={<PenIcon className="size-5"/>} variant="shadow" as={Link} to={`/profile-edit`} className="mx-2 font-bold" color="primary" size="md">
                {t('edit_profile')}
            </Button> 

            <Button radius="full" variant="shadow" as={Link} to="/setting" isIconOnly color="secondary" size="md">
                <SettingIcon className="size-5"/>
            </Button> 

          </div>
        </div>
      </div>
      <div className="grid gap-3 py-3 grid-cols-3 sm:grid-cols-3">
              <div className="aspect-square">
                <Button
                  className="bg-gradient-to-tr w-full h-full from-primary/50 to-secondary/50 text-white "
                  radius="lg"
                  variant="shadow"
                  color="secondary"
                  as={Link}
                  to="/energy"
                >
                  <div className="flex flex-col my-4 justify-center items-center">
                    <IconWrapper className="bg-background/80 text-secondary/80">
                      <EnergyIcon className="size-8"/>
                    </IconWrapper>
                    <p className="font-bold capitalize">{t("add_energy")}</p>
                  </div>
                </Button>
              </div>
              <div className="aspect-square">
                <Button
                  className="bg-gradient-to-tr w-full h-full aspect-square from-primary/50 to-secondary/50 text-white"
                  radius="lg"
                  variant="shadow"
                  color="warning"
                >
                  <div className="flex flex-col my-4 justify-center items-center">
                    <IconWrapper className="bg-background/80 text-secondary/80">
                      <div className="flex flex-col aspect-square items-center justify-center">
                        <FlashIcon className="size-8"/>
                        <small></small>
                        </div>
                    </IconWrapper>
                    <p className="font-bold capitalize">{t("energy")} : {user.rewardPoints}</p>
                  </div>
                </Button>
              </div>
              <div>
                <Button
                  className="bg-gradient-to-tr w-full h-full aspect-square from-primary/50 to-secondary/50 text-white"
                  radius="lg"
                  variant="shadow"
                  color="primary"
                  onPress={AddFirendsDialog}
                >
                  <div className="flex flex-col my-4 justify-center items-center">
                    <IconWrapper className="bg-background/80 text-secondary/80">
                      <FirendsIcon fill="currentColor" className="size-8"/>
                    </IconWrapper>
                    <p className="font-bold capitalize">{t("invite_your_friend")}</p>
                  </div>
                </Button>
              </div>
      </div>
      <DataList user={user} verifiedAccountLoading={verifiedAccountLoading}/>
    </div>
  );
};


export const IconWrapper = ({children, className}) => (
  <div style={{borderRadius:"50%"}} className={cn(className, "flex items-center mb-1 rounded-small justify-center p-2")}>
    {children}
  </div>
);

export default ProfilePage;
