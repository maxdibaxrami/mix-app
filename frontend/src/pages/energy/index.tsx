
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Button, Card, CardBody, CardFooter, CardHeader, cn, Divider, Spinner } from "@nextui-org/react";
import { Page } from '@/components/Page.tsx';
import { useLaunchParams } from "@telegram-apps/sdk-react";
import { FirendsIcon, FlashIcon} from "@/Icons";
import { shareURL } from "@telegram-apps/sdk-react";
import { SparklesFlashIconText } from "@/components/animate/flash-sparkles";
import { EnergyCard } from "./energyCards";
import { TonConnectButton } from "@tonconnect/ui-react";



export default function EnergyViewPage() {
  const { t } = useTranslation();  // Initialize translation hook
  const { data: user , loading } = useSelector((state: RootState) => state.user);  // Assuming the like slice is in state.like
  const lp = useLaunchParams();
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
      return '30px'  // Adjust as needed for iOS notch
    } else {
      // Android/base padding
      return '20px' // Default padding
    }
  };


  return (
    <Page>
       <div
          className="container mx-auto max-w-7xl flex-grow bg-gradient-to-tr from-primary/50 to-secondary/50 bg-warning"
          style={{
            maxHeight: "100%",
            height:"100%",
            marginBottom:"5rem",
            
          }}
      >
              <section
                    className="flex flex-col items-center justify-center px-3"
                    style={{paddingTop:`calc(4rem + ${getPaddingForPlatform()})`,}}  
                >
                     <div className="flex flex-col w-full">
                      <Card className="bg-neutral/10 pt-3">
                          <CardHeader className="flex gap-3 flex-col w-full h-full">
                            <SparklesFlashIconText 
                              text={
                                <IconWrapper className="bg-background/80 text-secondary/80">
                                  <FlashIcon className="size-16"/>
                                </IconWrapper>
                              }
                              sparklesCount={25}
                              colors={{ first: "#FFFFFF", second: "#FFFFFF" }}
                            />
                           
                            <div className="flex flex-col">
                              <p className="text-2xl font-bold">{`${t('energy')} : ${user.rewardPoints}`}</p>
                            </div>
                          </CardHeader>
                          <CardBody>

                            <TonConnectButton style={{width:"100%"}} className="ton-connect-page__button-connected flex items-center justify-center"/>

                            <Divider className="my-2"/>

                              <EnergyCard color={"secondary"} title={t("250_Energy")} description={undefined} price={1} type={"ton"}/>
                              <EnergyCard color={"secondary"} title={t("500_Energy")} description={undefined} price={2} type={"ton"}/>
                              <EnergyCard color={"secondary"} title={t("1000_Energy")} description={undefined} price={4} type={"ton"}/>



                            <Button
                                    className="bg-gradient-to-tr w-full mb-2 h-full from-primary/50 to-secondary/50 text-white"
                                    radius="lg"
                                    variant="shadow"
                                    color="primary"
                                    onPress={AddFirendsDialog}
                                  >
                                  <div className="flex my-4 items-center">
                                      <IconWrapper className="bg-background/80 text-secondary/80">
                                          <FirendsIcon fill="currentColor" className="size-8"/>
                                      </IconWrapper>
                                      <div className="px-2 flex flex-col">
                                          <p className="font-bold capitalize text-start">{t("invite_your_friend")}</p>
                                          <small className="text-wrap  text-start">{t("Inviteyourfriendsandgetapremiumaccount")}</small>
                                      </div>

                                  </div>
                              </Button>
                              

                          </CardBody>
                          <Divider />
                          <CardFooter>
            
                            <p className="text-sm">{t("description_for_energy")}</p>

                          </CardFooter>
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