import { useState } from "react";
import ListGroup from "./ListGroup";
import Sheet from "./Sheet";
import revisionSheets from "./data/RevsionSheets.json";

const App = () => {
  const [currentSubject, setCurrentSubject] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentSheet, setCurrentSheet] = useState("");

  const subjects = Object.keys(revisionSheets);

  return (
    <div className="container">
      {currentSubject === "" && (
        <ListGroup
          items={subjects}
          header="Fiches bristol"
          backButton={false}
          onBackButtonClick={() => {}}
          onItemSelect={setCurrentSubject}
        ></ListGroup>
      )}
      {currentSubject !== "" && currentCategory === "" && (
        <ListGroup
          header={currentSubject}
          items={Object.keys(revisionSheets[currentSubject as keyof object])}
          backButton={true}
          onBackButtonClick={() => setCurrentSubject("")}
          onItemSelect={setCurrentCategory}
        ></ListGroup>
      )}
      {currentCategory !== "" && currentSheet === "" && (
        <ListGroup
          header={currentCategory}
          items={Object.keys(
            revisionSheets[currentSubject as keyof object][currentCategory]
          )}
          backButton={true}
          onBackButtonClick={() => setCurrentCategory("")}
          onItemSelect={setCurrentSheet}
        ></ListGroup>
      )}
      {currentSheet !== "" && (
        <Sheet
          header={currentSheet}
          contents={
            revisionSheets[currentSubject as keyof object][currentCategory][
              currentSheet
            ]
          }
          onBackButtonClick={() => setCurrentSheet("")}
        ></Sheet>
      )}
    </div>
  );
};

export default App;
