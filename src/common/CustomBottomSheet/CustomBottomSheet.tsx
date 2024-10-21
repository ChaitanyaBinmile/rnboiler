import {CustomBottomSheetProps} from './type';
import {Modal, View} from 'react-native';
const CustomBottomSheet: React.FC<CustomBottomSheetProps> = ({
  visible,
  onClose,
  customBottomStyles,
  transparent,
  children,
}) => {
  return (
    <Modal
      transparent={transparent}
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}>
      <View style={customBottomStyles}>{children}</View>
    </Modal>
  );
};

export default CustomBottomSheet;
