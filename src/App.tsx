import React from "react";

interface Indexing {
  name: string | null;
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

type AppProps = {
  folder: string | null;
  sheet: string | null;
  homepage: string;
};

type AppState = {
  indexing: Indexing;
};

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      indexing: {
        name: null,
        folders: [],
        sheets: [],
      } as Indexing,
    };
  }

  componentDidMount(): void {
    (async () => {
      if (this.props.folder !== null) {
        const response = await fetch(
          this.props.homepage + this.props.folder + "index.json"
        );
        this.setState({ indexing: await response.json() });
      } else if (this.props.sheet !== null) {
        const response = await fetch(this.props.homepage + this.props.sheet);
        console.log(await response.text());
      } else {
        const response = await fetch(this.props.homepage + "index.json");
        this.setState({ indexing: await response.json() });
      }
    })();
  }

  render(): React.ReactNode {
    return (
      <React.Fragment>
        {this.state.indexing.name !== null && (
          <h1>{this.state.indexing.name}</h1>
        )}
        <div className="list-group">
          {this.state.indexing.folders.map((folder, index) => {
            return (
              <a
                key={index}
                className="list-group-item list-group-item-action"
                href={
                  this.props.homepage +
                  "?folder=" +
                  encodeURIComponent(folder.path)
                }
              >
                {folder.name}
              </a>
            );
          })}
          {this.state.indexing.sheets.map((sheet, index) => {
            return (
              <a
                key={index + this.state.indexing.folders.length}
                className="list-group-item list-group-item-action"
                href={
                  this.props.homepage +
                  "?sheet=" +
                  encodeURIComponent(sheet.path)
                }
              >
                {sheet.name}
              </a>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
