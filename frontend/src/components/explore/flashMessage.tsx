import { useState } from "react";
import {
  Avatar,
  Card,
  Button,
  CardHeader,
  Badge,
  Link,
  CardFooter,
} from "@nextui-org/react";
import { BASEURL, getlookingfor } from "@/constant";
import { useTranslation } from "react-i18next";
import { ChatIcon, CheckIcon, FlashIcon } from "@/Icons";
import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";
import { updateUserData } from "@/features/userSlice";
import { useNavigate } from "react-router-dom";

export const FlashMessageCard = ({user, userIds}) => {
  const { t } = useTranslation();
  const lookingfor = getlookingfor(t)
  const navigate = useNavigate();

  const [ gifSended, setgifSended ] = useState(false);
  const [ loading, setLoading ] = useState(false)

  const dispatch = useDispatch<AppDispatch>();

     const HandleSendMessage = async () => {
        setLoading(true)

        await dispatch(updateUserData({
          userId: userIds.id.toString(),
          updatedData: {
            rewardPoints : userIds.rewardPoints - 5
          }
        }));

        setLoading(false)
        setgifSended(true)
        setTimeout(()=>{
            navigate(`/chat-detail?user1=${userIds.id}&user2=${user.id}`)
        },1000)
      };

      return (
    <Card className="max-w-[250px] border-none bg-transparent" shadow="none">
      <CardHeader className="justify-between gap-3 flex flex-col">
        <div className="flex gap-3">
          <Avatar
            isBordered
            radius="full"
            size="md"
            color="success"
            src={`${BASEURL}${user.photos[0].large}`}
          />
          <div className="flex flex-col items-start justify-center ">
            <h4 className="text-small font-semibold leading-none text-default-600">{user.firstName}</h4>
            <h5 className="text-small tracking-tight text-default-500">
              {lookingfor.find(item => item.id === user.profileData.lookingFor)?.title}
            </h5>
          </div>
        </div>
        <div className="pt-4 pb-4">
          <Badge 
            isOneChar 
            color={gifSended ? "primary" : "warning"}
            size="lg"
            className="flex flex-col"
            classNames={!gifSended? {"badge":"w-[45px]"}:{}}
            content={
              gifSended ? 
              <div className="p-0.5 flex items-center">
                <CheckIcon strokeWidth={3} className="size-4" stroke="#FFFFFF" />
              </div>
              : 
              <div className="p-0.5 flex items-center">
                <FlashIcon className="size-4" fill="#FFFFFF" />
                <p className="font-bold text-[#fff] text-tiny text-s">-5</p>
              </div>
            } 
            placement="bottom-left"
          >
            <Button
              color="success"
              radius="full"
              size="lg"
              isIconOnly
              style={{ width: "72px", height: "72px" }}
              onPress={HandleSendMessage} 
              isLoading={loading}
              isDisabled={gifSended || userIds.rewardPoints < 5}
              variant={"solid"}
              
            >
              <ChatIcon className="size-8" fill="#FFF"/>
            </Button>
          </Badge>

        </div>
        <p color="foreground" className="px-1 text-center font-bold text-xs">{t("You_can_send_a_message_without_matching_with_someone!")}</p>

      </CardHeader>

      {userIds.rewardPoints < 5  &&
          <CardFooter>
              <Link href="/#/energy" anchorIcon={
                <FlashIcon className="size-4" fill="#FFFFFF" />
              } className="text-xs text-center" color="warning">
                {t("You_need_more_energy_to_continue_Tap_here_to_recharge.")}
              </Link>
          </CardFooter>
        }


    </Card>
  );
};
