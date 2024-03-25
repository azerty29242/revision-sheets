import React from "react";
import { Indexing } from "./DataTypes.ts";
import BackButton from "./BackButton.tsx";

type ListProps = {
  homepage: string;
  folder: string | null;
  items: Indexing;
};

class List extends React.Component<ListProps> {
  render(): React.ReactNode {
    return (
      <React.Fragment>
        {this.props.items.name !== null && <h1>{this.props.items.name}</h1>}
        <BackButton
          homepage={this.props.homepage}
          folder={this.props.folder}
          sheet={null}
        ></BackButton>
        <div className="list-group">
          {this.props.items.folders.map((folder, index) => {
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
          {this.props.items.sheets.map((sheet, index) => {
            return (
              <a
                key={index + this.props.items.folders.length}
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

export default List;
