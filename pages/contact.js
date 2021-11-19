import React from "react";
import Contact from "../component/Contact";
import NavBar from "../component/NavBar";

function contact() {
  return (
    <div>
      <NavBar />
    <div className='mt-4'><Contact/></div>
    </div>
  );
}

export default contact;
