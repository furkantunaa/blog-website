import React, { useState } from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { instance } from "../utils/api";
import { notification } from "antd";
import Loading from "../components/Loading";

const Signup = () => {
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);

  const openNotification = (messageType, placement, message, description) => {
    api[messageType]({
      message,
      description,
      placement,
    });
  };

  const signup = async () => {
    setLoading(true);
    try {
      const res = await instance.post("/signup", { fullName, email, password });
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      console.log(error.response.data);
      openNotification("error", "topRight", error.response.data, "");
    }
  };

  return (
    <Layout>
      <Loading loading={loading} />
      {contextHolder}
      <div className="flex justify-center items-center flex-col text-center mt-24">
        <h2 className="text-3xl mb-3 flex justify-start w-[400px]	text-blue-500	font-medium ">
          Sign Up
        </h2>
        <input
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          placeholder="Full Name"
          className="w-[400px] h-8	mb-6 p-2  rounded-sm border	border-inherit"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
          className="w-[400px] h-8	mb-6 p-2  rounded-sm border	border-inherit"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          className="w-[400px] h-8	mb-3 p-2  rounded-sm border	border-inherit"
        />
        <div className="flex justify-start w-[400px]">
          <button
            onClick={signup}
            className="border	h-19 	text-slate-50	 	bg-sky-600 h-8	pt-1 mt-2 p-2 "
          >
            Sign Up
          </button>
        </div>
        <span className="flex justify-start w-[400px] mt-2">
          If you have account!
        </span>
      </div>
    </Layout>
  );
};

export default Signup;
