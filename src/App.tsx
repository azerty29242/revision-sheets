import { useEffect, useState } from "react";

import RevisionSheets from "./data/RevisionSheets.json";

import ListGroup from "./components/ListGroup";
import SheetView from "./components/SheetView.tsx";

interface Data {
  [key: string]: Data;
}

const App = () => {
  const revisionSheets: object = RevisionSheets;

  const initialHeaders: string[] = ["Fiches bristol"];
  const initialData: Data[] = [revisionSheets as Data];

  const params = new URLSearchParams(window.location.search);

  let providedHeaders: string[] = [];

  if (params.has("location")) {
    const locationString = params.get("location");
    if (locationString) {
      providedHeaders = locationString.split(".");
    }
  }

  providedHeaders.every((header, index) => {
    if (initialData[index][header]) {
      initialData.push(initialData[index][header]);
      initialHeaders.push(header);
      return true;
    } else {
      return false;
    }
  });

  const [headers, setHeaders] = useState<string[]>(initialHeaders);
  const [data, setData] = useState<Data[]>(initialData);

  const onItemSelect = (name: string, items: object) => {
    setHeaders([...headers, name]);
    setData([...data, items as Data]);
  };

  const goBack = () => {
    setHeaders(
      headers.filter((header) => header !== headers[headers.length - 1])
    );
    setData(data.filter((part) => part !== data[data.length - 1]));
  };

  useEffect(() => {
    const baseLocation = location.origin + location.pathname + "?location=";

    const url =
      headers.length === 1
        ? location.origin + location.pathname
        : baseLocation + encodeURIComponent(headers.slice(1).join("."));

    if (url !== location.href) {
      window.history.pushState(
        {},
        `Fiches bristol - ${headers[headers.length - 1]}`,
        url
      );
    }
  });

  useEffect(() => {
    const handlePopState = () => {
      window.location.reload();
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

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
