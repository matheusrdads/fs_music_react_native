import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'

const routeTab = createBottomTabNavigator()

const Tab = () => {
  return(
    <routeTab.Navigator initialRouteName='TelaA' tabBarOptions={{
      activeTintColor: 'red',
      inactiveTintColor: 'blue',
      labelStyle: {fontSize: 30}
    }}>
      <routeTab.Screen name="Home" component={TelaA} />
      <routeTab.Screen name="Products" component={TelaB} />
      <routeTab.Screen name="Store" component={TelaC} />
    </routeTab.Navigator>
  )
}

export default Tab