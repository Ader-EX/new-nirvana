import { useState } from "react";
import {
  RiArrowDropDownLine,
  RiArrowDropRightLine,
  RiMailFill,
  RiPhoneFill,
} from "react-icons/ri"; // Dropdown arrow icon
import logo from "../assets/logo-notext.png";
import ukFlag from "../assets/uk.svg";
import idFlag from "../assets/id.svg";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeParentDropdown, setActiveParentDropdown] = useState(null);
  const [activeChildDropdown, setActiveChildDropdown] = useState(null);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleParentDropdownToggle = (key) => {
    setActiveParentDropdown((prev) => (prev === key ? null : key));
    setActiveChildDropdown(null);
  };

  const handleChildDropdownToggle = (key) => {
    setActiveChildDropdown((prev) => (prev === key ? null : key)); // Toggle child dropdowns
  };

  const menuItems = [
    {
      name: t("navbar.home"),
      href: "/",
    },
    {
      name: t("navbar.about"),
      children: [
        { name: t("navbar.aboutPage"), href: "/about" },
        { name: t("navbar.visionMission"), href: "/visi-misi" },
      ],
    },
    {
      name: t("navbar.products"),
      children: [
        { name: t("navbar.processed"), href: "/produk-olahan" },
        { name: t("navbar.raw"), href: "/produk-mentah" },
      ],
    },
    {
      name: t("navbar.testimonials"),
      href: "/testimoni",
    },
    {
      name: t("navbar.contacts"),
      href: "/contact",
    },
  ];

  const renderDropdown = (children, parentKey, isMobile = false) => (
    <ul
      className={`${
        isMobile
          ? " flex-col items-center bg-white w-full"
          : "flex flex-col bg-white shadow-lg border rounded-md w-full"
      }`}
    >
      {children.map((child, index) => {
        const childKey = `${parentKey}-${index}`;
        return (
          <li key={childKey} className={`relative ${isMobile ? "" : "group"}`}>
            <a
              href={child.href || "#"}
              className={`flex px-2 py-2 justify-between w-full ${
                isMobile
                  ? "text-[#3A55B4] py-3 font-semibold hover:bg-yellow-100"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
              onClick={(e) => {
                if (child.children) {
                  e.preventDefault(); // Prevent navigation if the item has children
                  handleChildDropdownToggle(childKey);
                }
              }}
            >
              {child.name}
              {child.children && (
                <span className="ml-2 text-xl self-center">
                  <RiArrowDropRightLine />
                </span>
              )}
            </a>
            {child.children && activeChildDropdown === childKey && (
              <div
                className={`${
                  isMobile
                    ? "flex  w-full pl-4"
                    : "absolute left-full top-0 ml-2 w-48"
                }`}
              >
                {renderDropdown(child.children, childKey, isMobile)}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );

  const renderDesktopMenu = (items) => (
    <ul className="hidden md:flex flex-row items-center space-x-8 ">
      {items.map((item, index) => {
        const itemKey = `desktop-${index}`;
        return (
          <li key={itemKey} className="relative group">
            <a
              href={item.href || "#"}
              className="py-2 px-3 flex font-semibold text-[#3A55B4] hover:bg-gray-100 rounded"
              onClick={(e) => {
                if (item.children) {
                  e.preventDefault();
                  handleParentDropdownToggle(itemKey);
                }
              }}
            >
              {item.name}
              {item.children && (
                <span className="ml-1 self-center">
                  <RiArrowDropDownLine className="text-xl" />
                </span>
              )}
            </a>
            {item.children && activeParentDropdown === itemKey && (
              <div className="absolute top-full left-0 mt-2 w-48">
                {renderDropdown(item.children, itemKey)}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );

  const renderMobileMenu = (items) => (
    <ul className="flex flex-col items-start space-y-2">
      {items.map((item, index) => {
        const itemKey = `mobile-${index}`;
        return (
          <li key={itemKey} className="flex flex-col items-start w-full">
            {item.href ? (
              <a
                href={item.href}
                className="flex items-center justify-between py-3 px-4 font-semibold text-[#3A55B4] w-full hover:bg-yellow-100"
              >
                {item.name}
              </a>
            ) : (
              <div
                className="flex items-center justify-between py-3 px-4 font-semibold text-[#3A55B4] w-full"
                onClick={() => handleParentDropdownToggle(itemKey)}
              >
                <span>{item.name}</span>
                {item.children && (
                  <button className="text-2xl">
                    <RiArrowDropDownLine />
                  </button>
                )}
              </div>
            )}
            {item.children && activeParentDropdown === itemKey && (
              <div className="w-full">
                {renderDropdown(item.children, itemKey, true)}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      <nav className="bg-white border-gray-200 shadow-md fixed top-0 w-full z-50">
        <div className="bg-[#3A55B4] w-full py-4 px-4 text-white text-xs font-extralight flex flex-wrap justify-start gap-y-2 sm:gap-y-0 sm:gap-x-6">
          <section className="flex gap-1 items-center">
            <RiPhoneFill className="self-center" />
            <a href="https://wa.me/6282188878801" target="_blank">
              Info : 082188878801{" "}
            </a>
          </section>
          <section className="flex gap-1 items-center">
            <RiMailFill className="self-center" />
            <p>official@nirvananiagasejahtera.co.id</p>
          </section>
          <div className="hidden sm:block">||</div>{" "}
          <div className="relative z-50">
            <button
              onClick={() => setIsLangDropdownOpen((prev) => !prev)}
              className="flex items-center gap-1 hover:text-gray-300"
            >
              <img
                src={i18n.language === "en" ? ukFlag : idFlag}
                alt="flag"
                className="w-4 h-3 mr-2"
              />
              <span>{i18n.t("language")}</span> {i18n.language.toUpperCase()}
              <RiArrowDropDownLine className="text-xl" />
            </button>
            {isLangDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-32 bg-white text-gray-800 shadow-lg rounded">
                <li
                  className="flex items-center px-4 py-2 font-bold hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    i18n.changeLanguage("en");
                    setIsLangDropdownOpen(false);
                  }}
                >
                  <span className="mr-2">🇬🇧</span>
                  English
                </li>
                <li
                  className="flex items-center px-4 py-2 font-bold hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    i18n.changeLanguage("id");
                    setIsLangDropdownOpen(false);
                  }}
                >
                  <span className="mr-2">🇮🇩</span>
                  Indonesian
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto py-3 px-10 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-[1.4rem] mr-2" />
            <span className="text-[#29517E] font-bold text-lg">
              Nirvana Niaga Sejahtera
            </span>
          </a>
          {/* Desktop Menu */}
          {renderDesktopMenu(menuItems)}
          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-[#3A55B4] focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden p-4">{renderMobileMenu(menuItems)}</div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
