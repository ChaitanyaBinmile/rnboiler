/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { combineEpics } from 'redux-observable';
import { catchError } from 'rxjs/operators';
import { epicFetchData } from '../../screens/ScreenExample/redux/epicScreenHome';
import { debugLog } from '../../utils/Logger';

const TAG = 'Root_Epic';
const epics = [epicFetchData];

const rootEpic = ( action$, state$, dependencies) =>
  combineEpics(...epics)(action$, state$, dependencies).pipe(
    catchError((error, source) => {
      debugLog(TAG, error);
      return source;
    }),
  );
export default rootEpic;
