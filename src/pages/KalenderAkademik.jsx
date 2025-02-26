import banner from "../assets/page-banners/kalender-akademik.png";
import kalender from "../assets/images/kalender.png";

const KalenderAkademik = () => {
  return (
    <div>
      <div className="w-full overflow-hidden">
        <img
          src={banner}
          alt="Banner Fasilitas"
          className="w-full h-auto object-cover"
        />
      </div>
      <section className="sm:p-[4rem] p-8 flex flex-col gap-y-12">
        <h3 className="mb-6 text-xl text-[#3A55B4] font-bold">
          Kalender Akademik
        </h3>
        <div className="flex w-full justify-center">
          <img src={kalender} alt="Kalender Akademik" className="" />
        </div>

        <a
          href={kalender}
          download="Kalender Akademik.png"
          className="mt-4 inline-block text-[#3A55B4] underline"
        >
          Unduh Gambar
        </a>
      </section>
    </div>
  );
};

export default KalenderAkademik;
