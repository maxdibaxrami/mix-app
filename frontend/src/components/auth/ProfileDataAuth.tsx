import useViewportHeight from "@/hooks/useViewPortHook";
import { ProfileIcon } from "@/Icons";
import { Input, Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const ProfileDataAuth = ({ setSlideAvailable, setSlideUnAvailable, user }) => {
  const { t } = useTranslation();
  
  const [name, setName] = useState(user.firstName);
  const [bio, setBio] = useState(user.bio);
  const height = useViewportHeight();
  
  console.log(height)


  // Check form validity to allow slide changes
  useEffect(() => {
    if (name.length > 2 && bio.length > 1 && name.length < 18 && bio.length < 100) {
      setSlideAvailable("firstName", name);
      setSlideAvailable("bio", bio);
      return;
    }
    setSlideUnAvailable();
  }, [name, bio]);

  return (
    <div className="flex justify-between flex-col px-6 pt-8 pb-4">
      <form className="flex w-full flex-col gap-2">
        <div className="mb-1 mt-1 flex gap-2 items-center">
          <div className="flex items-center rounded-full justify-center p-2 bg-default/30 text-primary/80">
            <ProfileIcon className="size-8" />
          </div>
          <p className="font-bold text-medium">{t('Fillprofiledata')}</p>
        </div>

        <Input
          variant="bordered"
          classNames={{ "inputWrapper": "bg-neutral/10 !border-primary/40" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
          isRequired
          label={t('name')}
          type="text"
          color="default"
          className="w-full"
          description={t('min_max_2_18')}

        />

        <Textarea
          className="w-full"
          label={t('Bio')}
          isRequired
          value={bio}
          classNames={{ "inputWrapper": "bg-neutral/10 !border-primary/40" }}
          variant="bordered"
          color="default"
          onChange={(e) => setBio(e.target.value)}
          placeholder={t('EnteryourBio')}
          description={t('min_max_2_100')}

        />
      </form>
    </div>
  );
};

export default ProfileDataAuth;
