import PropTypes from "prop-types";

function FakultasPage({
  title,
  description,
  visi,
  misi,
  prodidescription,
  programs,
  banner,
}) {
  return (
    <div>
      <img src={banner} alt={`${title} banner`} className="w-full h-auto" />
      <section className="sm:p-[4rem] p-8">
        <section className="flex flex-col gap-y-4 mb-6 text-[#8A8083]">
          <h3 className="font-bold text-[#3A55B4] text-xl">Tentang</h3>
          <p>{description}</p>
        </section>
        <section className="grid sm:grid-cols-2 grid-cols-1 gap-6">
          <div>
            <section className="flex flex-col mb-6 gap-y-4 text-[#8A8083]">
              <h3 className="font-bold text-[#3A55B4] text-xl">Visi</h3>
              <p>{visi}</p>
            </section>
            <section className="flex flex-col mb-6 gap-y-4 text-[#8A8083]">
              <h3 className="font-bold text-[#3A55B4] text-xl">Misi</h3>
              <ol className="list-decimal pl-6">
                {misi.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </section>
          </div>
          <div>
            <section className="flex flex-col mb-6 gap-y-4 text-[#8A8083]">
              <h3 className="font-bold text-[#3A55B4] text-xl">
                Program Studi
              </h3>
              <p>{prodidescription}</p>
            </section>
            <section className="flex flex-col gap-y-6">
              {programs.map((program, index) => (
                <div key={index} className="flex w-full justify-between">
                  <h5 className="font-bold justify-center">{program.name}</h5>
                  <a
                    href={program.href}
                    className="border-2 bg-primary-base text-white px-4 py-2 rounded-xl text-sm"
                  >
                    Selengkapnya
                  </a>
                </div>
              ))}
            </section>
          </div>
        </section>
      </section>
    </div>
  );
}

FakultasPage.propTypes = {
  banner: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  prodidescription: PropTypes.string.isRequired,
  visi: PropTypes.arrayOf(PropTypes.string).isRequired,
  misi: PropTypes.arrayOf(PropTypes.string).isRequired,
  tentang: PropTypes.arrayOf(PropTypes.string).isRequired,
  programs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FakultasPage;
