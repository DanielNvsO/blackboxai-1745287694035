import React from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default function PasswordRecoveryScreen({ navigation }: any) {
  const handleRecover = () => {
    Alert.alert('Recuperação de senha', 'Instruções enviadas para seu e-mail.');
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>Recuperar Senha</Text>
      <TextInput
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        style={{ borderColor: '#ccc', borderWidth: 1, borderRadius: 4, width: '100%', padding: 8, marginBottom: 16 }}
      />
      <Button title="Enviar instruções" onPress={handleRecover} />
    </View>
  );
}
