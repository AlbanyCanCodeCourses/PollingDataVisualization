import React from "react";
import "./App.css";
import axios from "../../node_modules/axios";
import Container from "./BarChart/BarChart.jsx";
import NavBar from "./NavBar/NavBar.jsx";
import "materialize-css";

function App() {
    return (
        <div>
            <NavBar />
            <main>
                <div className="poll-wrapper">
                    <div className="tab">Edit Poll</div>
                    <div className="tab">Poll Results</div>
                    <div id="poll-content">
                        <Container />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App;
