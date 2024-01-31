// import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";
import BackButton from "./BackButton";

interface Props {
  items: Array<string>;
  header: string;
  backButton: boolean;
  onBackButtonClick: () => void;
  onItemSelect: (item: string) => void;
}

const ListGroup = ({
  items,
  header,
  backButton,
  onBackButtonClick,
  onItemSelect,
}: Props) => {
  return (
    <ul className="list-group">
      <h3>{header}</h3>
      {backButton && <BackButton onClick={onBackButtonClick}></BackButton>}
      {items.map((item, index) => {
        return (
          <li
            key={index}
            className="icon-link icon-link-hover"
            onClick={() => onItemSelect(item)}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default ListGroup;
