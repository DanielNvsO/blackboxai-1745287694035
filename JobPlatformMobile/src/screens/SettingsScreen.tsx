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
    <ScrollView style={{ flex: 1, backgroundColor: 'white', padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Configurações</Text>
      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Alertas</Text>
        <Switch value={alertsEnabled} onValueChange={setAlertsEnabled} />
      </View>
      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Alterar Senha</Text>
        <Switch value={changePassword} onValueChange={setChangePassword} />
        {changePassword && (
          <>
            <TextInput
              placeholder="Senha atual"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={{ borderColor: '#ccc', borderWidth: 1, borderRadius: 4, padding: 8, marginBottom: 8 }}
            />
            <TextInput
              placeholder="Nova senha"
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry
              style={{ borderColor: '#ccc', borderWidth: 1, borderRadius: 4, padding: 8, marginBottom: 8 }}
            />
          </>
        )}
      </View>
      <Button title="Salvar" onPress={handleSave} />
    </ScrollView>
  );
}
