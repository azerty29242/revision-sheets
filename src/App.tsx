import { useState } from "react";
import SubjectList from "./SubjectList";
import SheetList from "./SheetList";

const App = () => {
  const [currentSubject, setCurrentSubject] = useState("");

  return (
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
  );
};

export default App;
