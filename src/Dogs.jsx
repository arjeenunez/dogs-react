import React, { Component } from "react";
import Dogdisplay from "./Dogdisplay";
import "./Dogs.css"

function Dogs({ dogs }) {
    return (
        <div className="container text-center Dogs">
            <h1 className="display-1 fw-1 mt-3 mb-5">Click on any dog!</h1>
            <div className="d-flex justify-content-around">
                {dogs.map(dog => (
                    <Dogdisplay key={dog.name} name={dog.name} src={dog.src} facts={dog.facts} age={dog.age} />
                ))}
            </div>
        </div>
    )
}

export default Dogs;