import React from "react";
import Image from "next/image";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";

function index() {
  return (
    <div>
      {/* <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Carousel
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav> */}
      <NavBar/>
      <div className="container-fluid mb-5">
        <div className="row row-cols-1">
          <div className="col">
            <h1 className='mb-5' style={{ textAlign: "center" }}>This is a heading</h1>
          </div>
          {/* <div className="col">
        <Image src='/coverOne.jpg' alt='' width={300} height={300}/>
        </div> */}
        </div>
      </div>

      <div className="container marketing mt-5 ">
        <div className="row mt-5">
          <div className="col-lg-4 ">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777"></rect>
            <text x="50%" y="50%" fill="#777" dy=".3em">
            <div className='henta'>
              <Image className='senta' src="/suraj.jfif" alt="" height={140} width={140} />
              </div>
            </text>

            <h2>Heading</h2>
            <p>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <p>
              
            </p>
          </div>
          <div className="col-lg-4 ">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777"></rect>
            <text x="50%" y="50%" fill="#777" dy=".3em">
              <div className='henta'>
              <Image className='senta' src="/suraj.jfif" alt="" height={140} width={140} />
              </div>
            </text>

            <h2 >Heading</h2>
            <p>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <p>
             
            </p>
          </div>
          <div className="col-lg-4 ">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777"></rect>
            <text x="50%" y="50%" fill="#777" dy=".3em">
            <div className='henta'>
              <Image className='senta' src="/suraj.jfif" alt="" height={140} width={140} />
              </div>
            </text>

            <h2>Heading</h2>
            <p>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <p>
              
            </p>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 p-5">
            <h2 className="featurette-heading">
              First featurette heading.{" "}
              <span className="text-muted">It’ll blow your mind.</span>
            </h2>
            <p className="lead">
              Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.
            </p>
          </div>
          <div className="col-md-5">
            
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee"></rect>
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
              <Image className='bir' src='/side.jfif' alt='' height={500} width={500}/>
              </text>
            
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette  p-5">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              Oh yeah, it’s that good.{" "}
              <span className="text-muted">See for yourself.</span>
            </h2>
            <p className="lead">
              Another featurette? Of course. More placeholder content here to
              give you an idea of how this layout would work with some actual
              real-world content in place.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee"></rect>
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
              <Image className='bir' src='/side.jfif' alt='' height={500} width={500}/>
              </text>
            
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette  p-5">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              And lastly, this one.{" "}
              <span className="text-muted">Checkmate.</span>
            </h2>
            <p className="lead">
              And yes, this is the last block of representative placeholder
              content. Again, not really intended to be actually read, simply
              here to give you a better view of what this would look like with
              some actual content. Your content.
            </p>
          </div>
          <div className="col-md-5">
            
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee"></rect>
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
              <Image className='bir' src='/side.jfif' alt='' height={500} width={500}/>
              </text>
            
          </div>
        </div>

        <hr className="featurette-divider" />
      </div>

      <Footer/>
    </div>
  );
}

export default index;
