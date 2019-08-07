import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

import '../resources/styles.css';
const Layout = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    );
};

export default Layout;