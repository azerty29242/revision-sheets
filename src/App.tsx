import React from "react";
import { Folder, Sheet } from "./DataTypes.ts";
import sheets from "./Sheets.ts";
import List from "./List.tsx";

type AppState = {
  currentItem: Folder | Sheet;
  location: string;
  viewMode: "folder" | "sheet" | string;
};

class App extends React.Component<unknown, AppState> {
  state = {
    currentItem: sheets,
    location: "",
    viewMode: "",
  };

  componentDidMount(): void {
    if (location.hash !== "" && location.hash !== "#") {
      this.updateLocation(location.hash.substring(1));
    } else {
      this.updateLocation("");
    }

    window.addEventListener("popstate", (event) => {
      this.setState(event.state);
    });
  }

  updateLocation(newLocation: string): void {
    let verifiedItem: Folder | Sheet = sheets;
    let verifiedLocation: string = "";

    for (const character of newLocation) {
      if (
        verifiedItem.type === "folder" &&
        verifiedItem.contents[character] !== undefined
      ) {
        verifiedItem = verifiedItem.contents[character];
        verifiedLocation += character;
      } else {
        break;
      }
    }

    this.setState({
      location: verifiedLocation,
      currentItem: verifiedItem,
      viewMode: verifiedItem.type,
    });

    let hash = "";

    if (verifiedLocation !== "") {
      hash = "#" + verifiedLocation;
    }

    if (this.state.location !== verifiedLocation) {
      history.pushState(
        {
          location: verifiedLocation,
          currentItem: verifiedItem,
          viewMode: verifiedItem.type,
        },
        "",
        location.origin + location.pathname + hash
      );
    } else {
      history.replaceState(
        {
          location: verifiedLocation,
          currentItem: verifiedItem,
          viewMode: verifiedItem.type,
        },
        "",
        location.origin + location.pathname + hash
      );
    }
  }

  render(): React.ReactNode {
    return (
      <React.Fragment>
        {this.state.viewMode === "folder" && (
          <List
            location={this.state.location}
            updateLocation={(newLocation: string) =>
              this.updateLocation(newLocation)
            }
            items={this.state.currentItem}
          ></List>
        )}
        {/* {this.state.viewMode === "sheet" && <span>{this.state.contents}</span>} */}
      </React.Fragment>
    );
  }
}

export default App;
