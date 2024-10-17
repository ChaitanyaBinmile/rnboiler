import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SearchIconSvg = (props: SvgProps) => (
  <Svg
    
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M9 2C5.14585 2 2 5.14585 2 9C2 12.8541 5.14585 16 9 16C10.748 16 12.345 15.348 13.5742 14.2813L14 14.707V16L20 22L22 20L16 14L14.707 14L14.2813 13.5742C15.348 12.345 16 10.748 16 9C16 5.14585 12.8541 2 9 2ZM9 4C11.7733 4 14 6.22673 14 9C14 11.7733 11.7733 14 9 14C6.22673 14 4 11.7733 4 9C4 6.22673 6.22673 4 9 4Z" />
  </Svg>
);

export default SearchIconSvg;
