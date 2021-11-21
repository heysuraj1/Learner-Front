import React from 'react'
import Image from "next/image";


function Craousel() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Image src="/web1.jpg" className="d-block w-100"  width={1600} height={600} alt="" />
      {/* <img src="..." className="d-block w-100" alt="..."> */}
    </div>
    <div className="carousel-item">
      <Image src="/web2.jpg" className="d-block w-100"  width={1600} height={600} alt="" />
      {/* <img src="..." className="d-block w-100" alt="..."> */}
    </div>
    <div className="carousel-item">
      <Image src="/web3.jpg" className="d-block w-100"  width={1600} height={600} alt="" />
      {/* <img src="..." className="d-block w-100" alt="..."> */}
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Craousel
