import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, ScrollView } from 'react-native';
import * as mockApi from '../api/mockApi';

export default function EditResumeScreen({ navigation }) {
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
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-3xl font-bold mb-4">Editar Currículo</Text>
      <TextInput
        multiline
        numberOfLines={10}
        value={resume}
        onChangeText={setResume}
        className="border border-gray-300 rounded p-2 mb-4 text-base"
        style={{ textAlignVertical: 'top' }}
      />
      <Button title="Salvar" onPress={handleSave} />
    </ScrollView>
  );
}
