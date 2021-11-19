import React from "react";
import Image from "next/image";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import RecentBlog from "../component/RecentBlog";
import Contact from "../component/Contact";


function index() {
  return (
    <div>
      <NavBar/>
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
      
      

      <div className="container marketing mt-5 ">
        <div className="row mt-5">
          <div className="col-lg-4 ">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777"></rect>
            <text x="50%" y="50%" fill="#777" dy=".3em">
            <div className='henta'>
              <Image className='senta border border-info border-1 ' src="/multitask.png" alt="" height={140} width={140} />
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
              <Image className='senta border border-info border-1' src="/marketting.png" alt="" height={140} width={140} />
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
              <Image className='senta  border border-info border-1' src="/people.png" alt="" height={140} width={140} />
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
              We are here to apread tech knowledge in India.
              <span className="text-muted">That will blow your mind.</span>
            </h2>
            <p className="lead">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos sunt dolor, tenetur illo doloremque, sint aspernatur numquam earum rerum assumenda eum iusto dolore nobis. Recusandae qui sapiente cumque eum eaque.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos sunt dolor, tenetur illo doloremque, sint aspernatur numquam earum rerum assumenda eum iusto dolore nobis. Recusandae qui sapiente cumque eum eaque.

            </p>
          </div>
          <div className="col-md-5">
            
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee"></rect>
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
              <Image className='bir' src='/standBoy.png' alt='' height={500} width={500}/>
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos sunt dolor, tenetur illo doloremque, sint aspernatur numquam earum rerum assumenda eum iusto dolore nobis. Recusandae qui sapiente cumque eum eaque.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos sunt dolor, tenetur illo doloremque, sint aspernatur numquam earum rerum assumenda eum iusto dolore nobis. Recusandae qui sapiente cumque eum eaque.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee"></rect>
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
              <Image className='bir' src='/tech.png' alt='' height={500} width={500}/>
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos sunt dolor, tenetur illo doloremque, sint aspernatur numquam earum rerum assumenda eum iusto dolore nobis. Recusandae qui sapiente cumque eum eaque.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos sunt dolor, tenetur illo doloremque, sint aspernatur numquam earum rerum assumenda eum iusto dolore nobis. Recusandae qui sapiente cumque eum eaque.
            </p>
          </div>
          <div className="col-md-5">
            
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee"></rect>
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
              <Image className='bir' src='/team.png' alt='' height={500} width={500}/>
              </text>
            
          </div>
        </div>

        <hr className="featurette-divider" />
      </div>

      <RecentBlog/>
      <div className="container"><hr className="featurette-divider" /></div>
      
      
      <Contact/>
      <Footer/>
    </div>
  );
}

export default index;
