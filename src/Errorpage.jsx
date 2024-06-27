import React, { Component } from "react";
import { Navigate } from "react-router-dom";

export default function Errorpage() {
    return (
        <div>
            <Navigate replace to="/dogs"/>
        </div>
    )
}