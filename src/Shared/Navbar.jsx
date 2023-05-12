import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { AuthContext } from "../Providers/AuthProvider";
import { HashLoader } from "react-spinners";
import { MagnifyingGlass } from "react-loader-spinner";
const Navbar = () => {
    const { user, logOut, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center mx-auto items-center">
                <MagnifyingGlass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="MagnifyingGlass-loading"
                    wrapperStyle={{}}
                    wrapperClass="MagnifyingGlass-wrapper"
                    glassColor="#c0efff"
                    color="#e15b64"
                />
            </div>
        );
    }

    const logOutUser = () => {
        logOut()
            .then((result) => {})
            .catch((error) => {});
    };
    console.log(user);
    return (
        <div className="navbar  bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/services"}>Services</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/blog"}>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contact"}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <Link to={"/"}>
                    <img className="h-16" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/services"}>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/blog"}>Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"}>Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="dropdown mr-3 dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} />
                                <span className="bg-green-800 absolute top-[3px] right-[2px] p-[6px] rounded-full">
                                    {" "}
                                </span>
                            </div>
                        </label>

                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <div className="flex items-center">
                                    {" "}
                                    <span className="p-0 w-10 h-10">
                                        <img
                                            className="rounded-full outline-green-600 outline"
                                            src={user.photoURL}
                                            alt=""
                                        />
                                    </span>
                                    <span>
                                        <a className="justify-between overflow-hidden">
                                            {user.displayName}
                                        </a>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <span onClick={logOutUser}>Log Out</span>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <Link className="mr-6" to={"/login"}>
                        Login
                    </Link>
                )}
                {user && (
                    <NavLink>
                        <button className="btn btn-outline text-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811]">
                            Appoinment
                        </button>
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default Navbar;
