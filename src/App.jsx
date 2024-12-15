import React from "react"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { Register } from "./pages/login/Register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { DetailsPages } from "./pages/details/DetailsPages"
import { Account } from "./pages/account/Account"

import AboutPage from "./pages/about/AboutPage"
import AddBlog from "./pages/addBlog/AddBlog"
import { ToastContainer }  from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactUs from "./pages/contactUs/ContactUs"
import Help from "./components/help/help"


const App = () => {
  return (
    <>
      <Router>
        <Header />
         <ToastContainer />
        <Routes>
          <Route  path='/' element={<Home />} />
          <Route  path='/login' element={<Login />} />
          <Route path="about" element={<AboutPage />} />
           <Route path="addBlog" element={<AddBlog />}>
            </Route>
            <Route path="contact" element={<ContactUs />}>
            </Route>

        
          <Route  path='/register' element={<Register />} />
          <Route  path='/details/:id' element={<DetailsPages />} />
          <Route  path='/account' element={<Account />} />
          
            <Route  path='/help' element={<Help />} />
          
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
export default App
