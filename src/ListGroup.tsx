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
    <>
    <h3>{header}</h3>
    {backButton && <BackButton onClick={onBackButtonClick}></BackButton>}
    <ul className="list-group">
      {items.map((item, index) => {
        return (
          <li
            key={index}
            className="list-group-item list-group-item-action"
            onClick={() => onItemSelect(item)}
          >
            {item}
          </li>
        );
      })}
    </ul>
    </>
  );
};

export default ListGroup;
