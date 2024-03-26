import React from "react";
import { Folder, Sheet } from "./DataTypes.ts";
import sheets from "./Sheets.ts";
import ListView from "./ListView.tsx";
import SheetView from "./SheetView.tsx";

type AppState = {
  currentItem: Folder | Sheet;
  location: string;
};

class App extends React.Component<Record<string, never>, AppState> {
  state = {
    currentItem: sheets as Folder | Sheet,
    location: "",
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
        },
        "",
        location.origin + location.pathname + hash
      );
    } else {
      history.replaceState(
        {
          location: verifiedLocation,
          currentItem: verifiedItem,
        },
        "",
        location.origin + location.pathname + hash
      );
    }
  }

  render(): React.ReactNode {
    return (
      <React.Fragment>
        {this.state.currentItem.type === "folder" && (
          <ListView
            location={this.state.location}
            updateLocation={(newLocation: string) =>
              this.updateLocation(newLocation)
            }
            items={this.state.currentItem}
          ></ListView>
        )}
        {this.state.currentItem.type === "sheet" && (
          <SheetView
            location={this.state.location}
            updateLocation={(newLocation: string) =>
              this.updateLocation(newLocation)
            }
            sheet={this.state.currentItem}
          ></SheetView>
        )}
      </React.Fragment>
    );
  }
}

export default App;
