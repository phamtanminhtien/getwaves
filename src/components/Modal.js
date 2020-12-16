import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import { MODE } from "../constant";
import copy from "copy-to-clipboard";
export default class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      stateBtnCopy: false,
    };
  }
  downloadTo = () => {
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," +
        encodeURIComponent(this.getStringCodeSVG(false))
    );
    element.setAttribute("download", "waveforu.svg");

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };
  copyTo = () => {
    this.setState({ stateBtnCopy: true });
    copy(this.getStringCodeSVG(false));
    setTimeout(() => {
      this.setState({ stateBtnCopy: false });
    }, 1000);
  };
  getStringCodeSVG = (format) => {
    let string1, string2, string3;
    string1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">`;
    switch (this.props.mode) {
      case MODE.CURVE:
        string2 = `<path fill="${
          this.props.color
        }" d="${this.props.draw.getCurve()}" opacity="${
          this.props.alpha
        }"></path>`;
        break;
      case MODE.LINE:
        string2 = `<path fill="${
          this.props.color
        }" d="${this.props.draw.getLine()}" opacity="${
          this.props.alpha
        }"></path>`;
        break;
      case MODE.STEP:
        string2 = `<path fill="${
          this.props.color
        }" d="${this.props.draw.getStep()}" opacity="${
          this.props.alpha
        }"></path>`;
        break;
      default:
    }
    string3 = `</svg>`;
    if (format) {
      return (
        <>
          {string1}
          <br />
          <div className="space2"></div>
          {string2}
          <br />
          {string3}
        </>
      );
    } else {
      return string1 + "\n   " + string2 + "\n" + string3;
    }
  };
  render() {
    return ReactDOM.createPortal(
      <div className="_modal">
        <div className="_modal-cover">
          <div
            className="_modal-mark"
            onClick={() => {
              this.props.setShowDownload(false);
            }}
          ></div>
          <div className="_modal-sticker">
            <div className="_modal-title">
              <h1>Download</h1>
            </div>
            <div className="_modal-content">
              <code style={{ whiteSpace: "nowrap" }}>
                {this.props.draw && this.getStringCodeSVG(true)}
              </code>
            </div>
            <div className="_modal-action">
              <div className="_modal-download-svg">
                <button onClick={this.downloadTo}>Download SVG</button>
              </div>
              <div className="_modal-copy-code">
                {this.state.stateBtnCopy ? (
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.25rem"
                      height="1.25rem"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ width: "1.25rem", marginRight: "0.5rem" }}
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Copied
                  </button>
                ) : (
                  <button onClick={this.copyTo}>Copy SVG Code</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>,
      document.body
    );
  }
}
