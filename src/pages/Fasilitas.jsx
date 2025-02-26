import banner from "../assets/page-banners/fasilitas.png";

import image11 from "../assets/images/fasilitas/image 11.png";

import image13 from "../assets/images/fasilitas/image 13.png";
import image14 from "../assets/images/fasilitas/image 14.png";
import image15 from "../assets/images/fasilitas/image 15.png";
import image16 from "../assets/images/fasilitas/image 16.png";
import image17 from "../assets/images/fasilitas/image 17.png";
import image18 from "../assets/images/fasilitas/image 18.png";
import image19 from "../assets/images/fasilitas/image 19.png";
import image20 from "../assets/images/fasilitas/image 20.png";
import image21 from "../assets/images/fasilitas/image 21.png";
import image22 from "../assets/images/fasilitas/image 22.png";
import image12 from "../assets/images/fasilitas/image 12.png";
const Fasilitas = () => {
  const imagesBintaro = [image11, image12, image13, image14, image15, image16];
  const imagesPasming = [image17, image18, image19, image20, image21, image22];

  return (
    <div>
      <div className="w-full overflow-hidden">
        <img
          src={banner}
          alt="Banner Fasilitas"
          className="w-full h-auto object-cover"
        />
      </div>
      <section className="px-10 py-8 flex flex-col gap-y-12 items-center">
        <div className="max-w-screen-xl w-full">
          <h3 className="mb-6 text-xl text-[#3A55B4] font-bold ">
            Kampus Bintaro
          </h3>
          {/* Responsive Centered Grid for Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center">
            {imagesBintaro.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Fasilitas ${index}`}
                className="rounded shadow-md"
              />
            ))}
          </div>
        </div>
        <div className="max-w-screen-xl w-full">
          <h3 className="mb-6 text-xl text-[#3A55B4] font-bold ">
            Kampus Pasar Minggu
          </h3>
          {/* Responsive Centered Grid for Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center">
            {imagesPasming.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Fasilitas ${index}`}
                className="rounded shadow-md"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fasilitas;
