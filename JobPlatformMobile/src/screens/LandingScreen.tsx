import React from 'react';
import { View, Text, Button } from 'react-native';

export default function LandingScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Welcome to Candidate App</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Sign Up" onPress={() => navigation.navigate('Signup')} />
      <Button title="Vagas Abertas" onPress={() => navigation.navigate('OpenJobs')} />
    </View>
  );
}
