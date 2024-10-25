import React from 'react'
import { View } from 'react-native'
import { CustomCardProp } from './type'
import {styles} from './CustomCardStyle';

const CustomCard:React.FC<CustomCardProp> = ({
    customStyles,
    children
}) => {
  return (
    <View style={[styles.card,{
       margin:customStyles?.margin || styles.defaultStyle.margin,
       padding:customStyles?.padding || styles.defaultStyle.padding,
       backgroundColor:customStyles?.backgroundColor || styles.defaultStyle.backgroundColor,
       elevation:customStyles?.elevation || styles.defaultStyle.elevation,
       width:customStyles?.width|| styles.defaultStyle.width,
       height:customStyles?.height || styles.defaultStyle.height,
    }]}>
      {children}
    </View>
  )
}

export default CustomCard
