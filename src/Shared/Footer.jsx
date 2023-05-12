import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className=" bg-[#151515]">
            <footer className="footer flex flex-col lg:flex-row justify-between  max-w-6xl mx-auto p-10 text-white">
                <div>
                    <Link to={"/"}>
                        <img src={logo} alt="" />
                    </Link>
                    <p>
                        Car Doctor Ltd.
                        <br />
                        Providing reliable services since 1992
                    </p>
                </div>
                <div className="">
                    <span className="text-lg font-bold ">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="text-lg font-bold">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="text-lg font-bold">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
