// import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";
// import BackButton from "./BackButton";

// interface Props {
//   items: object;
//   header: string;
//   backButton: boolean;
//   onBackButtonClick: () => void;
//   onItemSelect: (name: string, items: Array<object>) => void;
// }

// const ListGroup = ({
//   items,
//   header,
//   backButton,
//   onBackButtonClick,
//   onItemSelect,
// }: Props) => {
//   return (
//     <>
//       <h3>{header}</h3>
//       {backButton && <BackButton onClick={onBackButtonClick}></BackButton>}
//       <div className="list-group">
//         {Object.entries(items).map(([item, value], index) => {
//           return (
//             <button
//               key={index}
//               className="list-group-item list-group-item-action"
//               onClick={() => onItemSelect(item, value)}
//             >
//               {item}
//             </button>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default ListGroup;
