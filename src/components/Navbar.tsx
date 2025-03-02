import React from 'react';
import Link from "next/link";

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg bg-light mb-4">
          <div className="container-fluid">
              <Link href={"/"} >
                  <span className={"navbar-brand"}>Chat App</span>
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Features</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  );
};

export default Navbar;