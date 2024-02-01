import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";

interface Props {
  onClick: () => void;
}

const BackButton = ({ onClick }: Props) => {
  return (
    <button className="btn btn-link icon-link mb-2" onClick={onClick}>
      <svg className="bi" aria-hidden="true">
        <use xlinkHref={bootstrapIcons + "#arrow-left"}></use>
      </svg>
      Retour
    </button>
  );
};

export default BackButton;
