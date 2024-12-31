import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

// Import the background image
const backgroundImage = require('../assets/loginImage.png'); // Replace with your image path

const SignupScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {/* Title */}
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Sign up to get started</Text>

        {/* Input Fields */}
        <TextInput
          placeholder="Name"
          style={styles.input}
          placeholderTextColor="#AAA"
        />
        <TextInput
          placeholder="Email Address"
          style={styles.input}
          placeholderTextColor="#AAA"
        />
        <TextInput
          placeholder="Phone Number"
          style={styles.input}
          placeholderTextColor="#AAA"
          keyboardType="phone-pad" // Set keyboard type to number pad
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#AAA"
        />

        {/* Signup Button */}
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)', // Add a semi-transparent overlay for readability
    width: '100%',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent background
    color: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'black',
  },
  signupButton: {
    backgroundColor: '#5E5CE6',
    paddingVertical: 16,
    paddingHorizontal: 80,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  signupButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  textButton: {
    marginTop: 20,
  },
  textButtonText: {
    color: 'black',
    fontSize: 14,
  },
 
});

export default SignupScreen;
