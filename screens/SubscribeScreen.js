import * as React from 'react';
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import { validateEmail } from '../utils';

const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [email, onChangeEmail] = React.useState('')

  return (<ScrollView style={styles.container}>
    <Image source={require('../assets/little-lemon-logo-grey.png')} style={styles.logo} resizeMode='contain' />
    <Text style={styles.regularText}>
      Subscribe to our newsletter for our latest delicious recipes!
    </Text>
    <TextInput
      value={email}
      onChangeText={onChangeEmail}
      placeholder='email address'
      style={styles.input}
      keyboardType='email-address'
      clearButtonMode='always'
    />
    <Pressable
      disabled={validateEmail(email) ? false : true}
      style={[styles.button, validateEmail(email) ? { backgroundColor: '#32423d' } : { backgroundColor: 'gray' }]}
      onPress={() => Alert.alert('Thank you ', `for subscribing, stay tuned ${email}`)

      }>
      <Text style={styles.textInput}>
        Subscribe
      </Text>

    </Pressable>

  </ScrollView >
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginVertical: 45,

  },
  regularText: {
    textAlign: 'center',
    fontSize: 20,
    paddingHorizontal: 27
  },
  input: {
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 2,
    height: 46,
    marginVertical: 27,
    marginHorizontal: 28,
    paddingLeft: 24,
  },
  button: {
    height: 46,
    marginHorizontal: 27,
    borderRadius: 10,
    justifyContent: 'center'
  },
  textInput: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 18

  }
}
)
