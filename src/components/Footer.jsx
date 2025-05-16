import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo-notext.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white pt-[8rem] pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          {/* Logo and description section */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <a href="#">
              <img src={logo} alt="Logo" className="h-16 mb-4" />
            </a>
            <p className="text-gray-600 mb-4 text-justify">
              {t("footer.about")}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600">
                <FaTwitter />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-blue-600">
                <FaInstagram />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-blue-600">
                <FaLinkedin />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-blue-600">
                <FaYoutube />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* Empty space for layout */}
          <div className="hidden md:block md:w-1/4"></div>

          {/* Contact information section */}
          <div className="md:w-1/3">
            <h2 className="text-lg font-semibold mb-4">Contact us</h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="mr-2">📧</span>
                <a
                  href="official@nirvanniagsejahtera.co.id"
                  className="text-gray-600"
                >
                  official@nirvananiagasejahtera.co.id
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2 ">📞</span>
                <a
                  href="https://wa.me/6282188878801"
                  className="text-gray-600"
                  target="_blank"
                >
                  Info : 082188878801{" "}
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">📍</span>
                <div className="text-gray-600">
                  Jl. Kima VI No.B2 Kav. F3/B1, Daya, Biringkanaya, Makassar
                  City, South Sulawesi 90241
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-200 my-6" />

        {/* Copyright section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-2 md:mb-0">
            Copyright © 2025 PT. Nirvana Niaga Sejahtera
          </p>
          <p className="text-gray-600 text-sm">All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
