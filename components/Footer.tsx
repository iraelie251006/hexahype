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
    <footer className="bg-[url('/Sprinkle.svg')] bg-no-repeat bg-cover bg-center backdrop-blur-3xl border-t border-gray-200">
        <div className="border-4 w-full inset-0 backdrop-blur-3xl bg-transparent">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-gray-800 border-4 relative z-10 dark:text-white">
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
            We are Pan-African Techpreneurs united by a shared mission to
            transform Rwanda's public transport system.
          </p>
          <div className="flex gap-3 text-gray-600">
            <Instagram className="w-5 h-5 hover:text-black dark:hover:text-white" />
            <Youtube className="w-5 h-5 hover:text-black dark:hover:text-white" />
            <MailPlus className="w-5 h-5 hover:text-black dark:hover:text-white" />
            <Github className="w-5 h-5 hover:text-black dark:hover:text-white" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3 dark:text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline dark:text-white text-[20px]">
                home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline dark:text-white text-[20px]">
                E-lab Challenges
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline dark:text-white text-[20px]">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline dark:text-white text-[20px]">
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
              <a href="#" className="hover:underline dark:text-white text-[20px]">
                Gerayo
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3 dark:text-white text-[22px]">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2 dark:text-white text-[17px]">
              <Mail className="w-4 h-4 mt-1" />
              <span>hexahype@gmail.com</span>
            </li>
            <li className="flex items-start gap-2 dark:text-white text-[17px]">
              <Phone className="w-4 h-4 mt-1" />
              <span>+250728449408</span>
            </li>
            <li className="flex items-start gap-2 dark:text-white text-[17px]">
              <MapPin className="w-4 h-4 mt-1" />
              <span>Kigali, Rwanda</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t pt-4 text-xs text-gray-500 flex justify-between items-center max-w-7xl mx-auto">
        <span>© 2024 HEXAHYPE.</span>
        <span>All rights reserved.</span>
      </div>  
        </div>
      
    </footer>
  );
}
