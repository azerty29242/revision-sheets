import BackButton from "./BackButton";

interface Props {
  contents: object;
  header: string;
  onBackButtonClick: () => void;
}

interface Paragraph {
  type: string;
  contents: Array<string>;
}

const ListGroup = ({ contents, header, onBackButtonClick }: Props) => {
  return (
    <div className="d-flex flex-column gap-2">
      <h3 className="text-danger">{header}</h3>
      <BackButton onClick={onBackButtonClick}></BackButton>
      {Object.entries(contents).map(([section, paragraphs]) => {
        return (
          <>
            <h4 className="text-success">{section}</h4>
            {paragraphs.map((paragraph: Paragraph) => {
              return (
                <div className="d-flex flex-column">
                  {paragraph.type === "paragraph" && (
                    <>
                      {paragraph.contents.map((line) => {
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
          </>
        );
      })}
    </div>
  );
};

export default ListGroup;
