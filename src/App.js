import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Posts from "./pages/Posts.jsx";
import CreateNewPost from "./pages/CreateNewPost.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import NotFound from "./pages/NotFound.jsx";
import PostDetail from "./pages/PostDetail.jsx";
import { useEffect } from "react";
import { instance } from "./utils/api.js";
import { useDispatch } from "react-redux";
import { setState } from "./redux/userSlice.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/articles",
    element: <Posts />,
  },
  {
    path: "/create-new-post",
    element: <CreateNewPost />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/post/:id",
    element: <PostDetail />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const getUser = async () => {
    try {
      const res = await instance.get("/user");
      dispatch(setState(res.data));
      return res.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    const res = getUser();
    if (!token || !res) {
      localStorage.removeItem("token");
    }
  }, [token]);

  return <RouterProvider router={router} />;
}

export default App;
