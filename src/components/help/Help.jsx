import React from "react";

const Help = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Help Center</h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Need assistance? Browse our FAQs or reach out for help.
        </p>
        <div className="mt-8 space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800">Frequently Asked Questions</h3>
            <ul className="mt-4 list-disc list-inside text-gray-700">
              <li>How do I create an account?</li>
              <li>How can I reset my password?</li>
              <li>Where can I find more information about your services?</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 ">
            <h3 className="text-xl font-bold text-gray-800 text-center">Contact Support</h3>
            <form className="mt-4 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1  block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Your Name" 
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="issue" className="block text-sm font-medium text-gray-700">
                  Issue
                </label>
                <textarea
                  id="issue"
                  rows="4"
                  className="mt-1 pt-2  block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Describe your issue"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
