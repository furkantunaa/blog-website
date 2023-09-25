import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../utils/api";

const PostDetail = () => {
  const [data, setData] = useState(null);
  const params = useParams();

  const getPostDetail = async () => {
    const res = await instance.get("/post/" + params.id);
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getPostDetail();
  }, [params.id]);

  return (
    <div className="flex flex-col py-3	 ">
      <img
        className="flex item-center text-center rounded-3xl	justify-center ml-72 py-3 mt-16 w-1/2 h-5/6 "
        src={data?.imageUrl}
        alt="#"
      />
      <h3 className="flex text-3xl	mt-8 ml-72 items-start justify-start py-3 text-current	">
        {data?.title}
      </h3>
      <p className="p-12 ">{data?.description}</p>
    </div>
  );
};

export default PostDetail;
