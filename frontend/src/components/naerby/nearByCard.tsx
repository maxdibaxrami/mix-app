import { Card, CardFooter, Image } from "@nextui-org/react";
import { PerimumIcon, VerifyIconFill } from "@/Icons/index";
import { BASEURL } from "@/constant";
import { Link } from "react-router-dom";

const NearByCard = ({ data }) => {
  return (
      <Card
        isPressable
        disableRipple
        radius="none"
        disableAnimation
        className="border-none relative"
        as={Link}
        to={`/user?userId=${data.id}`}
      >
        <Image
          alt="Woman listing to music"
          className="object-cover aspect-square"
          loading="lazy"
          radius="none"
          src={`${BASEURL}${data.photo}`}
          style={{ height: "100%", width: "100%" }}
        />
      <CardFooter style={{height:"32px"}} className="justify-between z-10 bg-background/90 overflow-hidden py-0.5 px-1 absolute before:rounded-xl bottom-0 shadow-small z-10">
            <div className=" w-full">
                <div className="flex justify-between items-center">
                  <p style={{textAlign:"start"}} className="flex items-center text-tiny text-foreground/80 text-handller">
                    {`${data.firstName} , ${data.age}`}

                   {data.verifiedAccount && <VerifyIconFill fill="#21b6a8" className="mx-1 size-5"/> }
                   {data.premium && <PerimumIcon className="size-5" />}
                  </p>

                </div>
              </div>
          </CardFooter>
       

      </Card>
 
  );
};

export default NearByCard;
