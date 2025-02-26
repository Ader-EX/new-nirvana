import {
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";
import logo from "../assets/logo.png";
const Footer = () => {
  const footerSections = [
    {
      title: "Kampus Bintaro",
      items: [
        {
          icon: <FaLocationDot className="text-2xl" />,
          text: "Jl. Perdagangan No. 54, RT.4/RW.7, Bintaro, Jakarta Selatan DKI Jakarta 12330",
        },
        {
          icon: <FaPhone className="text-2xl" />,
          text: "(021) 7817823",
        },
      ],
    },
    {
      title: "Kampus Pasar Minggu",
      items: [
        {
          icon: <FaLocationDot className="text-2xl" />,
          text: "Jl. Raya Tanjung Barat No.11 Pasar Minggu, Jakarta Selatan DKI Jakarta 12520",
        },
        {
          icon: <FaPhone className="text-2xl" />,
          text: "(021) 74775728",
        },
      ],
    },
    {
      title: "Profil",
      links: [
        { text: "Struktur Organisasi", href: "#" },
        { text: "Sejarah", href: "#" },
        { text: "Visi dan Misi", href: "#" },
        { name: "Fasilitas", href: "/fasilitas" },
      ],
    },
    {
      title: "Fakultas",
      links: [
        { text: "Manajemen dan Bisnis", href: "#" },
        { text: "Ilmu Hukum", href: "#" },
        { text: "Teknologi Informasi dan Aktuaria", href: "#" },
      ],
    },
    {
      title: "Lainnya",
      links: [
        { text: "Berita", href: "#" },
        { text: "Pendaftaran Online", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebook className="text-xl" />,
      href: "#",
      label: "Facebook community",
    },
    {
      icon: <FaInstagram className="text-xl" />,
      href: "#",
      label: "Instagram community",
    },
    {
      icon: <FaTwitter className="text-xl" />,
      href: "#",
      label: "Twitter / X community",
    },
  ];

  return (
    <footer className="bg-white ">
      <hr />
      <section className="flex w-full text-center p-6 justify-center  items-center ">
        <a href="#">
          <img src={logo} alt="Logo" className="s-[128px]" />
        </a>
      </section>
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-6 px-2 py-2 lg:py-6 md:grid-cols-5">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h2 className="mb-6 text-lg font-semibold text-[#3A55B4]">
                {section.title}
              </h2>
              <ul className="text-secondary-base font-medium">
                {section.items &&
                  section.items.map((item, idx) => (
                    <li key={idx} className="mb-4">
                      <div className="flex gap-x-2">
                        {item.icon}
                        <p>{item.text}</p>
                      </div>
                    </li>
                  ))}
                {section.links &&
                  section.links.map((link, idx) => (
                    <li key={idx} className="mb-4">
                      <a href={link.href} className="hover:underline">
                        {link.text}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="px-4 py-4">
          <div className="flex  sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="text-[#3A55B4] p-2 border-2 border-primary-base rounded-full hover:text-primary-hover "
              >
                {social.icon}
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full py-2 bg-primary-base justify-center text-white text-xs font-extralight">
        © 2024 All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
