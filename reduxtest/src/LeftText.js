import React from "react";

const LeftText = () => {
  return (
    <div
      align="center"
      style={({ flex: 1 }, { padding: "1rem" }, { width: "50%" })}
    >
      <h2>컴포넌트 A</h2>
      여기에서 입력한 색으로 버튼 색이 바뀜(red, green, blue)
      <div>
        <input type="text" />
        <input type="button" value="click"></input>
      </div>
    </div>
  );
};

export default LeftText;
