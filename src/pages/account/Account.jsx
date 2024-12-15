import React from "react";
import image from "../../assets/images/input.png";

export const Account = () => {
  return (
    <>
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto max-w-xl bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl text-center font-semibold text-gray-800 mb-8">
            Account Information
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-12 p-10 ">
            {/* Left Section */}
            <div className="relative">
              <div className="relative w-36 h-36">
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer"
                />
                <img
                  src={image}
                  alt="Profile preview"
                  className="w-36 h-36 object-cover rounded-full border-2 border-gray-300 shadow-sm"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">Change Profile Picture</p>
            </div>

            {/* Right Section */}
            <div className="flex-1">
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter your username"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                  />
                </div>
                <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200 shadow-lg">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
