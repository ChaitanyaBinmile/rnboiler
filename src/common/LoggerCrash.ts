// import crashlytics from '@react-native-firebase/crashlytics';
// import { debugLog } from '../utils/Logger';
// import Config from '../app/Config';

// export const TAG_COMPONENT = 'ComponentErrorHandler';

// const TAG = 'LoggerCrash: ';
// interface ErrorType {
//   error?: Error;
//   message?: string;
//   originalError?: Error;
// }

// export async function captureErrorLogs(error: ErrorType): Promise<void> {
//   if (!Config.logErrors) return;
//   debugLog(TAG, 'logging error in sentry');
//   try {
//     const exception = (error?.error ||
//       error?.message ||
//       error?.originalError) as Error;
//     if (!error) return;
//     crashlytics().recordError(exception);
//   } catch (e: unknown) {
//     if (e instanceof Error) {
//       debugLog(TAG, JSON.stringify(e));
//     }
//     const customError = new Error(`Error ${TAG}`);
//     await crashlytics().setAttribute(TAG, 'captureErrorLogs()');
//     crashlytics().recordError(customError);
//   }
// }

// export async function captureApiFails(error: ErrorType): Promise<void> {
//   if (!Config.logErrors) return;
//   debugLog(TAG, 'logging error in firebase');
//   try {
//     const exception = (error?.error ||
//       error?.message ||
//       error?.originalError) as Error;
//     crashlytics().recordError(exception);
//   } catch (e) {
//     if (e instanceof Error) {
//       debugLog(TAG, JSON.stringify(e));
//     }
//     const customError = new Error(`API failed ${TAG}`);
//     await crashlytics().setAttribute(TAG, 'captureApiFails()');
//     crashlytics().recordError(customError);
//   }
// }

// export async function captureErrorWithTag(tag: string, error: ErrorType) {
//   if (!Config.logErrors) return;
//   debugLog(TAG, 'logging error with tag in sentry');
//   try {
//     await crashlytics()
//       .setAttribute(TAG, tag)
//       .then(() => {
//         crashlytics().recordError(error as Error);
//       });
//   } catch (e: unknown) {
//     if (e instanceof Error) {
//       debugLog(TAG, JSON.stringify(e));
//     }
//     await crashlytics()
//       .setAttribute(TAG, 'captureCustomMessage()')
//       .then(() => {
//         crashlytics().recordError(e as Error);
//       });
//   }
// }

// export async function captureComponentErrors(error: ErrorType) {
//   await captureErrorWithTag(TAG_COMPONENT, error);
// }
