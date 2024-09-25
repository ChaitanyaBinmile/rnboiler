import RNConfig from 'react-native-config';
import { Platform } from 'react-native';

const ENVIRONMENT = RNConfig.APP_ENV;
const DEBUG = ENVIRONMENT === 'staging' || ENVIRONMENT === 'local';
const jsCodeBaseVersion = 1;
const BASE_URL_AUTH = RNConfig.API_HOST as string;
const { TRACKER_VERSION, ANDROID_CODE_PUSH_KEY, IOS_CODE_PUSH_KEY } = RNConfig;
const codePushKey =
  Platform.OS === 'ios' ? IOS_CODE_PUSH_KEY : ANDROID_CODE_PUSH_KEY;
const isStaging = ENVIRONMENT === 'staging';

const Config = {
  isStaging,
  debug: DEBUG,
  appEnv: ENVIRONMENT,
  apiHost: RNConfig.API_HOST,
  versionName: RNConfig.ANDROID_VERSION_NAME as string,
  useInterceptor: RNConfig.USE_INTERCEPTOR === 'true',
  logErrors: RNConfig.LOG_ERRORS === 'true', // Log errors in crashlytics
  remoteConfigPrefix: RNConfig.REMOTE_CONFIG_PREFIX,
  trackerVersion: TRACKER_VERSION,
  codePushKey,
  jsCodeBaseVersion,
  jsonApi: 'https://jsonplaceholder.typicode.com/posts',
  auth: {
    verifyOTP: `${BASE_URL_AUTH}api/user/mobile/login`,
  },
};

export default Config;
