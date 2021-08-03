import { useDispatch } from 'react-redux';
import { setAgGridColumnState } from 'redux/xepTkb/reducer';
import { useDebouncedCallback } from 'use-debounce';

export const useDebouncedStoreColumnState = (time = 500) => {
  const dispatch = useDispatch();

  const debouncedStoreColumnState = useDebouncedCallback(({ columnApi }) => {
    dispatch(setAgGridColumnState(columnApi.getColumnState()));
  }, time);

  return { debouncedStoreColumnState };
};
