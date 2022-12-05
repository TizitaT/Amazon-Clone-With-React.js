import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "./four04.css";

const Four04 = () => {
  return (
    <>
      <div className="header404">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon Logo"
          />
        </Link>
        <div className="header__search404">
          <input className="header__searchInput404" type="text" />
          <SearchIcon className="header__searchIcon404" />
        </div>
      </div>
      <div className="fourofour">
        <p className="fourofour__title">SORRY</p>

        <p className="fourofour__message">We couldn't find that page</p>

        <p className="fourofour__apology">
          Try searching or Go to
          <Link className="fourofour__linkk" to="/">
            <span className="fourofour__link">Amazon's Home Page</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Four04;
