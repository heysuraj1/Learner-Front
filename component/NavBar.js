import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

  




function NavBar() {
 
  const router = useRouter();
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
        <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand" >
            LearnerBoy.tech
          </a>
          </Link>
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
                <Link href="/">
                  {/* <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a> */}
                  <a className={router.pathname == "/" ? "active nav-link" : "nav-link"} aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/blogs">
                  <a className={router.pathname == "/blogs" ? "active nav-link" : "nav-link"}>Blogs</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className={router.pathname == "/about" ? "active nav-link" : "nav-link"}>About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a className={router.pathname == "/contact" ? "active nav-link" : "nav-link"}>Contact</a>
                </Link>
              </li>

           





              
              
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
