import { Observable, from, of } from 'rxjs';
import { catchError, debounceTime, filter, map, mergeMap, takeUntil } from 'rxjs/operators';
import axios, { AxiosError } from 'axios';
import { DummyActions, getTodo, getTodoListFailure, gotToDo } from '../slices/dummySlice';
import { debugLog } from '../../../utils/Logger';
import { ResponseGetTodoError } from './type';

async function fetchDataTodo() {
  const result = await axios.get('https://jsonplaceholder.typicode.com/todos');
  const data = result.data.map((item: { title: string }) => item?.title);
  return data;
}

// export const dummyEpic = (action$: Observable<DummyActions>) =>
//   action$.pipe(
//     filter(getTodo.match),
//     mergeMap(() => from(fetchDataTodo()).pipe(map(data => gotToDo(data)))),
//   );
  export const dummyEpic = (action$: Observable<DummyActions>) =>
  action$.pipe(
    filter(getTodo.match),
    debounceTime(500),
    map(x => x.payload),
    mergeMap(answers => {
      return from(fetchDataTodo()).pipe(
        map(res => {
          if (res.statusCode === 200) {
            return gotToDo(res);
          }
          // showErrorToast(res.message);
          return getTodoListFailure();
        }),
        takeUntil(action$.pipe(filter(getTodo.match))),
        catchError((error: AxiosError<ResponseGetTodoError>) => {
          // showErrorToast(error.response?.data.message as string);
          return of(getTodoListFailure());
        }),
      );
    }),
  );