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

export interface RawText {
  contents: string;
  color: string | null;
  type: "defined" | null;
  target: string | null;
}

export type Line = RawText[];

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
