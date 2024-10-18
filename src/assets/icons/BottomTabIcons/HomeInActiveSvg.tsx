import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const HomeInActiveSvg = (props: SvgProps) => (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
        <Path
        d="M9.824 13.981h-.6V20.016a.49.49 0 01-.487.487H5.476a.49.49 0 01-.487-.487v-8.208H2.695l8.974-8.084h.001a.495.495 0 01.655 0s0 0 0 0l8.975 8.083h-2.294v8.21a.49.49 0 01-.487.486h-3.26a.49.49 0 01-.488-.487V13.981H9.825z"
        stroke="#000"
        strokeWidth={1.2}
      />
    </Svg>
);

export default HomeInActiveSvg;
