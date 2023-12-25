import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCards = (): JSX.Element => {
  return (
    <View >
      <Text style={styles.heading1}>Elevated Card</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.boxText}>Card1</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.boxText}>Card2</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.boxText}>Card3</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.boxText}>Card4</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.boxText}>Card5</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.boxText}>Card6</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.boxText}>Card7</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.boxText}>Card8</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.boxText}>Card9</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.boxText}>Card10</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  heading1: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10,
  },
  container: {
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
  card: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: 'black',
    borderRadius: 5,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowOpacity: 1,
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
