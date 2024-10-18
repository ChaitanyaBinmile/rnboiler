import React from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import styles from './styleLoader';

type LoaderProps = {
  show: boolean;
};

export function Loader({ show }: LoaderProps) {
  return show ? (
    <Modal transparent animationType="none" visible={show} onRequestClose={() => null}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      </View>
    </Modal>
  ) : null;
}
