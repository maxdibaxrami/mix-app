
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Button, Card, CardBody, cn, Spinner, Tab, Tabs } from "@nextui-org/react";
import { Page } from '@/components/Page.tsx';
import TopBarPages from "@/components/tobBar/index";
import { useLaunchParams } from "@telegram-apps/sdk-react";
import { useState } from "react";
import { EnergyCard } from "./energyCards";
import { FirendsIcon, PerimumIcon, TonCoinIcon } from "@/Icons";
import { shareURL } from "@telegram-apps/sdk-react";



export default function EnergyViewPage() {
  const { t } = useTranslation();  // Initialize translation hook
  const { loading } = useSelector((state: RootState) => state.user);  // Assuming the like slice is in state.like
  const lp = useLaunchParams();
  const [selected, setSelected] = useState<React.Key >("stars");
  const { data: referral } = useSelector((state: RootState) => state.referral);

  if(loading){
    return <div className="h-screen w-screen flex flex-col p-6 items-center justify-center"> 
      <Spinner size="lg" />
    </div>
  }

  const AddFirendsDialog = () => {
    if (shareURL && referral) {
      // Only share when referral is available
      shareURL(referral, t("share_link"));
    } else {
      console.error('shareURL is not available or referral data is missing');
    }
  };

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
          className="container mx-auto max-w-7xl flex-grow"
          style={{
            maxHeight: "100%",
            height:"100%",
            marginBottom:"5rem",
            
          }}
      >
        <TopBarPages />
            <section
                    className="flex flex-col items-center justify-center px-3"
                    style={{paddingTop:`calc(4rem + ${getPaddingForPlatform()})`,}}  
                >
                     <div className="flex flex-col w-full">
                     <div>
                        <Button
                            className="bg-gradient-to-tr w-full mb-2 h-full from-primary/50 to-secondary/50 text-white"
                            radius="lg"
                            variant="shadow"
                            color="primary"
                            onClick={AddFirendsDialog}

                            >
                            <div className="flex my-4 items-center">
                                <IconWrapper className="bg-background/80 text-secondary/80">
                                    <FirendsIcon fill="currentColor" className="size-8"/>
                                </IconWrapper>
                                <div className="px-2 flex flex-col">
                                    <p className="font-bold capitalize text-start">{t("invite_your_friend")}</p>
                                    <small className="text-wrap text-start">{t("Inviteyourfriendsandgetapremiumaccount")}</small>
                                </div>

                            </div>
                        </Button>
                    </div>
                        <Card className="max-w-full h-full">
                            <CardBody className="overflow-hidden">
                                <Tabs
                                    fullWidth
                                    aria-label="Tabs form"
                                    // @ts-ignore
                                    selectedKey={selected}
                                    size="md"
                                    onSelectionChange={setSelected}
                                >
                                    <Tab 
                                        key="stars" 
                                        title={
                                            <div className="flex items-center justify-center gap-1">
                                                <PerimumIcon className="size-5"/>
                                                <p className="font-medium">{t("stars")}</p>
                                            </div>
                                        }
                                    >
                                        <EnergyCard 
                                            type="star" 
                                            title={t("50_Energy")} 
                                            color={"default"} 
                                            description={"Save 20%"} 
                                            price={80}
                                        />
                                        <EnergyCard 
                                            type="star" 
                                            title={t("150_Energy")} 
                                            color={"primary"} 
                                            description={"Save 30%"} 
                                            price={190}
                                        />
                                        <EnergyCard 
                                            type="star" 
                                            title={t("500_Energy")} 
                                            color={"secondary"} 
                                            description={"Save 40%"} 
                                            price={799}
                                        />
                                        <EnergyCard 
                                            type="star" 
                                            title={t("1000_Energy")} 
                                            color={"danger"} 
                                            description={"Save 50%"} 
                                            price={1299}
                                        />

                                    </Tab>
                                    <Tab 
                                        key="ton" 
                                        title={
                                            <div className="flex items-center justify-center gap-1">
                                                <TonCoinIcon className="size-5"/>
                                                <p className="font-medium">{t("ton")}</p>
                                            </div>
                                        }
                                    >
                                        <EnergyCard 
                                                type="ton" 
                                                title={t("50_Energy")} 
                                                color={"default"} 
                                                description={"Save 0%"} 
                                                price={0.3} 
                                            />
                                            <EnergyCard 
                                                type="ton" 
                                                title={t("150_Energy")} 
                                                color={"primary"} 
                                                description={"Save 5%"} 
                                                price={0.6} 
                                            />
                                            <EnergyCard 
                                                type="ton" 
                                                title={t("500_Energy")} 
                                                color={"secondary"} 
                                                description={"Save 21%"} 
                                                price={1.3} 
                                            />
                                            <EnergyCard 
                                                type="ton" 
                                                title={t("1000_Energy")} 
                                                color={"danger"} 
                                                description={"Save 38%"} 
                                                price={2} 
                                            />
                                    </Tab>
                                </Tabs>
                            </CardBody>
                        </Card>
                    </div>
            </section>
      </div>
    </Page>
  );
}


export const IconWrapper = ({children, className}) => (
    <div style={{borderRadius:"50%"}} className={cn(className, "flex items-center rounded-small justify-center p-2")}>
      {children}
    </div>
);