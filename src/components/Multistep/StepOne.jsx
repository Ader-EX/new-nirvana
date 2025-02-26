/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useMemo } from "react";
import RadioGroup from "../RadioGroup";
import {
  classTypeOptions,
  facultyDepartments,
  pathOptions,
  paymentOptions,
} from "../../constants/multiStep";

const StepOne = ({ formData, handleChange }) => {
  // Define the relationship between fakultas and jurusan

  // Get available departments based on selected faculty
  const availableDepartments = useMemo(() => {
    return facultyDepartments[formData.fakultas] || [];
  }, [formData.fakultas]);

  return (
    <div className="mt-6">
      <section className="text-xl font-bold text-[#3A55B4] mb-6">
        <p>Step 1</p>
        <h2 className="">Pilihan Kelas</h2>
      </section>

      <div className="space-y-6">
        {/* Faculty Selection */}
        <div className="flex w-full flex-col sm:flex-row gap-x-6 justify-between">
          <div className="w-full">
            <label className="block text-md  mb-2 font-bold">
              Fakultas <span className="font-bold text-[#3A55B4]">*</span>
            </label>
            <select
              name="fakultas"
              required
              value={formData.fakultas || ""}
              onChange={(e) => {
                handleChange(e);
                handleChange({
                  target: {
                    name: "jurusan",
                    value: facultyDepartments[e.target.value]?.[0] || "",
                  },
                });
              }}
              className="w-full p-2 border rounded"
            >
              <option value="" disabled>
                Pilih Fakultas
              </option>
              {Object.keys(facultyDepartments).map((faculty) => (
                <option key={faculty} value={faculty}>
                  {faculty}
                </option>
              ))}
            </select>
          </div>

          {/* Department Selection */}
          {formData.fakultas && (
            <div className="w-full">
              <label className="block text-md  mb-2 font-bold">
                Jurusan <span className="font-bold text-[#3A55B4]">*</span>
              </label>
              <select
                name="jurusan"
                required
                value={formData.jurusan || ""}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                {availableDepartments.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        <div className="space-y-6">
          {/* Class Type */}
          <RadioGroup
            label="Jenis Kelas"
            name="jenisKelas"
            options={classTypeOptions}
            value={formData.jenisKelas}
            onChange={handleChange}
            required
            description="Karyawan: Kelas khusus untuk mahasiswa yang sudah bekerja dengan jadwal fleksibel.
          Reguler Pagi: Kelas dengan jadwal kuliah di pagi hingga sore hari (08.00-17.00).
          Reguler Malam: Kelas dengan jadwal kuliah di malam hari (18.00-21.00)."
          />

          <RadioGroup
            label="Jalur"
            name="jalur"
            options={pathOptions}
            value={formData.jalur}
            onChange={handleChange}
            description="Non-RPL: Jalur reguler untuk mahasiswa baru tanpa pengalaman kerja relevan.
          RPL (Rekognisi Pembelajaran Lampau): Jalur khusus untuk mahasiswa dengan pengalaman kerja yang relevan, memungkinkan konversi pengalaman menjadi SKS."
          />

          <RadioGroup
            label="Biaya Kuliah"
            name="biayaKuliah"
            options={paymentOptions}
            value={formData.biayaKuliah}
            onChange={handleChange}
            description="Per Bulan: Pembayaran biaya kuliah dilakukan setiap bulan dengan jumlah yang lebih kecil.
          Per Semester: Pembayaran biaya kuliah dilakukan setiap semester (6 bulan) dengan potensi mendapat diskon khusus."
          />
        </div>
      </div>
    </div>
  );
};

export default StepOne;
