import { useEffect } from "react";
import { Modal, ModalContent, ModalBody, Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Image } from "@nextui-org/react";

import { BlurIn } from "@/components/animate/blurIn";
import { ChatIcon } from "@/Icons/index";

import { MatchConfetti } from "@/components/explore/buttonEffect";
import { BASEURL } from "@/constant";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const MatchModal = ({ isOpen, onClose, modalData, thisUserId }) => {
  const { t, i18n } = useTranslation();  // Initialize translation hook

  useEffect(() => {
    if (isOpen) {
      MatchConfetti();
    }
  }, [isOpen]);

  return (
    <Modal
      hideCloseButton
      isOpen={isOpen}
      placement={"bottom-center"}
      className="z-100"
      size="full"
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <ModalContent>
        {modalData &&  <>
          <ModalBody className="flex justify-center items-center">
            <motion.div
              animate={{
                scale: [1, 1.2, 1.2, 1.2, 1],
                rotate: [0, 0, 5, -5, 0],
                borderRadius: ["50%", "50%", "50%", "50%", "50%"],
              }}
              className="box"
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <Image
                alt={t("hero_image_alt")} // Translated text for image alt
                src={modalData?.photos[0]?.small? `${BASEURL}${modalData.photos[0].small}` : ''}
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
            </motion.div>
            <BlurIn data={true}>
              <div className="mb-4 text-center mt-4">
                <p className="text-5xl text-center font-bold">{t("match_text")}</p>  {/* Translated static text */}
              </div>
              <div className="text-center">
                {match_text[`MatchText${i18n.language}`][
                  Math.floor(Math.random() * 11)
                  /* @ts-ignore */
                ].replaceAll("[Name]", modalData.firstName)}
              </div>
            </BlurIn>

            <div className="flex gap-4 items-center">
              <Button color="default" variant="bordered" onClick={onClose}>
                {t("keep_swiping")}  {/* Translated button text */}
              </Button>

              <Button
                color="primary"
                endContent={<ChatIcon />}
                variant="solid"
                as={Link}
                to={`/chat-detail?user1=${thisUserId}&user2=${modalData.id}`}
              >                  

                {t("send_message")} {/* Translated button text */}
              </Button>
            </div>
          </ModalBody>
        </>}
       
      </ModalContent>
    </Modal>
  );
};

export default MatchModal;
const match_text = {
  MatchTexten: [
    "Hey [Name], swipe right for an adventure! What’s the most spontaneous thing you’ve done lately?",
    "We matched, [Name]! Now, what’s the first fun fact you want to share about yourself?",
    "Quick—what’s your go-to karaoke song, [Name]?",
    "If you could travel anywhere right now, where would you go, [Name]?",
    "Looks like we’re stuck with each other, [Name]! What are your thoughts on pizza topping debates?",
    "Does this mean we’re dating now, [Name]? Because I’m totally ready for brunch dates!",
    "What’s one thing you’re really passionate about, [Name]?",
    "I’d love to know your favorite way to spend a weekend, [Name].",
    "Your profile caught my eye, [Name]—what’s something you’re really proud of?",
    "I’m intrigued by your taste in [interest from their profile], [Name]. Want to share more?",
    "Let’s skip the small talk, [Name]—what’s your favorite adventure you've been on?",
    "What’s the best thing that happened to you this week, [Name]?",
  ],
  MatchTextru: [
    "Привет, [Name], свайпни вправо, чтобы начать приключение! Что было самым спонтанным, что ты делал(а) недавно?",
    "Мы совпали, [Name]! Так что, какой будет наш первый интересный факт о тебе?",
    "Быстро—какая твоя любимая песня для караоке, [Name]?",
    "Если бы ты мог(ла) поехать куда угодно прямо сейчас, куда бы ты поехал(а), [Name]?",
    "Похоже, что мы застряли друг с другом, [Name]! Как ты относишься к спорам о топпингах для пиццы?",
    "Значит, мы теперь встречаемся, [Name]? Я уже готов(а) к свиданиям с бранчем!",
    "Что-то одно, чем ты действительно увлечен(а), [Name]?",
    "Мне интересно узнать, как ты любишь проводить выходные, [Name].",
    "Твой профиль привлек мое внимание, [Name]—что-то, чем ты гордишься?",
    "Меня интригует твой вкус в [интерес из их профиля], [Name]. Хочешь рассказать больше?",
    "Давай пропустим все лишнее, [Name]—какое было твоё любимое приключение?",
    "Что самое хорошее случилось с тобой на этой неделе, [Name]?",
  ],
  MatchTextar: [
    "مرحبًا [Name]، اسحب لليمين من أجل مغامرة! ما هو أكثر شيء عفوي قمت به مؤخرًا؟",
    "لقد تطابقنا، [Name]! الآن، ما هو أول حقيقة ممتعة عن بعضنا البعض؟",
    "سريعًا—ما هي أغنيتك المفضلة في الكاريوكي، [Name]؟",
    "إذا كان بإمكانك السفر إلى أي مكان الآن، إلى أين ستذهب، [Name]؟",
    "يبدو أننا عالقون مع بعضنا البعض، [Name]! ما رأيك في مناقشات توبينغ البيتزا؟",
    "هل يعني هذا أننا الآن نتواعد، [Name]؟ لأنني مستعد تمامًا للمواعيد الصباحية!",
    "ما هو الشيء الذي أنت شغوف به حقًا، [Name]؟",
    "أود أن أعرف كيف تحب قضاء عطلة نهاية الأسبوع، [Name].",
    "ملفك الشخصي جذب انتباهي، [Name]—ما هو شيء تفتخر به؟",
    "أنا فضولي بشأن ذوقك في [اهتمام من ملفهم الشخصي]، [Name]. هل ترغب في مشاركة المزيد؟",
    "دعنا نتخطى الحديث البسيط، [Name]—ما هي مغامرتك المفضلة التي قمت بها؟",
    "ما هو أفضل شيء حدث لك هذا الأسبوع، [Name]؟",
  ],
  MatchTextfa: [
    "سلام [Name]، برای یک ماجراجویی به راست بکش! آخرین کارهای خود را که به طور تصادفی انجام داده‌ای، چی بوده؟",
    "ما هم‌زمان شدیم، [Name]! حالا اولین حقیقت جالب در مورد همدیگه چیه؟",
    "سریع—آهنگ مورد علاقه‌ات برای کارائوکه چیه، [Name]؟",
    "اگر می‌توانستی همین حالا به هر جایی سفر کنی، کجا می‌رفتی، [Name]؟",
    "به نظر می‌رسه که ما با هم گیر افتادیم، [Name]! نظر تو در مورد بحث‌های افزودنی‌های پیتزا چیه؟",
    "یعنی الان ما با هم در حال دوستی هستیم، [Name]? چون من کاملاً آماده هستم برای قرارهای ناهار شنبه!",
    "یک چیزی که واقعاً به آن علاقه‌مندی، [Name]؟",
    "دوست دارم بدانم چگونه تعطیلات آخر هفته‌ات را می‌گذرانی، [Name].",
    "پروفایلت توجه من را جلب کرد، [Name]—چیزی که به آن افتخار می‌کنی چیه؟",
    "من در مورد سلیقه‌ات در [علایق از پروفایلشان] کنجکاو هستم، [Name]. دوست داری بیشتر به اشتراک بذاری؟",
    "بیایید صحبت‌های بی‌مورد رو رد کنیم، [Name]—مغامرت مورد علاقه‌ات چی بوده؟",
    "بهترین چیزی که این هفته برایت اتفاق افتاده چی بوده، [Name]؟",
  ],
};
