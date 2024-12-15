import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  title: "",
  description: "",
  category: "",
  imageUrl: "",
};

const options = ["Travel", "Fashion", "Fitness", "Sport", "Food", "Technology", "Health", "Business", "Nature", "Life"];

const AddBlog = () => {
  const [formValue, setFormValue] = useState(initialState);
  const [categoryErrMsg, setCategoryErrMsg] = useState(null);
  const { title, description, category, imageUrl } = formValue;

  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category) {
      setCategoryErrMsg("Please select a category");
      return;
    }

    const blogData = { title, description, category, imageUrl };

    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", blogData);
      toast.success("Blog added successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Failed to add blog. Please try again.");
    }
  };

  // Handle input changes
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file upload
  const onUploadImage = (file) => {
    if (!file || file.length === 0) {
      toast.error("No file selected. Please upload an image.");
      return;
    }

    const selectedFile = file[0];
    if (!selectedFile.type.startsWith("image/")) {
      toast.error("Invalid file type. Please upload an image.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setFormValue((prev) => ({ ...prev, imageUrl: reader.result }));
    };
    reader.onerror = () => {
      toast.error("Failed to read the file. Please try again.");
    };
    reader.readAsDataURL(selectedFile);
  };

  // Handle category change
  const onCategoryChange = (e) => {
    setFormValue((prev) => ({ ...prev, category: e.target.value }));
    setCategoryErrMsg(null);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add Blog
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title Input */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={onInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200"
              placeholder="Enter blog title"
              required
            />
          </div>

          {/* Description Input */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={description}
              onChange={onInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200"
              rows="4"
              placeholder="Enter blog description"
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Upload Image
            </label>
            <input
              type="file"
              onChange={(e) => onUploadImage(e.target.files)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200"
              accept="image/*"
              required
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Category
            </label>
            <select
              value={category}
              onChange={onCategoryChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200"
              required
            >
              <option value="">Select a category</option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {categoryErrMsg && (
              <p className="text-red-500 text-sm mt-1">{categoryErrMsg}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add
            </button>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Go Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
