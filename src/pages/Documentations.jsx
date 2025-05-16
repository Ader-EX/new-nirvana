// import video from "../assets/dokum/dokum.mov";
import one from "../assets/dokum/1.jpeg";
import two from "../assets/dokum/2.jpeg";
import three from "../assets/dokum/3.jpeg";
import four from "../assets/dokum/4.jpeg";
import five from "../assets/dokum/5.jpeg";
import six from "../assets/dokum/6.jpeg";
import seven from "../assets/dokum/7.jpeg";
import eight from "../assets/dokum/8.jpeg";
import nine from "../assets/dokum/9.jpeg";
import ten from "../assets/dokum/10.jpeg";
import eleven from "../assets/dokum/11.jpeg";
import twelve from "../assets/dokum/12.jpeg";
import thirteen from "../assets/dokum/13.jpeg";
import fourteen from "../assets/dokum/14.jpeg";
import fifteen from "../assets/dokum/15.jpeg";
import sixteen from "../assets/dokum/16.jpeg";
import seventeen from "../assets/dokum/17.jpeg";
import eighteen from "../assets/dokum/18.jpeg";
import nineteen from "../assets/dokum/19.jpeg";
import twenty from "../assets/dokum/20.jpeg";
import twentyOne from "../assets/dokum/21.jpeg";
import twentyTwo from "../assets/dokum/22.jpeg";
import twentyThree from "../assets/dokum/23.jpeg";
import twentyFour from "../assets/dokum/24.jpeg";
import twentyFive from "../assets/dokum/25.jpeg";
import twentySix from "../assets/dokum/26.jpeg";
import twentySeven from "../assets/dokum/27.jpeg";
import twentyEight from "../assets/dokum/28.jpeg";
import twentyNine from "../assets/dokum/29.jpeg";
import thirty from "../assets/dokum/30.jpeg";
// import thirtyOne from "../assets/dokum/31.jpeg";
import thirtyTwo from "../assets/dokum/32.jpeg";
import thirtyThree from "../assets/dokum/33.jpeg";
import thirtyFour from "../assets/dokum/34.JPG";
import thirtyFive from "../assets/dokum/35.JPG";
import thirtySix from "../assets/dokum/36.JPG";
import thirtySeven from "../assets/dokum/37.JPG";
import thirtyEight from "../assets/dokum/38.JPG";
import thirtyNine from "../assets/dokum/39.JPG";
import forty from "../assets/dokum/40.JPG";
import fortyOne from "../assets/dokum/41.JPG";
import fortyTwo from "../assets/dokum/42.JPG";

const images = [
  thirtyFour,
  thirtyFive,
  thirtySix,
  thirtySeven,
  thirtyEight,
  thirtyNine,
  forty,
  fortyOne,
  fortyTwo,

  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen,
  fifteen,
  sixteen,
  seventeen,
  eighteen,
  nineteen,
  twenty,
  twentyOne,
  twentyTwo,
  twentyThree,
  twentyFour,
  twentyFive,
  twentySix,
  twentySeven,
  twentyEight,
  twentyNine,
  thirty,

  thirtyTwo,
  thirtyThree,
];

import { useTranslation } from "react-i18next";
import bannerEN from "../assets/flattened/galleries.en.png";
import bannerID from "../assets/flattened/galleries.id.png";

export const Documentations = () => {
  const { i18n } = useTranslation();

  const banner = i18n.language === "id" ? bannerID : bannerEN;

  return (
    <div>
      <div className="w-full overflow-hidden">
        <img
          src={banner}
          alt="Banner Produk Mentah"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="p-10">
        <div className="mb-6">
          {/* <video controls className="">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documentations;
