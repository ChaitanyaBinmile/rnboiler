import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type StateType = {
  todoList: string[];
  isLoading: boolean;
};

const initialState: StateType = {
  todoList: [] as string[],
  isLoading: false,
};

const dummySlice = createSlice({
  name: 'dummySlice',
  initialState,
  reducers: {
    getTodo: state => ({
      ...state,
      isLoading: true,
    }),
    gotToDo: (state, action: PayloadAction<string[]>) => ({
      ...state,
      isLoading: false,
      todoList: action.payload,
    }),
    getTodoListFailure: (state)=>{
      return{
        ...state,
        isLoading: false,
      }
    }
  },
});

export const reducerDummy = dummySlice.reducer;
export const { getTodo, gotToDo, getTodoListFailure } = dummySlice.actions;

//action types
export type DummyActions = ReturnType<typeof getTodo> | ReturnType<typeof gotToDo> | ReturnType<typeof getTodoListFailure>;
