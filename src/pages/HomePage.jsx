/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import banner1 from "../assets/banner/banner-1.png";
import bannerSlicing from "../assets/banner/slicing-banner.png";
import vacuumBanner from "../assets/banner/vacuum-banner.png";
import trimmingBanner from "../assets/banner/trimming-banner.png";
import { NewsCardGrid } from "../components/NewsCard";
import skinlessBanner from "../assets/banner/skinless-banner.png";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
// import selamatDatangBanner from "../assets/images/selamat-datang.png";
import { products } from "../constants/news";
import { testimonials } from "../constants/homepage";
import highlightBanner from "../assets/banner/highlight-banner.png";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
import { MdHighQuality } from "react-icons/md";
import video from "../assets/dokum/dokum.mov";
const HomePage = () => {
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
  const [visibleSlides, setVisibleSlides] = useState(3);

  const updateVisibleSlides = () => {
    if (window.innerWidth >= 1024) {
      setVisibleSlides(3);
    } else if (window.innerWidth >= 768) {
      setVisibleSlides(2);
    } else {
      setVisibleSlides(1);
    }
  };

  useEffect(() => {
    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  const [aspectRatio, setAspectRatio] = useState({ width: 4, height: 4 });

  const updateAspectRatio = () => {
    if (window.innerWidth >= 1024) {
      setAspectRatio({ width: 16, height: 6 });
    } else if (window.innerWidth >= 768) {
      setAspectRatio({ width: 16, height: 9 });
    } else {
      setAspectRatio({ width: 4, height: 4 });
    }
  };

  useEffect(() => {
    updateAspectRatio();
    window.addEventListener("resize", updateAspectRatio);
    return () => window.removeEventListener("resize", updateAspectRatio);
  }, []);
  const { t, i18n } = useTranslation();
  const localizedProducts = products.map((product) => ({
    ...product,
    title: t(`products.${product.contentBaseName}.title`),
    description: t(`products.${product.contentBaseName}.description`),
  }));

  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={aspectRatio.width}
        naturalSlideHeight={aspectRatio.height}
        totalSlides={3}
        infinite
        isPlaying
        interval={5000}
      >
        <Slider>
          <Slide index={0}>
            <Jumbotron
              welcomeText={t("home.jumbotron.slide1.welcomeText")}
              title={t("home.jumbotron.slide1.title")}
              description={t("home.jumbotron.slide1.description")}
              buttonText={t("home.jumbotron.slide1.buttonText")}
              buttonLink="/documentations"
              bgImage={banner1}
            />
          </Slide>
          <Slide index={1}>
            <Jumbotron
              welcomeText={t("home.jumbotron.slide2.welcomeText")}
              title={t("home.jumbotron.slide2.title")}
              description={t("home.jumbotron.slide2.description")}
              buttonText={t("home.jumbotron.slide2.buttonText")}
              buttonLink="#services"
              bgImage={banner1}
            />
          </Slide>
          <Slide index={2}>
            <Jumbotron
              welcomeText={t("home.jumbotron.slide3.welcomeText")}
              title={t("home.jumbotron.slide3.title")}
              description={t("home.jumbotron.slide3.description")}
              buttonText={t("home.jumbotron.slide3.buttonText")}
              buttonLink="/testimoni"
              bgImage={banner1}
            />
          </Slide>
        </Slider>
        <div className="flex justify-center"></div>
      </CarouselProvider>

      <section className="p-8 w-full flex flex-col md:flex-row items-center justify-center gap-8">
        {/* IMAGE */}
        <div className="md:w-1/3 w-[60%]">
          {/* <img
            src={selamatDatangBanner}
            alt="Selamat Datang"
            className="w-full h-auto rounded-lg object-cover"
          /> */}
          <div className="mb-6">
            <video controls className="">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* TEXT */}
        <div className="md:w-1/3 w-full p-6 flex flex-col gap-y-4">
          <h3 className="text-lg font-bold text-blue-600">
            {t("home.about.subtitle")}
          </h3>

          <h2 className="text-2xl font-bold text-gray-900">
            {t("home.about.title")}
          </h2>

          <p className="font-semibold text-blue-600">{t("home.about.short")}</p>

          <p className="text-gray-700">{t("home.about.long")}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div className="flex items-center gap-3">
              <div className="bg-amber-100 p-2 rounded-lg">
                <MdHighQuality className="text-blue-900" />
              </div>
              <div className="font-medium">{t("home.about.feature1")}</div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-amber-100 p-2 rounded-lg">
                <TiPlus className="text-blue-900" />
              </div>
              <div className="font-medium">{t("home.about.feature2")}</div>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-2 w-2 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-gray-800 text-sm">
              {t("home.about.checkpoint")}
            </p>
          </div>

          <a
            href="/about"
            className="inline-block bg-blue-600 text4
            4-white py-2 px-4 rounded-md hover:bg-blue-700 text-white transition-colors mt-4 w-fit"
          >
            {t("home.about.readMore")}
          </a>
        </div>
      </section>

      <section className="p-8" id="services">
        {/* Section Heading */}
        <h2 className="text-center text-xl font-bold text-[#3A55B4] ">
          {t("home.services.heading")}
        </h2>
        <h1 className="text-center text-4xl font-bold text-black/80 mb-8">
          {t("home.services.sub_heading")}
        </h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mx-auto">
          {/* Slicing */}
          <div className="relative w-full ">
            <img
              src={bannerSlicing}
              alt="Slicing"
              className="w-full h-[30rem] object-cover rounded-lg bg-black bg-opacity-50"
            />
            <div className="absolute  left-10 bottom-5 text-   bg-opacity-50 text-white py-2 text-center rounded-b-lg">
              <h4 className="text-3xl font-bold">
                {t("home.services.slicing")}
              </h4>
            </div>
          </div>
          <div className="relative w-full ">
            <img
              src={vacuumBanner}
              alt="Vacuum"
              className="w-full h-[30rem] object-cover rounded-lg bg-black bg-opacity-50"
            />
            <div className="absolute  left-10 bottom-5 text-   bg-opacity-50 text-white py-2 text-center rounded-b-lg">
              <h4 className="text-3xl font-bold">
                {t("home.services.vacuumSlice")}
              </h4>
            </div>
          </div>
          <div className="relative w-full ">
            <img
              src={trimmingBanner}
              alt="Trimming"
              className="w-full h-[30rem] object-cover rounded-lg bg-black bg-opacity-50"
            />
            <div className="absolute  left-10 bottom-5 text-   bg-opacity-50 text-white py-2 text-center rounded-b-lg">
              <h4 className="text-3xl font-bold">
                {t("home.services.trimming")}
              </h4>
            </div>
          </div>
          <div className="relative w-full ">
            <img
              src={skinlessBanner}
              alt="Skinless"
              className="w-full h-[30rem] object-cover rounded-lg bg-black bg-opacity-50"
            />
            <div className="absolute  left-10 bottom-5 text-   bg-opacity-50 text-white py-2 text-center rounded-b-lg">
              <h4 className="text-3xl font-bold">
                {t("home.services.skinless")}
              </h4>
            </div>
          </div>
        </div>
      </section>

      <div
        className="flex w-full p-20 text-white bg-blue-800 bg-cover bg-center"
        style={{ backgroundImage: `url(${highlightBanner})` }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-screen-md mx-auto">
          <div>
            <p className="text-4xl font-bold">3</p>
            <p className="mt-2">{t("home.services.stat1")}</p>
          </div>
          <div>
            <p className="text-4xl font-bold">12</p>
            <p className="mt-2">{t("home.services.stat2")}</p>
          </div>
          <div>
            <p className="text-4xl font-bold">252</p>
            <p className="mt-2">{t("home.services.stat3")}</p>
          </div>
        </div>
      </div>

      <section className="p-8">
        <h2 className="text-center text-xl font-bold text-[#3A55B4] ">
          {t("home.products.heading")}
        </h2>

        <NewsCardGrid newsItems={localizedProducts} length={3} />
      </section>
      <section className="p-8 bg-gray-50">
        <h2 className="text-center text-xl font-bold text-[#3A55B4] ">
          {t("home.testimonials.heading")}
        </h2>
        <h1 className="text-center text-4xl font-bold text-black/80 mb-8">
          {t("home.testimonials.sub_heading")}
        </h1>
        <CarouselProvider
          naturalSlideWidth={16}
          naturalSlideHeight={12}
          totalSlides={testimonials.length}
          visibleSlides={visibleSlides}
          infinite
          isPlaying
          interval={5000}
          step={1}
        >
          <Slider>
            {testimonials.map((testimonial, index) => (
              <Slide key={index} index={index}>
                <div className="p-4">
                  <div className="bg-white rounded-lg border border-gray-200 shadow p-6 h-full">
                    <p className="text-gray-700 mb-6 text-sm">
                      {typeof testimonial.quote === "string"
                        ? testimonial.quote
                        : testimonial.quote[i18n.language.slice(0, 2)] ||
                          testimonial.quote.en}
                    </p>

                    <div className="bg-blue-700 rounded-lg p-4 mt-auto">
                      <div className="flex items-center gap-x-3">
                        <div className="text-white">
                          <h4 className="font-medium">{testimonial.name}</h4>
                          <div className="flex mt-1">
                            <StarRating
                              rating={testimonial.rating}
                              color="text-yellow-400"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
      </section>
    </div>
  );
};

export default HomePage;
