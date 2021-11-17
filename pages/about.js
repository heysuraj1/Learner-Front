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
              At LearnerBoy.tech we belive technology is the future and the
              country which will have the best technology will be known all over
              the world. This is the reason that we have taken this step to make
              people aware of real technology. You will get a lot of knowledge
              from new technologies on this website.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
              <Link href="/video">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Watch Our Videos
                </button>
              </Link>
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
              <Image
                src="/aboutPic.png"
                className="img-fluid border rounded-3 shadow-lg mb-4"
                alt="Example image"
                width="700"
                height="500"
              />
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
                Responsive left-aligned hero with image
              </h1>
              <p className="lead text-white">
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world’s most popular front-end open source
                toolkit, featuring Sass variables and mixins, responsive grid
                system, extensive prebuilt components, and powerful JavaScript
                plugins.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4 text-white"
                >
                  Default
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="b-example-divider"></div>

      <div className="container px-4 py-5" id="hanging-icons">
    <h2 className="pb-2 border-bottom">Hanging icons</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="col d-flex align-items-start">
        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"></svg>
        </div>
        <div>
          <h2>Featured title</h2>
          <p>Paragraph of text beneath the heading to explain the heading. We add onto it with another sentence and probably just keep going until we run out of words.</p>
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
          <h2>Featured title</h2>
          <p>Paragraph of text beneath the heading to explain the heading. Weadd onto it with another sentence and probably just keep going until we run out of words.</p>
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
          <h2>Featured title</h2>
          <p>Paragraph of text beneath the heading to explain the heading. We add onto it with another sentence and probably just keep going until we run out of words.</p>
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
