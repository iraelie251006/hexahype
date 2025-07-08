// components/Footer.tsx
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Youtube,
  MailPlus,
} from "lucide-react";
import ShinyText from "./ui/Shine";

export default function Footer() {
  return (
    <footer className="border-t bg-[#14DBD8]/20">
      <div className="w-screen border-2  bg-[url('/Sprinkle.svg')] bg-cover bg-center bg-no-repeat backdrop-blur-3xl">
        <div className="relative z-10 mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-10 text-sm text-gray-800 dark:text-white max-sm:mx-5 md:grid-cols-4">
          {/* Brand & Social */}
          <div>
            <div className="mb-4">
              <ShinyText
                text="Hexahype"
                disabled={false}
                speed={2}
                className={`flex justify-start text-5xl font-bold`}
              />
            </div>
            <p className="mb-4 dark:text-white">
              We are Hexahype team united by a shared mission to transform
              Rwanda&apos;s youth through technologia, innovation and Job creation
              consultation.
            </p>
            <div className="flex gap-3 text-gray-600">
              <Instagram className="size-5 hover:text-black dark:hover:text-white" />
              <Youtube className="size-5 hover:text-black dark:hover:text-white" />
              <MailPlus className="size-5 hover:text-black dark:hover:text-white" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-[20px] font-semibold dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={"/"}
                  className="text-[15px] hover:underline dark:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href={"/about"}
                  className="text-[15px] hover:underline dark:text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href={"/e-lab"}
                  className="text-[15px] hover:underline dark:text-white"
                >
                  E-Lab
                </a>
              </li>
              <li>
                <a
                  href={"/prototype"}
                  className="text-[15px] hover:underline dark:text-white"
                >
                  Our product
                </a>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="mb-3 text-[20px] font-semibold dark:text-white">
              Projects
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[15px] hover:underline dark:text-white"
                >
                  ######
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-[22px] font-semibold dark:text-white">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-[15px] dark:text-white">
                <Mail className="mt-1 size-4" />
                <span>hexahype@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-[15px] dark:text-white">
                <Phone className="mt-1 size-4" />
                <span>+250728449408</span>
              </li>
              <li className="flex items-start gap-2 text-[15px] dark:text-white">
                <MapPin className="mt-1 size-4" />
                <span>Kigali, Rwanda</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mx-auto my-10 flex max-w-7xl items-center justify-between border-t border-black pt-4 text-xs text-gray-500 dark:border-white">
          <span className="mt-2 pt-2 text-sm dark:text-white">
            © 2024 HEXAHYPE.
          </span>
          <span className="mt-2 pt-2 text-sm dark:text-white">
            All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
