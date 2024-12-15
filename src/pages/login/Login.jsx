import React from "react"
import back from "../../assets/images/my-account.jpg"

export const Login = () => {
  return (
    <>
      <section className="relative mb-12">
        <div className=" m-auto max-w-[95%] ">
          <div className="w-full h-[50vh] relative">
            <img
              src={back}
              alt="background"
              className="w-full h-[50vh] object-cover"
            />
            <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 z-10 text-center text-white">
              <h3 className="font-semibold mb-2">Login</h3>
              <h1 className="text-4xl">My account</h1>
            </div>
          </div>

          <form className="mt-8 ">
            <label className="block mb-2">Username or email address *</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label className="block mt-4 mb-2">Password *</label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="mt-6 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
              Log in
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
