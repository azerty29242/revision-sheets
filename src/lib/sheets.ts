import jpg0 from "../assets/0.jpg";
import jpg1 from "../assets/1.jpg";
import jpg2 from "../assets/2.jpg";
import jpg3 from "../assets/3.jpg";
import jpg4 from "../assets/4.jpg";
import jpg5 from "../assets/5.jpg";
import jpg6 from "../assets/6.jpg";
import jpg7 from "../assets/7.jpg";

interface Folder {
  name: string;
  type: "folder";
  subitems: string[];
  image: string;
}

interface Sheet {
  name: string;
  type: "sheet";
  image: string;
}

export type Item = Folder | Sheet;

const sheets: { [key: string]: Item } = {
  "": {
    name: "Fiches de révision",
    type: "folder",
    subitems: ["0", "1", "2", "3", "4", "5", "6", "7"],
    image: "",
  },
  "0": {
    name: "Français",
    type: "folder",
    subitems: [],
    image: jpg0,
  },
  "1": {
    name: "Mathématiques",
    type: "folder",
    subitems: [],
    image: jpg1,
  },
  "2": {
    name: "Histoire",
    type: "folder",
    subitems: [],
    image: jpg2,
  },
  "3": {
    name: "Géographie",
    type: "folder",
    subitems: [],
    image: jpg3,
  },
  "4": {
    name: "Physique",
    type: "folder",
    subitems: [],
    image: jpg4,
  },
  "5": {
    name: "Chimie",
    type: "folder",
    subitems: [],
    image: jpg5,
  },
  "6": {
    name: "SVT",
    type: "folder",
    subitems: [],
    image: jpg6,
  },
  "7": {
    name: "Technologie",
    type: "folder",
    subitems: [],
    image: jpg7,
  },
};

export default sheets;
