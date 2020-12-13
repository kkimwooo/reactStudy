import React, { useState } from "react";

const LeftText = ({ changeText }) => {
  const [color, setColor] = useState("");

  //async awiat 처리 안하면
  const changeColor = (event) => {
    setColor(event.target.value);
  };

  const clickButton = () => {
    changeText(color);
  };

  return (
    <div
      align="center"
      style={({ flex: 1 }, { padding: "1rem" }, { width: "50%" })}
    >
      <h2>컴포넌트 A</h2>
      여기에서 입력한 색으로 버튼 색이 바뀜(red, green, blue)
      <div>
        <input
          id="colorText"
          type="text"
          value={color}
          onChange={changeColor}
        />
        <input type="button" value="click" onClick={clickButton}></input>
      </div>
    </div>
  );
};

export default LeftText;
