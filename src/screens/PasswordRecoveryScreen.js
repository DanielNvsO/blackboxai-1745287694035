import React from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default function PasswordRecoveryScreen({ navigation }) {
  const handleRecover = () => {
    Alert.alert('Recuperação de senha', 'Instruções enviadas para seu e-mail.');
    navigation.goBack();
  };

  return (
    <View className="flex-1 justify-center items-center p-4 bg-white">
      <Text className="text-2xl font-bold mb-4">Recuperar Senha</Text>
      <TextInput
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        className="border border-gray-300 rounded w-full p-2 mb-4"
      />
      <Button title="Enviar instruções" onPress={handleRecover} />
    </View>
  );
}
