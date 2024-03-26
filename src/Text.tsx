import React from "react";

import "katex";
import renderMathInElement from "katex/contrib/auto-render";
import { Line } from "./DataTypes";

type TextProps = {
  type: "text" | "list";
  contents: Line;
};

class Text extends React.Component<TextProps> {
  ref: React.RefObject<HTMLLIElement>;

  constructor(props: TextProps) {
    super(props);

    this.ref = React.createRef();
  }

  componentDidMount(): void {
    if (this.ref.current !== null) {
      renderMathInElement(this.ref.current, {
        delimiters: [
          { left: "\\[", right: "\\]", display: true },
          { left: "\\(", right: "\\)", display: false },
        ],
        throwOnError: false,
      });
    }
  }

  render(): React.ReactNode {
    return (
      <li
        ref={this.ref}
        className={this.props.type === "text" ? "no-list-style" : ""}
      >
        {this.props.contents.map((text) => {
          return (
            <span
              className={text.color !== null ? "highlight-" + text.color : ""}
            >
              {text.contents}
            </span>
          );
        })}
      </li>
    );
  }
}

export default Text;
