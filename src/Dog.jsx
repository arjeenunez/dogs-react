import React, { Component } from "react";
import { useParams, Navigate, Link } from "react-router-dom";

function Dog({ dogs }) {
    const { dogname } = useParams();
    const { name, src, facts, age } = dogs.find(dog => dog.name === dogname);
    if (!name) return Navigate("/dogs");
    return (
        <div className="card ms-auto me-auto mt-4 shadow" style={{width: "25rem"}}>
            <img src={ src } className="card-img-top" alt="..."/>
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">{ `Age: ${age}` }</p>
            </div>
            <ul className="list-group list-group-flush">
                {facts.map((fact, idx) => (
                    <li key={idx} className="list-group-item">{fact}</li>
                ))}
            </ul>
            <div className="card-body">
                <Link to={"/dogs"} className="btn btn-success">Go back</Link>
            </div>
        </div>
    )
}

export default Dog;