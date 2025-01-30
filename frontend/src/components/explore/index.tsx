import "swiper/css";
import "swiper/css/effect-creative";
import "./style.css";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ExploreCard from "./exploreCart";
import MatchModal from "./matchModal";
import { Button } from "@nextui-org/button";
import { CloseCircleIcon, FlashIcon, GiftIcon, LikeIcon, LockIcon } from "@/Icons";
import { useLaunchParams } from "@telegram-apps/sdk-react";
import { useDispatch, useSelector } from "react-redux";
import { likeUser } from "@/features/likeSlice";
import { AppDispatch, RootState } from "@/store";
import { NotFoundUserExplore } from "@/Icons/notFoundUserExplore";
import { fetchFilteredExplore, removeUserFromState } from "@/features/exploreSlice";
import { useTranslation } from "react-i18next";
import { Popover, PopoverContent, PopoverTrigger, ScrollShadow, Spinner } from "@nextui-org/react";
import { fetchMatches } from "@/features/matchSlice";
import { SparklesHeartText } from "../animate/hearSparkles";
import { incrementLikes, resetLikes, setLastReset } from "@/features/likeLimitationSlice";

import { PopOverPerimum } from "../perimum/popOver";
import { SendGiftCard } from "../gift";
import { FlashMessageCard } from "./flashMessage";

const ExplorePage = () => {
  const maxLikes = 50;
  
  const dispatch: AppDispatch = useDispatch(); 

  const { data: user } = useSelector((state: RootState) => state.user);
  const { data: users, loading, page, limit, total } = useSelector((state: RootState) => state.explore);

  const { t } = useTranslation(); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { likesCount, lastReset } = useSelector((state: RootState) => state.likeLimit);

  useEffect(() => {
    const today = new Date().setHours(0, 0, 0, 0); 
    if (lastReset < today) {
      dispatch(resetLikes());
      dispatch(setLastReset(today));
    }
  }, [dispatch, lastReset]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  const removeFirstUser = () => {
    if (users && users.length > 0) {
      dispatch(removeUserFromState(users[0].id)); 
    }
  };

  const handleLikeUser = async () => {
    if (likesCount >= maxLikes) return;

    console.log(users[0])

    try {
      dispatch(incrementLikes());
      const resultAction = await dispatch(likeUser({ userId: user.id, likedUserId: users[0].id }));
      // @ts-ignore
      if (resultAction.payload.isMatch === true) {
        dispatch(fetchMatches(user.id.toString()));
        openModal();
        return
      }
      removeFirstUser();  

    } catch (error) {
      console.error('Failed to like user:', error);
      removeFirstUser();  

    }
  };

  const handleNotLike = () => {
    if (likesCount >= maxLikes) return;
    
    removeFirstUser();  
    dispatch(incrementLikes());
  };

  const lp = useLaunchParams();

  const getPaddingForPlatform = () => {
    if (['ios'].includes(lp.platform)) {
      return '50px'; 
    } else {
      return '25px';  
    }
  };

  useEffect(() => {
    if (users && users.length <= 1 && (page * limit) < total) {
      dispatch(fetchFilteredExplore({
        userId: user.id.toString(),
        ageRange: null,
        city: null,
        country: null,
        languages: null,
        page: page,
        limit
      }));
    }
  }, [users, page, limit]);

  if (loading) {
    return <motion.div style={{ position: "relative" }}>
      <motion.div className="flex justify-center items-center" style={{ width: "100vw", height: `calc(100vh - ${getPaddingForPlatform()})`, position: "relative" }}>
        <Spinner size="lg" />
      </motion.div>
    </motion.div>;
  }

  if (users && users.length <= 0) {
    return <div className="relative h-screen w-screen flex flex-col items-center justify-center">
      <NotFoundUserExplore />
      <div className="flex gap-4 flex-col px-6 text-center items-center">
        <p className="text-tiny">{t("nolikemessage")}</p>
      </div>
    </div>;
  }


  return (
    <div className="w-screen" style={{ position: "relative" }}>
      <ScrollShadow hideScrollBar size={180} style={{ overflow: "hidden", height: `calc(100vh - ${getPaddingForPlatform()})` }}>
        <ul style={{ marginTop: "3.6rem" }} className="flex flex-col">
          <AnimatePresence mode={"sync"}>
            {users.slice(0, 5).map((user, index) => (
              <motion.li
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, zIndex: -10 }}
                transition={{ type: "tween" }}
                key={user.id + 12345}
              >
                <ExploreCard profile={user} key={index} />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </ScrollShadow>

      <motion.div 
        style={{bottom:"25px"}}
        className="fixed card p-2 w-full flex justify-center items-end"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
      >

        <div
          className="p-2"
          style={{ borderRadius: "50%", zIndex: 50 }}
        >

        <Popover backdrop="opaque" showArrow placement="bottom-start">
          <PopoverTrigger>

          <Button isDisabled={likesCount >= maxLikes} radius="full" style={{ width: "62px", height: "62px" }} size="lg" isIconOnly color="success" variant="shadow">
            <GiftIcon className="size-6" fill="#FFFFFF" />
          </Button>

          </PopoverTrigger>
          <PopoverContent className="p-1 backdrop-blur bg-background/90 backdrop-saturate-150">
            <SendGiftCard userIds={user} user={users[0]}/>
          </PopoverContent>
        </Popover>

        </div>

        <div
          className="p-2"
          style={{ borderRadius: "50%", zIndex: 50 }}
        >
          <Button isDisabled={likesCount >= maxLikes} onClick={handleNotLike} radius="full" style={{ width: "72px", height: "72px" }} size="lg" isIconOnly color="primary" variant="shadow">
            <CloseCircleIcon style={{ width: "2.5rem", height: "2.5rem" }} className="size-8" />
          </Button>
        </div>

        <div
          className="p-2 "
          style={{ borderRadius: "50%", zIndex: 50 }}
        >
          {likesCount >= maxLikes ? (
            <PopOverPerimum isOpen={true}>
              <Button isDisabled={true} radius="full" style={{ width: "72px", height: "72px" }} size="lg" isIconOnly color="secondary" variant="shadow" className="flex items-center justify-center">
                <LockIcon style={{ width: "2.5rem", height: "2.5rem" }} className="size-8" />
              </Button>
            </PopOverPerimum>
          ) : (
            <SparklesHeartText
              text={
                <Button  radius="full" style={{ width: "72px", height: "72px" }} size="lg" isIconOnly onPress={handleLikeUser} color="secondary" variant="shadow" className="flex items-center justify-center">
                  <LikeIcon style={{ width: "2.5rem", height: "2.5rem" }} className="size-8" />
                </Button>
              }
              colors={{ first: "#ff4b61", second: "#A8B2BD" }}
              sparklesCount={5} 
            />
          )}
        </div>


        <div
          className="p-2"
          style={{ borderRadius: "50%", zIndex: 50 }}
        >   

          <Popover backdrop="opaque" showArrow placement="bottom-end">
            <PopoverTrigger>

            <Button isDisabled={likesCount >= maxLikes} radius="full" style={{ width: "62px", height: "62px" }} size="lg" isIconOnly color="warning" variant="shadow">
              <FlashIcon className="size-6" fill="#FFFFFF" />
            </Button>

            </PopoverTrigger>
            <PopoverContent className="p-1 backdrop-blur bg-background/90 backdrop-saturate-150">
              <FlashMessageCard userIds={user} user={users[0]}/>
            </PopoverContent>
          </Popover>
        </div>

      </motion.div>

      {users[0] && (
        <MatchModal
          isOpen={isModalOpen}
          modalData={users[0]}
          onClose={closeModal}
          thisUserId={user.id}
        />
      )}
    </div>
  );
};

export default ExplorePage;
