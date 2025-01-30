import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroPage from "@/components/auth/introPage";
import BottomController from "@/components/auth/BottonController";
import ProfileDataAuth from "@/components/auth/ProfileDataAuth";
import GenderStuffAuth from "@/components/auth/genderStuffAuth";
import ImageDataAuth from "@/components/auth/ProfileIMagesAuth";
import FinalStepAuth from "@/components/auth/finalStep";
import { SparklesText } from "@/components/animate/sparkles";
import { Page } from "@/components/Page";
import RealationStatusAuth from '@/components/auth/RealationStatusAuth';
import LookingforList from "@/components/core/WhyIamHereAuthList";
import InterestingAuth from "@/components/auth/interstingAuth";
import "./style.css"
import { useLaunchParams, useSignal, initData } from "@telegram-apps/sdk-react";
import { signupUser, uploadProfileImage } from "@/features/authSlice";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { fetchUserData } from "@/features/userSlice";
import { getLocation } from "@/Location";
import { useTranslation } from "react-i18next";
import EducationListSelector from "@/components/core/education";
import { CameraIcon, EducationIcon, HashtagIcon, HeartIcon, ProfileIcon, SearchIcon } from "@/Icons";
import { applyReferralReward } from "@/features/refralSlice";
import SelectBirthDate from "@/components/auth/SelectBirthDate";


export default function SignupPage() {


  const { i18n, t } = useTranslation();

  const contentRef = useRef(null); // Ref to track content height

  const lp = useLaunchParams();

  const dispatch = useDispatch<AppDispatch>();
  const initDataState = useSignal(initData.state);
  const [uploadImageLoading, setUploadImageLoading] = useState(true)

  const [selectedTab, setSelectedTab] = useState(0);
  const [nextSlideAvalable, setNextSlideAvalable] = useState(false)

  const [userPhoto, setUserPhoto ] = useState([])

  const [location, setLocation] = useState('');
  const [coordinates, setCoordinates] = useState({ lat: null, lon: null });
  const [error, setError] = useState('');
  
    console.log(error)

  const [user, setUser] = useState({
    telegramId: initDataState.user.id.toString(),
    username: initDataState.user.id.toString(),
    firstName: '',
    city: '',
    country: '',
    gender: '',
    lookingFor: '',
    education: '',
    work: '',
    bio: '',
    relationStatus:'',
    age: 24,
    dateBirth: '2000-01-14',
    languages:[i18n.language],
    language:i18n.language,
    lat: null,
    lon: null,
    interests:[]
  });

  useEffect(()=>{console.log(user)},[user])
  useEffect(() => {
    // Call getLocation to fetch location and coordinates
    getLocation(setError, setLocation, setCoordinates);
  }, []);

  useEffect(() => {
    if (location && coordinates.lat && coordinates.lon) {
      // Update user data when location and coordinates are available
      setUser((prevUser) => ({
        ...prevUser,
        country: location.split(',')[1].trim(),
        city: location.split(',')[0], // Extract city from the location string
        lat: Number(coordinates.lat),
        lon: Number(coordinates.lon),
      }));
    }
  }, [location, coordinates]);

  useEffect(()=>{ console.log(user) },[user])
  const setSlideAvailable = (key, value) => {
    setNextSlideAvalable(true)
    setUser((prevUser) => ({
      ...prevUser,  // Spread the previous state to keep other fields unchanged
      [key]: value, // Dynamically update the specific key with the new value
    }));
  }

  const setSlideUnAvailable = (key, value) => {
    setNextSlideAvalable(false)
    setUser((prevUser) => ({
      ...prevUser,  // Spread the previous state to keep other fields unchanged
      [key]: value, // Dynamically update the specific key with the new value
    }));
  }

  const NextPage = () => setSelectedTab(selectedTab + 1);
  
  const prevPage = () => {
    if(selectedTab === 0 ) 
      return 
    setSelectedTab(selectedTab - 1)
  };

  const getPaddingForPlatform = () => {
    if (['ios'].includes(lp.platform)) {
      // iOS/macOS specific padding (e.g., accounting for notches)
      return '6.5rem'  // Adjust as needed for iOS notch
    } else {
      // Android/base padding
      return'35px'  // Default padding
    }
  };
  
  const handleSignup = async () => {
    // Set loading to true before starting the requests
    setUploadImageLoading(true);

    try {
      // Dispatch the signup user action
      const result = await dispatch(signupUser(user));
  
      // Check if the signup was successful and if we have images to upload
      if (signupUser.fulfilled.match(result) && result.payload?.id && userPhoto.length > 0) {

        
        // Create an array of promises for uploading each image
        const uploadPromises = userPhoto.map((photo,index) =>
          dispatch(uploadProfileImage({ userId: result.payload.id, imageFile: photo, order:index }))
        );
        // Wait for all the uploads to complete
        await Promise.all(uploadPromises);
        
        await dispatch(fetchUserData(initDataState.user.id.toString()));
       
        if(lp.startParam && lp.startParam.length >3){
          dispatch(applyReferralReward(lp.startParam));
        }
        // Once all images are uploaded, set loading to false
        setUploadImageLoading(false);
      } 
    } catch (error) {
      // Handle error (optional)
      console.error("Error during signup or image upload:", error);
      // Set loading to false in case of error
      setUploadImageLoading(false);
    }
  };

  



  return (
    <Page back={false}>
        <motion.div className="flex flex-col items-center justify-between">
          <motion.div animate={selectedTab === 9? {top:"-100px", opacity:0} : "bottom-0"} ref={contentRef} style={{paddingTop:`${getPaddingForPlatform()}`, zIndex:999 }} className="fixed top-0 w-full  backdrop-blur backdrop-saturate-150">
            <div className="text-center">
              <SparklesText text="Mull Mull" />
            </div>
          </motion.div >            


          <div style={{ paddingTop: `${['ios'].includes(lp.platform)? "9rem" : "6rem"}`, overflow:"scroll" , paddingBottom:"90px" }} className="w-full">
              {selectedTab === 0 && (
                <AnimatePresence mode="wait">
                  <motion.div
                    animate={{opacity: 1 }}
                    exit={{opacity: 0 }}
                    initial={{ opacity: 0 }}
                    transition={{
                      opacity: { duration: 0.4 },
                    }}
                  >
                    <IntroPage user={user} setSlideAvailable={setSlideAvailable} setSlideUnAvailable={setSlideUnAvailable} />
                  </motion.div>
                </AnimatePresence>
              )}
              {selectedTab === 1 && (
                <AnimatePresence mode="wait">
                  <motion.div
                    animate={{opacity: 1 }}
                    exit={{opacity: 0 }}
                    initial={{ opacity: 0 }}
                    transition={{
                      opacity: { duration: 0.4 },
                    }}
                  >
                    <ProfileDataAuth user={user} setSlideAvailable={setSlideAvailable} setSlideUnAvailable={setSlideUnAvailable}/>
                  </motion.div>
                </AnimatePresence>
              )}

              {selectedTab === 2 && (
                <AnimatePresence mode="wait">
                  <motion.div
                    animate={{opacity: 1 }}
                    exit={{opacity: 0 }}
                    initial={{ opacity: 0 }}
                    transition={{
                      opacity: { duration: 0.4 },
                    }}
                  >
                    <SelectBirthDate user={user} setSlideAvailable={setSlideAvailable} setSlideUnAvailable={setSlideUnAvailable}/>
                  </motion.div>
                </AnimatePresence>
              )}


              {selectedTab === 3 && (
                <AnimatePresence mode="wait">
                  <motion.div
                    animate={{opacity: 1 }}
                    exit={{opacity: 0 }}
                    initial={{ opacity: 0 }}
                    transition={{
                      opacity: { duration: 0.4 },
                    }}
                  >
                   <div className="mb-1 mt-1 px-6 pt-8 pb-4 flex gap-2 items-center">
                    <div className="flex items-center rounded-full justify-center p-2 bg-default/30 text-primary/80">
                      <ProfileIcon className="size-8" />
                    </div>
                    <p className="font-bold text-medium">{t('Iam')}</p>
                  </div>
                <GenderStuffAuth user={user} setSlideAvailable={setSlideAvailable} setSlideUnAvailable={setSlideUnAvailable}/>
                </motion.div>
              </AnimatePresence>
              )}

              {selectedTab === 4 && (
                <AnimatePresence mode="wait">
                  <motion.div
                    animate={{opacity: 1 }}
                    exit={{opacity: 0 }}
                    initial={{ opacity: 0 }}
                    transition={{
                      opacity: { duration: 0.4 },
                    }}
                  >
                  <div className="mb-1 mt-1 px-6 pt-8 pb-4 flex gap-2 items-center">
                    <div className="flex items-center rounded-full justify-center p-2 bg-default/30 text-primary/80">
                      <EducationIcon className="size-8" />
                    </div>
                    <p className="font-bold text-medium">{t('Education')}</p>
                  </div>

                  <EducationListSelector setSlideAvailable={setSlideAvailable} setSlideUnAvailable={setSlideUnAvailable} user={user}/>
                  </motion.div>
                </AnimatePresence>
              )}

              {selectedTab === 5 && (
                <AnimatePresence mode="wait">
                  <motion.div
                    animate={{opacity: 1 }}
                    exit={{opacity: 0 }}
                    initial={{ opacity: 0 }}
                    transition={{
                      opacity: { duration: 0.4 },
                    }}
                  >
                    <div className="mb-1 mt-1 px-6 pt-8 pb-4 flex gap-2 items-center">
                      <div className="flex items-center rounded-full justify-center p-2 bg-default/30 text-primary/80">
                        <HeartIcon className="size-8" />
                      </div>
                      <p className="font-bold text-medium">{t('RealationStatus')}</p>
                    </div>
                    <RealationStatusAuth user={user} setSlideAvailable={setSlideAvailable} setSlideUnAvailable={setSlideUnAvailable} />
                  </motion.div>

                </AnimatePresence>
              )}


              {selectedTab === 6 && (
                <AnimatePresence mode="wait">
                  <motion.div
                      animate={{opacity: 1 }}
                      exit={{opacity: 0 }}
                      initial={{ opacity: 0 }}
                      transition={{
                        opacity: { duration: 0.4 },
                      }}
                    >
                    <div className="mb-1 mt-1 px-6 pt-8 pb-4 flex gap-2 items-center">
                      <div className="flex items-center rounded-full justify-center p-2 bg-default/30 text-primary/80">
                        <SearchIcon className="size-8" />
                      </div>
                      <p className="font-bold text-medium">{t('RealationStatus')}</p>
                    </div>

                    <LookingforList user={user} setSlideAvailable={setSlideAvailable} setSlideUnAvailable={setSlideUnAvailable}/>
                  </motion.div>
                </AnimatePresence>
              )}

              {selectedTab === 7 && (
                <AnimatePresence mode="wait">
                    <motion.div
                      animate={{opacity: 1 }}
                      exit={{opacity: 0 }}
                      initial={{ opacity: 0 }}
                      transition={{
                        opacity: { duration: 0.4 },
                      }}
                    >
                    <div className="mb-1 mt-1 px-6 pt-8 pb-4 flex gap-2 items-center">
                      <div className="flex items-center rounded-full justify-center p-2 bg-default/30 text-primary/80">
                        <HashtagIcon className="size-8" />
                      </div>
                      <p className="font-bold text-medium">{t('interested')}</p>
                    </div>
                    <InterestingAuth user={user} setSlideAvailable={setSlideAvailable} setSlideUnAvailable={setSlideUnAvailable}/>
                  </motion.div>
                </AnimatePresence>
              )}


              {selectedTab === 8 && (
                <AnimatePresence mode="wait">
                  <motion.div
                      animate={{opacity: 1 }}
                      exit={{opacity: 0 }}
                      initial={{ opacity: 0 }}
                      transition={{
                        opacity: { duration: 0.4 },
                      }}
                    >
                   <div className="mb-1 mt-1 px-6 pt-8 pb-4 flex gap-2 items-center">
                    <div className="flex items-center rounded-full justify-center p-2 bg-default/30 text-primary/80">
                      <CameraIcon className="size-8" />
                    </div>
                    <p className="font-bold text-medium">{t('UploadprofileImage')}</p>
                  </div>
                  <ImageDataAuth userPhoto={userPhoto} setUserPhoto={setUserPhoto} setSlideAvailable={setSlideAvailable} setSlideUnAvailable={setSlideUnAvailable}/>
                  </motion.div>
                </AnimatePresence>
              )}
              {selectedTab === 9 && (
                <AnimatePresence mode="wait">
                    <motion.div
                      animate={{opacity: 1 }}
                      exit={{opacity: 0 }}
                      initial={{ opacity: 0 }}
                      transition={{
                        opacity: { duration: 0.4 },
                      }}
                    >
                  <FinalStepAuth uploadImageLoading={uploadImageLoading} setSlideAvailable={setSlideAvailable} setSlideUnAvailable={setSlideUnAvailable}/>
                  </motion.div>
                </AnimatePresence>
              )}
            
          </div>

          {/* Wrapping BottomController in motion.div for smooth position changes */}
          <motion.div
            className="fixed pb-6 bottom-0 backdrop-blur backdrop-saturate-150 "
            style={{width:"100%",zIndex:999}}
            animate={selectedTab === 9? {bottom:"-100px"} : "bottom-0"}
          >
            <BottomController
              nextPage={NextPage}
              prevPage={prevPage}
              handleSignup={handleSignup}
              selectedTab={selectedTab}
              nextSlideAvalable={nextSlideAvalable}
            />
          </motion.div>
        </motion.div>
    </Page>
  );
}
