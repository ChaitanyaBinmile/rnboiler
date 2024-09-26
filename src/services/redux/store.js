import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './rootEpic';
import rootReducer from './rootReducer';

const epicMiddleware = createEpicMiddleware();
const store = configureStore({
  reducer: rootReducer,
  enhancers: [],
  middleware: [epicMiddleware],
});

epicMiddleware.run(rootEpic);

export default store;
