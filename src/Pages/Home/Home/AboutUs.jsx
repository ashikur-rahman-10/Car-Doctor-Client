import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const AboutUs = () => {
    return (
        <div>
            <div className=" min-h-screen flex items-center">
                <div className="flex items-center gap-10 lg:flex-row">
                    <div className="lg:w-1/2 relative pl-0">
                        <img
                            src={person}
                            className=" pl-0 w-5/6 rounded-lg shadow-2xl"
                        />
                        <img
                            src={parts}
                            className=" pl-0 absolute w-80  -bottom-20 -right-0 border-8 border-white rounded-lg shadow-2xl"
                        />
                    </div>
                    <div className="lg:w-1/2 p-10 space-y-5">
                        <h2 className="text-[#FF3811] text-xl font-bold">
                            About Us
                        </h2>
                        <h1 className="text-5xl w-96 font-bold">
                            We are qualified & of experience in this field
                        </h1>
                        <p className="text-[#737373]">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable.{" "}
                        </p>
                        <p className="text-[#737373]">
                            the majority have suffered alteration in some form,
                            by injected humour, or randomised words which don't
                            look even slightly believable.{" "}
                        </p>
                        <button className="btn bg-[#FF3811]  hover:border-[#FF3811] border-[#FF3811] hover:bg-white hover:text-[#FF3811]">
                            Get More Info
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
