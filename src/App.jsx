import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import ContactPage from "./pages/ContactPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Checkout />} />
          <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
