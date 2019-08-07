import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import './resources/styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Featured from './components/Featured';
import Location from './components/Map';
import Info from './components/LocationInfo';
import About from './pages/About';
import Pricing from './components/Pricing';
import Attractions from './pages/Attractions';
import {Element} from 'react-scroll';
import Layout from './HOC/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';


//import ContactForm from './components/ContactForm';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/attractions" component={Attractions}/>
          <Route path="/prices" component={Pricing}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>

        {/* <div className="App" style={{height: "1500px", background: "grey" }}>
            <Header />
            <Featured/>
            <Element name="About">
              <About/>
            </Element>
            <Element name="Info">
              <Info/>
            </Element>
            <Element name="Location">
              <Location/>
            </Element>
            <Element name="Pricing">
              <Pricing/>
            </Element>
            <Footer />
        </div> */}
        </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
