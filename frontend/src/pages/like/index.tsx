import LikeCard from "./likeCard";
import { motion } from "framer-motion";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { NotFoundLike } from "@/Icons/notFoundLike";
import { Button } from "@nextui-org/button";
import { FireIcon } from "@/Icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Spinner } from "@nextui-org/react";



export default function LikesPage() {
  const { t } = useTranslation();  // Initialize translation hook
  const { data, loading } = useSelector((state: RootState) => state.like);  // Assuming the like slice is in state.like

  if(loading){
    return <div className="h-screen w-screen flex flex-col p-6 items-center justify-center"> 
      <Spinner size="lg" />
    </div>
  }
  if(!loading && data.length===0){
    return <div className="h-screen w-screen flex flex-col p-6 items-center justify-center"> 
        <NotFoundLike/>
        <div className="flex gap-4 flex-col px-6 text-center items-center">
          <p className="text-tiny">{t("nolikemessage")}</p>
          <Button as={Link} to={"/main?page=explore"} color="primary" endContent={<FireIcon />}>
            {t('Explore')}
          </Button>
        </div>
    </div>
  }
  return (
    <motion.div 
      className="grid gap-2 grid-cols-2 py-2"
      style={{
        paddingTop: "4.5rem",
        paddingBottom: "6rem",
        paddingLeft:"18px",
        paddingRight:"18px"
      }}
    >

      {data.map((value, index) => (<LikeCard key={index} data={value} />))}

    </motion.div >
  );
}
