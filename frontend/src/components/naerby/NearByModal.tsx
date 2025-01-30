import { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Card,
  CardFooter,
  Link,
} from "@nextui-org/react";
import { Chip, Button } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import { forwardRef, useImperativeHandle } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import { ArowUpIcon, CloseCircleIcon, HeartEyesImoji, HeartIconOutLine, HeightIcon, LanguageIcon, LocationIcon, PerimumIcon, SexualityIcon, VerifyIconFill } from "@/Icons/index";
import { Pagination, Autoplay } from 'swiper/modules';

import ParallaxText from "../animate/text-slider";
import ExploreCartData from "../explore/exploreCartData";
import SwiperImages from "../explore/swiperImage";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { likeUser } from "@/features/likeSlice";
import { AppDispatch, RootState } from "@/store";
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMatches } from "@/features/matchSlice";
import toast from "react-hot-toast";
import { getlanguages, getRealationStatus, getSexualityStatus } from "@/constant";

const variantsFrontCard = {
  animate: { scale: 1, y: 0, opacity: 1 },
  exit: (custom) => ({
    x: custom,
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.2 }
  })
};

const NearByUserModal = forwardRef((props:any, ref) => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const [openFooter, setOpenFooter] = useState(false);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [slideCountrt, setSlideCounter] = useState<number>(1);
  const dispatch: AppDispatch = useDispatch();  // Use the correct AppDispatch type from your store
  const [likesCount, setLikesCount] = useState(0);
  const { requestLoading } = useSelector((state: RootState) => state.like);  // Assuming the like slice is in state.like


  const { t } = useTranslation();  // Initialize translation hook
  
  const toggleFooter = () => setOpenFooter(!openFooter);


  useImperativeHandle(ref, () => ({
    callChildFunction: onOpen,
    callChildOnClose: onClose,

  }));

  const ToastErrorLikeLimit = (text1,text2,text3,text4) => {
    toast.custom((t) => (
      <div
        style={{zIndex:"999"}}
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md backdrop-blur bg-default/70 backdrop-saturate-150 w-full shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-center">
            <div className="flex items-center px-0.5">
            <motion.div
                animate={{
                  scale: [1, 1.2, 1.2, 1.2, 1],
                  rotate: [0, 0, 5, -5, 0],
                  borderRadius: ["50%", "50%", "50%", "50%", "50%"],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >         
                <Button size="lg" radius="full" isIconOnly aria-label="Like" color="default">
                  <PerimumIcon className="size-7"/>
                </Button>
              </motion.div>
            </div>
            <div className="ml-3 px-1 flex-1">
              <p className="text-sm font-bold text-foreground-900">
                {text1}
              </p>
              <p className="mt-1 text-sm text-foreground-500">
                {text2}
              </p>
              <p className="mt-1 text-sm text-foreground-500">
                <Link size="sm" color="warning" href="#" underline="always">
                  {text3}
                </Link>
  
              </p>
              <p>
                <Link size="sm" color="success" href="#" underline="always">
                  {text4}
                </Link>
              </p>
              <div>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    ),{duration: 4000})
  }
  const maxLikes=50
  const RealationStatus = getRealationStatus(t)
  
  const languages = getlanguages(t)

  const SexualityStatus = getSexualityStatus(t)


  const handleLikeUser = async () => {
    if (likesCount >= maxLikes && searchParams.get('page') != "likes")  {
      ToastErrorLikeLimit(<p>{t("Reachedlimit")}</p>,<p>{t("Youhavereachedyourdailylikelimitof5")}</p>,<p>{t("Tounlockallfeatures,youneedapremiumaccount.")}</p>,<p>{t("Inviteyourfriendsandgetapremiumaccount")}</p>)
      return;
    }  

    try {
      // Dispatch the action and unwrap the result
      const resultAction = await dispatch(likeUser({ userId: props.userId , likedUserId: props.profile.id }));
      
      const newCount = likesCount + 1;
      setLikesCount(newCount);
      // @ts-ignore
      localStorage.setItem('likesCountNearBy', newCount);
      // @ts-ignore
      if (resultAction.payload.isMatch === true) {
        props.openModal()
        dispatch(fetchMatches(props.userId));
        
      }

      onClose()

    } catch (error) {
      console.error('Failed to like user:', error);
    }
  };

    useEffect(() => {
      // Check if there's a stored like count and reset date
      const storedLikes = localStorage.getItem('likesCountNearBy');
      const lastReset = localStorage.getItem('lastResetNearBy');
  
      const today = new Date().setHours(0, 0, 0, 0); // Current day midnight
  // @ts-ignore
      if (lastReset < today) {
        // It's a new day, reset the counter
        // @ts-ignore
        localStorage.setItem('likesCountNearBy', 0);
        // @ts-ignore
        localStorage.setItem('lastResetNearBy', today);
        setLikesCount(0);
      } else if (storedLikes) {
        // Set the current like count from storage
        setLikesCount(parseInt(storedLikes, 10));
      }
    }, []);
    
  return (
    <>

    <Modal 
      placement={"center"} 
      size={"full"}  
      style={{position:"relative"}}
      classNames={{"wrapper":"bg-transparent p-0","base":"bg-transparent p-0","body":"p-0"}} 
      backdrop="blur" 
      isOpen={isOpen} 
      isDismissable
      onOpenChange={onOpenChange}
    >
        {props?.profile && (
            <ModalContent>
    
              <ModalBody>
                <motion.div
                  style={{
                    width: "calc(100%)",
                    maxHeight: "100%",
                    overflow: "scroll",
                    position: "absolute",
                    top: 0,
                    cursor: "grab",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "calc(5.5rem)"
                  }}
                  whileTap={{ cursor: "grabbing" }}
                  variants={ variantsFrontCard }
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={
                    props.frontCard
                      ? { type: "spring", stiffness: 300, damping: 20 }
                      : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
                  }
              >
                <div style={{ width: "calc(100% - 3rem)" }}>
                  <Card isFooterBlurred className="w-full col-span-12 sm:col-span-7">
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
                      modules={[Pagination, Autoplay]}
                      className="mySwiper"
                      onSlideChange={() => setSlideCounter(slideCountrt + 1)}
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
                    
                    <div className="absolute" style={{ bottom: "170px", zIndex: 10 }}>
                        <Chip
                          variant="solid"
                          color="secondary"
                          size="md"
                          className="mx-2 backdrop-blur bg-secondary/60 backdrop-saturate-150"                        
                          startContent={<LocationIcon fill="#FFF" className="size-4 mx-1" />}
                        >
                          {`${props.profile.country}, ${props.profile.city}`}
                        </Chip>
                    </div>
                    <div className="absolute" style={{ bottom: "135px", zIndex: 10, direction:"ltr" }}>
                      <ParallaxText baseVelocity={2}>
                        <Chip
                          variant="solid"
                          color="primary"
                          size="md"
                          className="mx-2 backdrop-blur bg-primary/60 backdrop-saturate-150"
                          startContent={<HeartIconOutLine fill="#FFF" className="size-4 mx-1" />}
                        >
                          {RealationStatus.find(RealationStatus => RealationStatus.key === props.profile.moreAboutMe.relationStatus).label}
                        </Chip>
      
                        <Chip
                          variant="solid"
                          color="primary"
                          size="md"
                          className="mx-2 backdrop-blur bg-primary/60 backdrop-saturate-150"
                          startContent={<HeightIcon fill="#FFF" className="size-4 mx-1" />}
                        >
                          {props.profile.moreAboutMe.height}
                        </Chip>
      
                        {props.profile.moreAboutMe.languages.map((value)=> languages.find(languages => languages.key === value).label).map((value,index)=>{
                            return <Chip
                            variant="solid"
                            color="primary"
                            key={index}
                            size="md"
                            startContent={<LanguageIcon className="size-4 mx-1" />}
                            className="mx-2 backdrop-blur bg-primary/60 backdrop-saturate-150"
                            >
                            {value}
        
                          </Chip>
                        })}
                      
                        
                        <Chip
                          variant="solid"
                          color="primary"
                          size="md"
                          className="mx-2 backdrop-blur bg-primary/60 backdrop-saturate-150"
                          startContent={<SexualityIcon className="size-4 mx-1" />}
                        >
                          {SexualityStatus.find(SexualityStatus => SexualityStatus.key === props.profile.moreAboutMe.sexuality).label}
                        </Chip>
                      </ParallaxText>
                    </div>
      
                    <motion.div
                      initial={{ height: "120px" }}
                      animate={{ height: openFooter ? "100%" : "120px" }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                      className="absolute bottom-0 z-10 w-full"
                    >
                      <div className="relative h-full w-full">
                        <CardFooter
                          style={openFooter? { height: "100%", maxHeight:"100%" , overflow:"scroll"}:{ height: "100%", maxHeight:"100%" , overflow:"hidden"}}
                          className="items-start flex-col py-3 backdrop-blur bg-background/60 backdrop-saturate-150"
                        >
                          <div className="flex flex-grow gap-2 w-full">
                            <div className="flex flex-col w-full">
                              <div className="flex items-center justify-between w-full mb-1">
                                <div className="flex items-center">
                                  <p className="text-foreground font-bold  text-xl">
                                    {props.profile.firstName}, {props.profile.age} 
                                  </p>
                                  <VerifyIconFill fill="#21b6a8" className="ml-2 size-6"/>
      
                                </div>
                                <Button
                                  onClick={toggleFooter}
                                  size="sm"
                                  isIconOnly
                                  color="primary"
                                  variant="solid"
                                  radius="full"
                                  aria-label="Toggle Footer"
                                  style={openFooter? {transform: "rotate(180deg)"}:{transform: "rotate(0deg)"}}

                                >
                                  <ArowUpIcon className="size-7" /> 
                                </Button>
                              </div>
      
                              <ExploreCartData openFooter={openFooter} slideCount={slideCountrt} profile={props.profile} />
                            </div>
                          </div>
                        </CardFooter>
                      </div>
                    </motion.div>
                  </Card>
                </div>
                </motion.div>
              </ModalBody>
              {!location.pathname.includes('chat-detail') && 
                            <AnimatePresence>
                            {isOpen && (<>
                                <motion.div
                                    className="card backdrop-blur bg-primary/10 backdrop-saturate-150  z-50 p-2 footerswipcard fixed"
                                    style={{ zIndex:999,right:"51%" , bottom: "20px", borderRadius:"50%" }}
                                    transition={{ type: "tween" }}
                                  >
                                    <Button className="bg-primary/90 backdrop-saturate-150 backdrop-blur" onPress={()=> onClose()} style={{width:"72px", height:"72px", zIndex:999}} size="lg" radius="full" isIconOnly color="primary" variant="shadow">
                                      <CloseCircleIcon style={{width:"2.5rem",height:"2.5rem"}} className="size-9" />
                                    </Button>
                                </motion.div>
                  
                                <motion.div
                                    className="card backdrop-blur bg-primary/10 backdrop-saturate-150  p-2 footerswipcard fixed"
                                    transition={{ type: "tween" }}
                                    style={{ bottom: "20px",left:"51%", zIndex:999, borderRadius:"50%" }}
                                  >
                                    <Button className="flex items-center justify-center" isLoading={requestLoading} radius="full" style={{width:"72px", height:"72px", zIndex:999}} size="lg" isIconOnly onPress={handleLikeUser} color="success" variant="shadow">
                                      <HeartEyesImoji className="w-full h-full"/>
                                    </Button>
                                </motion.div>
                              </>)}
                          </AnimatePresence>
              }

          </ModalContent>
    )}

      </Modal>
      
      </>  
  );
});

NearByUserModal.displayName = "NearByUserModal";

export default NearByUserModal;


