import NavTabs from "./NavTabs";
import React, { useState } from "react";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./Footer";

function NavBar() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;

      case "Portfolio":
        return <Portfolio />;

      case "Contact":
        return <Contact />;

      default:
        return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <nav>
        <h1>Maxwell Dunn</h1>
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </nav>
      {renderPage()}
      <Footer />
    </div>
  );
}

export default NavBar;
