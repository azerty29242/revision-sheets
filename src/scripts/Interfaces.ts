export interface EnhancedText {
  type: "normal" | "highlighted" | "defined" | "highlighted-defined";
  contents: string;
  color?: string;
  definition?: string;
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
