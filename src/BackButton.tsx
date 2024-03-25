import React from "react";

type BackButtonProps = {
  location: string;
  updateLocation: (newLocation: string) => void;
};

class BackButton extends React.Component<BackButtonProps> {
  render(): React.ReactNode {
    return (
      <React.Fragment>
        {this.props.location !== "" && (
          <button
            className="btn btn-link icon-link"
            onClick={() => {
              this.props.updateLocation(
                this.props.location.substring(0, this.props.location.length - 1)
              );
            }}
          >
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
          </button>
        )}
      </React.Fragment>
    );
  }
}

export default BackButton;
