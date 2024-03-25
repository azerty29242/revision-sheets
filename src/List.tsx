import React from "react";
import { Folder } from "./DataTypes.ts";
import BackButton from "./BackButton.tsx";

type ListProps = {
  location: string;
  updateLocation: (newLocation: string) => void;
  items: Folder;
};

class List extends React.Component<ListProps> {
  render(): React.ReactNode {
    return (
      <div className="d-flex flex-column gap-2">
        {this.props.items.name !== null && <h1>{this.props.items.name}</h1>}
        <BackButton
          location={this.props.location}
          updateLocation={this.props.updateLocation}
        ></BackButton>
        <div className="list-group">
          {Object.entries(this.props.items.contents).map(([id, item]) => {
            return (
              <button
                key={id}
                className="list-group-item list-group-item-action"
                onClick={() =>
                  this.props.updateLocation(this.props.location + id)
                }
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default List;
