import React, { useState } from "react";
import { FaRegImage, FaPoll, FaVideo } from "react-icons/fa";
import { CiStreamOn } from "react-icons/ci";
import axios from "axios";

const UploadPost = ({isChange, setIsChange}) => {
  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handlePost = async () => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("text", text);
      formData.append("image", image);

      const response = await axios.post(
        "http://localhost:4000/api/v1/post",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Post successful:", response.data);
      setText("");
      setImage(null);
      setIsChange(!isChange)
    } catch (error) {
      console.error("Error posting:", error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-5 p-3 m-2 rounded-md shadow-md border">
      <div className="flex justify-between">
        <textarea
          type="text"
          value={text}
          onChange={handleTextChange}
          className="w-[100%] rounded-lg bg-slate-50 outline-none border border-blue-400"
        />
      </div>
      <div className="flex ml-2 items-center justify-between">
        <div className="flex justify-between items-center gap-5">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="img"
          />
          <label
            htmlFor="img"
            className="bg-slate-100 p-2 rounded-md cursor-pointer"
          >
            <FaRegImage className="text-[1.4rem] text-purple-600" />
          </label>
          <div className=" bg-slate-100 p-2 rounded-md cursor-not-allowed">
            <FaPoll className="text-[1.4rem] text-indigo-600" />
          </div>
          <div className=" bg-slate-100 p-2 rounded-md cursor-not-allowed">
            <FaVideo className="text-[1.4rem] text-green-600" />
          </div>
          <div className=" bg-slate-100 p-2 rounded-md cursor-not-allowed">
            <CiStreamOn className="text-[1.4rem] text-blue-600" />
          </div>
        </div>
        <button
          onClick={handlePost}
          className={`px-3 py-1 rounded-lg font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 text-white ${
            loading ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Posting..." : "Post"}
        </button>
      </div>
      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="Selected"
          className="w-full rounded-md object-cover max-h-[600px]"
        />
      )}
    </div>
  );
};

export default UploadPost;
