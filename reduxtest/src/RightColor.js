import React from "react";

const RightColor = () => {
  return (
    <div
      align="center"
      style={({ flex: 1 }, { padding: "1rem" }, { width: "50%" })}
    >
      <h2>컴포넌트 B</h2>
      버튼을 누르면 왼쪽 텍스트가 바뀐다
    </div>
  );
};

export default RightColor;
