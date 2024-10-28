import React from 'react'
import { Button, View } from 'react-native'
import { customToast, showErrorToast, showSuccessToast } from '../../theme/Toasts'

const ScreenToast = () => {
    
  return (
    <View>
      <Button title="Submit" onPress={()=>customToast()}/>
    </View>
  )
}

export default ScreenToast
