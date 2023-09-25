import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import { instance } from "../utils/api";
import { isUserActive } from "../utils";
import Loading from "../components/Loading";
import { useDispatch } from "react-redux";
import { setState } from "../redux/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(isUserActive());
    isUserActive() && navigate("/");
  }, [navigate]);

  const openNotification = (messageType, placement, message, description) => {
    api[messageType]({
      message,
      description,
      placement,
    });
  };

  const login = async () => {
    if (email.trim() === "" || password.trim() === "") {
      return openNotification(
        "error",
        "topRight",
        "Please provide all inputs..."
      );
    }
    setLoading(true);
    try {
      const res = await instance.post("/login", { email, password });
      dispatch(setState(res.data));
      console.log(res.data);
      setLoading(false);
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (error) {
      setLoading(false);
      console.log(error.response.data);
      openNotification("error", "topRight", error.response.data.error);
    }
  };

  return (
    <Layout>
      <Loading loading={loading} />
      {contextHolder}
      <div className="flex justify-center items-center  flex-col mt-24">
        <div className="flex justify-start w-[400px]">
          <span className="text-3xl mb-3 	text-blue-500	font-medium  ">
            Log In
          </span>
        </div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
          className="w-[400px] h-8	mb-6 p-2  rounded-sm border	border-inherit"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          className="w-[400px] p-2 h-8 border-inherit rounded-sm border "
        />
        <div className="flex justify-start w-[400px]">
          <button
            onClick={login}
            className="border	h-17 flex justify-start 	text-slate-200 	bg-sky-600 h-8	pt-1 mt-5 p-2 mb-5"
          >
            Login
          </button>
        </div>
        <span className="w-[400px]">Dont u have a account?</span>
      </div>
    </Layout>
  );
};

export default Login;
