import React from "react";

type BackButtonProps = {
  homepage: string;
  folder: string | null;
  sheet: string | null;
};

type BackButtonState = {
  target: string;
};

class BackButton extends React.Component<BackButtonProps, BackButtonState> {
  state = {
    target: "",
  };

  componentDidMount(): void {
    let folder;

    if (this.props.folder !== null) {
      console.log(this.props.folder);
      let position = this.props.folder.split("/");
      console.log(position);
      position = position.filter((_, index) => index < position.length - 2);
      console.log(position);
      folder = position.join("/");
      folder += "/";
      if (folder === "/") folder = null;
    } else if (this.props.sheet !== null) {
      console.log(this.props.sheet);
      let position = this.props.sheet.split("/");
      console.log(position);
      position = position.filter((_, index) => index < position.length - 1);
      console.log(position);
      folder = position.join("/");
      folder += "/";
    } else {
      folder = null;
    }

    console.log(folder);

    if (folder !== null) {
      this.setState({ target: this.props.homepage + "?folder=" + encodeURIComponent(folder) });
    } else {
      this.setState({ target: this.props.homepage });
    }
  }

  render(): React.ReactNode {
    return (
      <a href={this.state.target}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
          />
        </svg>
        Retour
      </a>
    );
  }
}

export default BackButton;
