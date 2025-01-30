import {
  Navbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import { ThemeSwitch } from "./SwitchTheme";

import {RotateWords} from '@/components/animate/rotate-words'
import { useLaunchParams } from "@telegram-apps/sdk-react";


const TopBar = () => {
  const lp = useLaunchParams();

  const getPaddingForPlatform = () => {
    if (['ios'].includes(lp.platform)) {
      // iOS/macOS specific padding (e.g., accounting for notches)
      return '50px' // Adjust as needed for iOS notch
    } else {
      // Android/base padding
      return '25px' // Default padding
    }
  };


  return (
  <>
    <Navbar
      className="top-0 fixed text-default-600 z-50"
      style={{paddingTop: `${getPaddingForPlatform()}` }}
    >

      <NavbarContent style={{gap:0}} justify="end">
        <NavbarItem className="flex items-center">
          <RotateWords words={"Moll Moll"} />  
        </NavbarItem>
      </NavbarContent>
      <NavbarContent style={{gap:0}} justify="start">
        <NavbarItem className="flex items-center">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    </>
  );
};

export default TopBar;
