import React from "react";
import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";
import banner5 from "../../../assets/images/banner/5.jpg";
import banner6 from "../../../assets/images/banner/6.jpg";
const Banner = () => {
    return (
        <div>
            <div className="carousel relative w-full">
                <div className="absolute flex flex-col pl-24 justify-center h-full rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full z-10  ">
                    <div className="text-white w-[400px]  space-y-8">
                        <h2 className="text-6xl">
                            Affordable Price For Car Servicing
                        </h2>
                        <p>
                            There are many variations of passages of available,
                            but the majority have suffered alteration in some
                            form
                        </p>
                        <div className="flex gap-5">
                            <button className="btn bg-[#FF3811]  hover:border-[#FF3811] border-[#FF3811] hover:bg-transparent hover:text-[#FF3811]">
                                Discover More
                            </button>
                            <button className="btn btn-outline text-[#FF3811] hover:bg-[#FF3811]">
                                Latest Projects
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    id="slide1"
                    className="carousel-item relative  max-h-[600px] w-full"
                >
                    <img src={banner1} className="w-full rounded-xl " />
                    <div className="absolute flex gap-10 transform -translate-y-1/2  z-10 right-28 bottom-12">
                        <a
                            href="#slide6"
                            className="btn btn-circle bg-[#FFFFFF] border-none bg-opacity-20 hover:bg-[#FF3811]"
                        >
                            ❮
                        </a>
                        <a
                            href="#slide2"
                            className="btn btn-circle  bg-[#FFFFFF] border-none bg-opacity-20 hover:bg-[#FF3811]"
                        >
                            ❯
                        </a>
                    </div>
                </div>
                <div
                    id="slide2"
                    className="carousel-item  max-h-[600px] relative w-full"
                >
                    <img src={banner2} className="w-full rounded-xl " />
                    <div className="absolute flex gap-10 transform -translate-y-1/2  right-28 bottom-12">
                        <a
                            href="#slide1"
                            className="btn btn-circle  bg-[#FFFFFF] border-none bg-opacity-20 hover:bg-[#FF3811] "
                        >
                            ❮
                        </a>
                        <a
                            href="#slide3"
                            className="btn btn-circle  bg-[#FFFFFF] border-none bg-opacity-20 hover:bg-[#FF3811]"
                        >
                            ❯
                        </a>
                    </div>
                </div>
                <div
                    id="slide3"
                    className="carousel-item  max-h-[600px] relative w-full"
                >
                    <img src={banner3} className="w-full rounded-xl " />
                    <div className="absolute flex gap-10 transform -translate-y-1/2  right-28 bottom-12">
                        <a
                            href="#slide2"
                            className="btn btn-circle  bg-[#FFFFFF] border-none bg-opacity-20 hover:bg-[#FF3811]"
                        >
                            ❮
                        </a>
                        <a
                            href="#slide4"
                            className="btn btn-circle  bg-[#FFFFFF] border-none bg-opacity-20 hover:bg-[#FF3811]"
                        >
                            ❯
                        </a>
                    </div>
                </div>
                <div
                    id="slide4"
                    className="carousel-item  max-h-[600px] relative w-full "
                >
                    <img src={banner4} className="w-full rounded-xl " />
                    <div className="absolute flex gap-10 transform -translate-y-1/2  right-28 bottom-12">
                        <a
                            href="#slide3"
                            className="btn btn-circle  bg-[#FFFFFF] border-none bg-opacity-20 hover:bg-[#FF3811]"
                        >
                            ❮
                        </a>
                        <a
                            href="#slide5"
                            className="btn btn-circle  bg-[#FFFFFF] border-none bg-opacity-20 hover:bg-[#FF3811]"
                        >
                            ❯
                        </a>
                    </div>
                </div>
                <div
                    id="slide5"
                    className="carousel-item  max-h-[600px] relative w-full"
                >
                    <img src={banner5} className="w-full rounded-xl " />
                    <div className="absolute flex gap-10 transform -translate-y-1/2  right-28 bottom-12">
                        <a
                            href="#slide4"
                            className="btn btn-circle  bg-[#FFFFFF] border-none bg-opacity-20 hover:bg-[#FF3811]"
                        >
                            ❮
                        </a>
                        <a
                            href="#slide6"
                            className="btn btn-circle  bg-[#FFFFFF] border-none bg-opacity-20 hover:bg-[#FF3811]"
                        >
                            ❯
                        </a>
                    </div>
                </div>
                <div
                    id="slide6"
                    className="carousel-item  max-h-[600px]  rounded-xl relative w-full"
                >
                    <img src={banner6} className="w-full rounded-xl " />
                    <div className="absolute flex gap-10 transform -translate-y-1/2  right-28 bottom-12">
                        <a
                            href="#slide5"
                            className="btn btn-circle  bg-[#FFFFFF] border-none bg-opacity-20 hover:bg-[#FF3811]"
                        >
                            ❮
                        </a>
                        <a
                            href="#slide1"
                            className="btn btn-circle  bg-[#FFFFFF] border-none bg-opacity-20 hover:bg-[#FF3811]"
                        >
                            ❯
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
