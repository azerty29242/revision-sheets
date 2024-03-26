import React from "react";
import { Sheet, SheetData } from "./DataTypes";
import BackButton from "./BackButton";
import Text from "./Text";

type SheetViewProps = {
  location: string;
  updateLocation: (newLocation: string) => void;
  sheet: Sheet;
};

type SheetViewState = {
  contents: string | null;
};

class SheetView extends React.Component<SheetViewProps, SheetViewState> {
  state = {
    contents: null as string | null,
  };

  componentDidMount(): void {
    if (this.state.contents === null) {
      (async () => {
        const response = await fetch(
          location.origin + location.pathname + this.props.location
        );
        this.setState({ contents: await response.text() });
      })();
    }
  }

  render(): React.ReactNode {
    const sheet = {
      title: this.props.sheet.name,
      sections: [],
    } as SheetData;

    if (this.state.contents !== null) {
      const lines = this.state.contents.split("\n");
      sheet.title = lines.shift() as string;
      let currentMode = "";
      let currentSection = -1;
      let currentParagraph = -1;
      for (const lineIndex in lines) {
        const line = lines[lineIndex].trim();
        if (line === "") continue;
        if (line[0] === "\\") {
          if (line[1] === "\\") continue;
          if (currentMode !== line[1]) {
            sheet.sections[currentSection].paragraphs.push({
              type: line[1],
              lines: [],
            });
            currentParagraph += 1;
            currentMode = line[1];
          }

          sheet.sections[currentSection].paragraphs[
            currentParagraph
          ].lines.push(line.substring(3));
        } else {
          sheet.sections.push({
            header: line,
            paragraphs: [],
          });
          currentMode = "";
          currentSection += 1;
          currentParagraph = -1;
        }
      }
    }

    return (
      <React.Fragment>
        {this.state.contents !== null ? (
          <h3 className="text-danger">{this.state.contents.split("\n")[0]}</h3>
        ) : (
          <h3 className="text-danger">{this.props.sheet.name}</h3>
        )}
        <BackButton
          location={this.props.location}
          updateLocation={this.props.updateLocation}
        ></BackButton>
        {sheet.sections.map((section, sectionIndex) => {
          return (
            <React.Fragment key={sectionIndex}>
              <h4 className="text-success">{section.header}</h4>
              {section.paragraphs.map((paragraph, paragraphIndex) => {
                if (paragraph.type === "-") {
                  return (
                    <ul key={paragraphIndex}>
                      {paragraph.lines.map((line, lineIndex) => {
                        return (
                          <Text
                            key={lineIndex}
                            type="list"
                            contents={line}
                          ></Text>
                        );
                      })}
                    </ul>
                  );
                } else if (paragraph.type === "_") {
                  return (
                    <ol key={paragraphIndex}>
                      {paragraph.lines.map((line, lineIndex) => {
                        return (
                          <Text
                            key={lineIndex}
                            type="list"
                            contents={line}
                          ></Text>
                        );
                      })}
                    </ol>
                  );
                } else if (paragraph.type === "#") {
                  return (
                    <p key={paragraphIndex}>
                      <Text
                        type="text"
                        contents={"\\[" + paragraph.lines.join("\\\\") + "\\]"}
                      ></Text>
                    </p>
                  );
                } else {
                  return (
                    <p key={paragraphIndex}>
                      {paragraph.lines.map((line, lineIndex) => {
                        return (
                          <Text
                            key={lineIndex}
                            type="text"
                            contents={line}
                          ></Text>
                        );
                      })}
                    </p>
                  );
                }
              })}
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}

export default SheetView;
