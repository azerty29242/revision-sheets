import { useEffect, useState } from "react";

interface Location {
  folders: Folder[];
  sheets: Sheet[];
}

interface Folder {
  name: string;
  path: string;
}

interface Sheet {
  name: string;
  path: string;
}

const App = () => {
  const [viewMode, setViewMode] = useState("list" as "list" | "sheet");
  const [locations, setLocations] = useState(["index.json"] as Array<string>);
  const [currentLocationIndex, setCurrentLocationIndex] = useState({
    folders: [],
    sheets: [],
  } as Location);

  useEffect(() => {
    if (viewMode === "list") {
      fetch(locations[locations.length - 1]).then((response) => {
        response.json().then((data) => {
          setCurrentLocationIndex(data);
        });
      });
    } else if (viewMode === "sheet") {
      fetch(locations[locations.length - 1]).then((response) => {
        response.text().then((sheet) => {
          console.log(sheet);
        });
      });
    }
  }, [locations, viewMode]);

  return (
    <div>
      {locations.length !== 1 && (
        <button
          onClick={() => {
            setLocations(
              locations.filter((location) => {
                return location !== locations[locations.length - 1];
              })
            );
            setViewMode("list");
          }}
          key={
            currentLocationIndex.folders.length +
            currentLocationIndex.sheets.length
          }
        >
          Retour
        </button>
      )}
      {viewMode === "list" && (
        <>
          {currentLocationIndex.folders.map((folder: Folder, index: number) => {
            return (
              <button
                onClick={() => {
                  setLocations([...locations, folder.path]);
                }}
                key={index}
              >
                {folder.name}
              </button>
            );
          })}
          {currentLocationIndex.sheets.map((sheet: Sheet, index: number) => {
            return (
              <button
                onClick={() => {
                  setLocations([...locations, sheet.path]);
                  setViewMode("sheet");
                }}
                key={currentLocationIndex.folders.length + index}
              >
                {sheet.name}
              </button>
            );
          })}
        </>
      )}
    </div>
  );
};

export default App;
