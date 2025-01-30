
import { Button, cn, Image } from "@nextui-org/react";
import { Listbox, ListboxItem, ListboxSection, Chip } from "@nextui-org/react";
import {
  HashtagIcon,
  ArrowRight,
  AboutMeSolid,
  SearchIcon,
  ProfileIcon,
  LikeIcon,
  HeightIcon,
  LanguageIcon,
  SexualityIcon,
  PlusIconRound,
  DrinkStatusIcon,
  KidStatusIcon,
  PetStatusIcon,
  SmokingStatusIcon,
  EducationIcon
} from "@/Icons/index";

import TopBarPages from "@/components/tobBar/index";
import EditProfile from "@/components/profile/editProfile";
import EditIntersting from "@/components/profile/editIntersting";
import { Page } from '@/components/Page.tsx';
import { useLaunchParams } from "@telegram-apps/sdk-react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { BASEURL, getDrinkStatus, getEducationStatus, gethobbies, getKidStatus, getlanguages, getlookingfor, getPetStatus, getRealationStatus, getSexualityStatus, getSmokingStatus } from "@/constant";
import { useRef, useState } from "react";
import EditMoreAboutMeModal from "@/components/profile/editMoreAboutMe";
import { updateUserPhoto, uploadProfileImage } from "@/features/userSlice";

export default function EditProfilePage() {
  
  const { t, i18n } = useTranslation();  // Initialize translation hook
  const lp = useLaunchParams();
  
  const [selectedItem, setSelectedItem] = useState("")
  const [selectedProfileData, setSelectedProfileData] = useState("")

  const dispatch = useDispatch<AppDispatch>();

  const fileInputRef = useRef<HTMLInputElement | null>(null); // Reference to file input
  const childRef = useRef();
  const profileDataModal = useRef()

  const lookingfor = getlookingfor(t)
  const RealationStatus = getRealationStatus(t)
  const languages = getlanguages(t)
  const SexualityStatus = getSexualityStatus(t)
  const hobbies = gethobbies(t)
  const PetStatus = getPetStatus(t)
  const DrinkStatus = getDrinkStatus(t)
  const SmokingStatus = getSmokingStatus(t)
  const KidStatus = getKidStatus(t)

  const Edocation = getEducationStatus(t)


  const handleClick = (item) => {
    setSelectedItem(item)
    if (childRef.current) {
      /* @ts-ignore */
      childRef.current.openModal(); // Call the function in the child
    }
  };

  const handleClickProfileData = (item) => {
    setSelectedProfileData(item)
    if (profileDataModal.current) {
      /* @ts-ignore */
      profileDataModal.current.openModal(); // Call the function in the child
    }
  };
  


  const { data: user, updateUserData, uploadProfileLoading } = useSelector((state: RootState) => state.user);

  const getPaddingForPlatform = () => {
    if (['ios'].includes(lp.platform)) {
      // iOS/macOS specific padding (e.g., accounting for notches)
      return '50px'  // Adjust as needed for iOS notch
    } else {
      // Android/base padding
      return '25px' // Default padding
    }
  };


  const handleFileSelect = (callback: (file: File) => void) => {
    // This will trigger the file input click
    if (fileInputRef.current) {
      fileInputRef.current.onchange = (event: any) => {
        const file = event.target.files[0];
        if (file) {
          callback(file); // Call the provided callback with the selected file
        }
      };
      fileInputRef.current.click();
    }
  };


  const handleUpdatePhoto = (photo: any) => {
    handleFileSelect((photoFile) => {
      dispatch(updateUserPhoto({ userId: photo, photoFile }));
    });
  };

  const handleUploadPhoto = (order: number) => {
    handleFileSelect((photoFile) => {
      dispatch(uploadProfileImage({ userId: user.id.toString(), imageFile: photoFile, order }));
    });
  };



  return (
    <Page>
        <div
        className="container mx-auto max-w-7xl flex-grow"
      >
        <TopBarPages />
        <section
          className="flex flex-col items-center justify-center gap-1"
          style={{paddingTop:`calc(5rem + ${getPaddingForPlatform()})`}}  
        >
        <div style={{paddingLeft:"18px", paddingRight:"18px"}} className="flex mb-4 w-full justify-between items-center">
          <input accept="image/*, .heic" type="file" ref={fileInputRef} style={{ display: 'none' }} />

          <div className="grid grid-cols-3 grid-rows-3 gap-4">
            {user.photos
              .slice()
              .sort((ph1, ph2) => ph1.order - ph2.order)
              .map((photo, index) => {
                return (
                  <div
                    key={photo.id}
                    className={imageClasses[index]}
                    onClick={() => handleUpdatePhoto(photo.id)} // Update photo when clicked
                  >
                    <Image
                      src={`${BASEURL}${photo.largeUrl}`}
                      alt={`Image ${index}`}
                      classNames={{
                        img: 'aspect-square',
                        wrapper: 'aspect-square',
                      }}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                );
              })}
            {[...Array(6 - user.photos.length)].map((_, index) => {
              return (
                <div
                  key={user.photos.length + index}
                  className={imageClasses[user.photos.length + index]}
                >
                  <Button isLoading={uploadProfileLoading} onPress={() => handleUploadPhoto(user.photos.length + index)} className="aspect-square bg-neutral/10 rounded-lg object-cover w-full h-full" isIconOnly aria-label="Like" color="default">
                    <PlusIconRound className="size-8"/>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>

          <div  style={{paddingLeft:"18px", paddingRight:"18px"}}  className="w-full mb-4">
            <div className="text-default-600 w-full  bg-neutral/10 border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
              <Listbox aria-label="Listbox menu with sections" variant="solid">
                <ListboxSection                   
                  classNames={{"heading":"font-bold"}} 
                  showDivider 
                  className="relative" 
                  title={t("profile")}>
                    <ListboxItem
                      key="1"
                      onPress={()=> handleClickProfileData("name")}
                      description={`${user.firstName}`}
                      startContent={<IconWrapper className="bg-default/30 text-foreground/80"><ProfileIcon className="size-5" /></IconWrapper>}
                      endContent={
                        <ArrowRight style={{transform:`${i18n.language==="ar" || i18n.language === 'fa'?"rotate(180deg)":"rotate(0deg)"}`}}/>
                      }
                    >
                      {t('name')}
                    </ListboxItem>
                    
                  <ListboxItem
                    key="2"
                    onPress={()=> handleClickProfileData("Education")}
                    description={Edocation.find(Education => Education.key == user.profileData.education).label}
                    startContent={<IconWrapper className="bg-default/30 text-foreground/80"><EducationIcon className="size-5"/></IconWrapper>}
                    endContent={
                      <ArrowRight style={{transform:`${i18n.language==="ar" || i18n.language === 'fa'?"rotate(180deg)":"rotate(0deg)"}`}}/>
                    }
                  >
                    {t('Education')}
                  </ListboxItem>

                  <ListboxItem
                    key="3"
                    onPress={()=> handleClickProfileData("WhyIamhere")}
                    description={lookingfor.find(lookingfor => lookingfor.id == user.profileData.lookingFor).title}
                    startContent={<IconWrapper className="bg-default/30 text-foreground/80"><SearchIcon className="size-5"/></IconWrapper>}

                    endContent={
                      <ArrowRight style={{transform:`${i18n.language==="ar" || i18n.language === 'fa'?"rotate(180deg)":"rotate(0deg)"}`}}/>
                    }
                  >
                    {t("WhyIamhere")}
                  </ListboxItem>

                  <ListboxItem
                    key="4"
                    onPress={()=> handleClickProfileData("Bio")}
                    description={user.profileData.bio}
                    endContent={
                      <ArrowRight style={{transform:`${i18n.language==="ar" || i18n.language === 'fa'?"rotate(180deg)":"rotate(0deg)"}`}}/>
                    }
                    startContent={<IconWrapper className="bg-default/30 text-foreground/80"><AboutMeSolid className="size-5"/></IconWrapper>}
                  >
                     {t("Bio")}
                    
                  </ListboxItem>

                </ListboxSection>
                <ListboxSection 
                  classNames={{"heading":"font-bold"}} 
                  className="relative" 
                  title={t("more_about_me")}   
                >


                  <ListboxItem
                    key="7"
                    onPress={()=> handleClick("RealationStatus")}
                    description={RealationStatus.find(RealationStatus => RealationStatus.key === user.moreAboutMe.relationStatus).label}
                    endContent={
                      <ArrowRight style={{transform:`${i18n.language==="ar" || i18n.language === 'fa'?"rotate(180deg)":"rotate(0deg)"}`}}/>
                    }
                    startContent={
                      <IconWrapper className="bg-primary/10 text-primary">
                        <LikeIcon className="size-5" />
                      </IconWrapper>
                    }
                  >
                    {t("RealationStatus")}

                  </ListboxItem>

                  <ListboxItem
                   key="8"
                    description={`${user.moreAboutMe.height} cm`}
                    onPress={()=> handleClick("height")}

                    endContent={
                      <ArrowRight style={{transform:`${i18n.language==="ar" || i18n.language === 'fa'?"rotate(180deg)":"rotate(0deg)"}`}}/>
                    }
                    startContent={
                      <IconWrapper className="bg-secondary/10 text-secondary">
                        <HeightIcon className="size-5" />
                      </IconWrapper>
                    }
                    >
                    
                    {t("Height")}
                  </ListboxItem>

                  <ListboxItem
                     key="10"
                     onPress={()=> handleClick("languages")}
                     description={`${user.moreAboutMe.languages.map((value)=> languages.find(languages => languages.key === value).label)}`}
                     endContent={
                      <ArrowRight style={{transform:`${i18n.language==="ar" || i18n.language === 'fa'?"rotate(180deg)":"rotate(0deg)"}`}}/>
                    }
                     startContent={
                       <IconWrapper className="bg-success/10 text-success">
                         <LanguageIcon className="size-5" />
                       </IconWrapper>
                     }

                     >
                    
                    {t("Language")}
                  </ListboxItem>

                  <ListboxItem 
                    key="11" 
                    onPress={()=> handleClick("SexualityStatus")}
                    description={SexualityStatus.find(SexualityStatus => SexualityStatus.key === user.moreAboutMe.sexuality).label}
                    endContent={
                      <ArrowRight style={{transform:`${i18n.language==="ar" || i18n.language === 'fa'?"rotate(180deg)":"rotate(0deg)"}`}}/>
                    }
                    startContent={
                      <IconWrapper className="bg-warning/10 text-warning">
                        <SexualityIcon className="size-5" />
                      </IconWrapper>
                    }
                    >
                    
                    {t("SexualityStatus")}

                  </ListboxItem>


                  <ListboxItem 
                    key="12" 
                    onPress={()=> handleClick("kids")}
                    description={KidStatus.find(KidStatus => KidStatus.key === user.moreAboutMe.kids).label}
                    endContent={
                      <ArrowRight style={{transform:`${i18n.language==="ar" || i18n.language === 'fa'?"rotate(180deg)":"rotate(0deg)"}`}}/>
                    }
                    startContent={
                      <IconWrapper className="bg-primary/10 text-primary">
                        <KidStatusIcon className="size-5" />
                      </IconWrapper>
                    }
                    >
                    
                    {t("kids")}

                  </ListboxItem>


                  <ListboxItem 
                    key="13" 
                    onPress={()=> handleClick("smoking")}
                    description={SmokingStatus.find(SmokingStatus => SmokingStatus.key === user.moreAboutMe.smoking).label}
                    endContent={
                      <ArrowRight style={{transform:`${i18n.language==="ar" || i18n.language === 'fa'?"rotate(180deg)":"rotate(0deg)"}`}}/>
                    }
                    startContent={
                      <IconWrapper className="bg-secondary/10 text-secondary">
                        <SmokingStatusIcon className="size-5" />
                      </IconWrapper>
                    }
                    >
                    
                    {t("SmokingStatus")}

                  </ListboxItem>


                  <ListboxItem 
                    key="14" 
                    onPress={()=> handleClick("drink")}
                    description={DrinkStatus.find(DrinkStatus => DrinkStatus.key === user.moreAboutMe.drink).label}
                    endContent={
                      <ArrowRight style={{transform:`${i18n.language==="ar" || i18n.language === 'fa'?"rotate(180deg)":"rotate(0deg)"}`}}/>
                    }
                    startContent={
                      <IconWrapper className="bg-danger/10 text-danger">
                        <DrinkStatusIcon className="size-5" />
                      </IconWrapper>
                    }
                    >
                    
                    {t("DrinkStatus")}

                  </ListboxItem>

                  <ListboxItem 
                    key="15" 
                    onPress={()=> handleClick("pets")}
                    description={PetStatus.find(PetStatus => PetStatus.key === user.moreAboutMe.pets).label}
                    endContent={
                      <ArrowRight style={{transform:`${i18n.language==="ar" || i18n.language === 'fa'?"rotate(180deg)":"rotate(0deg)"}`}}/>
                    }
                    startContent={
                      <IconWrapper className="bg-warning/10 text-warning">
                        <PetStatusIcon className="size-5" />
                      </IconWrapper>
                    }
                    >
                    
                    {t("PetStatus")}

                  </ListboxItem>

                  
                </ListboxSection>
                <ListboxSection 
                  classNames={{"heading":"font-bold"}} 
                  className="relative" 
                  title={t("interested")}
                  >
                  <ListboxItem
                   key={111}
                   endContent={<ArrowRight style={{transform:`${i18n.language==="ar" || i18n.language === 'fa'?"rotate(180deg)":"rotate(0deg)"}`}}/>}
                   >
                    <EditIntersting user={user} loading={updateUserData}>
                        {user.interests.map((value, index) => {
                          return (
                            <Chip
                              key={index}
                              className="m-1 bg-neutral/70"
                              avatar={<HashtagIcon className="size-4"/>}
                              variant="solid"
                            >
                              {hobbies.find(hobbie => hobbie.id == value).name}
                            </Chip>
                          );
                        })}
                          
                    </EditIntersting>
                  </ListboxItem>
                </ListboxSection>
              </Listbox>
            </div>
          </div>
        </section>
      </div>
      <EditProfile loading={updateUserData} selectedItem={selectedProfileData} user={user} ref={profileDataModal}/>
      <EditMoreAboutMeModal loading={updateUserData} selectedItem={selectedItem} user={user} ref={childRef}/>
    </Page>
  );
}


const imageClasses = [
  "col-span-2 aspect-square row-span-2", // Index 0
  "col-start-3 aspect-square",           // Index 1
  "col-start-3 row-start-2 aspect-square", // Index 2
  "row-start-3 aspect-square",           // Index 3
  "row-start-3 aspect-square",           // Index 4
  "row-start-3 aspect-square"            // Index 5
];

export const IconWrapper = ({children, className}) => (
  <div style={{borderRadius:"50%"}} className={cn(className, "flex items-center rounded-small justify-center p-2")}>
    {children}
  </div>
);