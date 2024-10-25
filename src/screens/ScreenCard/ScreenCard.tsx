import React from 'react'
import { View } from 'react-native'
import CustomCard from '../../common/CustomCard/CustomCard'
import {styles} from './StyleScreenCard';
import {normalizeSize} from "../../theme/Dimension";
const ScreenCard = () => {
  return (
    <View>
      <CustomCard 
       customStyles={{
        margin:normalizeSize(20),
        padding:normalizeSize(15),
        elevation:normalizeSize(10),
        backgroundColor:'green',
       }}
      children={undefined} />
    </View>
  )
}

export default ScreenCard
