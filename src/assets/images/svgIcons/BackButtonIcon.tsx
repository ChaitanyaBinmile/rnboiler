import Svg, { Path, SvgProps } from 'react-native-svg';
import { heightPixel, widthPixel } from '../../../theme/Dimension';

function BackButtonIcon({ width, height, color = '#141417' }: SvgProps) {
  return (
    <Svg width={width || widthPixel(20)} height={height || heightPixel(18)} viewBox="0 0 20 18" fill="none">
      <Path
        d="M0.675781 9.52344C0.460938 9.30859 0.375 9.05078 0.375 8.75C0.375 8.49219 0.460938 8.23438 0.675781 8.01953L8.23828 0.800781C8.66797 0.414062 9.3125 0.414062 9.69922 0.84375C10.0859 1.23047 10.0859 1.91797 9.65625 2.30469L3.94141 7.71875H18.5938C19.1523 7.71875 19.625 8.19141 19.625 8.75C19.625 9.35156 19.1523 9.78125 18.5938 9.78125H3.94141L9.65625 15.2383C10.0859 15.625 10.0859 16.2695 9.69922 16.6992C9.3125 17.1289 8.66797 17.1289 8.23828 16.7422L0.675781 9.52344Z"
        fill={color}
      />
    </Svg>
  );
}

export default BackButtonIcon;
