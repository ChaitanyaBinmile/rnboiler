import React, {useState} from 'react';
import {
  Alert,
  Text,
  TouchableOpacity,
  View,
  Image,
  Platform,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import styles from './StylesComponentVideo';
import Video from 'react-native-video';
import english from '../../assets/lang/English/LangEnglish';


const ComponentVideo = () => {
  const [videoUri, setVideoUri] = useState<string | null>(null);

  const handleResponse = (response: any) => {
    if (response.didCancel) {
      console.log('User cancelled video picker');
    } else if (response.errorMessage) {
      Alert.alert('Error', response.errorMessage);
    } else if (response.assets && response.assets.length > 0) {
      console.log(response.assets[0].uri);
      setVideoUri(response.assets[0].uri ?? null);
    }
  };
 
  const requestVideoPermission =async()=>{
   let permission;
   if(Platform.OS==='ios'){
    permission= PERMISSIONS.IOS.CAMERA;
   }
   else{
    permission= PERMISSIONS.ANDROID.CAMERA;
   }
   const result=await request(permission);
   return result === RESULTS.GRANTED;
  }


  const requestGalleryPermission = async () => {
    let permissions;
    if (Platform.OS === 'ios') {
      permissions = [PERMISSIONS.IOS.PHOTO_LIBRARY];
    } else {
      if (Number(Platform.Version) >= 33) {
        permissions = [
          PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
          PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
        ];
      } else {
        permissions = [PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE];
      }
    }
    const results = await Promise.all(
      permissions.map(permissions => request(permissions))
    );
    return results.every(result => result === RESULTS.GRANTED);
  };

  

  const pickVideoFromCamera = async () => {
    const hasPermission = await requestVideoPermission();
    if (hasPermission) {
      launchCamera({mediaType: 'video'}, handleResponse);
    } else {
      Alert.alert(
        'Permission Denied',
        'Camera permission is required to take videos.',
      );
    }
  }

  const pickVideoFromGallery = async () => {
    const hasPermission = await requestGalleryPermission();
    if (hasPermission) {
      launchImageLibrary({mediaType: 'video'}, handleResponse);
    } else {
      Alert.alert(
        'Permission Denied',
        'Gallery permission is required to take videos.',
      );
    }
  };

  return (
    <View style={styles.container}>
      {videoUri ? (
        <Video
          source={{uri: videoUri}}
          style={styles.video}
          controls={true}
          resizeMode="contain"
        />
      ) : (
        <View style={styles.greyContainer}>
          <Text style={styles.uploadTextStyle}>Upload video here</Text>
        </View>
      )}
      <View style={styles.rowContainer}>
      <TouchableOpacity
          style={styles.uploadButtonStyle}
          onPress={pickVideoFromCamera}>
          <Text style={styles.uploadButtonText}>{english.CAMERA_TEXT}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.uploadButtonStyle}
          onPress={pickVideoFromGallery}>
          <Text style={styles.uploadButtonText}>{english.GALLEXY_TEXT}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ComponentVideo;
