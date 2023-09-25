import React from "react";
import image3 from "../assets/person.webp";
import { Link } from "react-router-dom";
import moment from "moment";

const ArticleCard = ({ item }) => {
  console.log(item);
  return (
    <>
      <Link
        to={`/post/${item.id}`}
        className="max-w-[700px] w-full hover:bg-gray-50 cursor-pointer p-4 rounded-2xl mb-6"
      >
        <div className="flex mr-7 items-center">
          <img className="rounded-full  w-[20px] h-[20px]" src={image3} />
          <h6 className="mt-2 ml-3">Furkan Tuna 1</h6>
          <span className="mt-2 ml-3 text-sm font-light text-zinc-700	">
            {moment(item.updatedAt).format("MMM Do YY")}
          </span>
        </div>
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <h2 className="text-3xl mt-2 mb-7 ">{item.title}</h2>
            <p className="text-base text-slate-600 mb-4">{item.description}</p>
          </div>
          <img className="w-36 h-36 min-h-full rounded" src={item.imageUrl} />
        </div>
      </Link>
    </>
  );
};

export default ArticleCard;
