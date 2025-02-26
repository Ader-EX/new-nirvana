import { useParams } from "react-router-dom";
import { newsItems } from "../constants/news";
import NotFound from "../components/NotFound";
import { useEffect, useState } from "react";
import { NewsCardGrid } from "../components/NewsCard";

const BeritaDetail = () => {
  const { id } = useParams();
  const news = newsItems.find((item) => item.id.toString() === id);

  const [content, setContent] = useState("");

  useEffect(() => {
    if (news?.contentFile) {
      fetch(news.contentFile)
        .then((response) => {
          if (!response.ok) {
            return <NotFound />;
          }
          return response.text();
        })
        .then((data) => setContent(data))
        .catch(() => {
          return <NotFound />;
        });
    }
  }, [news]);

  if (!news) {
    return <NotFound />;
  }

  return (
    <div className="p-10 mx-auto max-w-screen-xl  sm:mt-20 mt-10 text-[#8A8083]">
      <h1 className="text-2xl font-bold mb-4 text-[#3A55B4]">{news.title}</h1>
      <div className="flex w-full justify-between">
        {" "}
        <p className="text-sm text-gray-500 mb-6">{news.date}</p>
        <p className="text-lg text-gray-800">{news.place}</p>
      </div>
      <img
        src={news.image}
        alt={news.title}
        className="w-full object-cover rounded-lg mb-6"
      />

      <p className="text-lg text-gray-800 text-justify whitespace-pre-line">
        {content}
      </p>
      <div className="text-[#3A55B4]  font-bold my-8">
        <h3 className="text-xl">Berita Lainnya</h3>

        <NewsCardGrid newsItems={newsItems} length={3} />
      </div>
    </div>
  );
};

export default BeritaDetail;
