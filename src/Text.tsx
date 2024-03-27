import React from "react";

import "katex";
import renderMathInElement from "katex/contrib/auto-render";
import { Line } from "./DataTypes";
import { Popover } from "bootstrap";

type TextProps = {
  type: "text" | "list";
  contents: Line;
  updateLocation: (newLocation: string) => void;
};

class Text extends React.Component<TextProps> {
  texRef: React.RefObject<HTMLLIElement>;

  constructor(props: TextProps) {
    super(props);

    this.texRef = React.createRef();
  }

  componentDidMount(): void {
    if (this.texRef.current !== null) {
      renderMathInElement(this.texRef.current, {
        delimiters: [
          { left: "\\[", right: "\\]", display: true },
          { left: "\\(", right: "\\)", display: false },
        ],
        throwOnError: false,
      });

      const popoverTriggerList = document.querySelectorAll(
        '[data-bs-toggle="popover"]'
      );

      popoverTriggerList.forEach(
        (popoverTriggerEl) => new Popover(popoverTriggerEl)
      );
    }
  }

  render(): React.ReactNode {
    return (
      <li
        ref={this.texRef}
        className={this.props.type === "text" ? "no-list-style" : ""}
      >
        {this.props.contents.map((text, textIndex) => {
          return (
            <React.Fragment>
              {text.type === null && (
                <span
                  key={textIndex}
                  className={
                    text.color !== null ? "highlight-" + text.color : ""
                  }
                >
                  {text.contents}
                </span>
              )}
              {text.type === "defined" && (
                <a
                  key={textIndex}
                  tabIndex={0}
                  role="button"
                  data-bs-toggle="popover"
                  data-bs-trigger="focus"
                  data-bs-title={text.contents}
                  data-bs-content={text.target}
                  className={
                    "btn btn-link border-0 p-0 m-0 user-select-auto align-baseline text-decoration-none rounded-0 d-inline" +
                    (text.color !== null ? " highlight-" + text.color : "")
                  }
                >
                  {text.contents}
                </a>
              )}
            </React.Fragment>
          );
        })}
      </li>
    );
  }
}

export default Text;
