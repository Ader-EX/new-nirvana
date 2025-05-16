import { useTranslation } from "react-i18next";
import about1 from "../assets/banner/about_1.png";
import about2 from "../assets/banner/about_2.png";
import about3 from "../assets/banner/about_3.png";
import about4 from "../assets/banner/about_4.png";
// import { useTranslation } from "react-i18next";
import bannerEN from "../assets/flattened/about-us.en.png";
import bannerID from "../assets/flattened/about-us.id.png";

const AboutUs = () => {
  const { t, i18n } = useTranslation();
  const banner = i18n.language === "id" ? bannerID : bannerEN;

  return (
    <div>
      <div className="w-full overflow-hidden">
        <img
          src={banner}
          alt={
            i18n.language === "id" ? "Banner Tentang Kami" : "About Us Banner"
          }
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Konten Berita Dimuat disini */}
      <div className="flex flex-col w-full h-full">
        {/* Content 1 */}
        <div className="flex flex-col md:flex-row w-full h-full">
          <div className="flex w-full md:w-1/2 bg-blue-400 bg-cover bg-center h-64 md:h-auto">
            <img
              src={about1}
              alt="About Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2 p-6 md:p-16 text-justify gap-y-4 md:gap-y-6">
            <h2 className="text-lg md:text-xl font-bold text-[#3A55B4] underline underline-offset-8">
              {t("aboutus.about_1.title")}
            </h2>
            <h1 className="text-gray-700 leading-7 md:leading-8">
              {t("aboutus.about_1.description_1")}
            </h1>
            <h1 className="text-gray-700 leading-7 md:leading-8">
              {t("aboutus.about_1.description_2")}
            </h1>
          </div>
        </div>

        {/* Content 2 */}
        <div className="flex flex-col-reverse md:flex-row w-full h-full">
          <div className="flex flex-col w-full md:w-1/2 p-6 md:p-16 text-justify gap-y-4 md:gap-y-6">
            <h2 className="text-lg md:text-xl font-bold text-[#3A55B4] underline underline-offset-8">
              {t("aboutus.about_2.title")}
            </h2>
            <h1 className="text-gray-700 leading-7 md:leading-8">
              {t("aboutus.about_2.description_1")}
            </h1>
            <ul className="list-disc pl-5 space-y-2">
              {t("aboutus.about_2.description_2", { returnObjects: true }).map(
                (item, index) => (
                  <li key={index} className="text-gray-700">
                    {item}
                  </li>
                )
              )}
            </ul>
            <h1 className="text-gray-700 leading-7 md:leading-8">
              {t("aboutus.about_2.description_3")}
            </h1>
          </div>
          <div className="flex w-full md:w-1/2 text-white bg-cover bg-center h-64 md:h-auto">
            <img
              src={about2}
              alt="About Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content 3 */}
        <div className="flex flex-col md:flex-row w-full h-full">
          <div className="flex w-full md:w-1/2 text-white bg-cover bg-center h-64 md:h-auto">
            <img
              src={about3}
              alt="About Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2 p-6 md:p-16 text-justify gap-y-4 md:gap-y-6">
            <h2 className="text-lg md:text-xl font-bold text-[#3A55B4] underline underline-offset-8">
              {t("aboutus.about_3.title")}
            </h2>
            <h1 className="text-gray-700 leading-7 md:leading-8">
              {t("aboutus.about_3.description_1")}
            </h1>
            <h1 className="text-gray-700 leading-7 md:leading-8">
              {t("aboutus.about_3.description_2")}
            </h1>
            <ul className="list-disc pl-5 space-y-2">
              {t("aboutus.about_3.description_3", { returnObjects: true }).map(
                (item, index) => (
                  <li key={index} className="text-gray-700">
                    {item}
                  </li>
                )
              )}
            </ul>
            <h1 className="text-gray-700 leading-7 md:leading-8">
              {t("aboutus.about_3.description_4")}
            </h1>
          </div>
        </div>

        {/* Content 4 */}
        <div className="flex flex-col-reverse md:flex-row w-full h-full">
          <div className="flex flex-col w-full md:w-1/2 p-6 md:p-16 text-justify gap-y-4 md:gap-y-6">
            <h2 className="text-lg md:text-xl font-bold text-[#3A55B4] underline underline-offset-8">
              {t("aboutus.about_4.title")}
            </h2>
            <h1 className="text-gray-700 leading-7 md:leading-8">
              {t("aboutus.about_4.description_1")}
            </h1>
            <ul className="list-disc pl-5 space-y-2">
              {t("aboutus.about_4.description_2", { returnObjects: true }).map(
                (item, index) => (
                  <li key={index} className="text-gray-700">
                    {item}
                  </li>
                )
              )}
            </ul>
            <h1 className="text-gray-700 leading-7 md:leading-8">
              {t("aboutus.about_4.description_3")}
            </h1>
          </div>
          <div className="flex w-full md:w-1/2 text-white bg-cover bg-center h-64 md:h-auto">
            <img
              src={about4}
              alt="About Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
