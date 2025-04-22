import React, { useState, useContext } from 'react';
import { View, Text, Button, ActivityIndicator, TextInput } from 'react-native';
import { AuthContext } from '../../App';
import * as mockApi from '../api/mockApi';

export default function LoginScreen({ navigation }) {
  const { signIn } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    const result = await mockApi.login(username, password);
    setLoading(false);
    if (result) {
      signIn(result);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-white p-4">
      <Text className="text-2xl font-bold mb-4">Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        className="border border-gray-300 rounded w-full p-2 mb-4"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        className="border border-gray-300 rounded w-full p-2 mb-4"
        secureTextEntry
      />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Button title="Login" onPress={handleLogin} />
      )}
      <Button title="Back to Landing" onPress={() => navigation.goBack()} />
    </View>
  );
}
