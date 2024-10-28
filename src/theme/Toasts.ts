import Toast,{ BaseToast, ErrorToast } from 'react-native-toast-message';
import { fontPixel } from './Dimension';

export const showErrorToast = (message: string) => {
  Toast.show({
    type: 'error',
    text1: 'Error',
    text2: message,
    visibilityTime: 8000, 
  });
};

export const customToast=()=>{
  Toast.show({
    type: 'customToast',
    props: { uuid: 'bba1a7d0-6ab2-4a0a-a76e-ebbe05ae6d70' },
    visibilityTime: 8000, 
  });
}

export const showSuccessToast = (message: string) => {
  Toast.show({
    type: 'success',
    text1: 'Success',
    text2: message,
    // text2Style: { fontSize: fontPixel(14) },
    // text1Style: { fontSize: fontPixel(16), fontWeight: '700' },
     visibilityTime: 8000, 
  });
};
