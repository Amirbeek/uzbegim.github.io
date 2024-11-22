import React from 'react';
import Service_component from "../components/Service_component";
import AboutUs from "../components/AboutUs";
import MenuComponent from "../components/MenuComponent";

const Home = () => {
    return (
        <div>
            <Service_component/>
            <AboutUs/>
            <MenuComponent/>
        </div>
    );
};

export default Home;
