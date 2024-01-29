// import { useState } from "react";
import SubjectsListItem from "./SubjectsListItem";
import "./App.css";

function App() {
    const subjects = ["Histoire", "Géographie"];

    return (
        <div className="container">
            <h1>Fiches bristol</h1>
            <h2>Matières</h2>
            <div className="list-group">
                {subjects.map((subject, index) => {
                    return (
                        <SubjectsListItem
                            key={index}
                            subjectName={subject}
                        ></SubjectsListItem>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
