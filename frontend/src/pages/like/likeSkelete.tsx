import {Skeleton} from "@nextui-org/skeleton";

const LikeCardSkelete = () => {
  return (
    <div className={"relative aspect-square w-full mb-8"}>
      <Skeleton
        className="border-none w-full rounded-lg relative"
        style={{backgroundColor: "transparent" }}
      >
        <Skeleton
          className="object-cover w-full h-full w-full aspect-square h-full maxcontentimportant w-full aspect-square h-full"
          style={{ width: "100%", height: "100%",maxWidth:"unset" }}
        />
      </Skeleton>
    </div>
  );
};

export default LikeCardSkelete;
