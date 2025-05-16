/* eslint-disable react/prop-types */

import bannerEN from "../assets/flattened/Testimoni.en.png";
import bannerID from "../assets/flattened/Testimoni.id.png";

import { useTranslation } from "react-i18next";

import { testimonials } from "../constants/homepage";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import TrimmingBanner from "../assets/banner/testiBanner.png";

const Testimoni = () => {
  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex text-yellow-400">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} />
        ))}
        {hasHalfStar && <FaStarHalfAlt />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} />
        ))}
      </div>
    );
  };
  const { t, i18n } = useTranslation();
  const banner = i18n.language === "id" ? bannerID : bannerEN;

  return (
    <>
      <div className="w-full overflow-hidden">
        <img
          src={banner}
          alt={
            i18n.language === "id" ? "Banner Testimoni" : "Testimonials Banner"
          }
          className="w-full h-auto object-cover"
        />
      </div>
      {/* Konten Berita Dimuat disini */}
      <div className="sm:p-[4rem] p-8 flex flex-col gap-y-12 w-full h-full">
        {/* Title */}
        <div className="flex w-full h-full">
          <div className="flex flex-col w-full h-full">
            <h1 className="text-[#3A55B4] font-bold text-2xl">
              {t("Testimoni.heading")}
            </h1>
            <h2 className="text-black/80 text-4xl">
              {t("Testimoni.sub_heading")}
            </h2>
          </div>
          <div className="flex flex-col w-full h-full text-justify">
            {t("Testimoni.desc")}
          </div>
        </div>

        <div className="flex flex-wrap w-full h-full justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col p-6 w-[90%] md:w-[45%] lg:w-[30%] "
            >
              <div className="flex flex-col items-center justify-center px-4 bg-white rounded-t-lg border border-[#3A55B4] shadow-sm h-full min-h-[180px]">
                <p className="text-gray-700 mb-4 text-center">
                  &quot;
                  {testimonial.quote[i18n.language] || testimonial.quote["en"]}
                  &quot;
                </p>
              </div>
              <div className="flex items-center p-4 gap-x-4 bg-[#3A55B4] rounded-b-lg rounded">
                <div>
                  <h4 className="font-bold text-white mb-2">
                    {testimonial.name}
                  </h4>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner */}
      </div>
      <div
        className="flex w-full text-white bg-cover bg-center min-h-[450px]"
        style={{
          backgroundImage: `url(${TrimmingBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="flex sm:grid-cols-3 gap-6 text-center max-w-screen-md mx-auto items-center">
          <div className="flex flex-col gap-y-7">
            <p className="text-3xl font-semibold">{t("Testimoni.banner_p")}</p>
            <h1 className="text-5xl font-bold leading-relaxed">
              {t("Testimoni.banner_h1")}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
