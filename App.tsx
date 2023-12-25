import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCards from './components/ActionCards'
import ContactList from './components/ContactList'


const App = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
      <FlatCards />
      <ElevatedCards />
      <FancyCard />
      <ContactList />
      <ActionCards />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  
  main:{
    flex:1,
     backgroundColor:"#88A2B9",
     paddingVertical:10
  }
})