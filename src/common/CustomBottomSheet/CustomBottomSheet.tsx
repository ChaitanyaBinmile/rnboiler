import {CustomBottomSheetProps} from './type';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import {styles} from './StyleCustomBottomSheet';
import english from '../../assets/lang/English/LangEnglish';
import { Children } from 'react';
const CustomBottomSheet: React.FC<CustomBottomSheetProps> = ({
  visible,
  onClose,
  cutomBottomStyles,
  transparent,
  children,
}) => {
  return (
    <Modal
      transparent={transparent}
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}>
      <View style={cutomBottomStyles}>
        {/* <View
          style={[
            styles.bottomSheet,`
            {
              height: height,
              marginHorizontal: margin,
              padding: padding,
            },
          ]}>
          <Text style={styles.text}>{english.BOTTOMSHEET_TEXT}</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>
              {english.BOTTOMSHEET_BUTTONTEXT}
            </Text>
          </TouchableOpacity>
        </View> */}
        
        {children}
      </View>
    </Modal>
  );
};

export default CustomBottomSheet;
