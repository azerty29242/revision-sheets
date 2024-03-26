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

export type Line = string;

export interface Paragraph {
  type: string;
  lines: Line[];
}

export interface Section {
  header: string;
  paragraphs: Paragraph[];
}

export interface SheetData {
  title: string;
  sections: Section[];
}
