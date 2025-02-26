import banner from "../assets/page-banners/berita.png";
import { NewsCardGrid } from "../components/NewsCard";
import { newsItems } from "../constants/news";

const Berita = () => {
  // SECTION "/berita"
  return (
    <>
      <div className="w-full overflow-hidden">
        <img
          src={banner}
          alt="Banner berita"
          className="w-full h-auto object-cover"
        />
      </div>
      {/* Konten Berita Dimuat disini */}
      <NewsCardGrid
        newsItems={newsItems}
        itemsPerPage={6}
        needPagination={true}
      />
    </>
  );
};

export default Berita;
