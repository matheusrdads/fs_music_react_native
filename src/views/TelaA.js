import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import TextCenter from '../components/TextCenter'
// import Button from '../components/Button'

import krisiun from '../../assets/krisiun.jpg';
import aerosmith2 from '../../assets/aerosmith2.jpg';


const TelaA = (props) => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Button navigation={props.navigation} /> */}
      <TextCenter text="FsMusic" />
      <View>
        <Text style={css.textTitle}> Be welcome !</Text>
        <Text style={css.textTitle}>Here in our store, programmers have discounts on vinyl disks!</Text>

        <View style={css.container}>
          <Text style={css.text}>You won't hear anything like that in the next decade</Text>
          <img alt="" src={krisiun} style={{ width: "50%" }} />


          <Text style={css.text}>don't forget that brutes also love</Text>
          <img alt="" src={aerosmith2} style={{ width: "50%" }} />

        </View>
      </View>

    </View>

  )
}

export default TelaA

const css = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    // justifyContent: 'center',
    // alignItems: 'center',
    textAlign: '',
    fontSize: 20,
    color: '#F00',
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: '#000'
  }
})
