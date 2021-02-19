import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet} from 'react-native'

import TextCenter from '../components/TextCenter'

const TelaB = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4444/products')
      .then((response) => response.json())
      .then((json) => setData(json))
  }, []);


  return (
    <View style={styles.container}>
     <TextCenter text="Products" />
      <Text style={styles.title}>All products</Text>
      <FlatList 
        data={data}
        keyExtractor={({ id }, index) => id}
        renderItem={({item})=>(

          <View >
        <Text style={styles.title}>{item.descripton}</Text>
        <View style={styles.card}>
          <img style={{width: 100, height: 100}} src={require(`${item.images}`)} />

        <View style={styles.prices}>
          <Text style={styles.initialPrice}> Was $ {item.price}</Text><br />
          <Text style={styles.finalPrice}> Now $ {item.finalprice}</Text>
        </View>

        </View>

        
        </View>
          // <View>
          // <View style={styles.img}><img alt="" src={require(`${item.images}`)} /></View>
          // <Text>Categorie: {item.categories} </Text>
          // <Text>Description: {item.descripton}</Text>
          // <Text>$: {item.price}</Text>
          // <Text>$: {item.finalprice}</Text>
          // </View>
        )}
        />
      {/* <Button navigation={props.navigation} /> */}
      
      {/* <Text /> */}
    </View>
    

  )
}

export default TelaB

// const styles = StyleSheet.create({
//   diplay: {
//     marginBottom: 30,
//     fontSize: 20
//   },
//   container: {
//     flex: 1, justifyContent: 'center', 
//     margin: 'auto' 
//   },
//   img: {
//     width: 100,
//     height: 100,
//     marginTop: 15
//   }
// })

const styles = StyleSheet.create({ 
  card:{
    flexDirection: 'row',
    textAlign: 'center',
    borderWidth: 2,
  },
  title: {
    marginBottom: 10,
    fontFamily: "Cochin",
  },
  prices:{
    flexDirection: 'column',
    marginTop: 20,
    padding: 0,

  },
  initialPrice:{
    fontSize: 15,
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  finalPrice:{
    fontSize: 25,
    color: '#C70039'
  },

});




// import React from 'react'
// import { View, Text, FlatList, StyleSheet} from 'react-native'

// import TextCenter from '../components/TextCenter'
// // import Button from '../components/Button'
// const dados = [
//   {
//     id: Math.random(),
//     categories:"thrashmetal",
//     descripton:"Destruction - Born To Thrash - Live",
//     price:10,
//     finalprice:7,
//     images:"./assets/destuction.jpg"
//   },
//   {
//     id: Math.random(),
//     categories:"thrashmetal",
//     descripton:"Krisiun - Assassination",
//     price:10,
//     finalprice:6,
//     images:"./assets/krisiun.jpg"
//   },
//   {
//     id: Math.random(),
//     categories:"thrashmetal",
//     descripton:"Sepultura - Roots",
//     price:11,
//     finalprice:8,
//     images:"./assets/roots.jpg"
//   },
//   {
//     id: Math.random(),
//     categories:"thrashmetal",
//     descripton:"Sepultura - the madiatror between Head",
//     price:10,
//     finalprice:7,
//     images:"./assets/sepultura.jpg"
//   }
  
// ]

  
//     const Products = ({ id, categories, descripton, price}) => {
//   return(
//     <View style={styles.diplay}>
//       <Text>{id}</Text>
//       <Text>{categories}</Text>
//       <Text>{descripton}</Text>
//       <Text>{price}</Text>
//     </View>
//   )
// }


// const TelaB = (props) => {
//   return (
//     <View style={styles.container}>
//      <TextCenter text="Products" />
//       <Text>All products</Text>
//       <FlatList 
//         data={dados}
//         keyExtractor={(item) => `$(item.id)`}
//         renderItem={({item})=>(
//           <Products  id={item.id} categories={item.categories} descripton={item.descripton} price={item.price}/>
//         )}
//         />
//       {/* <Button navigation={props.navigation} /> */}
      
//       {/* <Text /> */}
//     </View>
    

//   )
// }

// export default TelaB

// const styles = StyleSheet.create({
//   diplay: {
//     marginBottom: 30,
//     fontSize: 20
//   },
//   container: {
//     flex: 1, justifyContent: 'center', 
//     margin: 'auto' 
//   }
// })
