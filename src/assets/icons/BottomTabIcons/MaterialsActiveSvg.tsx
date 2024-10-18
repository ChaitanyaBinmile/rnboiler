import React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';

const MaterialsActiveSvg = (props: SvgProps) => (
    <Svg
{...props}
width={24}
height={24}
fill="none"
>
        <G clipPath="url(#a)" stroke="#000" strokeWidth={1.2} strokeMiterlimit={10}>
            <Path d="M5.637 7.746h-2.11v11.672h4.837a3.6 3.6 0 0 1 2.546 1.055h2.18a3.6 3.6 0 0 1 2.546-1.055h4.837V8.801h-2.11" />
            <Path d="M12 7.746h.33a5.643 5.643 0 0 1 3.302-1.055h2.731V17.31h-2.731c-1.203 0-2.342.369-3.301 1.054h-.662a5.643 5.643 0 0 0-3.3-1.054H5.636V5.637h2.11" />
            <Path d="M7.746 3.527v10.617c2.33 0 4.254 1.89 4.254 4.22V7.745c0-2.33-1.924-4.219-4.254-4.219Z" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" transform="translate(3 3)" d="M0 0h18v18H0z" />
            </ClipPath>
        </Defs>
    </Svg>
);

export default MaterialsActiveSvg;
