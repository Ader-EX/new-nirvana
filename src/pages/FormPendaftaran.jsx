import banner from "../assets/page-banners/pendaftaran-online.png";
import MultistepForm from "../components/Multistep/MultiStepForm";
const FormPendaftaran = () => {
  return (
    <>
      {" "}
      <div className="w-full overflow-hidden">
        <img
          src={banner}
          alt="Banner berita"
          className="w-full h-auto object-cover"
        />
      </div>
      <section className="sm:p-[4rem]  p-8 text-lg py-8 flex flex-col gap-y-6">
        <MultistepForm />
      </section>
    </>
  );
};

export default FormPendaftaran;
