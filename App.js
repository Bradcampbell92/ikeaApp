import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';

export default class App extends React.Component {

  componentWillMount()
  {
    var config = {
      apiKey: "AIzaSyDVPuGlyGH1qnCsSqwbeIBeseEfgHmwgiA",
      authDomain: "php2teambs.firebaseapp.com",
      databaseURL: "https://php2teambs.firebaseio.com",
      projectId: "php2teambs",
      storageBucket: "php2teambs.appspot.com"
    };
    firebase.initializeApp(config);

    console.log(firebase);

    firebase.database().ref('users/001').set(
      {
        name: 'Brad Campbell',
        age: 21
      }
    ).then(()=>{
      console.log('Inserted');
    }).catch((error)=>{
      console.log(error);
    });

    firebase.database().ref('users').once('value', (data)=>{
      console.log(data.toJSON());
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app! s</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
