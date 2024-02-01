export interface EnhancedText {
  type:
    | "normal"
    | "highlighted"
    | "defined"
    | "link"
    | "highlighted-defined"
    | "highlighted-link";
  contents: string;
  color?: string;
  definition?: string;
  target?: string;
}

export interface Paragraph {
  type: "text" | "list" | "numbered";
  lines: EnhancedText[][];
}

export interface Section {
  title: string;
  paragraphs: Paragraph[];
}

export interface Sheet {
  [sheetName: string]: Section[];
}

export interface Category {
  [categoryName: string]: Sheet;
}

export interface Subject {
  [subjectName: string]: Category;
}
