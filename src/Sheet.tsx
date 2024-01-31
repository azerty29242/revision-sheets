import BackButton from "./BackButton";

interface Props {
  contents: object;
  header: string;
  onBackButtonClick: () => void;
}

interface Special {
  type: string;
  info: string;
}

interface Paragraph {
  type: string;
  contents: Array<string>;
  special: Array<Special>;
}

const ListGroup = ({ contents, header, onBackButtonClick }: Props) => {
  return (
    <>
      <h3 className="text-danger">{header}</h3>
    <div className="d-flex flex-column gap-4">
      <BackButton onClick={onBackButtonClick}></BackButton>
      {Object.entries(contents).map(([section, paragraphs]) => {
        return (
          <div>
            <h4 className="text-success">{section}</h4>
            {paragraphs.map((paragraph: Paragraph) => {
              // let specials = [];
              if ("special" in paragraph) {
                // specials = paragraph.special;
              }
              return (
                <div className="d-flex flex-column">
                  {paragraph.type === "paragraph" && (
                    <>
                      {paragraph.contents.map((line) => {
                        // specials.forEach((special) => {
                        //   if (line.includes(special))
                        // })
                        return <span>{line}</span>;
                      })}
                    </>
                  )}
                  {paragraph.type === "list" && (
                    <ul>
                      {paragraph.contents.map((item) => {
                        return <li>{item}</li>;
                      })}
                    </ul>
                  )}
                  {paragraph.type === "numbered" && (
                    <ol>
                      {paragraph.contents.map((item) => {
                        return <li>{item}</li>;
                      })}
                    </ol>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
    </>
  );
};

export default ListGroup;
