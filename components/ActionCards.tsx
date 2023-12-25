import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import React from 'react';

const ActionCards = (): JSX.Element => {
  const openWeb = (url: string) => {
    Linking.openURL(url);
  };
  return (
    <View>
      <Text style={styles.heading}>Blog Card</Text>

      <View style={[styles.card, styles.actionCard]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>How To Start Coding</Text>
        </View>
        <Image
          style={styles.cardImage}
          src="https://images.pexels.com/photos/7775636/pexels-photo-7775636.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        />
        <View style={styles.cardBody}>
          <Text numberOfLines={3} style={styles.cardDesc}>
            In this video series, I hope I have been able to present the topic
            of HTML in a simple and easy way. If you can learn anything from my
            videos, then definitely thank me by sharing my videos with everyone.
            It is your responsibility to deliver my hard-earned work to
            everyone.
          </Text>
          <View style={styles.cardFooter}>
            <TouchableOpacity
              onPress={() =>
                openWeb(
                  'https://www.youtube.com/playlist?list=PLgH5QX0i9K3oHBr5dsumGwjUxByN5Lnw3',
                )
              }
              style={styles.linkBtn}>
              <Text style={styles.btnText}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                 openWeb(
                    'https://www.facebook.com/studywithanis'
                    )
                }
              style={styles.linkBtn}>
              <Text style={styles.btnText}>Follow Him</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ActionCards;

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10,
  },
  card: {
    marginHorizontal: 20,
    marginVertical: 5,
    height: 470,
  },
  actionCard: {
    backgroundColor: '#DE701F',
    borderRadius: 10,
  },
  headerContainer: {
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardImage: {
    height: 250,
  },
  cardBody: {
    padding: 20,
    gap: 10,
  },
  cardDesc: {
    color: 'white',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 5,
  },
  linkBtn: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
    color: 'black',
    fontWeight: 'bold',
  },
});
