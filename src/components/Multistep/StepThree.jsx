import { lulusanOptions } from "../../constants/multiStep";

/* eslint-disable react/prop-types */
const StepThree = ({ formData, handleChange }) => {
  return (
    <div className="mt-6">
      <section className="text-xl font-bold text-[#3A55B4] mb-6">
        <p>Step 3</p>
        <h2>Data Pendidikan Sebelumnya</h2>
      </section>

      <div className="gap-6 flex sm:flex-row flex-col w-full">
        <div className="w-full">
          <label className="block text-md font-semibold mb-2">
            Lulusan <span className="font-bold text-[#3A55B4]">*</span>
          </label>
          <select
            name="lulusan"
            value={formData.lulusan || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            {lulusanOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full">
          <label className="block text-md font-semibold mb-2">
            Asal Sekolah <span className="font-bold text-[#3A55B4]">*</span>
          </label>
          <input
            type="text"
            name="asalSekolah"
            value={formData.asalSekolah || ""}
            onChange={handleChange}
            placeholder="Masukan Asal Sekolah"
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="w-full">
          <label className="block text-md font-semibold mb-2">
            Tahun Kelulusan
            <span className="font-bold text-[#3A55B4]">*</span>
          </label>
          <input
            type="number"
            name="tahunKelulusan"
            value={formData.tahunKelulusan || ""}
            onChange={handleChange}
            placeholder="Masukan Tahun Kelulusan"
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default StepThree;
