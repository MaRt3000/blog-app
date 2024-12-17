import React, { useEffect, useState } from "react";
import { blog } from "../../assets/data/data";
import {
  AiOutlineTags,
  AiOutlineClockCircle,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";

export const Card = () => {
  const [expandedItems, setExpandedItems] = useState({}); // State to track expanded items
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(response.data.slice(0, 1)); // Limit to 1 post for simplicity
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleReadMore = (id) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the specific item's expanded state
    }));
  };

  return (
    <section className="my-12">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blog.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 rounded-lg shadow-lg transition-transform duration-500 transform hover:translate-y-[-5px] hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={item.cover}
                alt={item.title}
                className="w-full h-64 object-cover rounded-lg mb-5"
              />
            </div>

            {/* Blog Details */}
            <div className="details">
              {/* Category Tag */}
              <div className="tag flex items-center mb-4">
                <AiOutlineTags className="text-gray-500 mr-2 text-xl" />
                <a href="/" className="text-blue-500 hover:opacity-80 text-sm">
                  #{item.category}
                </a>
              </div>

              {/* Title */}
              <h3 className="font-medium text-lg">{item.title}</h3>

              {/* API Data */}
              <div className="mt-4">
                {posts.map((post) => (
                  <div key={post.id}>
                    <h2 className="py-4">{post.title}</h2>
                    <p className="text-gray-600">{post.body}</p>
                  </div>
                ))}
              </div>

              {/* Conditionally Render Description */}
              <p className="text-gray-500 text-sm my-4">
                {expandedItems[item.id] ? item.desc : `${item.desc.slice(0, 180)}...`}
              </p>

              {/* Action Buttons */}
              <div className="flex justify-between items-center">
                {/* Read More Button */}
                <button
                  onClick={() => handleReadMore(item.id)}
                  className="text-blue-500 text-sm hover:underline"
                >
                  {expandedItems[item.id] ? "Read Less" : "Read More"}
                </button>

                {/* Detail View Button */}
                <Link
                  to={`/details/${item.id}`}
                  className="text-blue-500 text-sm hover:underline"
                >
                  Detail View
                </Link>
              </div>

              {/* Meta Info */}
              <div className="date flex items-center mt-4">
                <AiOutlineClockCircle className="text-gray-500 mr-2 text-lg" />
                <label className="mr-5 text-sm">{item.date}</label>

                <AiOutlineComment className="text-gray-500 mr-2 text-lg" />
                <label className="mr-5 text-sm">27</label>

                <AiOutlineShareAlt className="text-gray-500 mr-2 text-lg" />
                <label className="text-sm">SHARE</label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
