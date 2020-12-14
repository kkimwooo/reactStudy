import React,{useState} from "react";
import useLeftTextuseRedux from './hooks/useLeftTextuseRedux';

const LeftTextuseRedux = () => {

  const [color,setColor] = useState('');
  const {onChange} = useLeftTextuseRedux();
  
  const onClickChange =()=>{
    onChange(color);
    console.log(color);
  }

  const onChangeColor =(event)=>{
    setColor(event.target.value);
  }

  return (
    <div
      align="center"
      style={({ flex: 1 }, { padding: "1rem" }, { width: "50%" })}
    >
      <h2>컴포넌트 A(Redux)</h2>
      여기에서 입력한 색으로 버튼 색이 바뀜(red, green, blue)
      <div>
        <input id="colorText" type="text" onChange={onChangeColor}/>
        <input type="button" value="click" onClick={onClickChange}></input>
      </div>
    </div>
  );
};

export default LeftTextuseRedux;
