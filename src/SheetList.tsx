import revisionSheets from "./data/RevsionSheets.json";
import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";

interface Props {
  subject: string;
  onBackButtonClick: () => void;
}

const SheetList = ({ subject, onBackButtonClick }: Props) => {
  const categories = Object.keys(revisionSheets[subject as keyof object]);

  return (
    <>
      <div className="d-flex jusitfy-content-start align-items-center gap-4">
        <a className="icon-link" onClick={onBackButtonClick}>
          <svg className="bi" aria-hidden="true">
            <use xlinkHref={bootstrapIcons + "#arrow-left"}></use>
          </svg>
          Retour
        </a>
        <h1>{subject}</h1>
      </div>

      <div className="accordion" id="headers">
        {categories.map((category, index) => {
          return (
            <div key={index} className="accordion-item">
              <div className="accordion-header">{category}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SheetList;
