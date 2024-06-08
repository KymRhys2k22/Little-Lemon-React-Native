import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/little-lemon-logo.png')}
        resizeMode='contain'
      />
      <Text style={styles.text}>
        Little Lemon your local Mediterranean Bistro
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Subscription')}
      >
        <Text style={styles.textButton}>
          Newsletter
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  logo: {
    height: 300,
    width: 300,
    alignSelf: 'center'

  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 130,
    marginHorizontal: 29

  },
  button: {
    backgroundColor: '#32423d',
    padding: 12,
    margin: 27,
    borderRadius: 10

  },
  textButton: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff'
  }
})
