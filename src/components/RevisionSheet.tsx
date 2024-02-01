import { useEffect, useState } from "react";
import BackButton from "./BackButton";

interface Props {
  sheet: string;
  header: string;
  onBackButtonClick: () => void;
}

interface Text {
  type: string;
  words: string;
}

interface HighlightedText {
  type: string;
  words: string;
  color: string;
}

interface DefinedText {
  type: string;
  words: string;
  definition: string;
}

interface Content {
  type: string;
  lines: Array<Array<Text | HighlightedText | DefinedText>>;
}

interface Section {
  name: string;
  contents: Content[];
}

interface Sheet {
  sections: Section[];
}

const ListGroup = ({ sheet, header, onBackButtonClick }: Props) => {
  const [contents, setContents] = useState(null);
  const getData = () => {
    fetch(sheet)
      .then((response) => response.json())
      .then((data) => setContents(data));
  };

  useEffect(getData);

  return <>{contents !== null && <p>Hello, world!</p>}</>;
};

export default ListGroup;
