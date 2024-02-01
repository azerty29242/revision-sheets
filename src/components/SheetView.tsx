import { useEffect } from "react";
import { Section, EnhancedText } from "../scripts/Interfaces";

import Popover from "bootstrap/js/dist/popover.js";

import BackButton from "./BackButton";

interface Props {
  sections: object;
  header: string;
  onBackButtonClick: () => void;
}

const displayText = (text: EnhancedText, index: number) => {
  return (
    <>
      {text.type === "normal" && <span key={index}>{text.contents}</span>}
      {text.type === "highlighted" && (
        <span key={index} className={"text-bg-" + text.color}>
          {text.contents}
        </span>
      )}
      {text.type === "defined" && (
        <button
          key={index}
          className="btn btn-link border-0 p-0 m-0 align-baseline"
          data-bs-toggle="popover"
          data-bs-trigger="focus"
          data-bs-title={text.contents}
          data-bs-content={text.definition}
        >
          {text.contents}
        </button>
      )}
    </>
  );
};

const SheetView = ({ sections, header, onBackButtonClick }: Props) => {
  useEffect(() => {
    const popoverTriggerList = document.querySelectorAll(
      '[data-bs-toggle="popover"]'
    );
    [...popoverTriggerList].map(
      (popoverTriggerEl) => new Popover(popoverTriggerEl)
    );
  });

  return (
    <>
      <h3 className="text-danger">{header}</h3>
      <BackButton onClick={onBackButtonClick}></BackButton>
      <div className="d-flex flex-column gap-4 mt-2">
        {(sections as Section[]).map((section, index) => {
          return (
            <div key={index}>
              <h4 className="text-success">{section.title}</h4>
              {section.paragraphs.map((paragraph, index) => {
                return (
                  <>
                    {paragraph.type === "text" && (
                      <div className="d-flex flex-column" key={index}>
                        {paragraph.lines.map((line, index) => {
                          return (
                            <span key={index}>{line.map(displayText)}</span>
                          );
                        })}
                      </div>
                    )}
                    {paragraph.type === "list" && (
                      <ul key={index}>
                        {paragraph.lines.map((line, index) => {
                          return <li key={index}>{line.map(displayText)}</li>;
                        })}
                      </ul>
                    )}
                    {paragraph.type === "numbered" && (
                      <ol key={index}>
                        {paragraph.lines.map((line, index) => {
                          return <li key={index}>{line.map(displayText)}</li>;
                        })}
                      </ol>
                    )}
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SheetView;
