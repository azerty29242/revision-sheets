import jpg0 from "../assets/0.jpg";
import jpg1 from "../assets/1.jpg";
import jpg2 from "../assets/2.jpg";
import jpg3 from "../assets/3.jpg";
import jpg4 from "../assets/4.jpg";
import jpg5 from "../assets/5.jpg";
import jpg6 from "../assets/6.jpg";
import jpg60 from "../assets/60.jpg";
import jpg61 from "../assets/61.jpg";
import jpg610 from "../assets/610.jpg";
import jpg611 from "../assets/611.jpg";
import jpg7 from "../assets/7.jpg";

import txt8 from "../assets/8.txt";
import txt610 from "../assets/610.txt";
import txt611 from "../assets/611.txt";

const sheets = {
  "": {
    name: "Fiches de révision",
    type: "folder",
    subitems: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
    image: "",
  },
  0: {
    name: "Français",
    type: "folder",
    subitems: [],
    image: jpg0,
  },
  1: {
    name: "Mathématiques",
    type: "folder",
    subitems: [],
    image: jpg1,
  },
  2: {
    name: "Histoire",
    type: "folder",
    subitems: [],
    image: jpg2,
  },
  3: {
    name: "Géographie",
    type: "folder",
    subitems: [],
    image: jpg3,
  },
  4: {
    name: "Physique",
    type: "folder",
    subitems: [],
    image: jpg4,
  },
  5: {
    name: "Chimie",
    type: "folder",
    subitems: [],
    image: jpg5,
  },
  6: {
    name: "SVT",
    type: "folder",
    subitems: ["60", "61"],
    image: jpg6,
  },
  60: {
    name: "Immunité",
    type: "folder",
    subitems: [],
    image: jpg60,
  },
  61: {
    name: "Génétique",
    type: "folder",
    subitems: ["610", "611"],
    image: jpg61,
  },
  610: {
    name: "Caractères des individus & information génétique",
    type: "sheet",
    image: jpg610,
    text: txt610,
  },
  611: {
    name: "Origine de la diversité génétique des individus",
    type: "sheet",
    image: jpg611,
    text: txt611,
  },
  7: {
    name: "Technologie",
    type: "folder",
    subitems: [],
    image: jpg7,
  },
  8: {
    name: "Exemple",
    type: "sheet",
    text: txt8,
  },
};

export default sheets;
