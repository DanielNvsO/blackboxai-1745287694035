import React from 'react';
import { View, Text, Button } from 'react-native';

export default function LandingScreen({ navigation }) {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-3xl font-bold mb-4">Welcome to Candidate App</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Sign Up" onPress={() => navigation.navigate('Signup')} />
      <Button title="Vagas Abertas" onPress={() => navigation.navigate('OpenJobs')} />
    </View>
  );
}
