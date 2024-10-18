import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const HomeActiveSvg = (props: SvgProps) => (
    <Svg
    {...props}
    width={24}
    height={24}
    fill="none"
  >
        <Path
      d="M9.824 13.981h-.6V20.016a.49.49 0 0 1-.487.487H5.476a.49.49 0 0 1-.487-.487v-8.208H2.695l8.974-8.084h.001a.495.495 0 0 1 .655 0l8.975 8.083h-2.294v8.21a.49.49 0 0 1-.487.486h-3.26a.49.49 0 0 1-.488-.487V13.981H9.825Z"
      stroke="#2DA77D"
      strokeWidth={1.2}
    />
    </Svg>
);

export default HomeActiveSvg;
