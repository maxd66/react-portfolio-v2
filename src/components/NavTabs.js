function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul>
      <li>
        <a
          href="#home"
          onClick={() => {
            handlePageChange("Home");
          }}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#portfolio"
          onClick={() => {
            handlePageChange("Porfolio");
          }}
          className={
            currentPage === "Porfolio" ? "nav-link active" : "nav-link"
          }
        >
          Porfolio
        </a>
      </li>
      <li>
        <a
          href="#contact"
          onClick={() => {
            handlePageChange("Contact");
          }}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li>
        <a
          href="#resume"
          onClick={() => {
            handlePageChange("Resume");
          }}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
