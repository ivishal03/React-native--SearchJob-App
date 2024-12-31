import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Import the image
const imageFirstScreen = require('../assets/imageFirstScreen.png'); // Ensure the path is correct

const FirstScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Your search for the next dream job is over{' '}
        <Text style={styles.emoji}>🚀</Text>
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoginScreen')} // Navigate to LoginScreen
      >
        <Text style={styles.buttonText}>Start Searching →</Text>
      </TouchableOpacity>

      <View style={styles.companiesContainer}>
        <Image
          source={imageFirstScreen} // Image restored
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    paddingHorizontal: 20,
  },
  title: {
    marginTop:50,
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  emoji: {
    fontSize: 28,
  },
  button: {
    backgroundColor: '#5E5CE6',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    marginBottom: 20, // Reduced margin to align better with the image
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  companiesContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    marginTop:95,
    width: 500,
    height: 450,
  },
});

export default FirstScreen;
