/* eslint-disable react/prop-types */

const SummaryForm = ({ formData }) => {
  return (
    <div className="mt-6 capitalize">
      {/* Pilihan Kelas Section */}
      <div className="mb-8 ">
        <h2 className="text-xl font-bold text-[#3A55B4] mb-4">
          a Pilihan Kelas
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-md">
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-2 pr-4 font-medium text-gray-600 w-1/3">
                  Jenis Kelas
                </td>
                <td className="py-2">{formData.jenisKelas}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium text-gray-600">
                  Fakultas Pilihan
                </td>
                <td className="py-2">{formData.fakultas}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium text-gray-600">
                  Jurusan Pilihan
                </td>
                <td className="py-2">{formData.jurusan}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Data Pribadi Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-[#3A55B4] mb-4">Data Pribadi</h2>

        {/* Identitas Subsection */}
        <h3 className="text-lg font-semibold text-[#3A55B4] mb-2">Identitas</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-md">
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-2 pr-4 font-medium text-gray-600 w-1/3">
                  Nama Lengkap
                </td>
                <td className="py-2">{formData.namaLengkap}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium text-gray-600">NIK</td>
                <td className="py-2">{formData.nik}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium text-gray-600">
                  Jenis Kelamin
                </td>
                <td className="py-2">{formData.jenisKelamin}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium  text-gray-600">
                  Kewarganegaraan
                </td>
                <td className="py-2 uppercase">
                  {formData.kewarganegaraan === "wna"
                    ? `${formData.kewarganegaraan} - ${formData.otherKewarganegaraan}`
                    : formData.kewarganegaraan}
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium text-gray-600">Agama</td>
                <td className="py-2">{formData.agama}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium text-gray-600">
                  Tempat Lahir
                </td>
                <td className="py-2">{formData.tempatLahir}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium text-gray-600">
                  Tanggal Lahir
                </td>
                <td className="py-2">{formData.tanggalLahir}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Alamat Subsection */}
        <h3 className="text-lg font-semibold text-[#3A55B4] mb-2">Alamat</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-md">
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-2 pr-4 font-medium text-gray-600 w-1/3">
                  Alamat Domisili
                </td>
                <td className="py-2">{formData.alamat}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium text-gray-600">
                  Kota Domisili
                </td>
                <td className="py-2">{formData.kota}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium text-gray-600">
                  Kode Pos
                </td>
                <td className="py-2">{formData.kodePos}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Kontak Subsection */}
        <h3 className="text-lg font-semibold text-[#3A55B4] mb-2">Kontak</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-md">
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-2 pr-4 font-medium text-gray-600 w-1/3">
                  Nomor Telepon/WA
                </td>
                <td className="py-2">{formData.noTelp}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium  text-gray-600">
                  Alamat Email
                </td>
                <td className="py-2 lowercase">{formData.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Data Pendidikan Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-[#3A55B4] mb-4">
          Data Pendidikan Sebelumnya
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-md">
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-2 pr-4 font-medium text-gray-600 w-1/3">
                  Lulusan
                </td>
                <td className="py-2">{formData.lulusan}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium text-gray-600">
                  Asal Sekolah
                </td>
                <td className="py-2">{formData.asalSekolah}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium text-gray-600">
                  Tahun Kelulusan
                </td>
                <td className="py-2">{formData.tahunKelulusan}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SummaryForm;
