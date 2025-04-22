import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, ScrollView } from 'react-native';
import * as mockApi from '../api/mockApi';

export default function EditResumeScreen({ navigation }: any) {
  const [resume, setResume] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await mockApi.getProfile();
      setResume(profile.resume);
    };
    fetchProfile();
  }, []);

  const handleSave = async () => {
    const result = await mockApi.saveResume(resume);
    if (result.success) {
      Alert.alert('Salvar', 'Currículo salvo com sucesso (mock).');
      navigation.goBack();
    } else {
      Alert.alert('Erro', 'Falha ao salvar currículo.');
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white', padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Editar Currículo</Text>
      <TextInput
        multiline
        numberOfLines={10}
        value={resume}
        onChangeText={setResume}
        style={{ borderColor: '#ccc', borderWidth: 1, borderRadius: 4, padding: 8, marginBottom: 16, textAlignVertical: 'top' }}
      />
      <Button title="Salvar" onPress={handleSave} />
    </ScrollView>
  );
}
