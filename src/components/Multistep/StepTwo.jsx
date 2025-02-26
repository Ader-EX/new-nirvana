/* eslint-disable react/prop-types */

import {
  citizenshipOptions,
  genderOptions,
  religionOptions,
} from "../../constants/multiStep";

const StepTwo = ({ formData, handleChange }) => {
  return (
    <div className="mt-6">
      <section className="text-xl font-bold text-[#3A55B4] mb-6">
        <p>Step 2</p>
        <h2 className="">Data Pribadi</h2>
      </section>

      <div className=" gap-6 flex sm:flex-row flex-col w-full ">
        {/* Identitas Section */}

        <div className="w-full">
          <h3 className="text-xl font-semibold text-[#3A55B4] mb-4">
            Identitas
          </h3>

          {/* Nama Lengkap */}
          <div className="mb-4">
            <label className="block text-md font-semibold mb-2">
              Nama Lengkap <span className="font-bold text-[#3A55B4]">*</span>
            </label>
            <input
              type="text"
              name="namaLengkap"
              value={formData.namaLengkap || ""}
              onChange={handleChange}
              placeholder="Masukan Nama Lengkap"
              className="w-full p-2 border rounded"
            />
          </div>

          {/* NIK */}
          <div className="mb-4">
            <label className="block text-md font-semibold mb-2">
              NIK <span className="font-bold text-[#3A55B4]">*</span>
            </label>
            <input
              type="number"
              name="nik"
              value={formData.nik || ""}
              onChange={handleChange}
              placeholder="Masukan Nomor Induk Kependudukan (NIK)"
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Gender and Citizenship Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-md font-semibold mb-2">
                Jenis Kelamin{" "}
                <span className="font-bold text-[#3A55B4]">*</span>
              </label>
              <select
                name="jenisKelamin"
                value={formData.jenisKelamin || ""}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                {genderOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-md font-semibold mb-2">
                Kewarganegaraan{" "}
                <span className="font-bold text-[#3A55B4]">*</span>
              </label>
              <select
                name="kewarganegaraan"
                value={formData.kewarganegaraan || ""}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                {citizenshipOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            {formData.kewarganegaraan == "wna" && (
              <div>
                <label className="block text-md  font-semibold mb-2">
                  Kewarganegaraan Lainnya{" "}
                </label>
                <input
                  type="text"
                  name="otherKewarganegaraan"
                  value={formData.otherKewarganegaraan || ""}
                  onChange={handleChange}
                  placeholder="Masukan Kewarganegaraan Asing Anda"
                  className="w-full p-2 border rounded"
                />
              </div>
            )}
          </div>

          {/* Religion */}
          <div className="mb-4">
            <label className="block text-md font-semibold mb-2">
              Agama <span className="font-bold text-[#3A55B4]">*</span>
            </label>
            <select
              name="agama"
              value={formData.agama || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              {religionOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Birth Info Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-md font-semibold mb-2">
                Tempat Lahir <span className="font-bold text-[#3A55B4]">*</span>
              </label>
              <input
                type="text"
                name="tempatLahir"
                value={formData.tempatLahir || ""}
                onChange={handleChange}
                placeholder="Masukan Tempat Lahir"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-md font-semibold mb-2">
                Tanggal Lahir{" "}
                <span className="font-bold text-[#3A55B4]">*</span>
              </label>
              <input
                type="date"
                name="tanggalLahir"
                value={formData.tanggalLahir || ""}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          {/* Alamat Section */}
          <div>
            <h3 className="text-xl font-semibold text-[#3A55B4] mb-4">
              Alamat
            </h3>

            {/* Alamat Domisili */}
            <div className="mb-4">
              <label className="block text-md font-semibold mb-2">
                Alamat Domisili{" "}
                <span className="font-bold text-[#3A55B4]">*</span>
              </label>
              <input
                type="text"
                name="alamat"
                value={formData.alamat || ""}
                onChange={handleChange}
                placeholder="Masukan Alamat Domisili"
                className="w-full p-2 border rounded"
              />
            </div>

            {/* City and Postal Code Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-md font-semibold mb-2">
                  Kota Domisili{" "}
                  <span className="font-bold text-[#3A55B4]">*</span>
                </label>
                <input
                  type="text"
                  name="kota"
                  value={formData.kota || ""}
                  onChange={handleChange}
                  placeholder="Masukan Kota"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-md font-semibold mb-2">
                  Kode Pos <span className="font-bold text-[#3A55B4]">*</span>
                </label>
                <input
                  type="number"
                  name="kodePos"
                  value={formData.kodePos || ""}
                  onChange={handleChange}
                  placeholder="Masukan Kode Pos"
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </div>

          {/* Kontak Section */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-[#3A55B4] mb-4">
              Kontak
            </h3>

            {/* Contact Info Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-md font-semibold mb-2">
                  Nomor Telepon/WA{" "}
                  <span className="font-bold text-[#3A55B4]">*</span>
                </label>
                <input
                  type="number"
                  name="noTelp"
                  value={formData.noTelp || ""}
                  onChange={handleChange}
                  placeholder="Masukan Nomor Telepon/WA"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-md font-semibold mb-2">
                  Alamat Email{" "}
                  <span className="font-bold text-[#3A55B4]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  pattern=".+@example\.com"
                  value={formData.email || ""}
                  onChange={handleChange}
                  placeholder="Masukan Alamat Email"
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
