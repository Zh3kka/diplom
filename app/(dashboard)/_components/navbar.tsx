import { MobileSidebar } from "./mobile-sidebar";
import { NavbarRoutes } from "@/components/navbar-routes";

export const Navbar = () => {
  return (
    <div className="flex items-center h-full p-3 bg-white border-b shadow-sm z-50">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};
