import React from 'react';

import { BrowserRouter, Route, Link } from "react-router-dom";

import '../resources/styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Featured from '../components/Featured';
import LocationInfo from '../components/LocationInfo';
import Location from '../components/Map';
import Info from '../components/LocationInfo';
import About from '../pages/About';
import Pricing from '../components/Pricing';
import Attractions from './Attractions';
import {Element} from 'react-scroll';
import Layout from '../HOC/Layout';

import GeneralInfo from '../components/GeneralInfo';

const Home = () => {
    return (
        <div>
            <Featured/>
            <GeneralInfo/>
            <LocationInfo/>
        </div>
    );
};

export default Home;