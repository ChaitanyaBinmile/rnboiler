import React, {useState} from 'react';
import {
  View,
  Image,
  Alert,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import styles from './StyleComponentImage';

export function ComponentImage() {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const handleResponse = (response: any) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.errorMessage) {
      Alert.alert('Error', response.errorMessage);
    } else if (response.assets && response.assets.length > 0) {
      setImageUri(response.assets[0].uri ?? null);
    }
  };

  const requestCameraPermission = async () => {
    let permission;
    if (Platform.OS === 'ios') {
      permission = PERMISSIONS.IOS.CAMERA;
    } else {
      permission = PERMISSIONS.ANDROID.CAMERA;
    }

    const result = await request(permission);
    return result === RESULTS.GRANTED;
  };

  const pickImageFromCamera = async () => {
    const hasPermission = await requestCameraPermission();
    if (hasPermission) {
      launchCamera({mediaType: 'photo'}, handleResponse);
    } else {
      Alert.alert(
        'Permission Denied',
        'Camera permission is required to take photos.',
      );
    }
  };

  const pickImageFromGallery = () => {
    launchImageLibrary({mediaType: 'photo'}, handleResponse);
  };

  return (
    <View style={styles.container}>
      {imageUri ? (
        <Image source={{uri: imageUri}} style={styles.image} />
      ) : (
        <View style={styles.greyContainer}>
          <Text style={styles.uploadTextStyle}>Upload image here</Text>
        </View>
      )}

      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.uploadButtonStyle}
          onPress={pickImageFromCamera}>
          <Text style={styles.uploadButtonText}>Open Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.uploadButtonStyle}
          onPress={pickImageFromGallery}>
          <Text style={styles.uploadButtonText}>Open Gallery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
