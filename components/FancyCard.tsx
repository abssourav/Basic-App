import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCard = (): JSX.Element => {
  return (
    <View>
      <Text style={styles.heading}>Trending Places</Text>
      <View style={[styles.card, styles.fancyCard]}>
        <Image
          style={styles.cardImage}
          src="https://cdn.pixabay.com/photo/2012/11/22/08/19/view-66975_640.jpg"
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Mount Uhud</Text>
          <Text style={styles.cardLabel}>Mountain north of Medina, Saudi Arabia.</Text>
          <Text style={styles.cardDesc}>
            Marching out from Mecca towards Medina on March 11, 625, the Meccans
            desired to avenge their losses at Badr and strike back at Muhammad
            and his followers. The Muslims readied for war soon afterward and
            the two armies fought on the slopes and plains of Mount ‘Uḥud.Whilst
            heavily outnumbered, the Muslims gained the early initiative and
            forced the Meccan lines back, thus leaving much of the Meccan camp
            unprotected. When the battle looked to be only one step far from a
            decisive Muslim victory, a serious mistake was committed by a part
            of the Muslim army, which shifted the outcome of the battle.
          </Text>
          <Text style={styles.cardFooter}>19 mins away</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  heading: {
    color:'white',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10,
  },
  card: {
    marginHorizontal: 20,
    marginVertical: 5,
  },
  fancyCard: {
    backgroundColor: 'white',
    borderRadius:10
  },
  cardImage: {
    height: 250,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },
  cardBody: {
    padding: 20,
    gap: 10,
  },
  cardTitle: {
    color:'#F28500',
    fontWeight:'bold',
    fontSize:28,
  },
  cardLabel: {
    color:'black',
    textDecorationLine:'underline',
    textDecorationColor:"black",
    fontSize:15,
    fontWeight:'bold'
  },
  cardDesc: {
    color:'black'
  },
  cardFooter:{
    fontSize:15,
    marginTop:10
  }
});
