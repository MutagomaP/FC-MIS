import React, { useState, useEffect } from "react";
import "../../../index.css";
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { PiUsersFourDuotone } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

function MenuBar() {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [logoutHover, setHover] = useState(false);

  // Sync the active menu with the current route on first render or route change
  useEffect(() => {
    switch (location.pathname) {
      case "/dashboard":
        setActiveMenu("Dashboard");
        break;
      case "/clubs":
        setActiveMenu("Football Clubs");
        break;
      case "/settings":
        setActiveMenu("Profile Settings");
        break;
      default:
        setActiveMenu("Dashboard");
    }
  }, [location.pathname]);

  const menuItems = [
    { name: "Dashboard", icon: <MdOutlineDashboard />, route: '/dashboard' },
    { name: "Football Clubs", icon: <PiUsersFourDuotone />, route: '/clubs' },
    { name: "Profile Settings", icon: <IoSettingsOutline />, route: '/settings' },
  ];

  return (
    <div className="">
      <div className="bg-primary min-h-screen w-60 pt-10 pl-4 font-sans size-96">
        <div className="text-white text-2xl font-bold">
          WELCOME TO FANS PORTAL
        </div>
        <div className="mt-11">
          <IoIosSearch className="flex justify-center size-5 text-gray-400 -mb-9 ml-2" />
          <input
            type="text"
            placeholder=" search"
            name=""
            id=""
            className="justify-center border-2 w-[210px] bg-transparent p-6 h-[16px] focus:outline-none rounded-md"
          />
        </div>

        {/* Menu Items */}
        {menuItems.map((item) => (
          <Link to={item.route} key={item.name}>
            <div
              onClick={() => setActiveMenu(item.name)}
              className={`cursor-pointer flex flex-row gap-2 font-light transition-all duration-300 ease-in-out ${
                activeMenu === item.name
                  ? "bg-primary w-full text-white flex items-center font-extrabold"
                  : "text-secondary"
              }`}
            >
              <div className="flex gap-1 flex-row my-4">
                <span className="text-2xl">{item.icon}</span>
                <p className="">{item.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Logout Section */}
      <section
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={
          logoutHover
            ? "bg-button w-60 absolute bottom-0 h-24 flex flex-row gap-4 font-bold"
            : "bg-button w-60 absolute bottom-0 h-24 flex flex-row gap-4"
        }
      >
        <div className="flex flex-row pl-4 pt-9 gap-3">
          <span className="text-2xl">
            <MdOutlineDashboard className="text-white size-6 pt-1" />
          </span>
          <p className="text-white text-20px mt-0.5">Logout</p>
        </div>
      </section>
    </div>
  );
}

export default MenuBar;
