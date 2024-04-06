import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from "./Components/NavBar/NavBar"
import Home from './Components/Home/Home';
import SingleProduct from "./Components/Pages/SingleProduct"
import Cart from "./Components/Pages/Cart"
import Checkout from "./Components/Pages/Checkout"
import Login from './Components/Pages/Login/Login';
import SignUP from './Components/Pages/Signup/SignUP';
import AboutPage from './Components/Pages/AboutPage';
import ContactPage from './Components/Pages/ContactPage';
import AddProduct from './Components/Pages/AddProduct'; // Import the AddProduct component

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUP />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/add-product" element={<AddProduct />} /> // Add route for AddProduct page
          </Routes>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
