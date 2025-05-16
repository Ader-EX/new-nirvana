import { useTranslation } from "react-i18next";
import bannerEN from "../assets/flattened/products.en.png";
import bannerID from "../assets/flattened/products.id.png";
import { NewsCardGrid } from "../components/NewsCard";
import { products } from "../constants/news";

const ProductsJadiPage = () => {
  const { t, i18n } = useTranslation();

  const banner = i18n.language === "id" ? bannerID : bannerEN;
  const localizedProducts = products.map((product) => ({
    ...product,
    title: t(`products.${product.contentBaseName}.title`),
    description: t(`products.${product.contentBaseName}.description`),
  }));
  return (
    <div>
      <div className="w-full overflow-hidden">
        <img
          src={banner}
          alt={
            i18n.language === "id"
              ? "Banner Produk Olahan"
              : "Processed Products Banner"
          }
          className="w-full h-auto object-cover"
        />
      </div>
      <section className="sm:p-[4rem] p-8 flex flex-col gap-y-12">
        <h3 className="mb-6 text-xl text-[#3A55B4] font-bold">
          {i18n.language === "id" ? "Produk Olahan" : "Processed Products"}
        </h3>
        <NewsCardGrid
          newsItems={localizedProducts}
          itemsPerPage={6}
          needPagination={true}
        />
      </section>
    </div>
  );
};

export default ProductsJadiPage;
