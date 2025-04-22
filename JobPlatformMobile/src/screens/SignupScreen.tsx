import React, { useState } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';

export default function SignupScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    Alert.alert('Cadastro', 'Cadastro realizado com sucesso (mock).');
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>Sign Up</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{ borderColor: '#ccc', borderWidth: 1, borderRadius: 4, width: '100%', padding: 8, marginBottom: 16 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderColor: '#ccc', borderWidth: 1, borderRadius: 4, width: '100%', padding: 8, marginBottom: 16 }}
      />
      <Button title="Sign Up" onPress={handleSignup} />
      <Button title="Back to Landing" onPress={() => navigation.goBack()} />
    </View>
  );
}
