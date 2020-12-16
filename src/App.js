import HaftTop from "./components/HaftTop";
import HaftBottom from "./components/HaftBottom";
import Draw from "./Draw";
import { useEffect, useState } from "react";
import { MODE, FILL } from "./constant";

function App() {
  const [mode, setMode] = useState(MODE.CURVE);
  const [fill, setFill] = useState(FILL.BOTTOM);
  const [color, setColor] = useState("#0099ff");
  const [alpha, setAlpha] = useState(1);
  const [num, setNum] = useState(3);
  const [points, setPoint] = useState([]);
  const [draw, setDraw] = useState();

  useEffect(() => {
    setPoint(randomPoints(num, fill));
  }, [num]);
  useEffect(() => {
    setDraw(new Draw(points, fill));
  }, [points]);
  useEffect(() => {
    setDraw(new Draw(points, fill));
  }, [fill]);
  const randomPoints = (size) => {
    let point = [];
    for (let i = 0; i < size; i++) {
      point.push(Math.round(Math.random() * 10));
    }
    return point;
  };
  const randomAction = () => {
    setPoint(randomPoints(num, fill));
  };
  return (
    <div className="App">
      <HaftTop></HaftTop>
      <HaftBottom
        mode={mode}
        fill={fill}
        color={color}
        alpha={alpha}
        num={num}
        setNum={setNum}
        draw={draw}
        setMode={setMode}
        setFill={setFill}
        randomAction={randomAction}
        setColor={setColor}
        setAlpha={setAlpha}
      ></HaftBottom>
    </div>
  );
}

export default App;
