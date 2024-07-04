"use client";

import { usePathname } from "next/navigation";
import { Layout, Compass, List, BarChart } from "lucide-react";

import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
  {
    icon: Layout,
    label: "Главная",
    href: "/",
  },
  {
    icon: Compass,
    label: "Поиск",
    href: "/search",
  },
];

const teacherRoutes = [
  {
    icon: List,
    label: "Курсы",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Аналитика",
    href: "/teacher/analytics",
  },
];

export const SidebarRoutes = () => {
  const path = usePathname();

  const isTeacherPage = path?.includes("/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          href={route.href}
          label={route.label}
        />
      ))}
    </div>
  );
};
