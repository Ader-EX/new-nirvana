import banner from "../assets/page-banners/sambutan.png";
import rektor from "../assets/muka/rektor.png";

const SambutanRektor = () => {
  return (
    <>
      <div className="w-full overflow-hidden">
        <img
          src={banner}
          alt="Banner berita"
          className="w-full h-auto object-cover"
        />
      </div>
      <section className="sm:p-[4rem]  p-8 text-lg py-8 flex flex-col gap-y-6">
        <section className="flex gap-8  sm:flex-row flex-col">
          <img src={rektor} alt="" />
          <div className="flex flex-col gap-y-6 text-justify   text-[#8A8083]">
            <h5 className="text-secondary-base font-bold">
              Assalamualaikum warahmatullahi wabarakatuh,
            </h5>
            <p>
              Selamat datang di Universitas Mitra Bangsa (UMIBA), tempat di mana
              kami berkomitmen untuk mendidik dan membentuk generasi muda yang
              berdaya saing tinggi.{" "}
            </p>
            <p>
              Di UMIBA, kami percaya bahwa pendidikan bukan hanya tentang
              transfer pengetahuan, tetapi juga tentang membangun karakter,
              keterampilan, dan nilai-nilai yang akan membimbing Anda sepanjang
              hidup. Kami berusaha untuk menciptakan lingkungan akademik yang
              kondusif, inovatif, dan inklusif, di mana setiap mahasiswa dapat
              berkembang sesuai dengan potensi terbaik mereka.
            </p>
          </div>
        </section>
        <section className=" text-justify  text-[#8A8083] flex flex-col gap-y-6">
          {" "}
          <p>
            Sebagai Rektor, saya merasa bangga dengan segala pencapaian yang
            telah diraih oleh UMIBA dan para mahasiswanya. Kami telah
            menciptakan berbagai program studi yang relevan dengan kebutuhan
            industri dan masyarakat, didukung oleh tenaga pengajar yang kompeten
            dan berpengalaman. Fasilitas kami dirancang untuk mendukung proses
            pembelajaran yang interaktif dan kolaboratif, mempersiapkan
            mahasiswa untuk menjadi profesional yang siap menghadapi tantangan
            di dunia kerja.
          </p>
          <p>
            Selain fokus pada akademik, UMIBA juga memberikan perhatian besar
            pada pengembangan soft skills dan kepemimpinan mahasiswa. Melalui
            berbagai kegiatan ekstrakurikuler, organisasi kemahasiswaan, dan
            program pengabdian masyarakat, kami ingin membentuk mahasiswa yang
            tidak hanya cerdas secara intelektual, tetapi juga memiliki empati,
            etika, dan jiwa kepemimpinan yang kuat. Kami percaya bahwa kombinasi
            ini akan membuat lulusan UMIBA mampu memberikan kontribusi positif
            bagi masyarakat.
          </p>
          <p>
            Kami menyadari bahwa dunia terus berkembang dengan cepat, dan
            tantangan baru akan selalu muncul. Oleh karena itu, UMIBA selalu
            berupaya untuk beradaptasi dengan perubahan dan melakukan inovasi
            dalam proses pendidikan. Kami ingin memastikan bahwa setiap lulusan
            UMIBA memiliki bekal yang kuat untuk terus belajar dan berkembang di
            sepanjang karier mereka, baik di dalam maupun di luar negeri.
          </p>
          <p>
            Akhir kata, saya mengajak seluruh sivitas akademika UMIBA, baik
            mahasiswa, dosen, maupun staf, untuk terus bekerja sama dan
            berinovasi demi mencapai visi dan misi kita bersama. Mari kita
            jadikan UMIBA sebagai lembaga pendidikan yang tidak hanya unggul di
            tingkat nasional, tetapi juga diakui di kancah internasional. Terima
            kasih atas kepercayaan yang telah diberikan kepada UMIBA, dan saya
            berharap perjalanan akademik Anda di sini akan menjadi pengalaman
            yang berharga dan bermakna.
          </p>
          <section>
            <p className="font-bold text-secondary-base">
              Wassalamualaikum warahmatullahi wabarakatuh.
              <br />
              <br />
              Hj. Sri Wahyuningsih, S.E., M.M.
              <br /> Rektor Universitas Mitra Bangsa
            </p>
          </section>
        </section>
      </section>
    </>
  );
};

export default SambutanRektor;
