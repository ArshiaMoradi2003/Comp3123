import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    // You can change these to your real details
    const [info] = useState({
        course: "Fullstack Development - I",
        lab: "React JS Programming Week09 Lab exercise",
        studentId: "101490287",
        name: "Arshia Moradi",
        college: "George Brown College, Toronto",
    });

    return (
        <main className="hero">
            <img src={logo} className="react-logo" alt="React logo" />
            <h1 className="title">Welcome to {info.course}</h1>
            <h2 className="subtitle">{info.lab}</h2>


            <p className="strong">{info.studentId}</p>


            <p className="strong">{info.name}</p>

            <p className="muted">{info.college}</p>
        </main>
    );
}

export default App;
