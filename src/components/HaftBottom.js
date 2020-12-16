import React, { useState } from "react";
import "./HaftBottom.css";
import { MODE, FILL } from "../constant";
import Modal from "../components/Modal";

const HaftBottom = ({
  mode,
  fill,
  color,
  alpha,
  num,
  setNum,
  draw,
  setMode,
  setFill,
  randomAction,
  setColor,
  setAlpha,
}) => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showDownload, setShowDownload] = useState(false);

  const onChangeColorNotFI = (e) => {
    if (e.target.value.length < 7) setColor("#" + e.target.value);
  };
  const onChangeNum = (e) => {
    setNum(e.target.value);
  };
  const onChangeColor = (e) => {
    if (e.target.value.length < 8) setColor(e.target.value);
  };
  const setColorWith = (color) => {
    setColor(color);
  };
  const onChangeAlpha = (e) => {
    setAlpha(e.target.value / 100);
  };
  return (
    <div className="haft-bottom">
      <div className="top">
        <div className="title">
          <h1>Make some waves!</h1>
        </div>
        <div className="option">
          <div className="option-cover">
            <div className="row1">
              <div className="group">
                <button
                  id="curve"
                  className={mode === MODE.CURVE ? "active" : ""}
                  onClick={() => {
                    setMode(MODE.CURVE);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      fillRule="nonzero"
                      stroke="currentcolor"
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="M1 13.04l1.222 2.586c1.222 2.634 3.667 5.757 6.111 3.779 2.445-1.979 3.89-13.01 7.334-14.988 2.296-1.32 4.74 1.485 7.333 8.412"
                    ></path>
                  </svg>
                </button>
                <button
                  id="step"
                  className={mode === MODE.STEP ? "active" : ""}
                  onClick={() => {
                    setMode(MODE.STEP);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      fillRule="nonzero"
                      stroke="currentcolor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 20L8 20 8 4 16 4 16 13.5172414 23 13.5172414"
                    ></path>
                  </svg>
                </button>
                <button
                  id="line"
                  className={mode === MODE.LINE ? "active" : ""}
                  onClick={() => {
                    setMode(MODE.LINE);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      fillRule="nonzero"
                      stroke="currentcolor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 13.3142857L8 20 16 4 23 11.8857143"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="group">
                <button
                  id="up"
                  className={fill === FILL.TOP ? "active" : ""}
                  onClick={() => {
                    setFill(FILL.TOP);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      fillRule="evenodd"
                      stroke="currentcolor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 15L12 9 6 15"
                    ></path>
                  </svg>
                </button>
                <button
                  id="down"
                  className={fill === FILL.BOTTOM ? "active" : ""}
                  onClick={() => {
                    setFill(FILL.BOTTOM);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      fillRule="evenodd"
                      stroke="currentcolor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 9L12 15 18 9"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="row2">
              <div className="group">
                {showColorPicker && (
                  <div
                    className="mark"
                    onClick={() => {
                      setShowColorPicker(false);
                    }}
                  ></div>
                )}
                <div
                  className="input-base for-text"
                  onClick={() => {
                    setShowColorPicker(true);
                  }}
                >
                  <input type="text" value={color} onChange={onChangeColor} />
                  {showColorPicker && (
                    <div className="color-panel">
                      <div className="cp-row">
                        <span
                          style={{ background: "#a2d9ff" }}
                          onClick={() => {
                            setColorWith("#a2d9ff");
                          }}
                        ></span>
                        <span
                          style={{ background: "#0099ff" }}
                          onClick={() => {
                            setColorWith("#0099ff");
                          }}
                        ></span>
                        <span
                          style={{ background: "#000b76" }}
                          onClick={() => {
                            setColorWith("#000b76");
                          }}
                        ></span>
                        <span
                          style={{ background: "#5000ca" }}
                          onClick={() => {
                            setColorWith("#5000ca");
                          }}
                        ></span>
                        <span
                          style={{ background: "#e7008a" }}
                          onClick={() => {
                            setColorWith("#e7008a");
                          }}
                        ></span>
                        <span
                          style={{ background: "#ff5500" }}
                          onClick={() => {
                            setColorWith("#ff5500");
                          }}
                        ></span>
                        <span
                          style={{ background: "#00cba9" }}
                          onClick={() => {
                            setColorWith("#00cba9");
                          }}
                        ></span>
                      </div>
                      <div className="cp-row">
                        <span
                          style={{ background: "#ffd700" }}
                          onClick={() => {
                            setColorWith("#ffd700");
                          }}
                        ></span>
                        <span
                          style={{ background: "#f3f4f5" }}
                          onClick={() => {
                            setColorWith("#f3f4f5");
                          }}
                        ></span>
                        <span
                          style={{ background: "#273036" }}
                          onClick={() => {
                            setColorWith("#273036");
                          }}
                        ></span>
                        <span
                          style={{ background: "rgb(240 240 240)" }}
                          className="firsta"
                        >
                          #
                        </span>
                        <input
                          type="text"
                          value={color.substr(1)}
                          onChange={onChangeColorNotFI}
                        />
                      </div>
                    </div>
                  )}
                  <span
                    className="color"
                    style={{ backgroundColor: color }}
                  ></span>
                </div>
              </div>
              <div className="group">
                <div className="input-base ipb-pc">
                  <input
                    type="number"
                    value={alpha * 100}
                    onChange={onChangeAlpha}
                  />
                  <span className="percent">%</span>
                </div>
              </div>
            </div>
            <div className="row3">
              <div className="group">
                <div className="low">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    {mode === MODE.CURVE && (
                      <path
                        fill="none"
                        fillRule="nonzero"
                        stroke="currentcolor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 13.247l1.833-.876c1.834-.876 5.5-2.63 9.167-2.339 3.667.312 7.333 2.613 9.167 3.801L23 15"
                      ></path>
                    )}
                    {mode === MODE.STEP && (
                      <path
                        fill="none"
                        fillRule="nonzero"
                        stroke="currentcolor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 22L11 22 11 3 22 3 22 21.5172414"
                      ></path>
                    )}
                    {mode === MODE.LINE && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          fillRule="evenodd"
                          stroke="currentcolor"
                          strokeLinecap="round"
                          strokeWidth="2"
                          d="M5 16l14-7"
                        ></path>
                      </svg>
                    )}
                  </svg>
                </div>
                <div className="input-range">
                  <input
                    className="slider"
                    type="range"
                    min="2"
                    max="40"
                    value={num}
                    onChange={onChangeNum}
                  />
                </div>
                <div className="high">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    {mode === MODE.CURVE && (
                      <path
                        fill="none"
                        fillRule="nonzero"
                        stroke="currentcolor"
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="M1 13.736C2.04 11.933 3.09 5.049 4.146 5c.659.031 1.324 2.817 1.985 5.531.38 1.561.76 3.098 1.138 4.073 1.059 2.574 2.113.935 3.146-.868 1.057-1.803 2.113-3.442 3.146-3.491 1.055.049 2.114 1.688 3.146 4.36 1.052 2.573 2.09 6.178 3.147 5.244 1.05-.869 2.09-6.113 2.618-8.736L23 8.491"
                      ></path>
                    )}
                    {mode === MODE.STEP && (
                      <path
                        fill="none"
                        fillRule="nonzero"
                        stroke="currentcolor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 23L1 12.9388611 5.55130912 12.9388611 5.55130912 1 10.0447933 1 10.0447933 9.64319035 14.5085979 9.64319035 14.5085979 14.858897 18.8965816 14.858897 18.8965816 5.5443012 23 5.5443012 23 22.0552669"
                      ></path>
                    )}
                    {mode === MODE.LINE && (
                      <path
                        fill="none"
                        fillRule="nonzero"
                        stroke="currentcolor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 21.3703704L4.66666667 7.51851852 8.33333333 21.3703704 12 4.25925926 15.6666667 19.7407407 19.3333333 1 23 23"
                      ></path>
                    )}
                  </svg>
                </div>
              </div>
              <div className="ram" onClick={randomAction}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentcolor"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    d="M7.38 5.555l15.592-1.367A3.419 3.419 0 0126.673 7.3L28.05 23.06a3.422 3.422 0 01-3.106 3.71L9.352 28.137a3.419 3.419 0 01-3.702-3.113L4.275 9.265a3.422 3.422 0 013.106-3.71zm.2 2.274a1.14 1.14 0 00-1.036 1.237l1.375 15.759a1.14 1.14 0 001.234 1.038l15.591-1.368a1.14 1.14 0 001.036-1.236l-1.376-15.76a1.14 1.14 0 00-1.234-1.037L7.58 7.829zm3.254 5.39a1.69 1.69 0 01-1.825-1.545 1.692 1.692 0 011.53-1.84 1.69 1.69 0 011.825 1.546 1.692 1.692 0 01-1.53 1.839zm10.065-.883a1.69 1.69 0 01-1.826-1.545 1.692 1.692 0 011.53-1.84 1.69 1.69 0 011.825 1.546 1.692 1.692 0 01-1.53 1.84zM11.72 23.373a1.69 1.69 0 01-1.825-1.545 1.692 1.692 0 011.53-1.84 1.69 1.69 0 011.825 1.545 1.692 1.692 0 01-1.53 1.84zm10.065-.883a1.69 1.69 0 01-1.825-1.545 1.692 1.692 0 011.53-1.84 1.69 1.69 0 011.825 1.546 1.692 1.692 0 01-1.53 1.84zm-5.476-4.635a1.69 1.69 0 01-1.825-1.546 1.692 1.692 0 011.53-1.839 1.69 1.69 0 011.825 1.545 1.692 1.692 0 01-1.53 1.84zM29.183 6.823l-.015.002A.915.915 0 0128.167 6c-.265-2.544-2.523-4.39-5.045-4.121h-.007a.916.916 0 01-1.002-.824.922.922 0 01.808-1.018h.002l.007-.001a6.387 6.387 0 014.718 1.408 6.498 6.498 0 012.347 4.363.922.922 0 01-.812 1.016zM8.547 32h-.008a6.395 6.395 0 01-4.578-1.818 6.51 6.51 0 01-1.96-4.553.92.92 0 01.895-.942h.016c.503-.008.917.4.926.91.044 2.559 2.134 4.595 4.67 4.55h.006a.918.918 0 01.927.91.92.92 0 01-.894.943z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wave">
        <div className="download-btn">
          <button
            className="btn"
            onClick={() => {
              setShowDownload(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentcolor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21.2 15c.7-1.2 1-2.5.7-3.9-.6-2-2.4-3.5-4.4-3.5h-1.2c-.7-3-3.2-5.2-6.2-5.6-3-.3-5.9 1.3-7.3 4-1.2 2.5-1 6.5.5 8.8M12 19.8V12M16 17l-4 4-4-4"></path>
            </svg>
          </button>
        </div>
        {draw && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            {mode === MODE.CURVE && (
              <path fill={color} d={draw.getCurve()} opacity={alpha}></path>
            )}
            {mode === MODE.STEP && (
              <path fill={color} d={draw.getStep()} opacity={alpha}></path>
            )}
            {mode === MODE.LINE && (
              <path fill={color} d={draw.getLine()} opacity={alpha}></path>
            )}
          </svg>
        )}
      </div>
      {showDownload && (
        <Modal
          draw={draw}
          color={color}
          alpha={alpha}
          mode={mode}
          setShowDownload={setShowDownload}
        />
      )}
    </div>
  );
};

export default HaftBottom;
