import { Reducer, combineReducers } from '@reduxjs/toolkit';
import { reducerDummy } from '../slices/dummySlice';

//rootstate
type RootState = {
  reducerDummy: ReturnType<typeof reducerDummy>;
};

//combine all reducers
const reducers = combineReducers({
  reducerDummy,
});

const initialState: RootState = reducers(undefined as any, { type: '@@INIT' });

const resettableRootReducer: Reducer<RootState, any> = (state = initialState, action) => {
  if (action.type === 'store/reset') {
    return initialState;
  }
  return reducers(state, action);
};

export default resettableRootReducer;


export const resetRootReducer = () => ({ type: 'store/reset' });
