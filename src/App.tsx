import { useState } from "react";

import {
  RevisionSheetsInterface,
  Category,
  Sheet,
  Section,
} from "./scripts/Interfaces.ts";

import RevisionSheets from "./data/RevisionSheets.json";

import ListGroup from "./components/ListGroup";
// import RevisionSheet from "./components/RevisionSheet.tsx";

const App = () => {
  const revisionSheets: { [k: string]: Array<Category> } = Object.fromEntries(
    (RevisionSheets as RevisionSheetsInterface).subjects.map(
      ({ name, categories }) => [name, categories]
    )
  );

  const [headers, setHeaders] = useState(["Fiches bristol"]);
  const [currentSubject, setCurrentSubject] = useState({});
  const [currentCategory, setCurrentCategory] = useState({});
  const [, setCurrentSheet] = useState({});

  const updateCurrentSubject = (name: string, items: Array<object>) => {
    setHeaders([...headers, name]);
    setCurrentSubject(
      Object.fromEntries(
        (items as Array<Category>).map(({ name, sheets }) => [name, sheets])
      )
    );
  };

  const updateCurrentCategory = (name: string, items: Array<object>) => {
    setHeaders([...headers, name]);
    setCurrentCategory(
      Object.fromEntries(
        (items as Array<Sheet>).map(({ name, sections }) => [name, sections])
      )
    );
  };

  const updateCurrentSheet = (name: string, items: Array<object>) => {
    setHeaders([...headers, name]);
    setCurrentSheet(items as Array<Section>);
  };

  return (
    <div className="container">
      {headers.length === 1 && (
        <ListGroup
          header={headers[0]}
          items={revisionSheets}
          backButton={false}
          onBackButtonClick={() => {}}
          onItemSelect={updateCurrentSubject}
        ></ListGroup>
      )}
      {headers.length === 2 && (
        <ListGroup
          header={headers[1]}
          items={currentSubject}
          backButton={true}
          onBackButtonClick={() => {
            setHeaders(headers.filter((header) => header !== headers[1]));
          }}
          onItemSelect={updateCurrentCategory}
        ></ListGroup>
      )}
      {headers.length === 3 && (
        <ListGroup
          header={headers[2]}
          items={currentCategory}
          backButton={true}
          onBackButtonClick={() => {
            setHeaders(headers.filter((header) => header !== headers[2]));
          }}
          onItemSelect={updateCurrentSheet}
        ></ListGroup>
      )}
      {/* {currentSheet !== "" && (
        <Sheet
          sheet={
            revisionSheets[currentSubject as keyof object][currentCategory][
              currentSheet
            ]
          }
          header={currentSheet}
          onBackButtonClick={() => setCurrentSheet("")}
        ></Sheet>
      )} */}
    </div>
  );
};

export default App;
