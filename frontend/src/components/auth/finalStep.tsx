import { RootState } from "@/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Progress } from "@nextui-org/react";
import { Navigate } from "react-router-dom";
import { UploadImageSvg } from "@/Icons/uploadImageSvg";
import { useTranslation } from "react-i18next";

const FinalStepAuth = ({ setSlideAvailable, setSlideUnAvailable, uploadImageLoading }) => {
  const { loading: authLoading } = useSelector((state: RootState) => state.auth);
  const { loading: userLoading } = useSelector((state: RootState) => state.user);
  const { t } = useTranslation();

  useEffect(() => {
    setSlideUnAvailable();
    setSlideAvailable();
  }, []);

  // Check if both auth and user are not loading
  if (!authLoading && !userLoading && !uploadImageLoading) {
    return <Navigate to="/main?page=profile" replace />;
  }

  // Show loading spinner if either auth or user is still loading
  return (
    <div className="flex justify-center items-center flex-col px-6 pt-8 pb-4">
      <UploadImageSvg/>
      <p className="font-bold text-medium mt-2 mb-2">{t('UploadprofileImage')}</p>
      <Progress isIndeterminate aria-label="Loading..." className="max-w-md" size="md" />
    </div>
  );
};

export default FinalStepAuth;
