import { Folder } from "./DataTypes";

const sheets: Folder = {
  name: "Fiches Bristol",
  type: "folder",
  contents: {
    "0": {
      name: "Histoire",
      type: "folder",
      contents: {
        "0": {
          name: "Première Guerre Mondiale",
          type: "folder",
          contents: {
            "0": {
              name: "Le Génocide Arménien",
              type: "sheet",
            },
            "1": {
              name: "Les soldats pendant la Première Guerre Mondiale",
              type: "sheet",
            },
            "2": {
              name: "Les civils pendant la Première Guerre Mondiale",
              type: "sheet",
            },
          },
        },
      },
    },
  },
};

export default sheets;
