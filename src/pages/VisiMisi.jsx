import bannerEN from "../assets/flattened/visi-misi.en.png";
import bannerID from "../assets/flattened/visi-misi.id.png";

import { useTranslation } from "react-i18next"; // Import useTranslation

const VisiMisi = () => {
  const { t, i18n } = useTranslation();
  const banner = i18n.language === "id" ? bannerID : bannerEN;
  return (
    <>
      <div className="w-full overflow-hidden">
        <img
          src={banner}
          alt={
            i18n.language === "id"
              ? "Banner Visi Misi"
              : "Vision & Mission Banner"
          }
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="sm:p-[4rem] text-justify p-8  flex flex-col gap-y-10 text-lg text-[#8A8083]">
        <section className="">
          <h5 className="text-[#3A55B4] mb-4 font-bold text-lg">
            {t("home.visimisi.visi-judul")}
          </h5>
          <p>{t("home.visimisi.visi")}</p>
        </section>
        <section>
          <h5 className="text-[#3A55B4] mb-4 font-bold text-lg">
            {t("home.visimisi.misi-judul")}
          </h5>
          <ol className="list-decimal pl-8 flex flex-col gap-y-4">
            <li>{t("home.visimisi.misi1")}</li>
            <li>{t("home.visimisi.misi2")}</li>
            <li>{t("home.visimisi.misi3")}</li>
            <li>{t("home.visimisi.misi4")}</li>
          </ol>
        </section>
      </div>
    </>
  );
};

export default VisiMisi;
