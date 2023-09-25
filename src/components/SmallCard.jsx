import React from "react";

const SmallCard = ({ item }) => {
  return (
    <div className="flex justify-start text-start flex-col w-[310px] shadow-cardShadow bg-slate-50">
      <img
        className="w-[310px] h-[150px] object-cover rounded-2xl"
        src={item.imageUrl}
        alt="related-img"
      />
      <h3 className="font-medium mb-0 text-base mx-3 mt-4">{item.title}</h3>
      <p className="text-slate-300 mx-3 mt-2 text-sm">Apr 18th 22</p>
      <span className="pr-10 max-w-xs mx-3 mt-3">{item.description}</span>
      <a
        href={"/post/" + item.id}
        className="mt-6 rounded-lg flex justify-center text-center items-center text-slate-200 w-full h-[45px] bg-sky-950 border-"
      >
        More Detail
      </a>
    </div>
  );
};

export default SmallCard;
