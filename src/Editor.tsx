import SheetView from "./components/SheetView";
import RevisionSheets from "./data/RevisionSheets.json";

interface Data {
  [k: string]: Data;
}

const Editor = () => {
  const revisionSheets: object = RevisionSheets;

  const headers = [
    "Histoire",
    "Première Guerre Mondiale",
    "Les soldats pendant la Première Guerre Mondiale",
  ];

  const data: Data[] = [revisionSheets as Data];

  headers.forEach((header, index) => data.push(data[index][header]));

  return (
    <div className="container">
      <SheetView
        header={headers[2]}
        sections={data[3]}
        onBackButtonClick={() => {}}
      ></SheetView>
    </div>
  );
};

export default Editor;
