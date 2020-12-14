const CHANGE  = 'InputColorUseRedux/CHANGE';

export const change = (diff) => ({
    type: CHANGE,
    payload: diff
  });
  
const initialState = {
    color: ''
  };

  function InputColorUseRedux(state = initialState, action) {
    switch (action.type) {
      case CHANGE:
        return { color: action.payload };
      default:
        return state;
    }
  }
  
  export default InputColorUseRedux;