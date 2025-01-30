
import "swiper/css";
import "swiper/css/effect-creative";

import { Avatar, Button, cn, Image, Popover, PopoverContent, PopoverTrigger, Spinner } from "@nextui-org/react";
import { Listbox, ListboxItem, ListboxSection, Chip } from "@nextui-org/react";
import {
  HashtagIcon,
  AboutMeSolid,
  LikeIcon,
  HeightIcon,
  LanguageIcon,
  SexualityIcon,
  DrinkStatusIcon,
  KidStatusIcon,
  PetStatusIcon,
  SmokingStatusIcon,
  PerimumIcon,
  VerifyIconFill,
  CheckIcon,
  FavoriteColor,
  ChatIcon,
  FireIcon,
  HeartIcon,
  LockIcon,
  EducationIcon,
  GiftIcon,
  FlashIcon
} from "@/Icons/index";

import TopBarPages from "@/components/tobBar/index";
import { Page } from '@/components/Page.tsx';
import { useLaunchParams } from "@telegram-apps/sdk-react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { BASEURL, getDrinkStatus, gethobbies, getKidStatus, getlanguages, getPetStatus, getRealationStatus, getSexualityStatus, getSmokingStatus } from "@/constant";
import { useEffect, useMemo, useState } from "react";
import { fetchUserDataId, updateUserData, updateUserProfileViews } from "@/features/userSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';
import { useSearchParams } from "react-router-dom";
import { fetchMatches } from "@/features/matchSlice";
import { fetchLikesAnotherUser, likeUser } from "@/features/likeSlice";
import MatchModal from "@/components/explore/matchModal";
import { motion } from "framer-motion";
import { incrementLikes, resetLikes, setLastReset } from "@/features/NearByLikeLimitation";
import { PopOverPerimum } from "@/components/perimum/popOver";
import { SparklesHeartText } from "@/components/animate/hearSparkles";
import { SendGiftCard } from "@/components/gift";
import { FlashMessageCard } from "@/components/explore/flashMessage";

export default function ProfilePage() {
  const maxLikes = 5;
  const { t } = useTranslation();  // Initialize translation hook
  const lp = useLaunchParams();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();

  const { data: user, updateUserData:updateUserDataLoading , userPageData : UserData , userPageLoading : LoadingUser } = useSelector((state: RootState) => state.user);
  const { fetchLikeAntoherUser, requestLoading } = useSelector((state: RootState) => state.like);

  const { data : matchs } = useSelector((state: RootState) => state.match);

  const { likesCount, lastReset } = useSelector((state: RootState) => state.NearByLimitation);

  const userId = searchParams.get("userId")

  const [slideCountrt, setSlideCounter] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [likedUser, setLikedUser ] = useState(false);
  
  const RealationStatus = getRealationStatus(t)
  const languages = getlanguages(t)
  const SexualityStatus = getSexualityStatus(t)
  const hobbies = gethobbies(t)
  const PetStatus = getPetStatus(t)
  const DrinkStatus = getDrinkStatus(t)
  const SmokingStatus = getSmokingStatus(t)
  const KidStatus = getKidStatus(t)

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  useEffect(()=>{

    if (UserData && LoadingUser != true && UserData.id.toString() == userId && Array.isArray(UserData.profileViewsIds)) {
      const userId = user.id;
      const arrayOfIds = UserData.profileViewsIds;
      // Check if the user's ID is not already in the profileViews array
      if (arrayOfIds.includes(userId)) {
        return
      }
        // Update the profileViews array with the new user ID
        dispatch(updateUserProfileViews({
          userId: UserData.id.toString(),
          updatedData: {
            profileViews: [...arrayOfIds, userId]  // Append the user ID to the array
          }
        }));
    }

    
  },[UserData, LoadingUser])

  const liked = useMemo(() => {
    if (fetchLikeAntoherUser) {
      return !!fetchLikeAntoherUser.some((like) => like.id === user.id);
    }
    return false;
  }, [fetchLikeAntoherUser, user.id]);

  const match = useMemo(() => {
    if (matchs && UserData) {
      return !!matchs.some((match) => match.likedUser.id === UserData.id || match.user.id === UserData.id);
    }
    return false;
  }, [matchs, UserData]);


  useEffect(() => {
    const today = new Date().setHours(0, 0, 0, 0); // Get today's date at midnight
    if (lastReset < today) {
      // It's a new day, reset the like count
      dispatch(resetLikes());
      dispatch(setLastReset(today));
    }
  }, [dispatch, lastReset]);

  useEffect(()=> {
    if(userId){
      dispatch(fetchLikesAnotherUser(userId))
      dispatch(fetchUserDataId(userId))
    }
  } ,[userId])

  const getPaddingForPlatform = () => {
    if (['ios'].includes(lp.platform)) {
      // iOS/macOS specific padding (e.g., accounting for notches)
      return '50px'  // Adjust as needed for iOS notch
    } else {
      // Android/base padding
      return '25px' // Default padding
    }
  };


   const HandleAddToFavorite = async (value) => {
    
      const arrayOfIds = user.favoriteUsers.map(v=> v.id)
      await dispatch(updateUserData({
        userId: user.id.toString(),
        updatedData: {
          favoriteUsers: Array.isArray(arrayOfIds) ? [...arrayOfIds, value] : [value]  // Ensure favoriteUsers is an array
        }
      }));

    };
  
    const HandleRemoveFromFavorite = async (value) => {
      const arrayOfIds = user.favoriteUsers.map(v=> v.id)

      await dispatch(updateUserData({
        userId: user.id.toString(),
        updatedData: {
          favoriteUsers: Array.isArray(arrayOfIds)
            ? arrayOfIds.filter(favorite => favorite != value)  // Remove the user with the matching id
            : []  // If favoriteUsers is not an array, set it to an empty array
        }
      }));
    };


  const handleLikeUser = async () => {
    
    if (likesCount >= maxLikes && searchParams.get('page') != "likes")  {
      return;
    }  

    try {
      // Dispatch the action and unwrap the result
      const resultAction = await dispatch(likeUser({ userId: user.id , likedUserId: parseInt(userId) }));
      dispatch(incrementLikes())
      setLikedUser(true)

      // @ts-ignore
      if (resultAction.payload.isMatch === true) {
        openModal()
        dispatch(fetchMatches(user.id.toString()));
        
      }
      
    } catch (error) {
      console.error('Failed to like user:', error);
    }
  };


    const ProfileCard = ({ color, icon, label, text }) => {
      return <motion.div
        className="flex gap-3 mt-1 mb-1"
        initial={{ opacity: 1 }}
        style={{ marginLeft: "4px" }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          ease: "linear",
          duration: 0.25,
        }}
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
  };
  
    const Items = [
      {
        id: "1",
        title: t("Heretodate"),
        description: t("IwanttogoondatesandhaveagoodtimeNolabels"),
        icon: <FireIcon />,
        color: "success" // Valid color
      },
      {
        id: "2",
        title: t("Opentochat"),
        description: t("ImheretochatandseewhereitgoesNopressure"),
        icon: <ChatIcon />,
        color: "warning" // Valid color
      },
      {
        id: "3",
        title: t("Readyforarelationship"),
        description: t("ImlookingforsomethingthatlastsNogames"),
        icon: <HeartIcon fill="#FFF" />,
        color: "danger" // Valid color
      },
    ];
  
    // Profile details to display
    const profileItems = [
      {
        key: 1,
        color: "danger",
        gradient: "bg-gradient-to-br from-[#C20E4D] to-[#F54180]",
        icon: <EducationIcon className="size-6" />,
        label: t("Education"),
        text: UserData?.profileData.education.replace("_"," "),
      },
      {
        key: 2,
        color: "primary",
        gradient: "bg-gradient-to-br from-[#338EF7] to-[#004493]",
        icon: <AboutMeSolid className="size-6" />,
        label: `${t("Bio")}:`,
        text: UserData?.profileData.bio,
      },
      {
        key: 3,
        color: "success",
        gradient: "bg-gradient-to-br from-[#0E793C] to-[#17C964]",
        icon: Items.find(item => item.id == UserData?.profileData.lookingFor)?.icon,
        label: t("lookingFor"),
        text: Items.find(item => item.id == UserData?.profileData.lookingFor)?.title,
      }
    ].filter((value) => value.text);


    const moreAboutMeData = useMemo(()=>{
      if(UserData){
        return [
          {
            key: "relationStatus",
            label: t("RelationStatus"),
            icon: <LikeIcon className="size-5" />,
            value: RealationStatus.find(RealationStatus => RealationStatus.key === UserData.moreAboutMe.relationStatus).label ,
            color:"primary"
          },
          {
            key: "height",
            label: t("Height"),
            icon: <HeightIcon className="size-5" />,
            value: UserData.moreAboutMe.height,
            color:"secondary"
          },
          {
            key: "sexuality",
            label: t("SexualityStatus"),
            icon: <SexualityIcon className="size-5" />,
            value: SexualityStatus.find(SexualityStatus => SexualityStatus.key === UserData.moreAboutMe.sexuality).label,
            color:"success"
          },
          {
            key: "Language",
            label: t("Language"),
            icon: <LanguageIcon className="size-5" />,
            value:`${user.moreAboutMe.languages.map((value)=> languages.find(languages => languages.key === value).label).join(", ")}`,
            color:"primary"
          },
          {
            key: "kids",
            label: t("KidsStatus"),
            icon: <KidStatusIcon className="size-5" />,
            value: KidStatus.find(KidStatus => KidStatus.key === UserData.moreAboutMe.kids).label,
            color:"warning"
          },
          
          {
            key: "smoking",
            label: t("SmokingStatus"),
            icon: <SmokingStatusIcon className="size-5" />,
            value: SmokingStatus.find(SmokingStatus => SmokingStatus.key === UserData.moreAboutMe.smoking).label,
            color:"secondary"
          },
          {
            key: "drink",
            label: t("DrinkStatus"),
            icon: <DrinkStatusIcon className="size-5" />,
            value: DrinkStatus.find(DrinkStatus => DrinkStatus.key === UserData.moreAboutMe.drink).label,
            color:"danger"
          },
          {
            key: "pets",
            label: t("PetStatus"),
            icon: <PetStatusIcon className="size-5" />,
            value: PetStatus.find(PetStatus => PetStatus.key === UserData.moreAboutMe.pets).label,
            color:"warning"
          },
        ];
      }

  

  },[UserData, LoadingUser])


  return (
    <Page>
        <div
          className="container mx-auto max-w-7xl flex-grow"
          style={{
            maxHeight: "100%",
            height:"100%",
            marginBottom:"5rem",
            
          }}
      >
        <TopBarPages />
        {!LoadingUser ? 
              <section
                className="flex flex-col items-center justify-center"
                style={{paddingTop:`calc(4rem + ${getPaddingForPlatform()})`, paddingLeft:"18px",paddingRight:"18px"}}  
              >
              
                  <div className="flex w-full justify-between items-center">
                      <div className="flex w-full relative flex-col">

                      <div style={{position:"absolute", top:10,right:10,zIndex:10}}>
                                      {user.favoriteUsers.map(v=> v.id).includes(UserData.id) ? 
                                        <Button isLoading={updateUserDataLoading} size="md" onPress={()=> HandleRemoveFromFavorite(UserData.id)} radius="full" isIconOnly color="warning" variant="shadow">
                                          <FavoriteColor className="size-5" stroke={"#FFF"} fill={"#FFF"}/>
                                        </Button>
                                      : 
                                        <Button isLoading={updateUserDataLoading} size="md" onPress={() => HandleAddToFavorite(UserData.id)} radius="full" isIconOnly color="warning" variant="shadow">
                                          <FavoriteColor className="size-5" stroke={"#c98927"} fill={"#c98927"}/> 
                                        </Button>
                                      }
                                    </div>

                        <div style={{position:"absolute", top:10,left:10,zIndex:10}}>
                        <Popover backdrop="opaque" showArrow placement="bottom-start">
                                        <PopoverTrigger>

                                        <Button isDisabled={likesCount >= maxLikes} radius="full" size="md" isIconOnly color="success" variant="shadow">
                                          <GiftIcon className="size-5" fill="#FFFFFF" />
                                        </Button>

                                        </PopoverTrigger>
                                        <PopoverContent className="p-1 backdrop-blur bg-background/90 backdrop-saturate-150">
                                          <SendGiftCard userIds={user} user={UserData}/>
                                        </PopoverContent>
                                      </Popover>
                        </div>
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
                            className="mySwiper rounded-large"
                            onSlideChange={() => setSlideCounter(slideCountrt + 1)}
                            >
                            {[...UserData.photos].slice().sort((ph1, ph2) => ph1.order - ph2.order).map((_photo, index) => (
                                <SwiperSlide key={index}>
                                    <Image 
                                        alt="Profile hero Image"
                                        className="w-full h-full"
                                        classNames={{
                                            wrapper: "w-full maxcontentimportant",
                                        }}
                                        
                                        loading="lazy"
                                        src={`${BASEURL}${_photo.large}`} // dynamic image URL
                                        style={{
                                            objectFit: "cover",
                                            height:"60vh",
                                        }}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div
                          style={{position:"absolute", bottom:0, zIndex:10, width:"100%", overflow:"hidden",borderBottomRightRadius:"12px",borderBottomLeftRadius:"12px"}}
                          className="items-start flex-col py-3 backdrop-blur bg-background/60 backdrop-saturate-150"
                          >
                            <div className="flex flex-grow w-full">
                              <div className="flex flex-col w-full">
                                <div className="flex items-center justify-between w-full ">
                                  <div className="flex flex-col px-2">
                                    <div className="flex items-center"> 
                                      <p className="text-foreground capitalize font-bold  text-xl">
                                        {UserData.firstName}, {UserData.age}
                                      </p>
                                      {UserData.verifiedAccount && <VerifyIconFill fill="#21b6a8" className="ml-2 size-6"/>}
                                      {UserData.premium && <PerimumIcon />}
                                    </div>
                                    <div>
                                      <p className="text-tiny">{`${UserData.country}, ${UserData.city}`}</p>
                                    </div>
                                  </div>
                                  <div className="flex gap-2 px-2 items-center">
      
                                  {likesCount >= maxLikes ? 
                                      <PopOverPerimum>
                                          <Button radius="full" isIconOnly size="lg" color="secondary" variant="shadow">
                                            <LockIcon className="size-6"/> 
                                          </Button>
                                      </PopOverPerimum>
                                    
                                    
                                    :
                                      <SparklesHeartText
                                        text={
                                          <Button className="z-50" isDisabled={likedUser || liked || match} isLoading={requestLoading} onPress={handleLikeUser} radius="full" isIconOnly size="lg" color="secondary" variant="shadow">
                                            {likedUser || liked || match ? <CheckIcon className="size-6" strokeWidth={2}/> : <LikeIcon className="size-6"/> }
                                          </Button>
                                        }
                                        colors={{ first: "#ff4b61", second: "#A8B2BD" }}
                                        sparklesCount={10} // Initial number of hearts
                                      />
                                    }

                                     

                                      <div
                                        style={{ borderRadius: "50%", zIndex: 50 }}
                                      >   

                                        <Popover backdrop="opaque" showArrow placement="bottom-end">
                                          <PopoverTrigger>

                                          <Button isDisabled={likesCount >= maxLikes} radius="full" size="lg" isIconOnly color="warning" variant="shadow">
                                            <FlashIcon className="size-6" fill="#FFFFFF" />
                                          </Button>

                                          </PopoverTrigger>
                                          <PopoverContent className="p-1 backdrop-blur bg-background/90 backdrop-saturate-150">
                                            <FlashMessageCard userIds={user} user={UserData}/>
                                          </PopoverContent>
                                        </Popover>
                                      </div>
                                  
      
                                    
                                  </div>
                                </div>
                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
            
      
                  <div className=" w-full mb-4">
                    <div style={{paddingTop:"20px", marginTop:"-20px"}} className="mt-2 w-full bg-neutral/10 text-default-700 border-small px-1 rounded-large border-default-200 dark:border-default-100">
                      <Listbox 
                        aria-label="Listbox menu with sections" 
                        variant="solid"
                      >
                        <ListboxSection                   
                          classNames={{"heading":"font-bold"}} 
                          className="relative" 
                          title={t("profile")}>
                         
                         {profileItems.map((item,index) => (
                            <ListboxItem
                              key={index+5}
                              className="px-0 py-0"
                              >
                              <ProfileCard
                                key={item.key}
                                color={item.color}
                                icon={item.icon}
                                label={item.label}
                                text={item.text}
                              />
                            </ListboxItem>
                          ))}
      
                        </ListboxSection>

                      </Listbox>
                    </div>

                    <div className="mt-2 w-full  bg-neutral/10 text-default-700 border-small px-1 rounded-large border-default-200 dark:border-default-100">

                      <Listbox 
                        aria-label="Listbox menu with sections" 
                        variant="solid"
                      >

                        <ListboxSection 
                          classNames={{"heading":"font-bold"}} 
                          className="relative" 
                          title={t("more_about_me")}   
                        >
      
                            {moreAboutMeData.map((item, index)=>{
                              if(item.value === " " || item.value === "" || item.value ===null)
                              {
                                return null
                              }
      
                              return <ListboxItem
                                  key={index+5}
                                  description={item.value}
                                  classNames={{"description":"text-default-500"}}
                                  className="px-0"
                                  startContent={<IconWrapper className={`p-1.5 text-${item.color}/80 bg-${item.color}/10`}>{item.icon}</IconWrapper>}
                                  >
                                    {item.label}
                                  
                                </ListboxItem>
                            })}
                            
                        </ListboxSection>
                      </Listbox>
                    </div>

                    <div className="mt-2 w-full  bg-neutral/10 text-default-700 border-small px-1 rounded-large border-default-200 dark:border-default-100">

                      <Listbox 
                        aria-label="Listbox menu with sections" 
                        variant="solid"
                      >
                        <ListboxSection 
                            classNames={{"heading":"font-bold"}} 
                            className="relative" 
                            title={t("interested")}
                          >
                          <ListboxItem
                            key={111}
                            className="px-0"
      
                          >
                            
                          <div className="flex flex-wrap">
                            {UserData.interests.map((value, index) => {
                                return (
                                  <Chip
                                    key={index}
                                    className="m-1 bg-neutral/70"
                                    color="success"
                                    avatar={<HashtagIcon className="size-4"/>}
                                    variant="solid"
                                  >
                                    {hobbies.find(hobbie => hobbie.id == value).name}
                                  </Chip>
                                );
                              })}
                                
                          </div>
      
                            
                          </ListboxItem>
                        </ListboxSection>

                      </Listbox>
                    </div>
                  </div>
              </section>

              :

              <div 
                className="flex flex-col items-center justify-center"
                style={{paddingTop:`calc(4rem + ${getPaddingForPlatform()})`, height:`calc(100vh)`}}  
              >
                <Spinner size="lg" />
              </div>
        }

      </div>

      <MatchModal
        isOpen={isModalOpen}
        modalData={UserData}
        onClose={closeModal}
        thisUserId={user.id}
      />
 </Page>
  );
}


export const IconWrapper = ({children, className}) => (
  <div style={{borderRadius:"50%"}} className={cn(className, "flex items-center rounded-small justify-center")}>
    {children}
  </div>
);



