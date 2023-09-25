import React from "react";
import image3 from "../assets/person.webp";
import image4 from "../assets/marketing.webp";

const ArticleCard = () => {
  return (
    <div className="max-w-[700px] hover:bg-gray-50 cursor-pointer p-4 rounded-2xl mb-6">
      <div className="flex mr-7	flex items-center">
        <img className="rounded-full  w-[20px] h-[20px]" src={image3} />
        <h6 className="mt-2 ml-3">Furkan Tuna 1</h6>
        <span className="mt-2 ml-3 text-sm font-light text-zinc-700	">
          Apr 18th 2022
        </span>
      </div>
      <div className="flex justify-center items-start">
        <div className="flex flex-col">
          <h2 className="text-3xl mt-2 mb-7 ">
            How I got 2.3 million app downloads (without spending a cent on
            marketing)
          </h2>
          <p className="text-base text-slate-600 mb-4">
            The story of how an app I built in 6 hours got 2.3 million
            downloads, generated a full-time salary and was acquired after 18
            months. This was originally a 5 part series on my blog at
            stuartkhall.com titled An App Store Experiment, but here is a
            summary of the entire story.
          </p>
        </div>
        <img className="w-36 h-36 min-h-full rounded" src={image4} />
      </div>
      <div className="flex flex-row ">
        <span className="mr-2">Software</span>
        <span className="mr-2">Naturel</span>
        <span className="mr-2">Wildlife</span>
        <span className="mr-2">1 min read</span>
      </div>
    </div>
  );
};

export default ArticleCard;
