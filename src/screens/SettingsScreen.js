import React, { useState } from 'react';
import { View, Text, Switch, Button, TextInput, Alert, ScrollView } from 'react-native';

export default function SettingsScreen() {
  const [changePassword, setChangePassword] = useState(false);
  const [alertsEnabled, setAlertsEnabled] = useState(true);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSave = () => {
    Alert.alert('Configurações', 'Configurações salvas com sucesso (mock).');
  };

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-3xl font-bold mb-4">Configurações</Text>
      <View className="mb-4">
        <Text className="text-lg font-semibold mb-2">Alertas</Text>
        <Switch value={alertsEnabled} onValueChange={setAlertsEnabled} />
      </View>
      <View className="mb-4">
        <Text className="text-lg font-semibold mb-2">Alterar Senha</Text>
        <Switch value={changePassword} onValueChange={setChangePassword} />
        {changePassword && (
          <>
            <TextInput
              placeholder="Senha atual"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              className="border border-gray-300 rounded p-2 mb-2"
            />
            <TextInput
              placeholder="Nova senha"
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry
              className="border border-gray-300 rounded p-2 mb-2"
            />
          </>
        )}
      </View>
      <Button title="Salvar" onPress={handleSave} />
    </ScrollView>
  );
}
