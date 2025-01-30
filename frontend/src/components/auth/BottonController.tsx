import { Navbar, NavbarContent, Button, Progress } from "@nextui-org/react";
import { ArrowRight, ArrowLeft } from "@/Icons/index";
import { useTranslation } from 'react-i18next';

const BottomController = ({ nextPage, prevPage, selectedTab, nextSlideAvalable, handleSignup }) => {
  const {t, i18n } = useTranslation();
  
  return (
      <Navbar isBlurred={false} className="w-full bg-transparent">
        <NavbarContent justify="start">
          <Button
            isIconOnly
            aria-label="Like"
            color="primary"
            size="lg"
            radius="full"
            isDisabled={selectedTab === 0 }
            onClick={prevPage}
            style={{transform:`${i18n.language==="ar" || i18n.language === 'fa'?"rotate(180deg)":"rotate(0deg)"}`}}
          >
            <ArrowLeft />
            
          </Button>
          
        </NavbarContent>
        <NavbarContent className="flex w-full gap-4" justify="center">
         <Progress style={{transform:`${i18n.language==="ar" || i18n.language === 'fa'?"rotate(180deg)":"rotate(0deg)"}`}} isDisabled={selectedTab === 0 } className="w-full" color="primary" value={selectedTab * 11} />
        </NavbarContent>
        <NavbarContent justify="end">
          <Button
            isIconOnly={selectedTab != 0}
            aria-label="Like"
            color="primary"
            size="lg"
            radius="full"
            style={{transform:`${i18n.language==="ar" || i18n.language === 'fa'?"rotate(180deg)":"rotate(0deg)"}`}}
            isDisabled={!nextSlideAvalable || selectedTab === 9}
            onClick={()=>{
              if(selectedTab===8){
                nextPage() 
                handleSignup()
              }else{
                 nextPage() 
              }  
            }}
          >

            {selectedTab == 0 &&
              <span style={{transform:`${i18n.language==="ar" || i18n.language === 'fa'?"rotate(180deg)":"rotate(0deg)"}`}}>
                  {t("Next")}
              </span>
            }
           
            <ArrowRight />
          </Button>
        </NavbarContent>
      </Navbar>
  );
};

export default BottomController;
