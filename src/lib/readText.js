/**
 * @param {string} color
 */
function translateColor(color) {
  switch (color) {
    case "0":
      return "bg-red-300";
    case "1":
      return "bg-orange-300";
    case "2":
      return "bg-yellow-300";
    case "3":
      return "bg-lime-300";
    case "4":
      return "bg-green-300";
    case "5":
      return "bg-teal-300";
    case "6":
      return "bg-blue-300";
    case "7":
      return "bg-violet-300";
    case "8":
      return "bg-purple-300";
    case "9":
      return "bg-pink-300";
    default:
      return "";
  }
}

/**
 * @param {string} text
 */
function readLine(text) {
  let line = [];

  let colorModifiers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let exceptionModifiers = ["[", "]", "(", ")"];
  let actionModifiers = ["&", "*"];
  let targetModifiers = ["@"];

  let isModifier = false;

  let currentText = "";
  let currentColor = "";

  let currentAction = "";
  let currentLabel = "";

  for (const letter of text) {
    if (isModifier) {
      if (exceptionModifiers.includes(letter)) {
        currentText += "\\";
        currentText += letter;
      } else if (colorModifiers.includes(letter)) {
        if (currentText !== "") {
          line.push({
            text: currentText,
            color: translateColor(currentColor),
            action: "",
            target: "",
          });

          currentText = "";
        }
        currentColor = currentColor === "" ? letter : "";
      } else if (actionModifiers.includes(letter)) {
        if (currentAction === "" && currentText !== "") {
          line.push({
            text: currentText,
            color: translateColor(currentColor),
            action: "",
            target: "",
          });
        } else {
          currentLabel = currentText;
        }
        currentAction = letter;

        currentText = "";
      } else if (targetModifiers.includes(letter)) {
        if (currentText !== "") {
          line.push({
            text: currentLabel,
            color: translateColor(currentColor),
            action: currentAction,
            target: currentText,
          });

          currentText = "";
          currentAction = "";
          currentLabel = "";
        }
      }

      isModifier = false;

      continue;
    }
    if (letter === "\\") {
      isModifier = true;

      continue;
    }

    currentText += letter;
  }

  if (currentText !== "") {
    line.push({
      text: currentText,
      color: translateColor(currentColor),
      action: "",
      target: "",
    });
  }

  return line;
}

/**
 * @param {string} text
 */
function readParagraph(text) {
  let paragraph = {
    type: "",
    lines: [],
  };

  let lines = text.split("\n");

  paragraph.type = lines[0][1];

  lines = lines.map((line) => line.substring(3));

  if (paragraph.type === "T") {
    paragraph.lines = [
      [
        {
          text: "\\[" + lines.join("\\\\ ") + "\\]",
          color: "",
          action: "",
          target: "",
        },
      ],
    ];
  } else {
    lines.forEach((line) => {
      paragraph.lines.push(readLine(line));
    });
  }

  return paragraph;
}

/**
 * @param {string} text
 */
function readSection(text) {
  let section = {
    header: "",
    paragraphs: [],
  };

  let lines = text.split("\n");

  section.header = lines.shift();

  let currentParagraph = "";
  let currentType = "";

  lines.forEach((line) => {
    if (currentParagraph !== "") {
      if (line[1] !== currentType) {
        section.paragraphs.push(readParagraph(currentParagraph));
        currentParagraph = "";
      } else {
        currentParagraph += "\n";
      }
    }

    currentParagraph += line;
    currentType = line[1];
  });

  section.paragraphs.push(readParagraph(currentParagraph));

  return section;
}

/**
 * @param {string} text
 */
function readText(text) {
  let sheet = {
    title: "",
    sections: [],
  };

  let lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line !== "");

  sheet.title = lines.shift();

  let currentSection = "";

  lines.forEach((line) => {
    if (currentSection !== "") {
      if (line[0] !== "\\") {
        sheet.sections.push(readSection(currentSection));
        currentSection = "";
      } else {
        currentSection += "\n";
      }
    }

    currentSection += line;
  });

  sheet.sections.push(readSection(currentSection));

  return sheet;
}

export default readText;
