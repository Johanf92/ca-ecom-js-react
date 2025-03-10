import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { MobileMenu } from "../components/MobileMenu";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main className="flex-1 pt-16">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
