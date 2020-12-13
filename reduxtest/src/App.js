import { useState } from "react";
import LeftText from "./LeftText";
import RightColor from "./RightColor";
import LeftTextuseRedux from "./useRedux/LeftTextuseRedux";
import RightColoruseRedux from "./useRedux/RightColoruseRedux";
function App() {
  const [color, setColor] = useState("");
  const changeText = (changeText) => {
    setColor(changeText);
  };
  return (
    <div>
      <header align="center">
        <h1>A,B는 App.js의 하위 컴포넌트들임</h1>
      </header>
      <div style={{ display: "flex" }}>
        <LeftText changeText={changeText} />
        <RightColor backColor={color} />
      </div>
      <div style={{ display: "flex" }}>
        <LeftTextuseRedux />
        <RightColoruseRedux />
      </div>
    </div>
  );
}

export default App;
