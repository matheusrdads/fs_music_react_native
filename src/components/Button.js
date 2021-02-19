import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'



const Button = (props) => {
  return (
    <View style={{ alignItems: 'flex-end', paddinng: 20 }}>
        <TouchableOpacity 
        onPress={() => {
          props.navigation.openDrawer()
          setTimeout(() => {
            props.navgation.closeDrawer()
          }, 3000);
        }}>

          <Text style={{ fontSize: 40}}>Menu</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Button