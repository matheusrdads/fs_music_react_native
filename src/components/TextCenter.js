import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TextCenter = ({text}) => {

  return (
    <View style={css.container}>
      <Text style={css.text}>
      {text}
      </Text>
    </View>
  )
}

export default TextCenter

const css = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    color: '#000'
  }
})


