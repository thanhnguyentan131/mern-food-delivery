import React, { useEffect, useState } from "react";
import { GiChefToque, GiForkKnifeSpoon } from "react-icons/gi";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  FiBook,
  FiHome,
  FiKey,
  FiLogOut,
  FiPhone,
  FiShoppingBag,
  FiShoppingCart,
  FiStar,
} from "react-icons/fi";
import { useCart } from "../../CartContext/CartContext";
import Login from "../Login/Login";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useCart();
  const [showLoginModel, setShowLoginModel] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // COMBINE UPDATING LOGIN MODEL
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem("loginData"))
  );

  useEffect(() => {
    setShowLoginModel(location.pathname === "/login");
    setIsAuthenticated(Boolean(localStorage.getItem("loginData")));
  }, [location.pathname]);

  const handleLoginSuccess = () => {
    localStorage.setItem("loginData", JSON.stringify({ loggedIn: true }));
  };

  const handleLogout = () => {
    localStorage.removeItem("loginData");
    setIsAuthenticated(false);
  };

  // EXTRACT  DESKTOP AUTH BUTTON
  const renderDesktopAuthButton = () => {
    return isAuthenticated ? (
      <button
        onClick={handleLogout}
        className="px-3 md:px-3 lg:px-6 py-1.5 md:py-2 lg:py-3 bg-gradient-to-br from-amber-500 to-amber-700 text-[#2d1b0e] rounded-2xl font-bold hover:shadow-lg hover:shadow-amber-600/40 transition-all transform hover:scale-[1.02] border-2 border-amber-600/20 flex items-center space-x-2 shadow-md shadow-amber-900/20 text-xs md:text-sm lg:text-sm    "
      >
        <FiLogOut className="text-base md:text-lg lg:text-lg" />
        <span className="text-shadow">Logout</span>
      </button>
    ) : (
      <button
        onClick={() => navigate("/login")}
        className="px-3 md:px-3 lg:px-6 py-1.5 md:py-2 lg:py-3 bg-gradient-to-br from-amber-500 to-amber-700 text-[#2d1b0e] rounded-2xl font-bold hover:shadow-lg hover:shadow-amber-600/40 transition-all transform hover:scale-[1.02] border-2 border-amber-600/20 flex items-center space-x-2 shadow-md shadow-amber-900/20 text-xs md:text-sm lg:text-sm    "
      >
        <FiKey className="text-base md:text-lg lg:text-lg" />
        <span className="text-shadow">Login</span>
      </button>
    );
  };

  // EXTRACT MOBILE AUTH BUTTON
  const renderMobileAuthButton = () => {
    return isAuthenticated ? (
      <button onClick={handleLogout} className="w-full px-4 py-3 bg-gradient-to-br from-amber-500 to-amber-700 text-[#2d1b0e] rounded-xl font-semibold flex items-center justify-center space-x-2 text-sm ">
        <FiLogOut/>
        <span>Logout</span>
      </button>
    ): (
      <button onClick={() => {
        navigate('/login')
        setIsOpen(false)
      }} className="w-full px-4 py-3 bg-gradient-to-br from-amber-500 to-amber-700 text-[#2d1b0e] "></button>
    )
  }

  const navLinks = [
    { name: "Home", to: "/", icon: <FiHome /> },
    { name: "Menu", to: "/menu", icon: <FiBook /> },
    { name: "About", to: "/about", icon: <FiStar /> },
    { name: "Contact", to: "/contact", icon: <FiPhone /> },
  ];
  return (
    <nav className="bg-[#2D1B0E] border-b-8 border-amber-900/30 shadow-amber-900/30 sticky top-0 z-50 shadow-[0_25px_50px_-12px] font-vibes group/nav overflow-x-hidden">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4">
        <div className="h-[6px] bg-gradient-to-r from-transparent via-amber-600/50 to-transparent shadow-[0_0_20px] shadow-amber-500/30" />
        <div className="flex justify-between px-6">
          <GiForkKnifeSpoon
            className="text-amber-500/40 -mt-4 -ml-2 rotate-45"
            size={32}
          />
          <GiForkKnifeSpoon
            className="text-amber-500/40 -mt-4 -ml-2 rotate-45"
            size={32}
          />
        </div>
      </div>
      {/* MAIN NAVIGATION CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 relative ">
        <div className="flex justify-between items-center h-16 md:h-20 lg:h-24">
          {/* LOGO SECTION*/}
          <div className=" flex shrink-0 items-center space-x-2 group relative md:-translate-x-4 lg:translate-x-6 ml-0 md:ml-2">
            <div className="absolute -inset-4 bg-amber-500/10 rounded-full blur-xl opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300" />
            <GiChefToque className=" text-3xl md:text-4xl lg:text-5xl text-amber-500 transition-all group-hover:rotate-12 group-hover:text-amber-400 hover:drop-shadow-[0_0_15px] hover:drop-shadow-amber-500/50" />
            <div className="flex flex-col relative ml-2 max-w-[140px] md:max-w-[160px] lg:max-w-none">
              <NavLink
                to="/"
                className="text-2xl md:text-xl lg:text-4xl bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent font-monsieur tracking-wider drop-shadow-[0_2px_2px] drop-shadow-black -translate-x-2 truncate md:truncate-none  "
              >
                Mr.KEN
              </NavLink>
              <div className="h-[3px] bg-gradient-to-r from-amber-600/30 via-amber-400/50 to-amber-600/30 w-full mt-1 ml-1 shadow-[0_2px_5px] shadow-amber-500/20"></div>
            </div>
          </div>
          {/* DESTOP NAVIGATION */}
          <div className="hidden md:flex items-center space-x-2 md:space-x-1 lg:space-x-4 flex-1 justify-end">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `group px-3 md:px-3 lg:px-4 py-2 lg:py-3 text-sm md:text-[15px] lg:text-base relative transition-all duration-300 flex items-center hover:bg-amber-900/20 rounded-3xl border-2 ${
                    isActive
                      ? "border-amber-600/50 bg-amber-900/20 shadow-[inset_0_0_15px] shadow-amber-500/20"
                      : "border-amber-900/30 hover:border-amber-600/50"
                  } shadow-md  shadow-amber-900/20`
                }
              >
                <span className="mr-2 text-sm md:text-[15px] lg:text-base text-amber-500 group-hover:text-amber-300 transition-all">
                  {link.icon}
                </span>
                <span className="text-amber-100 group-hover:text-amber-300 relative">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-400 transition-all group-hover:w-full"></span>
                </span>
              </NavLink>
            ))}
            <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4 ml-3 md:ml-3 lg:ml-6 mr-2 md:mr-3 lg:mr-4">
              <NavLink
                to={"/cart"}
                className="p-2 md:p-2 lg:p-3 text-amber-100 rounded-xl transition-all relative border-2 border-amber-900/30 hover:border-amber-600/50 group hover:bg-amber-900/20 hover:shadow-lg hover:shadow-amber-500/30 shadow-md shadow-amber-900/20"
              >
                <FiShoppingCart className="text-base md:text-lg lg:text-lg" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-600 text-amber-100 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </NavLink>
            </div>
          </div>
          {/*  MOBILE MENU */}
          <div className="md:hidden flex items-center mr-2">
            <button
              className="text-amber-500 hover:text-amber-300 focus:outline-none transition-all p-2 rounded-xl border-2 border-amber-900/30 hover:border-amber-600/50 relative shadow-md shadow-amber-900/20 hover:shadow-lg hover:shadow-amber-500/30"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="space-y-2 relative">
                <span
                  className={`block w-6 h-[2px] bg-current transition-all 
                ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`}
                ></span>
                <span
                  className={`block w-6 h-[2px] bg-current ${
                    isOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block w-6 h-[2px] bg-current transition-all 
                ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* MOBILE NAVIGATION */}
      {isOpen && (
        <div className="md:hidden bg-[#2D1B0E] border-t-4 border-amber-900/40 realtive shadow-lg shadow-amber-900/30 w-full">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 text-sm rounded-xl transition-all items-center 
                ${
                  isActive
                    ? "bg-amber-600/30 text-amber-400"
                    : "text-amber-100 hover:bg-amber-600/20"
                } border-2 
                  ${isActive ? "border-amber-600/50" : "border-amber-900/30"}`
                }
              >
                <span className="mr-3 text-amber-500">{link.icon}</span>
                {link.name}
              </NavLink>
            ))}

            <div className="pt-4 border-t-2 border-amber-900/30 space-y-2">
              <NavLink
                to="/cart"
                onClick={() => setIsOpen(false)}
                className="w-full  px-4 py-3 text-center text-amber-100 rounded-xl border-2 border-amber-900/30 hover:border-amber-600/50 flex items-center justify-center space-x-2 text-sm"
              >
                <FiShoppingCart className="text-lg" />
                {totalItems > 0 && (
                  <span className="top-2 right-2 bg-amber-600 text-amber-100 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {/* LOGIN MODULE */}
      {showLoginModel && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className=" bg-gradient-to-br from-[#2D1B0E] to-[4a372a] rounded-xl p-6 w-full max-w-[480px] relative border-4 border-amber-700/30 shadow-[0_0_30px] shadow-amber-500/30">
            <button
              onClick={() => navigate("/")}
              className="absolute top-2 right-2 text-amber-500 hover:text-amber-300 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-4 text-center">
              MrKEN - FOOD - DRINK
            </h2>
            <Login
              onLoginSuccess={handleLoginSuccess}
              onClose={() => navigate("/")}
            ></Login>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
