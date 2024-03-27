import React, { useState, useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Header.scss";
import HeaderLogo from "@/assets/Header/LogoCyberSafeDLS.png";
import "./MenuBurger/MenuBurger.scss";

function Header() {
  const [menuStatus, setMenuStatus] = useState("close");
  const [currentPage, setCurrentPage] = useState("Accueil");

  const menuRef = useRef(null);

  const handleClickMenu = () => {
    setMenuStatus((status) => (status === "open" ? "close" : "open"));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setMenuStatus("close");
  };

  const detectCurrentPage = () => {
    const currentPath = window.location.pathname;
    const page = currentPath.replace("/", "");
    setCurrentPage(page || "Accueil");
  };

  useEffect(() => {
    const handleClickOutsideMenu = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest(".MenuBurger-container")
      ) {
        setMenuStatus("close");
      }
    };

    detectCurrentPage();

    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);

  useEffect(() => {
    const handleCloseMenu = () => {
      setMenuStatus("close");
    };
    window.addEventListener("hashchange", handleCloseMenu);
    return () => {
      window.removeEventListener("hashchange", handleCloseMenu);
    };
  }, []);

  return (
    <div className="Header">
      <span className="LogoSpan">
        <Link to="" className="LogoLink"> {/* Utilisez Link pour entourer l'image et rediriger vers l'accueil */}
          <img className="Logo" src={HeaderLogo} alt="Header Logo" />
        </Link>
      </span>
      <div className="MenuBurger">
        <div
          className="MenuBurger-container"
          role="button"
          onClick={handleClickMenu}
        >
          <i className={menuStatus}></i>
          <i className={menuStatus}></i>
          <i className={menuStatus}></i>
        </div>
      </div>
      <nav ref={menuRef} className={"NavigationList-wrapper " + menuStatus}>
        <ul className="NavigationList">
          <li>
            <Link
              to=""
              className={currentPage === "Accueil" ? "underline active" : "underline"}
              onClick={() => handlePageChange("Accueil")}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/Articles"
              className={currentPage === "Articles" ? "underline active" : "underline"}
              onClick={() => handlePageChange("Articles")}
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              to="/Actualites"
              className={currentPage === "Actualites" ? "underline active" : "underline"}
              onClick={() => handlePageChange("Actualites")}
            >
              Actualités
            </Link>
          </li>
          <li>
            <Link
              to="/Quiz"
              className={currentPage === "Quiz" ? "underline active" : "underline"}
              onClick={() => handlePageChange("Quiz")}
            >
              Quiz
            </Link>
          </li>
          <li>
            <Link
              to="/A-propos"
              className={currentPage === "A-propos" ? "underline active" : "underline"}
              onClick={() => handlePageChange("A-propos")}
            >
              A propos
            </Link>
          </li>
          <li>
            <a
              href="mailto:cybersafe-dls@protonmail.com"
              className="underline"
              onClick={handleClickMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>  
    </div>
  );
  
}

export default Header;
