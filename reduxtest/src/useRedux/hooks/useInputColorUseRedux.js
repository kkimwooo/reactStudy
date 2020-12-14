import { useSelector, useDispatch } from 'react-redux';
import { change } from '../modules/InputColorUseRedux';
import { useCallback } from 'react';

export default function useInputColorUseRedux() {
  const color = useSelector((state) => state.InputColorUseRedux.color);
  const dispatch = useDispatch();

  const onChange = useCallback(
    (diff) => dispatch(change(diff)),
    [dispatch]
  );

  return {
    color,
    onChange
  };
}