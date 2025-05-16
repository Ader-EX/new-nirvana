import { useTranslation } from "react-i18next";
import bannerEN from "../assets/flattened/products.en.png";
import bannerID from "../assets/flattened/products.id.png";
import { MentahCardGrid } from "../components/MentahCard";
import { mentahProducts } from "../constants/news";

const ProductsMentahPage = () => {
  const { i18n } = useTranslation();
  const banner = i18n.language === "id" ? bannerID : bannerEN;

  return (
    <div>
      <div className="w-full overflow-hidden">
        <img
          src={banner}
          alt={
            i18n.language === "id"
              ? "Banner Produk Mentah"
              : "Raw Products Banner"
          }
          className="w-full h-auto object-cover"
        />
      </div>
      <section className="sm:p-[4rem] p-8 flex flex-col gap-y-12">
        <MentahCardGrid
          items={mentahProducts}
          itemsPerPage={6}
          needPagination={true}
        />
      </section>
    </div>
  );
};

export default ProductsMentahPage;
