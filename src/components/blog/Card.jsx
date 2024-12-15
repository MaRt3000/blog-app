import React, { useEffect, useState } from "react";
import { blog } from "../../assets/data/data";
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";

export const Card = () => {
  const [expandedItems, setExpandedItems] = useState({}); // State to track expanded items






const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(response.data.slice(0, 1)); // Limit to 1 posts for simplicity
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
          <Link 
            to={`/details/${item.id}`} 
            key={item.id} 
            className="block bg-white p-5 rounded-lg shadow-lg transition-transform duration-500 transform hover:translate-y-[-5px] hover:shadow-xl hover:cursor-pointer"
          >
            <div className="relative">
              <img 
                src={item.cover} 
                alt={item.title} 
                className="w-full h-64 object-cover rounded-lg mb-5"
              />
            </div>

            <div className="details">
              <div className="tag flex items-center mb-4">
                <AiOutlineTags className="text-gray-500 mr-2 text-xl" />
                <a href="/" className="text-blue-500 hover:opacity-80 text-sm">#{item.category}</a>
              </div>

              <h3 className="font-medium text-lg">{item.title}</h3>





{/* DATA FROM  JSONPLACEHOLDER  PUBLIC API */}

              <div className="">
        
        <div className="">
          {posts.map((post) => (
            <div key={post.id} className="">
              <h2 className="py-4">{post.title}</h2>
              <p className="">{post.body}</p>
            </div>
          ))}
        </div>
      </div>



              
              {/* Conditionally render description */}
              <p className="text-gray-500 text-sm my-4">
                {expandedItems[item.id] ? item.desc : `${item.desc.slice(0, 180)}...`}
              </p>
              
              {/* Read More Button */}
              <button
                onClick={(e) => {
                  e.preventDefault(); // Prevent link navigation
                  handleReadMore(item.id);
                }}
                className="text-blue-500 text-sm hover:underline"
              >
                {expandedItems[item.id] ? "Read Less" : "Read More"}
              </button>

              <div className="date flex items-center mt-4">
                <AiOutlineClockCircle className="text-gray-500 mr-2 text-lg" />
                <label className="mr-5 text-sm">{item.date}</label>

                <AiOutlineComment className="text-gray-500 mr-2 text-lg" />
                <label className="mr-5 text-sm">27</label>

                <AiOutlineShareAlt className="text-gray-500 mr-2 text-lg" />
                <label className="text-sm">SHARE</label>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
