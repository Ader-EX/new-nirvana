import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import banner1 from "../assets/banner/banner-1.png";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import selamatDatangBanner from "../assets/images/selamat-datang.png";
import { NewsCardGrid } from "../components/NewsCard";
import { newsItems } from "../constants/news";
import { faculties, testimonials } from "../constants/homepage";

const HomePage = () => {
  const { t } = useTranslation();
  const [visibleSlides, setVisibleSlides] = useState(3);

  const updateVisibleSlides = () => {
    if (window.innerWidth >= 1024) {
      setVisibleSlides(3);
    } else if (window.innerWidth >= 768) {
      setVisibleSlides(2);
    } else {
      setVisibleSlides(1); // Show 1 item on small screens
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
              title={t("home.jumbotron.title")}
              description={t("home.jumbotron.description")}
              buttonText={t("home.jumbotron.buttonText")}
              buttonLink="/pendaftaran-online"
              bgImage={banner1}
            />
          </Slide>
          <Slide index={1}>
            <Jumbotron
              title={t("home.jumbotron.title")}
              description={t("home.jumbotron.description")}
              buttonText={t("home.jumbotron.buttonText")}
              buttonLink="/pendaftaran-online"
              bgImage={banner1}
            />
          </Slide>
          <Slide index={2}>
            <Jumbotron
              title={t("home.jumbotron.title")}
              description={t("home.jumbotron.description")}
              buttonText={t("home.jumbotron.buttonText")}
              buttonLink="/pendaftaran-online"
              bgImage={banner1}
            />
          </Slide>
        </Slider>
        <div className="flex justify-center "></div>
      </CarouselProvider>

      <section className="p-8 w-full flex flex-col md:flex-row items-center justify-center gap-8">
        {/* IMAGE */}
        <div className="md:w-1/3 w-[60%]">
          <img
            src={selamatDatangBanner}
            alt="Selamat Datang"
            className="w-full h-auto rounded-lg object-cover"
          />
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
                <img
                  src="/fruits-icon.png"
                  alt="Fruits icon"
                  className="w-8 h-8"
                />
              </div>
              <div className="font-medium">{t("home.about.feature1")}</div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-amber-100 p-2 rounded-lg">
                <img src="/tips-icon.png" alt="Tips icon" className="w-8 h-8" />
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
            href="/about-us"
            className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors mt-4 w-fit"
          >
            {t("home.about.readMore")}
          </a>
        </div>
      </section>

      <section className="p-8">
        <h2 className="text-center text-2xl font-bold text-[#3A55B4] mb-8">
          {t("home.faculties.heading")}
        </h2>

        <div className="grid grid-cols-1 p-6 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mx-auto max-w-screen-xl">
          {faculties.map((faculty, index) => (
            <div
              key={index}
              className="p-6 flex flex-col justify-between bg-white"
            >
              <h4 className="text-lg font-bold text-[#3A55B4]">
                {t(`home.faculties.${index}.title`, faculty.title)}
              </h4>
              <p className="text-gray-700">
                {t(`home.faculties.${index}.description`, faculty.description)}
              </p>
              <ol className="list-disc list-inside my-2 text-gray-600">
                {faculty.programs.map((program, idx) => (
                  <li key={idx}>{program}</li>
                ))}
              </ol>
              <a href={faculty.link}>
                <button className="mt-4 rounded-xl px-4 py-2 text-white bg-primary-base hover:bg-primary-hover">
                  {t("home.faculties.button")}
                </button>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="p-8">
        <h2 className="text-center text-2xl font-bold text-[#3A55B4] mb-8">
          {t("home.news.heading")}
        </h2>
        <NewsCardGrid newsItems={newsItems} length={3} />
      </section>

      <section className="p-8 bg-gray-50">
        <h2 className="text-center text-2xl font-bold text-[#3A55B4] mb-8">
          {t("home.testimonials.heading")}
        </h2>
        <CarouselProvider
          naturalSlideWidth={16}
          naturalSlideHeight={18}
          totalSlides={testimonials.length}
          visibleSlides={visibleSlides}
          infinite
          isPlaying
          interval={5000}
          step={3}
        >
          <Slider>
            {testimonials.map((testimonial, index) => (
              <Slide key={index} index={index}>
                <div className="p-6">
                  <div className="flex flex-col items-center justify-center p-4 bg-white w-[90%] rounded-lg border-2 h-full min-h-[150px]">
                    <p className="text-secondary-base mb-4">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </div>
                  <div className="flex items-center mt-4 gap-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.program}
                      </p>
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
