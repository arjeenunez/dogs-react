import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar({dogs}) {
    const linkArr = dogs.map(el => el.name);
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Dogs!</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link exact to={`/dogs`} className="nav-link active" aria-current="page" href="#">Home</Link>
                    </li>
                    {linkArr.map((el, idx) => (
                        <li key={idx} className="nav-item">
                            <Link exact to={`/dogs/${el}`} className="nav-link" href="#">{ el }</Link>
                        </li>
                    )) }    
                </ul>
                </div>
            </div>
        </nav>
    )
}