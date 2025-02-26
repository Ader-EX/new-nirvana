import banner from "../assets/page-banners/visimisi.png";

const VisiMisi = () => {
  return (
    <>
      <div className="w-full overflow-hidden">
        <img
          src={banner}
          alt="Banner berita"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="sm:p-[4rem] text-justify p-8  flex flex-col gap-y-10 text-lg text-[#8A8083]">
        <section className="">
          <h5 className="text-[#3A55B4] mb-4 font-bold text-lg">Visi</h5>
          <p>
            Mencetak Sumber Daya Manusia yang Berkompeten Berbasis Teknologi
            Informasi dan Bertaraf Internasional Tahun 2035
          </p>
        </section>
        <section>
          <h5 className="text-[#3A55B4] mb-4 font-bold text-lg">Misi</h5>
          <ol className="list-decimal pl-8 flex flex-col gap-y-4">
            <li>
              Menyelenggarakan program pendidikan berbasis IT secara
              professional dan ilmiah sebagai wacana pembelajaran dalam bidang
              Manajemen, Ilmu Hukum, Ilmu Komputer, Sistem dan Teknologi
              Informasi, dan Aktuaria.
            </li>
            <li>
              Melaksanakan penelitian terapan yang menunjang pengembangan ilmu
              pengetahuan dan keahlian berbasis IT secara nyata dan berhasil
              guna dalam bidang Manajemen, Hukum, Ilmu Komputer, Sistem dan
              Teknologi Informasi, dan Aktuaria.
            </li>
            <li>
              Menyebarkan hasil penelitian terapan yang berbasis IT secara nyata
              dan berhasil guna, kajian maupun paket ilmu pengetahuan dan
              keahlian tepat guna untuk kepentingan masyarakat dengan menjunjung
              etika profesi.
            </li>
            <li>
              Mengadakan kegiatan pengabdian pada masyarakat secara edukatif,
              konsisten, dan terprogram dengan mengacu pada kegiatan berbasis IT
              pada telaah dan kajian bidang Manajemen, Hukum, Sistem dan
              Teknologi Informasi, Komputer, dan Aktuaria.
            </li>
            <li>
              Mencetak SDM kompeten yang mampu menjalankan kegiatan berbasis IT
              secara profesional untuk memberikan pelayanan yang prima.
            </li>
            <li>
              Meningkatkan sarana dan prasarana untuk mendukung proses
              pembelajaran yang berkualitas serta berbasis IT.
            </li>
            <li>
              Menjalin kerja sama dengan Institusi/Dunia Usaha dan Dunia
              Industri (DUDI), baik berskala nasional maupun internasional,
              dalam upaya mengembangkan institusi yang berbasis pada
              pengembangan IT, sumber daya manusia yang profesional,
              berkualitas, dan berdaya saing tinggi dalam bidang Manajemen,
              Hukum, Sistem dan Teknologi Informasi, Komputer, dan Aktuaria.
            </li>
            <li>
              Mendiseminasikan hasil penelitian dan pengabdian kepada masyarakat
              yang berbasis IT dalam bidang ilmu Manajemen, Hukum, Sistem dan
              Teknologi Informasi, Komputer, dan Aktuaria sehingga terjadi
              transformasi yang terus-menerus untuk mencapai pengakuan Nasional
              dan Internasional.
            </li>
          </ol>
        </section>
      </div>
    </>
  );
};

export default VisiMisi;
