import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { GrHelp } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import { RiImageAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const User = () => {
  const user = true;
  const [profileOpen, setProfileOpen] = useState(false);

  const close = () => {
    setProfileOpen(false);
  };

  return (
    <div className="relative">
      {user ? (
        <>
          <button
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 focus:outline-none"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            <img
              src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="User Profile"
              className="w-full h-full object-cover"
            />
          </button>
          {profileOpen && (
            <div
              className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg z-50"
              onClick={close}
            >
              <Link to="/account" className="block px-4 py-3 hover:bg-gray-100">
                <div className="flex items-center">
                  <img
                    src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="User"
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h4 className="text-sm font-semibold">MaRt OgBe</h4>
                    <p className="text-xs text-gray-500">Los Angeles, CA</p>
                  </div>
                </div>
              </Link>
              <Link to="/addBlog" className="flex items-center px-4 py-3 hover:bg-gray-100">
                <RiImageAddLine className="text-xl mr-3" />
                <h4 className="text-sm font-medium">Add Blog</h4>
              </Link>
              <Link to="/login" className="flex items-center px-4 py-3 hover:bg-gray-100">
                <IoSettingsOutline className="text-xl mr-3" />
                <h4 className="text-sm font-medium">My Account</h4>
              </Link>
              <Link to="/help" className="flex items-center px-4 py-3 hover:bg-gray-100">
                <GrHelp className="text-xl mr-3" />
                <h4 className="text-sm font-medium">Help</h4>
              </Link>
              <button className="flex items-center w-full px-4 py-3 hover:bg-gray-100">
                <BiLogOut className="text-xl mr-3" />
                <h4 className="text-sm font-medium">Log Out</h4>
              </button>
            </div>
          )}
        </>
      ) : (
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          My Account
        </button>
      )}
    </div>
  );
};

export default User;
