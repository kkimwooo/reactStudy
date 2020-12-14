import { useSelector, useDispatch } from 'react-redux';
import { change } from '../modules/LeftTextuseRedux';
import { useCallback } from 'react';

export default function useLeftTextuseRedux() {
  const color = useSelector((state) => state.LeftTextuseRedux.color);
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