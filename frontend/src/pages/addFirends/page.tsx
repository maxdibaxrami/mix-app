import TopBarPages from "@/components/tobBar/index";
import { Page } from "@/components/Page";
import { useLaunchParams, shareURL } from "@telegram-apps/sdk-react";
import { AddFirendsImage } from "@/Icons/addFirends";
import { motion } from "framer-motion";
import { Button, Spinner } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { AddFirendsIcon } from "@/Icons";
import { useTranslation } from "react-i18next";
import { SparklesCustomIconText } from "@/components/animate/user-sparkles";

export default function AddFirends() {
  const lp = useLaunchParams();
  const { t } = useTranslation(); // Initialize translation hook

  const { data: referral, loading } = useSelector((state: RootState) => state.referral);
  
  const getPaddingForPlatform = () => {
    return lp.platform === 'ios' ? '50px' : '25px'; // Padding for different platforms
  };

  const AddFirendsDialog = () => {
    if (shareURL && referral) {
      // Only share when referral is available
      shareURL(referral, t("share_link"));
    } else {
      console.error('shareURL is not available or referral data is missing');
    }
  };

  return (
    <Page>
      <div className="container mx-auto max-w-7xl flex-grow light-background--color">
        <section className="flex flex-col items-center justify-center gap-4 text-default-600">
          <TopBarPages />
          <div
            style={{ paddingTop: `calc(5rem + ${getPaddingForPlatform()})` }}
            className="w-full pb-4"
          >
            <motion.div
              className="flex  items-center aspect-video justify-center"
              animate={{
                scale: [0.75, 0.8, 0.8, 0.8, 0.75],
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
              <AddFirendsImage />
            </motion.div>

            {loading ? (
              <motion.div
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                transition={{ opacity: { duration: 0.6 } }}
                className="flex items-center justify-center"
              >
                <Spinner size="lg" />
              </motion.div>
            ) : (
              <motion.div
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                className="flex items-center flex-col px-4"
                transition={{ opacity: { duration: 0.6 } }}
              >
                <p className="font-bold text-xl text-center">
                  {t("Inviteyourfriendsandgetapremiumaccount")}
                </p>

                <SparklesCustomIconText
                  colors={{ first: "#21b6a8", second: "#ff4b61" }}
                  sparklesCount={20} // Initial number of hearts
                  text={
                    <Button
                      className="mt-3"
                      size="lg"
                      onClick={AddFirendsDialog}
                      color="primary"
                      endContent={<AddFirendsIcon />}
                    >
                      {t("share_link")}
                    </Button>
                  }
                />
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </Page>
  );
}
