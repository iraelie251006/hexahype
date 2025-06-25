// components/Footer.tsx
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Youtube,
  Github,
  MailPlus,
} from "lucide-react";
import ShinyText from "./ui/Shine";

export default function Footer() {
  return (
    <footer className="border-t bg-[#14DBD8]/20">
        <div className="w-screen backdrop-blur-3xl  bg-[url('/Sprinkle.svg')] bg-no-repeat bg-cover bg-center border-2">
          <div className="max-w-7xl mx-auto max-sm:mx-5 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-gray-800 relative z-10 dark:text-white mt-10">
        {/* Brand & Social */}
        <div>
          <div className="mb-4">
            <ShinyText
              text="Hexahype"
              disabled={false}
              speed={2}
              className={`font-bold text-5xl flex justify-start`}
            />
          </div>
          <p className="mb-4 dark:text-white">
            We are Hexahype team united by a shared mission to
            transform Rwanda's youth through technologia, innovation and Job creation consultation.
          </p>
          <div className="flex gap-3 text-gray-600">
            <Instagram className="w-5 h-5 hover:text-black dark:hover:text-white" />
            <Youtube className="w-5 h-5 hover:text-black dark:hover:text-white" />
            <MailPlus className="w-5 h-5 hover:text-black dark:hover:text-white" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3 dark:text-white text-[20px]">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline dark:text-white text-[15px]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline dark:text-white text-[15px]">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline dark:text-white text-[15px]">
                E-Lab
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline dark:text-white text-[15px]">
                Our product
              </a>
            </li>
          </ul>
        </div>

        {/* Projects */}
        <div>
          <h4 className="font-semibold mb-3 dark:text-white text-[20px]">Projects</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline dark:text-white text-[15px]">
                ######
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3 dark:text-white text-[22px]">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2 dark:text-white text-[15px]">
              <Mail className="w-4 h-4 mt-1" />
              <span>hexahype@gmail.com</span>
            </li>
            <li className="flex items-start gap-2 dark:text-white text-[15px]">
              <Phone className="w-4 h-4 mt-1" />
              <span>+250728449408</span>
            </li>
            <li className="flex items-start gap-2 dark:text-white text-[15px]">
              <MapPin className="w-4 h-4 mt-1" />
              <span>Kigali, Rwanda</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="my-10 border-t border-black dark:border-white pt-4 text-xs text-gray-500 flex justify-between items-center max-w-7xl mx-auto">
        <span className="dark:text-white mt-2 pt-2 text-sm">© 2024 HEXAHYPE.</span>
        <span className="dark:text-white mt-2 pt-2 text-sm">All rights reserved.</span>
      </div>  
        </div>
      
    </footer>
  );
}
