import React from "react";
import { Indexing } from "./DataTypes.ts";
import List from "./List.tsx";

type AppProps = {
  homepage: string;
  folder: string | null;
  sheet: string | null;
};

type AppState = {
  items: Indexing;
  contents: string;
  viewMode: "list" | "sheet" | null;
};

class App extends React.Component<AppProps, AppState> {
  state = {
    items: {
      name: null,
      folders: [],
      sheets: [],
    },
    contents: "",
    viewMode: null,
  };

  componentDidMount(): void {
    (async () => {
      if (this.props.folder !== null) {
        const response = await fetch(
          this.props.homepage + this.props.folder + "index.json"
        );
        this.setState({ items: await response.json(), viewMode: "list" });
      } else if (this.props.sheet !== null) {
        const response = await fetch(this.props.homepage + this.props.sheet);
        this.setState({ contents: await response.text(), viewMode: "sheet" });
      } else {
        const response = await fetch(this.props.homepage + "index.json");
        this.setState({ items: await response.json(), viewMode: "list" });
      }
    })();
  }

  render(): React.ReactNode {
    return (
      <React.Fragment>
        {this.state.viewMode === "list" && (
          <List
            homepage={this.props.homepage}
            folder={this.props.folder}
            items={this.state.items}
          ></List>
        )}
        {this.state.viewMode === "sheet" && <span>{this.state.contents}</span>}
      </React.Fragment>
    );
  }
}

export default App;
