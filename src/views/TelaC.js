import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import TextCenter from '../components/TextCenter'
// import Button from '../components/Button'


const TelaC = (props) => {
  return (
    <View style={{ flex: 1, marginLeft: 15 }}>
      {/* <Button navigation={props.navigation} /> */}
      <TextCenter text="Stores" />
    <Text style={styles.textStyle}>Our stores</Text>
      <Text>
      
        <View>
         
              <View style={styles.container}>
                <Text>Baltimore</Text>
                <Text>219 E 25th St</Text>
                <Text>first floor</Text>
                <Text>Center</Text>
                <Text>+1 443-988-88446</Text>
              </View>
         
          <View style={styles.container}>
           
                <Text>Newington</Text>
                <Text>269 E 15th St</Text>
                <Text>first floor</Text>
                <Text>Center</Text>
                <Text>+1 860-988-78436</Text>
             
          </View>
          <View style={styles.container}>
            
                <Text>New York</Text>
                <Text>100 Lexington Ave NY 10010</Text>
                <Text>4th floor</Text>
                <Text>Center</Text>
                <Text>+1 4443-988-88446</Text>
             
          </View>
        </View>
  
    </Text>

    </View>

  )
}

export default TelaC

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    fontSize: 20
  },
  textStyle: {
    marginBottom: 30,
    fontSize: 20,
    color: '#F00'
  }
})
