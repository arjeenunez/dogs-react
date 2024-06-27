import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Dogdisplay.css"

function Dogdisplay({ name, src, fact, age }) {
    return (
        <div className="Dogdisplay">
                <Link exact to={`/dogs/${name}`}>
                    <img src={src} className="rounded-circle Dogdisplay-img" alt={name} />
                </Link>
                <h3 className="Dogdisplay-name">{name}</h3>
                <div></div>
            </div>
    )
}

export default Dogdisplay;