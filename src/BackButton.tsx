import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";

interface Props {
  onClick: () => void;
}

const BackButton = ({ onClick }: Props) => {
  return (
    <div className="mb-2">
      <a className="icon-link" onClick={onClick}>
        <svg className="bi" aria-hidden="true">
          <use xlinkHref={bootstrapIcons + "#arrow-left"}></use>
        </svg>
        Retour
      </a>
    </div>
  );
};

export default BackButton;
