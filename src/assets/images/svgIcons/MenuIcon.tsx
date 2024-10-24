import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { heightPixel, widthPixel } from '../../../theme/Dimension';

function MenuIcon() {
  return (
    <Svg width={widthPixel(22)} height={heightPixel(18)} viewBox="0 0 22 18" fill="none">
      <Path
        d="M0.5 1.5C0.5 0.703125 1.15625 0 2 0H20C20.7969 0 21.5 0.703125 21.5 1.5C21.5 2.34375 20.7969 3 20 3H2C1.15625 3 0.5 2.34375 0.5 1.5ZM0.5 9C0.5 8.20312 1.15625 7.5 2 7.5H20C20.7969 7.5 21.5 8.20312 21.5 9C21.5 9.84375 20.7969 10.5 20 10.5H2C1.15625 10.5 0.5 9.84375 0.5 9ZM21.5 16.5C21.5 17.3438 20.7969 18 20 18H2C1.15625 18 0.5 17.3438 0.5 16.5C0.5 15.7031 1.15625 15 2 15H20C20.7969 15 21.5 15.7031 21.5 16.5Z"
        fill="#131313"
      />
    </Svg>
  );
}
export default MenuIcon;
