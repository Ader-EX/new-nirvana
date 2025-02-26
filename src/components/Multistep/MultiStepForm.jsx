import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import SummaryForm from "./SummaryForm";
import toast from "react-hot-toast";
import NotFound from "../NotFound";
import { useNavigate } from "react-router-dom";
// import StepThree from "./StepThree";

const MultistepForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // STEP 1 SECTION
    fakultas: "",
    jurusan: "",
    jenisKelas: "",
    jalur: "",
    biayaKuliah: "",
    // STEP 2 SECTION
    // IDENTITAS SECTION
    namaLengkap: "",
    nik: "",
    tempatLahir: "",
    tanggalLahir: "",
    agama: "",
    jenisKelamin: "",
    kewarganegaraan: "",
    otherKewarganegaraan: "",
    //  ALAMAT SECTION
    alamat: "",
    kota: "",
    kodePos: "",
    // KONTAK SECTION
    noTelp: "",
    email: "",

    // STEP 3 SECTION
    lulusan: "",
    asalSekolah: "",
    tahunKelulusan: "",
  });

  const validateStep = () => {
    // Field validation tiap tahap
    const requiredFields = {
      1: ["fakultas", "jurusan", "jenisKelas", "jalur", "biayaKuliah"],
      2: [
        "namaLengkap",
        "nik",
        "tempatLahir",
        "tanggalLahir",
        "agama",
        "jenisKelamin",
        "kewarganegaraan",
        "alamat",
        "kota",
        "kodePos",
        "noTelp",
        "email",
      ],
      3: ["lulusan", "asalSekolah", "tahunKelulusan"],
    };

    // Get required fields for the current step
    const fieldsToValidate = requiredFields[currentStep] || [];

    // Check for missing fields
    const missingFields = fieldsToValidate.filter(
      (field) => !formData[field]?.trim()
    );

    if (missingFields.length > 0) {
      toast.error(
        <>
          <div>
            <p className="font-semibold">Data Kurang :</p>

            <p className="font-bold capitalize text-[#3A55B4]">
              {"("}
              {missingFields
                .map((field) => field.replace(/([A-Z])/g, " $1").toLowerCase())
                .join(", ")}

              {")"}
            </p>
          </div>
        </>
      );
      return false;
    }

    return true; // Validation passed
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep((prev) => prev + 1);
    }
  };
  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    alert(JSON.stringify(formData, null, 2));

    navigate("/form-pendaftaran-berhasil");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne formData={formData} handleChange={handleChange} />;
      case 2:
        return <StepTwo formData={formData} handleChange={handleChange} />;
      case 3:
        return <StepThree formData={formData} handleChange={handleChange} />;
      case 4:
        return <SummaryForm formData={formData} />;

      default:
        return <NotFound />;
    }
  };

  return (
    <div className="p-6 w-full  ">
      <p className="font-semibold text-sm text-[#635659]">
        <span className="text-[#3A55B4] font-bold">{currentStep}</span> dari 4
        Langkah Selesai
      </p>
      <div className="flex justify-between my-2">
        {[1, 2, 3, 4].map((step) => (
          <div
            key={step}
            className={`flex-1 mx-1 h-2 rounded-md ${
              currentStep >= step ? "bg-primary-base" : "bg-gray-200"
            }`}
          ></div>
        ))}
      </div>
      {/* RENDER FORM MULTISTEP DISINI */}
      <form onSubmit={handleSubmit}>{renderStep()}</form>

      {/* BUTTON SELANJUTNYA / SEBELUMNYA DISINI */}
      <div className="flex justify-end mt-6 gap-x-4">
        {currentStep > 1 && (
          <button
            onClick={prevStep}
            className="px-4 py-2  rounded border-primary-base border-2 text-[#3A55B4] shadow"
          >
            Sebelumnya
          </button>
        )}
        {currentStep < 4 ? (
          <button
            onClick={nextStep}
            className="px-4 py-2  bg-primary-base text-white rounded shadow"
          >
            Selanjutnya
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-primary-base text-white rounded shadow"
          >
            Daftar
          </button>
        )}
      </div>
    </div>
  );
};

export default MultistepForm;
