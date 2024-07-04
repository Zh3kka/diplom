import Image from "next/image";

export const Logo = () => {
  return <Image priority alt="Logo" width={70} height={70} src="/logo.svg" />;
};
