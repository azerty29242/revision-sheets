export interface Indexing {
  name: string | null;
  folders: Folder[];
  sheets: Sheet[];
}

export interface Folder {
  name: string;
  path: string;
}

export interface Sheet {
  name: string;
  path: string;
}
