import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div>
            <div className="h-96 rounded-lg flex flex-col justify-between bg-base-100 shadow-xl">
                <div className="p-6">
                    <img className=" rounded-xl h-52" src={img} alt="" />
                </div>
                <div className="p-6 space-y-6">
                    <h2 className="card-title">{title}</h2>
                    <div className="flex justify-between items-center  bottom-2">
                        <p className=" text-lg font-bold text-[#ff3811]">
                            Price: ${price}
                        </p>
                        <Link to={`services/${_id}`} className="text-[#ff3811]">
                            <FaArrowRight></FaArrowRight>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
