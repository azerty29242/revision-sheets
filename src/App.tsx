import { useState } from "react";
import ListGroup from "./ListGroup";
import revisionSheets from "./data/RevsionSheets.json";


const App = () => {
  const [currentSubject, setCurrentSubject] = useState("");


  const subjects = Object.keys(revisionSheets);


  /*return (
    <div className="container">
      {currentSubject === "" ? (
        <SubjectList onSubjectSelect={setCurrentSubject}></SubjectList>
      ) : (
        <SheetList
          subject={currentSubject}
          onBackButtonClick={() => {
            setCurrentSubject("");
          }}
        ></SheetList>
      )}
    </div>
  );*/
  return (
    <div className="container">
      <ListGroup items={subjects}></ListGroup>
    </div>
  )
};

export default App;
