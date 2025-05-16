import { useParams } from "react-router-dom";
import { products } from "../constants/news";
import NotFound from "../components/NotFound";
import { useEffect, useState } from "react";
import { NewsCardGrid } from "../components/NewsCard";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useTranslation } from "react-i18next";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const news = products.find((item) => item.id.toString() === id);
  const [content, setContent] = useState("");

  useEffect(() => {
    if (news?.contentBaseName) {
      const localizedPath = `/texts/${news.contentBaseName}.${i18n.language}.md`;
      fetch(localizedPath)
        .then((response) => {
          if (!response.ok) throw new Error("File not found");
          return response.text();
        })
        .then((data) => setContent(data))
        .catch(() => setContent(null));
    }
  }, [news, i18n.language]);

  if (!news || content === null) {
    return <NotFound />;
  }

  return (
    <div className="p-10 mx-auto max-w-screen-xl sm:mt-20 mt-10 text-[#8A8083]">
      <h1 className="text-2xl font-bold mb-4 text-[#3A55B4]">{news.title}</h1>
      <div className="flex w-full justify-between">
        <p className="text-sm text-gray-500 mb-6">{news.date}</p>
        <p className="text-lg text-gray-800 font-bold">{news.place}</p>
      </div>
      <img
        src={news.image}
        alt={news.title}
        className="w-full max-h-[500px] object-cover object-center rounded-lg mb-6"
      />
      <div className="markdown-content prose prose-lg text-gray-800">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
      </div>

      <div className="text-[#3A55B4] font-bold my-8">
        <h3 className="text-xl">Produk Lainnya</h3>
        <NewsCardGrid newsItems={products} length={3} />
      </div>
    </div>
  );
};

export default ProductDetailPage;
