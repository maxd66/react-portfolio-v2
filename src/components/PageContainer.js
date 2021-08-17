import NavTabs from "./NavTabs";
import React, { useState } from "react";

function NavBar() {
  const [currentPage, setCurrentPage] = useState("Home");

  // const renderPage = () => {
  //   switch (currentPage) {
  //     case "Home":
  //       return <Home />;

  //     case "About":
  //       return <About />;

  //     case "Blog":
  //       return <Blog />;

  //     default:
  //       return <Contact />;
  //   }
  // };

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
      {/* {renderPage()} */}
    </div>
  );
}

export default NavBar;
