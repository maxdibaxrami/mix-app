import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button, Card, CardFooter, Chip } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperImages from './swiperImage';
import { Pagination, Autoplay } from 'swiper/modules';
import ParallaxText from '@/components/animate/text-slider';
import { HeartIconOutLine, HeightIcon, LanguageIcon, ArowUpIcon, VerifyIconFill, HashtagIcon } from '@/Icons/index';
import ExploreCartData from './exploreCartData';
import { useTranslation } from 'react-i18next';
import { gethobbies, getlanguages, getRealationStatus } from '@/constant';
import React from 'react';


const ExploreCard = (props) => {

  const [openFooter, setOpenFooter] = useState(false);
    
  const { t } = useTranslation();  // Initialize translation hook

  const toggleFooter = () => setOpenFooter(!openFooter);
 
  const RealationStatus = useMemo(() => getRealationStatus(t), [t]);
  const languages = useMemo(() => getlanguages(t), [t]);
  const hobbies = useMemo(() => gethobbies(t), [t]);

  return (
    <>
      <div
        style={{
          width: "calc(100%)",
          maxHeight: "100%",
          overflow: "scroll",
          cursor: "grab",
          display: "flex",
          justifyContent: "center",
        }}
        
      >
        <div className='py-2' style={{ width: "calc(100% - 36px)" }}>
          <Card radius="lg" isFooterBlurred className="w-full col-span-12 sm:col-span-7 bg-transparent border-0 shadow-0">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{ clickable: false }}
              navigation={false}
              autoplay={{
                delay: 3000, // 3 seconds
                disableOnInteraction: false, // Keep auto-play after user interaction
              }}
              onClick={toggleFooter}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
                  {props?.profile?.photos.length === 0 ?
                    <SwiperSlide key={0}>
                      <SwiperImages url={"https://via.placeholder.com/400x500"} />
                    </SwiperSlide>
                
                  :
                    props?.profile?.photos?.map((value, index) => (
                      <SwiperSlide key={index}>
                        <SwiperImages url={value.large} />
                      </SwiperSlide>
                    ))
                  }
                  
            </Swiper>


            <div className="absolute" style={{ bottom: "125px", zIndex: 10 }}>
              <ParallaxText baseVelocity={-1}>
                {Array.isArray(props.profile.interests) && props.profile.interests.length > 0?
                  props.profile.interests.map((value)=>{
                    return <Chip
                              variant="solid"
                              size="sm"
                              className="mx-2 backdrop-blur bg-neutral/40 backdrop-saturate-150"
                              style={{ marginRight: "10px" }}
                              startContent={<HashtagIcon className="size-4  mx-1" />}
                            >
                              {hobbies.find(hobbie => hobbie.id == parseInt(value)).name}
                          </Chip>
                        })
                        : null
                }
                
              </ParallaxText>

            </div>

            <div className="absolute" style={{ bottom: "95px", zIndex: 10 }}>
              <ParallaxText baseVelocity={1}>
                <Chip
                  variant="solid"
                  size="sm"
                  color="primary"
                  className="mx-2 backdrop-blur bg-primary/60 backdrop-saturate-150"
                  style={{ marginRight: "10px" }}
                  startContent={<HeartIconOutLine fill="#FFF" className="size-4  mx-1" />}
                >
                  {RealationStatus.find(RealationStatus => RealationStatus.key == props.profile.moreAboutMe.relationStatus).label}
                </Chip>

                <Chip
                  variant="solid"
                  color="primary"
                  size="sm"
                  style={{ marginRight: "10px" }}
                  className="mx-2 backdrop-blur bg-primary/60 backdrop-saturate-150"

                  startContent={<HeightIcon fill="#FFF" className="size-4  mx-1" />}
                >
                  {props.profile.moreAboutMe.height}
                </Chip>

                    {props.profile.moreAboutMe.languages.map((value)=> languages.find(languages => languages.key === value).label).map((value,index)=>{
                          return <Chip
                          variant="solid"
                          color="primary"
                          className="mx-2 backdrop-blur bg-primary/60 backdrop-saturate-150"
                          key={index}
                          size="sm"
                          startContent={<LanguageIcon className="size-4  mx-1" />}
                        >
                          {value}
      
                        </Chip>
                      })}

              </ParallaxText>
            </div>

            <motion.div
              initial={{ height: "93px" }}
              animate={{ height: openFooter ? "100%" : "93px" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
              className="absolute bottom-0 z-10 w-full"
            >
              <div className="relative h-full w-full">
                <CardFooter
                    onClick={toggleFooter}
                    style={openFooter? { height: "100%", maxHeight:"100%" , overflow:"scroll"}:{ height: "100%", maxHeight:"100%" , overflow:"hidden"}}
                    className="items-start border-0 flex-col py-2 backdrop-blur bg-background/70 backdrop-saturate-150"
                >
                  <div className="flex flex-grow w-full">
                    <div className="flex flex-col w-full">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <p className="text-foreground capitalize font-bold text-xl">
                            {props.profile.firstName}, {props.profile.age}
                          </p>
                          {props.profile.verifiedAccount && <VerifyIconFill fill="#21b6a8" className="ml-2 size-6"/>}
                          
                        </div>
                        <Button
                          onClick={toggleFooter}
                          size="sm"
                          isIconOnly
                          color="primary"
                          radius="full"
                          variant="solid"
                          aria-label="Toggle Footer"
                          className='transition-all'
                          style={openFooter? {transform: "rotate(180deg)"}:{transform: "rotate(0deg)"}}
                        >
                          <ArowUpIcon className="size-7" />
                        </Button>
                      </div>

                      <ExploreCartData openFooter={openFooter} profile={props.profile} />
                    </div>
                  </div>
                </CardFooter>
              </div>
            </motion.div>
          </Card>
        </div>
      </div>

    </>
  );
};

export default React.memo(ExploreCard);
