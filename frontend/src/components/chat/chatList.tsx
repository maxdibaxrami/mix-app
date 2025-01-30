import { Listbox, ListboxItem, Avatar, Chip, Spinner } from "@nextui-org/react";
import { ListboxWrapper } from "./listWapper";
import ChatItemMenu from "./chatItemMenu";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { BASEURL } from "@/constant";
import { AppDispatch, RootState } from "@/store";
import { updateUserData } from "@/features/userSlice";
import { deleteConversation, fetchConversations } from "@/features/conversationsSlice";
import ChatFiltermenu from "./chatFilterMenu";
import { useEffect, useMemo, useState } from "react";
import type {Selection} from "@nextui-org/react";
import { NotFoundChatImage } from '@/Icons/notFoundChat'

const ChatList = () => {

  const dispatch: AppDispatch = useDispatch();

  const { t } = useTranslation();
  const { data, loading, error } = useSelector((state: RootState) => state.conversation);
  const { data: user, loading: selfuserLoading } = useSelector((state: RootState) => state.user);
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(["new"]));

  const HandleAddToFavorite = async (value) => {
    const arrayOfIds = user.favoriteUsers.map(v=> v.id)
    await dispatch(updateUserData({
      userId: user.id.toString(),
      updatedData: {
        favoriteUsers: Array.isArray(arrayOfIds) ? [...arrayOfIds, value] : [value]  // Ensure favoriteUsers is an array
      }
    }));
  };

  const HandleRemoveFromFavorite = async (value) => {
    const arrayOfIds = user.favoriteUsers.map(v=> v.id)

    await dispatch(updateUserData({
      userId: user.id.toString(),
      updatedData: {
        favoriteUsers: Array.isArray(arrayOfIds)
          ? arrayOfIds.filter(favorite => favorite != value)  // Remove the user with the matching id
          : []  // If favoriteUsers is not an array, set it to an empty array
      }
    }));
  };

  const HandleBlockUser = async (value) => {
    const arrayOfIds = user.blockedUsers.map(v=> v.id)
    await dispatch(updateUserData({
      userId: user.id.toString(),
      updatedData: {
        blockedUsers: Array.isArray(arrayOfIds) ? [...arrayOfIds, value] : [value]  // Ensure blockedUsers is an array
      }
    }));
  };
  
 {/**? const HandleUnblockUser = async (value) => {
    await dispatch(updateUserData({
      userId: user.id.toString(),
      updatedData: {
        blockedUsers: Array.isArray(user.blockedUsers)
          ? user.blockedUsers.filter(blocked => blocked !== value)  // Remove the user with the matching id
          : []  // If blockedUsers is not an array, set it to an empty array
      }
    }));
  }; */}

  const handleDelete = (userId1: number, userId2: number) => {
    dispatch(deleteConversation({ userId1, userId2 }));
  };
  
  const truncateText = (value: string, maxLength: number) => {
    if (!value) return '';
    if (value.length <= maxLength) return value;
    return value.slice(0, maxLength) + "…";  // Truncate text with an ellipsis
  };

  if (loading && selfuserLoading) return <div className="flex items-center pt-2 pb-2"><Spinner size="lg" /></div>;
  if (error) return <div>Error: {error}</div>;

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
    [selectedKeys],
  );

  // Filter the conversations based on whether the user is in the favorites list if "Favorite" is selected
  const filteredData = useMemo(() => {
    return data?.filter(item => {
      const isSender = item.senderId === user.id;
      const targetUser = isSender ? item.recipientId : item.senderId;
  
      // Exclude conversations where the target user is blocked
      //if (user.blockedUsers.some(blockedUser => blockedUser == targetUser.toString())) {
        //return false;  // Exclude blocked users
      //}
  
      // If "Favorite" is selected, only show favorite users
      if (selectedValue === "Favorite") {
        return user.favoriteUsers.map(v=> v.id).includes(targetUser);
      }
  
      // Otherwise, return all users except blocked ones
      return true;
    }) || [];
  }, [data, user.favoriteUsers, selectedValue, user]);
  
  useEffect(()=>{
      dispatch(fetchConversations(user.id.toString()));
  },[])

  return (
    <div style={{borderRadius:"12px"}} className="bg-neutral/10 mt-1">
      <div className="flex justify-between px-3 py-2 items-center ">
        <span  className="text-large text-default-600 font-bold">
          {t("chat")}
        </span>
        <ChatFiltermenu chatOrder={selectedKeys} setChatOrder={setSelectedKeys}/>
      </div>
      {filteredData.length===0? 
        <div className="flex flex-col p-6 items-center justify-center"> 
        <NotFoundChatImage/>
          <div className="flex gap-4 flex-col px-6 text-center items-center">
            <p className="text-tiny">{t("nolikemessage")}</p>
          </div>
        </div>
        :
        <ListboxWrapper>
          <Listbox
            classNames={{
              base: "w-full",
              list: "overflow-scroll",
            }}
            items={filteredData}  // Use the filtered data
            label="Assigned to"
            variant="solid"
          >
            {(item) => {
              const isSender = item.senderId === user.id;
              const targetUser = isSender ? item.recipientId : item.senderId;
              const targetFirstName = isSender ? item.firstName : item.senderFirstName;
              const targetPhotoUrl = isSender ? item.photoUrl : item.senderPhotoUrl;
              if(item.senderId == item.recipientId){
                return null
              }
              // item.senderId != user.id &&
              return (
                <ListboxItem
                  key={item.userId}
                  
                  endContent={
                    <ChatItemMenu 
                      data={item}
                      targetUser={targetUser}
                      HandleAddToFavorite={HandleAddToFavorite}
                      HandleRemoveFromFavorite={HandleRemoveFromFavorite}
                      handleDelete={handleDelete}
                      HandleBlockUser={HandleBlockUser}
                    />
                  }
                  startContent={
                    <Avatar
                      isBordered
                      color={item.readAt == null && item.senderId != user.id ? "primary" : "default"}
                      radius="full"
                      size="lg"
                      src={`${BASEURL}${targetPhotoUrl}`}
                    />
                  }
                  textValue={truncateText(targetFirstName, 10)}
                >
                  <Link to={`/chat-detail?user1=${item.senderId}&user2=${item.recipientId}`}>
                    <div className="flex gap-2 items-center" style={{ width: "100%" }}>
                      <div className="flex pl-2 flex-col">
                        <span
                          className={
                              item.readAt == null && item.senderId != user.id 
                              ? " text-handller-chat font-bold text-default-700"
                              : "text-handller-chat font-normal text-default-700"
                          }
                        >
                          {targetFirstName}
                          <Chip
                            className={item.readAt == null && item.senderId != user.id  ?  "visible ml-1 px-2" : "hidden"}
                            color="primary"
                            size="sm"
                          >
                            +1 {t("new")}
                          </Chip>
                        </span>
                        <span
                          className={
                            item.readAt == null && item.senderId != user.id 
                                ? "text-tiny text-handller-chat font-bold text-default-700 mt-1 truncate overflow-hidden text-ellipsis w-32"
                                : "text-tiny font-normal text-handller-chat text-default-700 mt-1 truncate overflow-hidden text-ellipsis w-32"
                          }
                        >
                          {truncateText(item.lastMessage, 20)}
                        </span>
                      </div>
                    </div>
                  </Link>
                </ListboxItem>
              );
            }}
          </Listbox>
        </ListboxWrapper>
      }

    </div>
  );
};

export default ChatList;
