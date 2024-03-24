// import React, { useEffect } from "react";
// import { Section, EnhancedText } from "../scripts/Interfaces";

// import Popover from "bootstrap/js/dist/popover.js";

// import BackButton from "./BackButton";

// interface Props {
//   sections: object;
//   header: string;
//   onBackButtonClick: () => void;
// }

// const displayText = (text: EnhancedText, index: number) => {
//   return (
//     <React.Fragment key={index}>
//       {text.type === "normal" && <span>{text.contents}</span>}
//       {text.type === "highlighted" && (
//         <span className={"text-bg-" + text.color}>{text.contents}</span>
//       )}
//       {text.type === "defined" && (
//         <a
//           className="btn btn-link border-0 p-0 m-0 user-select-auto align-baseline text-decoration-none rounded-0 d-inline"
//           tabIndex={0}
//           role="button"
//           data-bs-toggle="popover"
//           data-bs-trigger="focus"
//           data-bs-title={text.contents}
//           data-bs-content={text.definition}
//         >
//           {text.contents}
//         </a>
//       )}
//       {text.type === "link" && (
//         <a
//           className="btn btn-link border-0 p-0 m-0 user-select-auto align-baseline rounded-0 d-inline"
//           tabIndex={0}
//           role="button"
//           onClick={() => {
//             location.href =
//               location.origin + location.pathname + "?location=" + text.target;
//           }}
//         >
//           {text.contents}
//         </a>
//       )}
//       {text.type === "highlighted-defined" && (
//         <a
//           className={
//             "btn btn-link border-0 p-0 m-0 user-select-auto align-baseline text-decoration-none rounded-0 d-inline text-bg-" +
//             text.color
//           }
//           tabIndex={0}
//           role="button"
//           data-bs-toggle="popover"
//           data-bs-trigger="focus"
//           data-bs-title={text.contents}
//           data-bs-content={text.definition}
//         >
//           {text.contents}
//         </a>
//       )}
//       {text.type === "highlighted-link" && (
//         <a
//           className={
//             "btn btn-link border-0 p-0 m-0 user-select-auto align-baseline rounded-0 d-inline text-bg-" +
//             text.color
//           }
//           tabIndex={0}
//           role="button"
//           onClick={() => {
//             location.href =
//               location.origin + location.pathname + "?location=" + text.target;
//           }}
//         >
//           {text.contents}
//         </a>
//       )}
//     </React.Fragment>
//   );
// };

// const SheetView = ({ sections, header, onBackButtonClick }: Props) => {
//   useEffect(() => {
//     const popoverTriggerList = document.querySelectorAll(
//       '[data-bs-toggle="popover"]'
//     );
//     const popoverInstances = [...popoverTriggerList].map(
//       (popoverTriggerEl) => new Popover(popoverTriggerEl)
//     );

//     return () => {
//       popoverInstances.forEach((popoverInstance) => popoverInstance.dispose());
//     };
//   });

//   return (
//     <>
//       <h3 className="text-danger">{header}</h3>
//       <BackButton onClick={onBackButtonClick}></BackButton>
//       <div className="d-flex flex-column gap-4 mt-2">
//         {(sections as Section[]).map((section, sectionIndex) => {
//           return (
//             <div key={sectionIndex}>
//               <h4 className="text-success">{section.title}</h4>
//               {section.paragraphs.map((paragraph, paragraphIndex) => {
//                 return (
//                   <React.Fragment key={paragraphIndex}>
//                     {paragraph.type === "text" && (
//                       <div className="d-flex flex-column">
//                         {paragraph.lines.map((line, lineIndex) => {
//                           return (
//                             <span key={lineIndex}>{line.map(displayText)}</span>
//                           );
//                         })}
//                       </div>
//                     )}
//                     {paragraph.type === "list" && (
//                       <ul>
//                         {paragraph.lines.map((line, lineIndex) => {
//                           return (
//                             <li key={lineIndex}>{line.map(displayText)}</li>
//                           );
//                         })}
//                       </ul>
//                     )}
//                     {paragraph.type === "numbered" && (
//                       <ol>
//                         {paragraph.lines.map((line, lineIndex) => {
//                           return (
//                             <li key={lineIndex}>{line.map(displayText)}</li>
//                           );
//                         })}
//                       </ol>
//                     )}
//                   </React.Fragment>
//                 );
//               })}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default SheetView;
