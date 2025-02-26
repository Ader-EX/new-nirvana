import { Link } from "react-router-dom";
import banner from "../assets/page-banners/pendaftaran-online.png";
const PendaftaranOnline = () => {
  return (
    <>
      <div className="w-full overflow-hidden">
        <img
          src={banner}
          alt="Banner berita"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="sm:p-[4rem] text-lg text-justify p-8">
        {" "}
        <h1 className="text-2xl font-bold text-[#3A55B4]  mb-4 w-[80%]">
          Selamat datang di Formulir Pendaftaran Mahasiswa Baru Universitas
          Mitra Bangsa (UMIBA).
        </h1>
        <h3 className="font-bold">Instruksi</h3>
        <p className="text-gray-700 mb-6">
          Silakan luangkan waktu untuk membaca dan memahami program studi yang
          ingin Anda pilih.
        </p>
        <ul className="text-[#3A55B4] space-y-4 ">
          <li>
            <Link
              to={"/fakultas-manajemen-bisnis"}
              className="font-bold text-[#3A55B4] hover:underline "
            >
              Fakultas Manajemen Bisnis
            </Link>
            <ul className="list-disc list-inside ml-6">
              <li>
                <Link
                  to="/d3-manajemen-perusahaan"
                  className=" hover:underline"
                >
                  D3 Manajemen Perusahaan
                </Link>
              </li>
              <li>
                <Link to="/s1-manajemen" className=" hover:underline">
                  S1 Manajemen
                </Link>
              </li>
              <li>
                <Link to="/s2-manajemen" className=" hover:underline">
                  S2 Manajemen
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to={"/fakultas-hukum"}
              className="font-bold text-[#3A55B4] hover:underline "
            >
              Fakultas Ilmu Hukum
            </Link>

            <ul className="list-disc list-inside ml-6">
              <li>
                <Link to="/s1-hukum" className=" hover:underline">
                  S1 Hukum
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to={"/fakultas-ilmu-komputer-aktuaria"}
              className="font-bold text-[#3A55B4] hover:underline "
            >
              Fakultas Teknologi Informasi dan Aktuaria
            </Link>

            <ul className="list-disc list-inside ml-6">
              <li>
                <Link to="/s1-ilmu-komputer" className=" hover:underline">
                  S1 Ilmu Komputer
                </Link>
              </li>
              <li>
                <Link to="/s1-sistem-informasi" className=" hover:underline">
                  S1 Sistem dan Teknologi Informasi
                </Link>
              </li>
              <li>
                <Link to="/s1-aktuaria" className=" hover:underline">
                  S1 Ilmu Aktuaria
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <p className="text-gray-600 mt-6">
          Jika Anda memiliki pertanyaan atau membutuhkan bantuan, jangan ragu
          untuk menghubungi kami. Untuk bantuan langsung, hubungi kami melalui
          WhatsApp di{" "}
          <a href="https://wa.me/087818000395" className="font-bold underline">
            087818000395
          </a>
          .
        </p>
        <div className="mt-6">
          <Link
            to="/form-pendaftaran"
            className="bg-primary-base text-white px-6 py-2 rounded shadow hover:bg-red-900 transition"
          >
            Mulai Daftar
          </Link>
        </div>
      </div>
    </>
  );
};

export default PendaftaranOnline;
