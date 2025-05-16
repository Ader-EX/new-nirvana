import { useTranslation } from "react-i18next";
import bannerEN from "../assets/flattened/contacts.en.png";
import bannerID from "../assets/flattened/contacts.id.png";

const ContactUsPage = () => {
  const { t, i18n } = useTranslation();
  const banner = i18n.language === "id" ? bannerID : bannerEN;

  return (
    <div>
      <div className="w-full overflow-hidden">
        <img
          src={banner}
          alt={t("home.contactUs.bannerAlt")}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Location Section */}
        <div className="mb-12 text-center">
          <h2 className="text-blue-600 font-medium mb-2">
            {t("home.contactUs.locationTitle")}
          </h2>
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            {t("home.contactUs.locationHeading")}
          </h1>

          {/* Google Maps Embed */}
          <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://maps.google.com/maps?width=600&height=400&hl=en&q=nirvana Niaga sejahtera makassar&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t("home.contactUs.mapTitle")}
            ></iframe>
          </div>
        </div>

        {/* Who We Are Section */}
        {/* <div className="mb-12 text-center">
          <h2 className="text-blue-600 font-medium mb-2">
            {t("home.contactUs.infoTitle")}
          </h2>
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            {t("home.contactUs.infoHeading")}
          </h1>
        </div> */}

        {/* Contact Information */}
      </div>
      <div className="bg-gray-50 p-10 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* "We are always happy to assist you" section */}
          <div className="md:col-span-1">
            <h3 className="text-4xl font-bold text-blue-600 mb-4">
              {t("home.contactUs.assistTitle")}
            </h3>
          </div>

          {/* Phone Number */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              {t("home.contactUs.phoneTitle")}
            </h4>
            <div className="mb-1">—</div>
            <div className="text-gray-700 mb-2">+62411 4742 239</div>
            <div className="text-sm text-gray-600">
              {t("home.contactUs.assistanceHours")}
              <br />
              {t("home.contactUs.assistanceDays")}
            </div>
          </div>

          {/* Email Address */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              {t("home.contactUs.emailTitle")}
            </h4>
            <div className="mb-1">—</div>
            <div className="text-gray-700 mb-2">
              official@nirvanniagsejahtera.co.id
            </div>
            <div className="text-sm text-gray-600">
              {t("home.contactUs.assistanceHours")}
              <br />
              {t("home.contactUs.assistanceDays")}
            </div>
          </div>

          {/* Location */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              {t("home.contactUs.locationAddressTitle")}
            </h4>
            <div className="mb-1">—</div>
            <div className="text-gray-700">
              Jl.Kima 6 Kav.FIII/B1-B2,
              <br />
              Kel. Daya, Kec.
              <br />
              Biringkanaya, Kota
              <br />
              Makassar, Prov. Sulawesi
              <br />
              Selatan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
