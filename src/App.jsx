import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Products from "./pages/Products";
import Product from "./pages/Product";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
