import { AxiosRequestHeaders } from 'axios';
import { LanguageSupport } from '../utils/CommonContext/LanguageSupport';
import { debugLog } from '../utils/Logger';
import { Platform } from 'react-native';
import Config from '../app/Config';
// import StorageUtils from './StorageUtils';
// import AsyncKeys from './AsyncKeys';

const TAG = 'CommonHeader:';

export interface CommonHeaderProperties extends AxiosRequestHeaders {
  Authorization: string;
  'x-os': string;
  'x-os-version': string;
  'x-app-version': string;
  'x-device-id': string;
  'x-lang': LanguageSupport;
}

export class AppInstance {
  // eslint-disable-next-line no-use-before-define
  private static instance: AppInstance;

  /*
    Operating system of the user phone
*/
  private os: string;

  /*
      Operating system version
  */
  private os_version: string | number;

  private app_version: string;

  private device_id: string;

  private lang: LanguageSupport;

  /**
   * The CommonHeader's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() {
    const deviceId = '' // add something after creatiog storage utils
      // StorageUtils.getString(AsyncKeys.ASYNC_KEY_DEVICE_ID) || '';

    this.os = Platform.OS;
    this.os_version = Platform.Version;
    this.app_version = `${Config.versionName}(${Config.jsCodeBaseVersion})`;
    this.device_id = deviceId;
    this.lang = LanguageSupport.English;
    debugLog(TAG, 'initialising common instance.');
  }

  public getCommonHeaders() {
    return {
      'x-os': this.os,
      'x-os-version': this.os_version,
      'x-app-version': this.app_version,
      'x-device-id': this.device_id,
      'x-lang': this.lang,
    } as CommonHeaderProperties;
  }

  public setLang(lang: LanguageSupport) {
    this.lang = lang;
  }

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the CommonHeader class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): AppInstance {
    if (!AppInstance.instance) {
      AppInstance.instance = new AppInstance();
    }
    return this.instance;
  }
}
