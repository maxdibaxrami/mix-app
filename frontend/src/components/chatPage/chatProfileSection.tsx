import { Navbar, NavbarContent, NavbarItem, Skeleton, Avatar } from "@nextui-org/react";
import { useRef } from 'react';
import NearByUserModal from "../naerby/NearByModal";
import { useTranslation } from "react-i18next";
import { BASEURL } from "@/constant";
import { useLaunchParams } from "@telegram-apps/sdk-react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from "@/store";

const ChatProfileSection = ({ loading, profileDataState, userId2 }) => {
  const childRef = useRef();
  const { t } = useTranslation();
  const lp = useLaunchParams();

  // Accessing online status from Redux state based on userId2
  const isUserOnline = useSelector((state : RootState) => state.status.onlineUsers.some(user => user.userId === userId2));

  const handleClick = () => {
    if (childRef.current) {
      /* @ts-ignore */
      childRef.current.callChildFunction(); // Call the function in the child
    }
  };

  const getPaddingForPlatform = () => {
    return ['ios'].includes(lp.platform) ? '50px' : '25px';
  };
  

  if (loading) {
    return (
      <Navbar className="fixed top-0" style={{ paddingTop: getPaddingForPlatform() }}>
        <NavbarContent justify="start">
          <NavbarItem className="lg:flex"></NavbarItem>
        </NavbarContent>
        <NavbarContent justify="center">
          <div className="max-w-[300px] w-full flex items-center gap-3">
            <Skeleton className="flex rounded-full w-12 h-12" />
            <div className="flex flex-col gap-2">
              <Skeleton className="h-3 w-24 rounded-lg" />
              <Skeleton className="h-3 w-14 rounded-lg" />
            </div>
          </div>
        </NavbarContent>
        <NavbarContent justify="end"></NavbarContent>
      </Navbar>
    );
  }

  return (
    <>
      <Navbar
        disableAnimation
        className="fixed top-0"
        classNames={{ wrapper: "px-4" }}
        style={{ paddingTop: getPaddingForPlatform() }}
      >
        <NavbarContent justify="start">
          <NavbarItem className="lg:flex"></NavbarItem>
        </NavbarContent>
        <NavbarContent justify="center">
          <Link to={`/user?userId=${userId2}`} className="lg:flex flex items-center" onClick={handleClick}>
            <div className="relative">
              <Avatar
                isBordered
                className="mx-2"
                color={isUserOnline ? "success" : "primary"}
                radius="full"
                size="md"
                src={`${BASEURL}${profileDataState.photos[0].small}`}
              />
              {/* Online status dot */}
              <span
                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${isUserOnline ? 'bg-green-500' : 'bg-gray-400'}`}
              />
            </div>
            <div className="flex flex-col ml-2 text-start">
              <span className="text-l text-foreground font-bold">{profileDataState.firstName}</span>
              {isUserOnline ? (
                <span className="text-small bold" style={{ color: "#22c55e" }}>
                  {t("Online")}
                </span>
              ) : (
                <span className="text-small bold text-foreground">
                  {t("Offline")}
                </span>
              )}
            </div>
          </Link>
        </NavbarContent>
        <NavbarContent justify="end"></NavbarContent>
      </Navbar>
      {profileDataState && <NearByUserModal profile={profileDataState} ref={childRef} />}
    </>
  );
};

export default ChatProfileSection;
