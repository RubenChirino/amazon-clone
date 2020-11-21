import React, { useEffect, useState } from "react";

//STYLES
import "./style.css";

//ICONS
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

//UTILS
import { Link } from "react-router-dom";

//CONTEXT
import { useStateValue } from "../../Context/StateProvider";
import { getBasketTotalQuantityAndPrice } from "../../Context/reducer";

//FIREBASE
import { auth } from "../../firebase";

export default function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const { totalQuantity } = getBasketTotalQuantityAndPrice(basket);
  const [emailWithoutDomain, setEmailWithoutDomain] = useState("");

  useEffect(() => {
    if (user) {
      let character = user.email.indexOf("@");
      setEmailWithoutDomain(user.email.substring(0, character));
    }
  }, [user]);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      {/* left */}
      <figure className="header__logo">
        <Link to="/">
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon logo"
          />
        </Link>
      </figure>

      {/* center */}
      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          name="search"
          id=""
        />
        {/* logo */}
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* right */}
      <div className="header__nav">
        <Link to={!user ? "/login" : "/"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {user ? emailWithoutDomain : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon className="header__BasketIcon" />
            <span className="header__optionLineTwo header__BasketCount">
              {totalQuantity}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
