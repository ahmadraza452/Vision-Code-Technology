import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="hero-bg text-primary-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        <div>
          <img src={logo} alt="Vision Code Technologies" className="h-10 mb-4 brightness-0 invert" />
          <p className="text-sm opacity-80 leading-relaxed">
            Crafting innovative digital solutions with cutting-edge technology. Your vision, our code.
          </p>

          <div className="flex gap-4 mt-5">
            <a href="#" className="hover:opacity-80 transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <Linkedin size={18} />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Services</h4>
          <div className="flex flex-col gap-2 text-sm opacity-80">
            <span>Search Engine Optimization</span>
            <span>Content Marketing</span>
            <span>E-Commerce Development</span>
            <span>Portfolio Websites</span>
            <span>React Applications</span>
            <span>.NET & C# Solutions</span>

          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Contact Info</h4>
          <div className="flex flex-col gap-3 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>umair.ashraf.codes@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+966 54 617 1664</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>St James’s Street, London, England SW1A1HD</span>
            </div>
          </div>
        </div>

      </div>

      <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm opacity-60">
        © {new Date().getFullYear()} Vision Code Technologies. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;