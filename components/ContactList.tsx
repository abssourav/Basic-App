import { StyleSheet, Text, View ,Image, ScrollView} from 'react-native'
import React from 'react'

const ContactList = () => {

    const contacts = [
        {
          uid: 1,
          name: 'Hitesh Choudhary',
          status: 'Just an extra ordinary teacher',
          imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
          uid: 2,
          name: 'Anurag Tiwari',
          status: 'I ❤️ To Code and Teach!',
          imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
          uid: 3,
          name: 'Sanket Singh',
          status: 'Making your GPay smooth',
          imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
          uid: 4,
          name: 'Anirudh Jwala',
          status: 'Building secure Digital banks',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
      ];

  return (
    <View>
      <Text style={styles.heading}>Contact List: </Text>
      <View >
        {
            contacts.map(({uid,name,status,imageUrl})=> (
                <View key={uid} style={styles.contactContainer}>
                    <Image
                source={{
                    uri: imageUrl
                    }}
                    alt='profile pic'
                    style={styles.img}
                />

                <View style={styles.contactRight}>
                    <Text style={styles.contactName}>{name}</Text>
                    <Text style={styles.contactDesc}>{status}</Text>
                </View>
                </View>
            ))
        }
      </View>
    </View>
  )
}

export default ContactList

const styles = StyleSheet.create({
    heading: {
        color:'white',
        fontSize: 25,
        fontWeight: 'bold',
        padding: 10,
      },
      contactContainer:{
        backgroundColor:'#8D3DAF',
        flexDirection:'row',
        marginHorizontal:10,
        padding:5,
        marginVertical:2,
        borderRadius:10

      },
      img:{
        height:60,
        width:60,
        borderRadius:  60/2,
        marginRight:15

      },
      contactRight:{
        justifyContent:'center'
      },
      contactName:{
        color:'white',
        fontWeight:'bold'
      },
      contactDesc:{
        color:'white',
        opacity:0.6
      }

})