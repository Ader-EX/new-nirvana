import { Route, Routes } from "react-router-dom";
import FakultasPage from "../pages/FakultasPage";
import ProgramStudiPage from "../pages/ProgramStudiPage";
import HomePage from "../pages/HomePage";
import Berita from "../pages/Berita";
import FormPendaftaran from "../pages/FormPendaftaran";
import FormPendaftaranBerhasil from "../pages/FormPendaftaranBerhasil";
import KalenderAkademik from "../pages/KalenderAkademik";
import SambutanRektor from "../pages/SambutanRektor";

import StrukturOrganisasi from "../pages/StrukturOrganisasi";
import VisiMisi from "../pages/VisiMisi";
import MainLayout from "../layouts/MainLayout";
import Fasilitas from "../pages/Fasilitas";
import manajemenBanner from "../assets/fakultas-prodi/fmanajemen.png";
import hukumBanner from "../assets/fakultas-prodi/fhukum.png";
import komputerBanner from "../assets/fakultas-prodi/fkomputer.png";
import { programStudiData } from "../constants/programstudi/constants";
import PendaftaranOnline from "../pages/PendaftaranOnline";
import BeritaDetailPage from "../pages/BeritaDetailPage";

const facultyRoutes = [
  {
    path: "/fakultas-hukum",
    banner: hukumBanner,
    title: "Fakultas Hukum",
    description:
      "Fakultas Hukum UMIBA menyediakan pendidikan hukum yang komprehensif dengan penekanan pada keadilan, etika, dan penegakan hukum. Fakultas ini membekali mahasiswa dengan keterampilan analisis hukum, pemahaman tentang sistem hukum, dan kemampuan advokasi yang diperlukan untuk menjadi praktisi hukum yang kompeten dan berintegritas.",
    visi: "“Menjadi pusat pendidikan hukum terkemuka yang menghasilkan lulusan berintegritas tinggi dan berkomitmen terhadap keadilan dan hak asasi manusia dalam persaingan Global pada tahun 2035”.",
    misi: [
      "Memberikan pendidikan hukum yang berkualitas dan berbasis nilai-nilai keadilan.",
      "Mengembangkan penelitian hukum yang inovatif dan aplikatif.",
      "Mengabdi kepada masyarakat melalui pelayanan hukum dan advokasi.",
    ],
    prodidescription:
      "Fakultas Hukum menawarkan Program Studi Hukum (S1) yang dirancang untuk memberikan pemahaman mendalam tentang berbagai bidang hukum, baik hukum perdata, pidana, hingga hukum internasional. Mahasiswa juga dilatih dalam keterampilan advokasi dan litigasi, serta diberikan kesempatan untuk magang di berbagai lembaga hukum.",

    programs: [{ name: "S1 Hukum", href: "/s1-hukum" }],
  },
  {
    path: "/fakultas-ilmu-komputer-aktuaria",
    banner: komputerBanner,
    title: "Fakultas Ilmu Komputer dan Aktuaria",
    description:
      "Fakultas Ilmu Komputer & Aktuaria UMIBA merupakan pusat pendidikan yang fokus pada pengembangan teknologi informasi dan ilmu aktuaria. Fakultas ini menggabungkan pendidikan teori dengan praktik, memberikan mahasiswa keterampilan teknis dan analitis yang diperlukan untuk berkarier di dunia teknologi dan keuangan.",
    visi: "“Menjadi fakultas terdepan dalam pengembangan teknologi informasi dan ilmu aktuaria, menghasilkan lulusan yang memenuhi kebutuhan industri dalam persaingan Global pada tahun 2035”.",
    misi: [
      "Menyelenggarakan pendidikan yang unggul dalam bidang teknologi informasi dan aktuaria.",
      "Mengembangkan penelitian inovatif yang berkontribusi pada perkembangan ilmu komputer dan aktuaria.",
      "Menjalin kerja sama dengan industri untuk meningkatkan relevansi kurikulum dan peluang karier mahasiswa.",
    ],
    prodidescription:
      "Fakultas ini menawarkan berbagai program studi, termasuk Ilmu Komputer (S1) yang fokus pada pemrograman, analisis data, dan pengembangan sistem; Sistem & Teknologi Informasi (S1) yang menekankan pada manajemen informasi dan teknologi; serta Ilmu Aktuaria (S1) yang mempersiapkan mahasiswa untuk menjadi ahli dalam pengelolaan risiko keuangan dan asuransi.",

    programs: [
      { name: "S1 Aktuaria", href: "/s1-aktuaria" },
      { name: "S1 Ilmu Komputer", href: "/s1-ilmu-komputer" },
      {
        name: "S1 Sistem & Teknologi Informasi",
        href: "/s1-sistem-informasi",
      },
    ],
  },
  {
    path: "/fakultas-manajemen-bisnis",
    banner: manajemenBanner,
    title: "Fakultas Manajemen dan Bisnis",
    description:
      "Fakultas Manajemen & Bisnis UMIBA berkomitmen untuk mencetak lulusan yang siap menjadi pemimpin di berbagai sektor industri. Dengan kurikulum yang dirancang untuk menjawab kebutuhan dunia bisnis yang dinamis, kami memberikan pendidikan yang berkualitas tinggi dan relevan, serta pengalaman praktis yang diperlukan untuk sukses dalam karier manajemen dan bisnis.",
    visi: "“Menjadi Fakultas Terkemuka di Indonesia, untuk menghasilkan tenaga profesional dibidang Manajemen dan Bisnis yang memenuhi kebutuhan industri dalam persaingan Global pada tahun 2035”.",
    misi: [
      "Menyelenggarakan pendidikan strata dua bidang manajemen yang bermutu untuk menghasilkan lulusan berdaya saing nasional  dan Mengembangkan budaya penelitian di bidang manajemen untuk menghasilkan penelitian yang inovatif dan bermanfaat bagi masyarakat",
      "Melaksanakan pengabdian masyarakat untuk pembangunan masyarakat Indonesia",

      "Melaksanakan good study program governance berbasis IT",
      "Mengembangkan kolaborasi dan kerjasama di tingkat Nasional dan Internasional dalam rangka menghadapi perubahan global",
    ],
    prodidescription:
      "Fakultas Manajemen & Bisnis menawarkan beberapa program studi yang mencakup berbagai aspek manajemen dan bisnis, mulai dari Manajemen Kewirausahaan (D3) yang fokus pada pengembangan bisnis kecil dan menengah, Program Sarjana Manajemen (S1) yang memberikan pemahaman mendalam tentang strategi bisnis dan kepemimpinan, hingga Magister Manajemen yang dirancang untuk profesional yang ingin mengembangkan keahlian manajemen strategis mereka.",

    programs: [
      { name: "D3 Manajemen Perusahaan", href: "/d3-manajemen-perusahaan" },
      { name: "S1 Manajemen", href: "/s1-manajemen" },
      { name: "S2 Manajemen", href: "/s2-manajemen" },
    ],
  },
];

const AppRoutes = () => {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/berita/:id" element={<BeritaDetailPage />} />
          <Route path="/pendaftaran-online" element={<PendaftaranOnline />} />
          <Route path="/form-pendaftaran" element={<FormPendaftaran />} />
          <Route
            path="/form-pendaftaran-berhasil"
            element={<FormPendaftaranBerhasil />}
          />
          <Route path="/kalender-akademik" element={<KalenderAkademik />} />
          <Route path="/sambutan-rektor" element={<SambutanRektor />} />
          {/* <Route path="/sejarah" element={<Sejarah />} /> */}
          <Route path="/struktur-organisasi" element={<StrukturOrganisasi />} />
          <Route path="/visi-misi" element={<VisiMisi />} />
          <Route path="/fasilitas" element={<Fasilitas />} />

          {/* Dynamic Program Studi Routes */}
          {Object.keys(programStudiData).map((key) => {
            const data = programStudiData[key];
            return (
              <Route
                key={key}
                path={`/${key}`}
                element={
                  <ProgramStudiPage
                    banner={data.banner}
                    title={data.title}
                    description={data.description}
                    visi={data.visi}
                    misi={data.misi}
                    tentang={data.tentang}
                    prodidescription={data.prodidescription}
                    kompetensi={data.kompetensi}
                    profilLulusan={data.profilLulusan}
                    facultyData={data.facultyData}
                    lamapendidikan={data.lamapendidikan}
                    biaya={data.biaya}
                    additionalInfo={data.additionalInfo}
                    akreditasi={data.akreditasi}
                  />
                }
              />
            );
          })}

          {facultyRoutes.map(
            ({
              path,
              banner,
              title,
              description,
              visi,
              misi,
              prodidescription,
              programs,
            }) => (
              <Route
                key={path}
                path={path}
                element={
                  <FakultasPage
                    banner={banner}
                    title={title}
                    description={description}
                    visi={visi}
                    misi={misi}
                    prodidescription={prodidescription}
                    programs={programs}
                  />
                }
              />
            )
          )}
        </Routes>
      </MainLayout>
    </>
  );
};

export default AppRoutes;
