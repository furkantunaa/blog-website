import React, { useState } from "react";
import Layout from "../components/Layout";
import { instance } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";

const CreateNewPost = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescripton] = useState("");
  const id = useSelector((state) => state.user.userInfo.payload?.id);
  const navigate = useNavigate();

  const createPost = async () => {
    try {
      const res = await instance.post("/post", {
        title,
        description,
        imageUrl,
        authorId: id,
      });
      console.log(res.data);
      navigate(`/post/${res.data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center text-start  flex-col mr-32">
        <div className="flex justify-start w-7/12">
          <h1 className="flex justify-start font-medium	text-3xl mr-32">
            Create New Post
          </h1>
        </div>
        <div className="flex justify-start w-7/12 mt-9">
          <p>Image URL</p>
        </div>
        <input
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="border border-current	p-3	rounded-lg h-12	w-7/12"
          placeholder="Image URL"
        />
        <div className="flex justify-start w-7/12 mt-9">
          <p>Title</p>
        </div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-current mb-8	p-3	rounded-lg h-12	w-7/12"
          placeholder="Post Title"
        />
        <div className="flex justify-start w-7/12">
          <p>Description</p>
        </div>
        <input
          value={description}
          onChange={(e) => setDescripton(e.target.value)}
          className="border	border-current p-3 h-28	 mb-8 rounded-lg	w-7/12"
          placeholder="Post Description"
        />
        <button
          onClick={createPost}
          className="h-10 bg-blue-600	text-white		rounded-lg mt-8 mb-8	w-7/12"
        >
          Submit
        </button>
      </div>
    </Layout>
  );
};

export default CreateNewPost;
