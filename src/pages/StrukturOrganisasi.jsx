import banner from "../assets/page-banners/struktur.png";
import kalender from "../assets/images/struktur.png";

const StrukturOrganisasi = () => {
  return (
    <div>
      <div className="w-full overflow-hidden">
        <img
          src={banner}
          alt="Banner Struktur Organization"
          className="w-full h-auto object-cover"
        />
      </div>
      <section className="px-10 py-8">
        <h3 className="mb-6 text-xl text-[#3A55B4] font-bold">
          Struktur Organisasi
        </h3>
        <div className="flex w-full justify-center">
          <img src={kalender} alt="Kalender Akademik" className="" />
        </div>

        <a
          href={kalender}
          download="struktur.png"
          className="mt-4 inline-block text-[#3A55B4] underline"
        >
          Unduh Gambar
        </a>
      </section>
    </div>
  );
};

export default StrukturOrganisasi;
