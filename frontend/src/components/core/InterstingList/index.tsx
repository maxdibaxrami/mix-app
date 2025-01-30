import type {Selection} from "@react-types/shared";

import React, { useEffect } from "react";
import {Listbox, ListboxItem, Chip, ScrollShadow, Avatar} from "@nextui-org/react";
import { HashtagIcon } from "@/Icons";
import { useTranslation } from "react-i18next";
import { gethobbies } from "@/constant";



export const ListboxWrapper = ({children}: {children: React.ReactNode}) => (
  <div className="w-full border-small px-1 py-2 bg-neutral/10 rounded-small border-default-200 dark:border-default-100">
    {children}
  </div>
);

export default function InterestingList({onChangeValue, user}) {
  const { t } = useTranslation();

  const hobbies = gethobbies(t)
  
  const [values, setValues] = React.useState<Selection>(new Set(user.interests));

  useEffect(()=> onChangeValue(values) ,[values])
  

  const arrayValues = Array.from(values);

  const topContent = React.useMemo(() => {
    if (!arrayValues.length) {
      return null;
    }

    return (
      <ScrollShadow
        hideScrollBar
        className="w-full flex py-0.5 px-2 gap-1"
        orientation="horizontal"
      >
        {arrayValues.map((value) => (
          <Chip className="bg-neutral" key={value}  >{hobbies.find((hobbies) => `${hobbies.id}` === `${value}`)?.name}</Chip>
        ))}
      </ScrollShadow>
    );
  }, [arrayValues.length]);


  
  return (
    <ListboxWrapper>
      <Listbox
        classNames={{
          base: "w-full",
          list: "max-h-[55vh] overflow-scroll",
        }}
        defaultSelectedKeys={user.interests.map(v=> v.toString())}
        items={hobbies}
        label={t('Selectinterested')}
        selectionMode="multiple"
        topContent={topContent}
        variant="flat"
        onSelectionChange={setValues}
      >
        {(item) => (
          <ListboxItem key={item.id} textValue={item.name}>
            <div className="flex gap-2 items-center">
              <Avatar color="success" icon={<HashtagIcon className="size-5" />} className="flex-shrink-0" size="sm" />
              <div className="flex flex-col">
                <span className="text-small">{item.name}</span>
              </div>
            </div>
          </ListboxItem>
        )}
      </Listbox>
    </ListboxWrapper>
  );
}



