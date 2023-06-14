import { Link } from "@remix-run/react";
import Hamburger from "hamburger-react";
import React, { useState } from "react";
// import component 👇
import Drawer from "react-modern-drawer";
import MobNavItem from "./mobNavItem";

const MobileNav = ({ scrollPosition }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="md:hidden z-[1000]"
      >
        <div className="flex flex-col h-full bg-[#080808] pt-[15px] shadow-md shadow-[#6f6f6f] z-[1000]">
          <h1 className="text-4xl gugi mx-auto">ENIAC</h1>
          <div className="mt-4" />
          <MobNavItem close={toggleDrawer} to={"/"} text={"Home"} />
          <div className="mt-4" />
          <MobNavItem close={toggleDrawer} to={"/about-us"} text={"About Us"} />
          <div className="mt-4" />
          <MobNavItem close={toggleDrawer} to={"/events"} text={"Events"} />
          <div className="mt-4" />
          <MobNavItem close={toggleDrawer} to={"/contact"} text={"Reach Out"} />
        </div>
      </Drawer>
      <nav
        className={`z-[100]  items-center md:hidden justify-between fixed shadow-white ${
          scrollPosition > 0.6
            ? `top-0  w-full h-[52px] nav-animation`
            : `top-[3svh] w-[92lvw] rounded-full right-[5lvw] left-[5lvw] h-[56px] shadow-inner `
        } max-w-[918px]  mx-auto navbar px-6  flex transition-all duration-300`}
      >
        <h1 className="text-2xl gugi flex items-center my-auto">
          <Link to={"/"} prefetch="intent" className="mt-1">
            ENIAC
          </Link>
        </h1>
        <div className="flex items-center">
          <div className="z-[1000] my-auto">
            <Hamburger size={24} onToggle={toggleDrawer} toggled={isOpen} />
          </div>
        </div>
      </nav>
      {/* <div className="my-auto h-full flex align-middle md:hidden">
        <div className="z-[1000] my-auto">
          <Hamburger size={24} onToggle={toggleDrawer} toggled={isOpen} />
        </div>

        <Link
          to={"/"}
          prefetch="intent"
          className="text-xl my-auto flex left-[38%] flex-1 text-center gugi tracking-[0.5em] absolute bottom-[20px]"
        >
          <p>ENIAC</p>
        </Link>
      </div> */}
    </>
  );
};

export default MobileNav;
