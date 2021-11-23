import React from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import RecentBlog from "../component/RecentBlog";
import Contact from "../component/Contact";
import Craousel from "../component/Craousel";
import FrontContainer from "../component/FrontContainer";
import FrontExplainer from "../component/FrontExplainer";
import { withRouter } from 'next/router';

function index() {
  return (
    <div>
      <NavBar/>
      <Craousel/>
            
      <FrontContainer/>
      <FrontExplainer/>
      

      <RecentBlog/>
      <div className="container"><hr className="featurette-divider" /></div>
      
      
      <Contact/>
      <Footer/>
    </div>
  );
}

export default index;
