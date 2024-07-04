"use client";

import { IconType } from "react-icons";
import { Category } from "@prisma/client";
import {
  FcEngineering,
  FcFilm,
  FcSportsMode,
  FcMusic,
  FcCalculator,
  FcAddressBook,
  FcCommandLine,
  FcLandscape,
  FcFaq,
} from "react-icons/fc";

import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  Музыка: FcMusic,
  "1С": FcAddressBook,
  "Искусственный интелект": FcSportsMode,
  Бухгалетрия: FcCalculator,
  Программирование: FcCommandLine,
  Спорт: FcLandscape,
  "Английский язык": FcFaq,
  "Техника безопасности": FcEngineering,
};

export const Categories = ({ items }: CategoriesProps) => {
  return (
    <div className="flex items-center pb-2 overflow-x-auto gap-x-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          value={item.id}
          label={item.name}
          icon={iconMap[item.name]}
        />
      ))}
    </div>
  );
};
