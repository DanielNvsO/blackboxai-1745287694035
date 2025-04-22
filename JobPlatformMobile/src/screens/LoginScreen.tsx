import React, { useState, useContext } from 'react';
import { View, Text, Button, ActivityIndicator, TextInput, Alert } from 'react-native';
import { AuthContext } from '../../App';
import * as mockApi from '../api/mockApi';

export default function LoginScreen({ navigation }: any) {
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
      Alert.alert('Invalid credentials');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{ borderColor: '#ccc', borderWidth: 1, borderRadius: 4, width: '100%', padding: 8, marginBottom: 16 }}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={{ borderColor: '#ccc', borderWidth: 1, borderRadius: 4, width: '100%', padding: 8, marginBottom: 16 }}
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
