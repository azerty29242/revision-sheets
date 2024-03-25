export interface Sheet {
  name: string;
  type: "sheet";
}

export interface Folder {
  name: string;
  type: "folder";
  contents: {
    [id: string]: Folder | Sheet;
  };
}

export type Item = Folder | Sheet;
