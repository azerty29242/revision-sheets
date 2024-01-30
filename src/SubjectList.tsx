import revisionSheets from "./data/RevsionSheets.json";

interface Props {
  onSubjectSelect: (subject: string) => void;
}

const SubjectList = ({ onSubjectSelect }: Props) => {
  const subjects = Object.keys(revisionSheets);

  return (
    <>
      <h1>Matières</h1>
      <div className="list-group">
        {subjects.map((subject, index) => {
          return (
            <button
              key={index}
              className="list-group-item list-group-item-action"
              onClick={() => {
                onSubjectSelect(subject);
              }}
            >
              {subject}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default SubjectList;
