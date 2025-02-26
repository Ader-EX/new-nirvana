import banner from "../assets/page-banners/pendaftaran-online.png";
import FeedbackPopup from "../components/FeedbackPopup";

const FormPendaftaranBerhasil = () => {
  return (
    <>
      <FeedbackPopup />
      <div className="w-full overflow-hidden">
        <img
          src={banner}
          alt="Banner berita"
          className="w-full h-auto object-cover"
        />
      </div>
      <section className="sm:p-[4rem] p-8 text-lg py-8 flex flex-col gap-y-6">
        <h1 className="text-2xl font-bold text-[#3A55B4] w-[80%]">
          Terima Kasih! Pendaftaran Anda Telah Berhasil
        </h1>
        <p>
          Terima kasih telah menyelesaikan proses pendaftaran di Universitas
          Mitra Bangsa (UMIBA). Kami akan segera memproses data Anda.
        </p>
        <p className="font-bold">Informasi Selanjutnya</p>
        <p>
          Anda akan menerima informasi lebih lanjut melalui email dan nomor
          WhatsApp yang telah Anda daftarkan. Harap pastikan perangkat Anda
          aktif untuk menerima pemberitahuan dari kami.
        </p>
        <p>
          Untuk perkembangan terbaru dan informasi penting lainnya, harap pantau
          website resmi dan media sosial UMIBA.
        </p>
      </section>
    </>
  );
};

export default FormPendaftaranBerhasil;
