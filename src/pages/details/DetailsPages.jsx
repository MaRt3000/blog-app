import React, { useState, useEffect } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { useParams, useNavigate } from "react-router-dom";
import { blog } from "../../assets/data/data";
import axios from "axios";

export const DetailsPages = () => {



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






  
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const foundBlog = blog.find((item) => item.id === parseInt(id));
    if (foundBlog) {
      setBlogs(foundBlog);
    }
  }, [id]);
// Edit handler
  const handleEdit = () => {
    alert("Edit functionality coming soon!");
    // Example: Navigate to an edit form page
    // navigate(`/edit/${id}`);
  };

  // Delete handler
  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (confirmDelete) {
      // Simulate deletion
      alert("Blog deleted successfully.");
      // Example: Redirect to home or blog list after deletion
      navigate("/");
    }
  };


  

  return (
    <>
      {blogs ? (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="flex flex-col gap-8">
            
              <div className="">
                <img
                  src={blogs.cover}
                  alt={blogs.title}
                  className="w-[400rem] h-auto rounded-lg shadow-md"
                />
              </div>

             
              <div className="space-y-6">
                <div className="flex justify-end space-x-4">
                  <button  onClick={handleEdit} className="p-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition duration-200">
                    
                    <BsPencilSquare size={20} />
                  </button>
                  <button onClick={handleDelete} className="p-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition duration-200">
                    <AiOutlineDelete size={20} />
                  </button>
                </div>
                <h1 className="text-2xl lg:text-3xl font-semibold text-gray-800">
                  {blogs.title}
                </h1>




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



      
                <p className="text-gray-600 leading-relaxed">{blogs.desc}</p>
                <p className="text-gray-600 leading-relaxed">
                  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?" Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Author: <span className="font-medium text-gray-800">MaRt</span>
                </p>
                 {/* Back Home Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Back To Home
        </button>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};
