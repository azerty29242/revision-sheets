import { useState } from "react";

import RevisionSheets from "./data/RevisionSheets.json";

import ListGroup from "./components/ListGroup";
import SheetView from "./components/SheetView.tsx";

const App = () => {
  const revisionSheets: object = RevisionSheets;

  const [headers, setHeaders] = useState(["Fiches bristol"]);
  const [data, setData] = useState([revisionSheets]);

  const onItemSelect = (name: string, items: Array<object>) => {
    setHeaders([...headers, name]);
    setData([...data, items]);
  };

  const goBack = () => {
    setHeaders(
      headers.filter((header) => header !== headers[headers.length - 1])
    );
    setData(data.filter((part) => part !== data[data.length - 1]));
  };

  return (
    <div className="container">
      {headers.length >= 1 && headers.length <= 3 ? (
        <ListGroup
          header={headers[headers.length - 1]}
          items={data[data.length - 1]}
          backButton={headers.length !== 1}
          onBackButtonClick={goBack}
          onItemSelect={onItemSelect}
        ></ListGroup>
      ) : (
        <SheetView
          header={headers[headers.length - 1]}
          sections={data[data.length - 1]}
          onBackButtonClick={goBack}
        ></SheetView>
      )}
    </div>
  );
};

export default App;
