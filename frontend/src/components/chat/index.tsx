import ChatList from "./chatList";
import MatchList from "./matchList";

const ChatPage = () => {

  return (
    <div
      className="w-full h-full"
      style={{
        overflow: "scroll",
        paddingTop: "4.5rem",
        paddingBottom: "6rem",
        paddingLeft:"18px",
        paddingRight:"18px",
        zIndex: 5,
      }}
      id="chatScrollcontainer"
    >

      <div className="rounded-xl mb-2 shadow bg-neutral/10" style={{width:"100%", height:"100%", zIndex:1}}>
        <MatchList/>
      </div>

      
      <ChatList />
      
    </div>
  );
};

export default ChatPage;
