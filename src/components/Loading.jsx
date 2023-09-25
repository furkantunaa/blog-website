import { Spin } from "antd";
import React from "react";

const Loading = ({ loading }) => {
  return (
    <div
      className={`w-screen h-screen bg-gray-300 opacity-80 fixed top-0 left-0 z-50 items-center justify-center ${
        loading ? "flex" : "hidden"
      }`}
    >
      <Spin />
    </div>
  );
};

export default Loading;
