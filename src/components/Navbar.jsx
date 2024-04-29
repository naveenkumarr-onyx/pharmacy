import React from "react";
import logo from "../assets/logo.png";
import Navs from "../typography/Navs";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  let activePages = "";
  if (pathname.startsWith("/orders")) {
    activePages = "orders";
  } else if (pathname.startsWith("/products")) {
    activePages = "products";
  } else if (pathname.startsWith("/users")) {
    activePages = "users";
  }
  const handleLogOut = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };
  return (
    <div className="Nav-Container">
      <div className="Nav-Left">
        <div className="Nav-Left1">
          <div>
            <img src={logo} alt="logo" className="Nav-Img" />
          </div>
          <h1 className="Nav-Logo">Krafene</h1>
        </div>
        <div className="Nav-Left2">
          {pathname.startsWith("/login") ? (
            <>
              <Navs title="orders" href="/login" />
              <Navs title="Products" href="/login" />
              <Navs title="Users" href="/login" />
            </>
          ) : (
            <>
              <Navs
                title="orders"
                href="/orders"
                active={activePages === "orders"}
              />
              <Navs
                title="Products"
                href="/products"
                active={activePages === "products"}
              />
              <Navs
                title="Users"
                href="/users"
                active={activePages === "users"}
              />
            </>
          )}
        </div>
      </div>
      {pathname.startsWith("/login") ? (
        <></>
      ) : (
        <Navs title="Logout" href="/login" onClick={handleLogOut} />
      )}
    </div>
  );
};

export default Navbar;
