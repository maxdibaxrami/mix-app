import { BASEURL } from "@/constant";
import { LikeIcon } from "@/Icons";
import { RootState } from "@/store";
import { Avatar, AvatarGroup, Skeleton } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MatchList = () => {
  const { t } = useTranslation();
  const { data: user } = useSelector((state: RootState) => state.user);
  const { data: match, loading } = useSelector((state: RootState) => state.match);


  return (
    <div style={{position:"relative",zIndex:10}} className="p-2 px-3 rounded-xl">
      <div style={{ paddingBottom: "0.5rem" }} className="flex justify-between items-center">
        <span className="text-large text-default-600 font-bold">
          {t("matches")}
        </span>
      </div>

      <AvatarGroup
        isBordered
        className="px-3"
        style={{ height: "70px" }}
        renderCount={(count) => (
          <p className="text-small text-foreground font-medium ms-2">
            +{count} {t("others")}
          </p>
        )}
      >

      <div  className="flex items-center">
              <Avatar
                as={Link}
                to={`/main?page=likes`}
                color="secondary"
                radius="full"
                size="lg"
                icon={<LikeIcon className="size-8"/>}
              />
          </div>

        {/* Loading skeletons */}
        {loading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <div key={index}>
              <Skeleton style={{ width: "72px", height: "72px" }} className="flex rounded-full" />
            </div>
          ))
        ) : (
          /* Render filtered matches */
          match.map((value, index) => {
            const user2 = user.id !== value.likedUser.id? value.likedUser : value.user
            return <div key={index} className="flex items-center">
              <Avatar
                as={Link}
                to={`/chat-detail?user1=${value.likedUser.id}&user2=${value.user.id}`}
                color={user2.premium? "warning" : "danger" }
                radius="full"
                size="lg"
                src={`${BASEURL}${user2.photos[0].smallUrl}`}
              />
            </div>
            })
        )}

  
      </AvatarGroup>
    </div>
  );
};

export default MatchList;
