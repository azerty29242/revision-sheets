import React from "react";

import "katex";
import renderMathInElement from "katex/contrib/auto-render";

type TextProps = {
  type: "text" | "list";
  contents: string;
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
    if (this.props.type === "list") {
      return <li ref={this.ref}>{this.props.contents}</li>;
    } else {
      return (
        <li ref={this.ref} className="no-list-style">
          {this.props.contents}
        </li>
      );
    }
  }
}

export default Text;
