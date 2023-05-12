import React from "react";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import Services from "./Services";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
        </div>
    );
};

export default Home;
