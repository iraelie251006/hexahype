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
    <footer className="bg-[#222] backdrop-blur-lg border-t border-gray-200 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-gray-800">
        {/* Brand & Social */}
        <div>
          <div className="mb-4">
            <ShinyText
              text="Hexahype"
              disabled={false}
              speed={2}
              className={`font-bold text-4xl flex justify-start`}
            />
          </div>
          <p className="mb-4">
            We are Pan-African Techpreneurs united by a shared mission to
            transform Rwanda's public transport system.
          </p>
          <div className="flex gap-3 text-gray-600">
            <Instagram className="w-5 h-5 hover:text-black" />
            <Youtube className="w-5 h-5 hover:text-black" />
            <MailPlus className="w-5 h-5 hover:text-black" />
            <Github className="w-5 h-5 hover:text-black" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                E-lab Challenges
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our product
              </a>
            </li>
          </ul>
        </div>

        {/* Projects */}
        <div>
          <h4 className="font-semibold mb-3">Projects</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Gerayo
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-1" />
              <span>info@sorwazini.tech</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-1" />
              <span>+2348167568143</span>
            </li>
            <li className="flex items-start gap-2">
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
    </footer>
  );
}
