import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import * as mockApi from '../api/mockApi';

export default function ProfileScreen({ navigation }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await mockApi.getProfile();
      setProfile(data);
    };
    fetchProfile();
  }, []);

  if (!profile) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-3xl font-bold mb-4">Perfil</Text>
      <Text className="mb-2"><Text className="font-bold">Nome:</Text> {profile.name}</Text>
      <Text className="mb-2"><Text className="font-bold">Email:</Text> {profile.email}</Text>
      <Text className="mb-2"><Text className="font-bold">Telefone:</Text> {profile.phone}</Text>
      <Text className="mb-4"><Text className="font-bold">Resumo:</Text> {profile.resume}</Text>
      <Button title="Editar Currículo" onPress={() => navigation.navigate('EditResume')} />
    </ScrollView>
  );
}
