import React from "react";

const RightColor = ({ backColor }) => {
  let color = "white";
  if (backColor !== "") {
    color = backColor;
  }
  return (
    <div
      align="center"
      style={
        ({ flex: 1 },
        { padding: "1rem" },
        { width: "50%" },
        { backgroundColor: color })
      }
    >
      <h2>컴포넌트 B</h2>
      A에서 입력한 값으로 배경 색이 바뀐다
    </div>
  );
};

export default RightColor;
