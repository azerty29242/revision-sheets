// export interface Normal {
//   type: "normal";
//   contents: string;
// }

// export interface Highlighted {
//   type: "highlighted";
//   contents: string;
//   color: string;
// }

// export interface Defined {
//   type: "defined";
//   contents: string;
//   definition: string;
// }

// export interface Paragraph {
//   type: "text" | "list" | "numbered";
//   lines: Array<Normal | Highlighted | Defined>;
// }

// export interface Section {
//   title: string;
//   paragraphs: Array<Paragraph>;
// }

// export interface Sheet {
//   name: string;
//   sections: Array<Section>;
// }

// export interface Category {
//   name: string;
//   sheets: Array<Sheet>;
// }

// export interface Subject {
//   name: string;
//   categories: Array<Category>;
// }

// export interface Subjects {
//   [k: string]
// }

// export interface RevisionSheetsInterface {
//   subjects: Array<Subject>;
// }

export interface Section {
  title: string;
  paragraphs: {
    type: "text" | "list" | "numbered";
    lines: {
      type: "normal" | "highlighted" | "defined";
      contents: string;
      color?: string;
      definition?: string;
      [k: string]: unknown;
    }[][];
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}

export interface Sheet {
  name: string;
  sections: Section[];
  [k: string]: unknown;
}

export interface Category {
  name: string;
  sheets: Sheet[];
  [k: string]: unknown;
}

export interface Subject {
  name: string;
  categories: Category[];
  [k: string]: unknown;
}

export interface RevisionSheetsInterface {
  subjects: Subject[];
  [k: string]: unknown;
}
