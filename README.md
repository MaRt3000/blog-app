BLOG APPLICATION

This React application fetches posts from the JSONPlaceholder API and displays them on blog card and DetailsPages components with category  component on the Home page.

Features

Fetches posts from a public API.

Displays posts in a grid layout.

Integrates category and blog card components.

Prerequisites

Ensure you have the following installed on your machine:

Node.js (version 14 or later recommended)

npm or yarn

A code editor, such as VSCode

Getting Started

Follow these steps to set up and run the application locally:

1. Clone the Repository

git clone https://github.com/your-username/your-repository.git
cd your-repository

2. Install Dependencies

Using npm:

npm install

Or using yarn:

yarn install

3. Start the Development Server

Using npm:

npm start

Or using yarn:

yarn start

4. Open in Browser

The application will automatically open in your default browser. If not, navigate to:

http://localhost:3000

Project Structure

src/
├── components/
│   ├── blog/
│   │   └── Card.js  # Blog card component
│   └── category/
│       └── Category.js  # Category component
├── pages/
│   └── Home.js  # Home page fetching and displaying posts
├── App.js       # Main app entry point
└── index.js     # ReactDOM entry

API Reference

This application uses the JSONPlaceholder API to fetch posts.

Endpoint: https://jsonplaceholder.typicode.com/posts

Available Scripts

npm start

Runs the application in development mode.

npm run build

Builds the app for production.

npm test

Runs the test suite.

npm run eject

Ejects the app configuration. Use with caution.

Deployment

To deploy the app, build it first:

npm run build

Then deploy the contents of the build/ directory to your hosting platform.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Contributing

Contributions are welcome! Please open an issue or submit a pull request.

Acknowledgments

JSONPlaceholder API

React

