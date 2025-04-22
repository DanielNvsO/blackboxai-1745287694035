import React, { useState } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    Alert.alert('Cadastro', 'Cadastro realizado com sucesso (mock).');
    navigation.goBack();
  };

  return (
    <View className="flex-1 justify-center items-center bg-white p-4">
      <Text className="text-2xl font-bold mb-4">Sign Up</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="border border-gray-300 rounded w-full p-2 mb-4"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        className="border border-gray-300 rounded w-full p-2 mb-4"
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignup} />
      <Button title="Back to Landing" onPress={() => navigation.goBack()} />
    </View>
  );
}
