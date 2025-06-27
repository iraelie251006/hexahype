import { IconHome, IconUser, IconMessage } from "@tabler/icons-react";

export const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "E-Lab",
    link: "/e-lab",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Prototype",
    link: "/prototype",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];
