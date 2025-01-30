import { useState, useRef, useCallback } from "react";
import { RootState, AppDispatch } from "@/store";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Button, Card, CardBody, CardFooter, Image, Spinner } from "@nextui-org/react";
import { Page } from "@/components/Page.tsx";
import TopBarPages from "@/components/tobBar/index";
import { useLaunchParams } from "@telegram-apps/sdk-react";
import Webcam from "react-webcam";
import { UploadIcon } from "@/Icons";
import { verifyUserPhoto } from "@/features/userSlice";
import { useNavigate } from "react-router-dom";

export default function VerifyAccontViewPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { data, loading } = useSelector((state: RootState) => state.user);
  const lp = useLaunchParams();
  const dispatch = useDispatch<AppDispatch>();
  const [photoTaken, setPhotoTaken] = useState(false);
  const [photo, setPhoto] = useState<string | null>(null);
  const webcamRef = useRef<Webcam>(null);

  const getPaddingForPlatform = () => {
    return ["ios"].includes(lp.platform) ? "50px" : "25px";
  };

  const capturePhoto = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setPhoto(imageSrc);
        setPhotoTaken(true);
      }
    }
  }, [webcamRef]);

  const uploadPhoto = async () => {
    if (photo && data) {
      try {
        const response = await fetch(photo);
        const blob = await response.blob();
        const file = new File([blob], "photo.jpg", { type: "image/jpeg" });
        navigate("/main?page=profile");
        await dispatch(verifyUserPhoto({ userId: data.id.toString(), photoFile: file }));
      } catch (error) {
        console.error("Error uploading photo:", error);
      }
    }
  };

  if (loading) {
    return (
      <div className="h-screen w-screen flex flex-col p-6 items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <Page>
      <div className="container mx-auto max-w-7xl flex-grow" style={{ marginBottom: "5rem", padding: "18px " }}>
        <TopBarPages />
        <Card radius="lg" className="flex flex-col items-center justify-center" style={{ marginTop: `calc(4rem + ${getPaddingForPlatform()})` }}>
          <CardBody>
            {!photoTaken ? (
              <>
                <Webcam
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  className="w-full h-[300px] rounded-xl"
                  videoConstraints={{ facingMode: "user" }}
                />
                <div className="mt-2 w-full flex items-center justify-center">
                  <Button onClick={capturePhoto} variant="shadow" className="w-full mt-2" color="secondary">
                    {t("take_Photo")}
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Image src={photo} alt="Captured" className="w-full h-[300px] aspect-video" />
                <Button onClick={uploadPhoto} variant="shadow" color="primary" className="w-full mt-2">
                  <UploadIcon className="size-6" />
                  {t("upload_Photo")}
                </Button>
              </>
            )}
          </CardBody>

          <CardFooter className="mt-4 flex-col flex items-start text-green-500">
            <p className="text-tiny uppercase font-bold text-danger">{t("Profile_Verification_Requirements")}</p>
            <ul>
              <li>
                <small className="text-default-500">{t("Make_sure_your_face_is_clearly_visible,_centered,_and_unobstructed.")}</small>
              </li>
              <li>
                <small className="text-default-500">{t("Ensure_that_your_photo_is_taken_in_good_lighting_to_avoid_shadows_or_dark_areas.")}</small>
              </li>
              <li>
                <small className="text-default-500">{t("Avoid_using_filters_or_any_image_enhancements.")}</small>
              </li>
              <li>
                <small className="text-default-500">{t("Your_face_should_match_the_one_shown_in_your_profile_image_for_verification_purposes.")}</small>
              </li>
            </ul>
          </CardFooter>
        </Card>
      </div>
    </Page>
  );
}
