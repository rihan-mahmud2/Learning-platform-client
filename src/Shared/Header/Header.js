import React, { useContext } from "react";
import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { PersonCircle } from "react-bootstrap-icons";
import "./Header.css";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../ProvideContext/ProvideContext";
import ReactSwitch from "react-switch";

const Header = () => {
  const { user, toggle, theme } = useContext(AuthContext);
  console.log(user);
  const { logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then((result) => {})
      .then((error) => {
        console.log(error);
      });
  };

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to={"/blog"} className="flex items-center">
          Home
        </NavLink>
      </Typography>
      {user ? (
        <>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <Link
              onClick={handleSignOut}
              to={"/login"}
              className="flex items-center"
            >
              Logout
            </Link>
          </Typography>
        </>
      ) : (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <NavLink to={"register"} className="flex items-center">
            Register
          </NavLink>
        </Typography>
      )}

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to={"/courses"} className="flex items-center">
          Courses
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to={"/blog"}
          className={`flex items-center ${({ isActive }) =>
            isActive ? "active" : undefined}`}
        >
          Blog
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <ReactSwitch
          className="flex items-center"
          onChange={toggle}
          checked={theme === "dark"}
        ></ReactSwitch>
      </Typography>
    </ul>
  );
  return (
    <Navbar className="mx-auto  w-full py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <NavLink
          to={"/home"}
          variant="small"
          className={`cursor-pointer py-1.5 font-normal ${({ isActive }) =>
            isActive ? "stroke-lime-500" : undefined}`}
        >
          {/* <img src={logo} alt="logo" /> */}
        </NavLink>
        <NavLink
          to={"/home"}
          variant="small"
          className={`cursor-pointer py-1.5 font-normal ${({ isActive }) =>
            isActive ? "stroke-lime-500" : undefined}`}
        >
          <span>Pro Learning Plaforms</span>
        </NavLink>
        <div className="hidden lg:block">{navList}</div>
        <div variant="gradient" size="sm" className="hidden lg:inline-block">
          {user?.photoURL ? (
            <Tooltip
              content={user?.displayName ? user.displayName : "No name found"}
            >
              <img
                className="w-[30px]"
                src={user?.photoURL}
                alt="profile"
              ></img>
            </Tooltip>
          ) : (
            <PersonCircle className="text-3xl" />
          )}
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>Buy Now</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
};

export default Header;
