import ProfileGiftViewCard from "./GiftViewCard";
import { motion } from "framer-motion";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Spinner } from "@nextui-org/react";
import { Page } from '@/components/Page.tsx';
import TopBarPages from "@/components/tobBar/index";
import { useLaunchParams } from "@telegram-apps/sdk-react";
import { GiftNotFound } from "@/Icons/giftIcon";



export default function GiftViewPage() {
  const { t } = useTranslation();  // Initialize translation hook
  const { data, loading } = useSelector((state: RootState) => state.user);  // Assuming the like slice is in state.like
  const lp = useLaunchParams();

  if(loading){
    return <div className="h-screen w-screen flex flex-col p-6 items-center justify-center"> 
      <Spinner size="lg" />
    </div>
  }
  if(!loading && data.giftUsers.length === 0){
    return <Page>
      <div className="h-screen w-screen flex flex-col p-6 items-center justify-center"> 
        <GiftNotFound/>
        <div className="flex gap-4 flex-col px-6 text-center items-center">
        <p className="font-bold">{t("data_not_found")}</p>
        </div>
    </div>
    </Page>
  }

  const getPaddingForPlatform = () => {
    if (['ios'].includes(lp.platform)) {
      // iOS/macOS specific padding (e.g., accounting for notches)
      return '50px'  // Adjust as needed for iOS notch
    } else {
      // Android/base padding
      return '25px' // Default padding
    }
  };


  return (
    <Page>
       <div
          className="container mx-auto max-w-7xl h-screen flex-grow"
          style={{
            marginBottom:"5rem",
            
          }}
      >
        <TopBarPages />
        <section
                className="flex flex-col items-center justify-center "
                style={{paddingTop:`calc(4rem + ${getPaddingForPlatform()})`}}  
              >
      
        <motion.div 
          className="grid gap-2 grid-cols-2 py-2 "
          style={{
            paddingBottom: "6rem",
            paddingLeft:"18px",
            paddingRight:"18px"
          }}
        >

          {data.giftUsers.map((value, index) => (<ProfileGiftViewCard key={index} data={value} />))}

        </motion.div >
        </section>
      </div>
    </Page>
  );
}
