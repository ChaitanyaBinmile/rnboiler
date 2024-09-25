import Config from '../app/Config';

export function debugLog(TAG: string, message?: string) {
  if (!Config.debug) {
    return;
  }
  console.log(TAG, message);
}
