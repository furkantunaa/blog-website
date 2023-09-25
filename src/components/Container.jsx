import SmallCard from "./SmallCard";
import { useEffect, useState } from "react";
import { instance } from "../utils/api";

const Container = () => {
  const [lastestPosts, setLastestPosts] = useState(null);

  const lastposts = async () => {
    try {
      const res = await instance.get("/lastest-posts");
      setLastestPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    lastposts();
  }, []);

  return (
    <>
      <div className="px-4">
        <div className="cursor-pointer my-0 mx-auto w-full max-w-[1000px] flex flex-col">
          <h1 className="font-medium mb-0 text-lg flex items-center justify-start  md:flex md:justify-center md:items-center">
            Lastest Posts
          </h1>
          <div className="flex md:flex-col md:justify-center md:items-center justify-between gap-4">
            {lastestPosts &&
              lastestPosts.map((item) => <SmallCard item={item} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
