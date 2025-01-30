import {Skeleton} from "@nextui-org/skeleton";

const NearByCardSkelete = () => {
  return (
    <div className={"relative bg-default/70 rounded-lg aspect-square w-full"}>
      <div
        className="border-none w-full"
      >
        <Skeleton
          style={{height:"30px"}}
          className="border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-2 w-[calc(100%_-_8px)] shadow-small ml-1 z-10"
        />
      </div>
    </div>
  );
};

export default NearByCardSkelete;


