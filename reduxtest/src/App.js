import LeftText from "./LeftText";
import RightColor from "./RightColor";

function App() {
  return (
    <div>
      <header align="center">
        <h1>A,B는 App.js의 하위 컴포넌트들임</h1>
      </header>
      <div style={{ display: "flex" }}>
        <LeftText />
        <RightColor />
      </div>
    </div>
  );
}

export default App;
