import React from 'react';
import Service_component from "../components/Service_component";
import AboutUs from "../components/AboutUs";
import MenuComponent from "../components/MenuComponent";
import Team from "../components/Team";

const Home = () => {
    return (
        <div>
            <Service_component/>
            <AboutUs/>
            <MenuComponent/>
            <Team/>
        </div>
    );
};

export default Home;
