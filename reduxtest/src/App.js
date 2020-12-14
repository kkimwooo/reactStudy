import { useState } from "react";
import InputColor from "./noRedux/InputColor";
import OutputColor from "./noRedux/OutputColor";
import InputColorUseRedux from "./useRedux/InputColorUseRedux";
import OutputColorUseRedux from "./useRedux/OutputColorUseRedux";

function App() {
  const [colorNoRedux, setColorNoRedux] = useState("");
  const changeText = (changeText) => {
    setColorNoRedux(changeText);
  };
  return (
    <div>
      <header align="center">
        <h1>A,B는 App.js의 하위 컴포넌트들임</h1>
      </header>
      <div style={{ display: "flex" }}>
        <InputColor changeText={changeText} />
        <OutputColor backColor={colorNoRedux} />
      </div>
      <div style={{ display: "flex" }}>
        <InputColorUseRedux />
        <OutputColorUseRedux />
      </div>
    </div>
  );
}

export default App;
