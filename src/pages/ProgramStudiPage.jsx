import PropTypes from "prop-types";

const ProgramStudiPage = ({
  banner,
  title,

  visi,
  misi,
  tentang,
  kompetensi,
  profilLulusan,
  facultyData,
  lamapendidikan,
  biaya,
  additionalInfo,
  akreditasi,
}) => (
  <div className="text-[#8A8083]">
    <img src={banner} alt={`${title} banner`} className="w-full h-auto" />
    <section className="sm:p-[4rem] p-8 ">
      <section>
        <h3 className="font-bold text-[#3A55B4] text-xl mb-4">Tentang</h3>
        <p className="">{tentang}</p>
      </section>
      <section className="flex flex-col sm:flex-row gap-6">
        <section>
          <section className="mt-6">
            <h3 className="font-bold text-[#3A55B4] text-xl mb-4 ">Visi</h3>
            <p className="">{visi}</p>
          </section>

          <section className="mt-6">
            <h3 className="font-bold text-[#3A55B4] text-xl mb-4">Misi</h3>
            <ul className="list-decimal pl-6 ">
              {misi.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        </section>

        <section className="mt-6">
          <h3 className="font-bold text-[#3A55B4] text-xl mb-4">
            Kompetensi Utama Lulusan
          </h3>
          <ul className="list-decimal pl-6 ">
            {kompetensi.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      </section>

      <section className="mt-6">
        <h3 className="font-bold text-[#3A55B4] text-xl mb-4">
          Profil Lulusan
        </h3>
        <ul className="list-decimal pl-6 ">
          {profilLulusan.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="mt-6">
        <h3 className="font-bold text-[#3A55B4] text-xl mb-4">
          Lama Pendidikan
        </h3>
        <p className="">{lamapendidikan}</p>
      </section>

      <section className="mt-6">
        <h3 className="font-bold text-[#3A55B4] text-xl mb-4">
          Biaya Pendidikan
        </h3>
        <div className="flex justify-center mt-4">
          <img src={biaya} alt="Biaya Pendidikan" className="max-w-[50%]" />
        </div>
        {additionalInfo.map((item) => (
          <p className="italic" key={item}>
            {item}
          </p>
        ))}
      </section>
      {akreditasi && (
        <section className="mt-6">
          <h3 className="font-bold text-[#3A55B4] text-xl mb-4">Akreditasi</h3>
          <div className="flex justify-center mt-4">
            <img src={akreditasi} alt="Akreditasi" className="max-w-[50%]" />
          </div>
        </section>
      )}
      <section className="mt-6">
        <h3 className="font-bold text-[#3A55B4] text-xl mb-4">Tim Dosen</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {facultyData.map((dosen, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4"
            >
              <img
                src={dosen.image}
                alt={dosen.name}
                className="object-cover"
              />
              <div>
                <h4 className="font-bold text-gray-800">{dosen.name}</h4>
                <p className="text-gray-500">{dosen.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  </div>
);

ProgramStudiPage.propTypes = {
  banner: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,

  visi: PropTypes.string.isRequired,
  lamapendidikan: PropTypes.string.isRequired,
  misi: PropTypes.arrayOf(PropTypes.string).isRequired,
  tentang: PropTypes.arrayOf(PropTypes.string).isRequired,
  prodidescription: PropTypes.string.isRequired,
  kompetensi: PropTypes.arrayOf(PropTypes.string).isRequired,
  profilLulusan: PropTypes.arrayOf(PropTypes.string).isRequired,
  facultyData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  biaya: PropTypes.string.isRequired,
  additionalInfo: PropTypes.arrayOf(PropTypes.string),
  akreditasi: PropTypes.string,
};

export default ProgramStudiPage;
