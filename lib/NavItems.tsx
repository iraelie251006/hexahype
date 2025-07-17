import { IconHome, IconUser } from "@tabler/icons-react";
import { Mountain, Rocket } from "lucide-react";

export const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="size-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <IconUser className="size-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "E-Lab",
    link: "/e-lab",
    icon: <Mountain className="size-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Prototype",
    link: "/prototype",
    icon: <Rocket className="size-4 text-neutral-500 dark:text-white" />,
  },
];
