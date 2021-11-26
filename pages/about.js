import React from "react";
import NavBar from "../component/NavBar";
import Image from "next/image";
import Link from "next/link";
import Footer from "../component/Footer";

function about() {
  return (
    <div>
      
      <NavBar />
      <div className="container">
        <div className="px-4 pt-5 my-5 text-center border-bottom">
          <h1 className="display-4 fw-bold mb-4">
            “Technology is best when it brings people together.”
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
            At learnerboy we are working for you so you get updated from all the latest technologies. This is the only place for tech enthusiasts. Find great articles about new tech inventions, Latest gadgets in market , Some ungorgatable fact about technoloies, lots more at just one place. At learnerboyu we belive that teamwork and community support is a very essential thing. So we are helping you over emai.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
              {/* <Link href="/video">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Watch Our Videos
                </button>
              </Link> */}
              <Link href="/blogs">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Read Our Blogs
                </button>
              </Link>
            </div>
          </div>
          <div className="overflow-hidden" style={{ maxHeight: 310 }}>
            <div className="container px-5">
              {/* <img src="bootstrap-docs.png" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"/> */}
              {/* <Image
                src="/aboutPic.png"
                className="img-fluid border rounded-3 shadow-lg mb-4"
                alt="Example image"
                width="700"
                height="500"
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="b-example-divider"></div>
      <div className="container-fluid bg-dark">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              {/* <img src="bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/> */}
              <Image
                src="/aboutBelow.png"
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3 text-white">
              We are here to spread tech knowledge in India.That will blow your mind
              </h1>
              <p className="lead text-white">
              At learnerboy we always work in team work so that we can serve you more. We are fetching all the latest news and Technologies from over the world so you could be aware what happening in tech industries now.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link href="/blogs">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Read Our Blogs
                </button>
              </Link>
                 
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="b-example-divider"></div>

      <div className="container px-4 py-5" id="hanging-icons">
    
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="col d-flex align-items-start">
        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"></svg>
        </div>
        <div>
          <h2>Get New Tech Update</h2>
          <p>At learnerboy we are working for you so you get updated from all the latest technologies. This is the only place for tech enthusiasts.</p>
          {/* <a href="/" className="btn btn-primary"> */}
            {/* Primary button */}
          {/* </a> */}
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"></svg>
        </div>
        <div>
          <h2>Trending Tech</h2>
          <p>Find great articles about new tech inventions, Latest gadgets in market , Some ungorgatable fact about technoloies, lots more at just one place.</p>
          {/* <a href="/" className="btn btn-primary"> */}
            {/* Primary button */}
          {/* </a> */}
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"></svg>
        </div>
        <div>
          <h2>Community Support</h2>
          <p>At learnerboyu we belive that teamwork and community support is a very essential thing. So we are helping you over emai.</p>
          {/* <a href="/" className="btn btn-primary"> */}
            {/* Primary button */}
          {/* </a> */}
        </div>
      </div>
    </div>
  </div>
  <Footer/>
    </div>
  );
}

export default about;
