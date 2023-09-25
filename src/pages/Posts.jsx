import Layout from "../components/Layout";
import image3 from "../assets/person.webp";
import image4 from "../assets/marketing.webp";
import image5 from "../assets/ikinci resim.jpeg";
import image6 from "../assets/üçüncüresim.webp";
import { useEffect, useState } from "react";
import { instance } from "../utils/api";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loading from "../components/Loading";
import ArticleCard from "../components/ArticleCard";

const Posts = () => {
  const [searchPostValue, setSearchPostValue] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchParamValue = searchParams.get("search");
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  const getsearchpost = async () => {
    setLoading(true);
    try {
      const res = await instance.get(
        "/posts?search=" + (searchParamValue ? searchParamValue : "")
      );

      setArticles(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getsearchpost();
  }, [searchParamValue]);

  return (
    <Layout>
      <div className="flex items-center justify-center flex-row pr-5 mt-10 mb-14">
        <input
          value={searchPostValue}
          onChange={(e) => setSearchPostValue(e.target.value)}
          className="h-12 p-4 rounded w-3/4 bg-slate-100 max-w-sm mr-2 text-sm"
          type="text"
          placeholder="Search post name..."
        />
        <button
          onClick={() => {
            navigate("/articles?search=" + searchPostValue);
          }}
          className="bg-slate-200 pt-0 p-6- h-12 rounded text-slate-800 w-24"
        >
          Search
        </button>
      </div>

      <div className="flex flex-col items-center w-full mt-10 px-6 ">
        {loading ? (
          <Loading loading={loading} />
        ) : (
          articles.map((item) => <ArticleCard item={item} />)
        )}
      </div>
    </Layout>
  );
};

export default Posts;
