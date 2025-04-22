import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import * as mockApi from '../api/mockApi';

export default function ProfileScreen({ navigation }: any) {
  const [profile, setProfile] = useState<mockApi.User | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await mockApi.getProfile();
      setProfile(data);
    };
    fetchProfile();
  }, []);

  if (!profile) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white', padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Perfil</Text>
      <Text style={{ marginBottom: 8 }}><Text style={{ fontWeight: 'bold' }}>Nome:</Text> {profile.name}</Text>
      <Text style={{ marginBottom: 8 }}><Text style={{ fontWeight: 'bold' }}>Email:</Text> {profile.email}</Text>
      <Text style={{ marginBottom: 8 }}><Text style={{ fontWeight: 'bold' }}>Telefone:</Text> {profile.phone}</Text>
      <Text style={{ marginBottom: 16 }}><Text style={{ fontWeight: 'bold' }}>Resumo:</Text> {profile.resume}</Text>
      <Button title="Editar Currículo" onPress={() => navigation.navigate('EditResume')} />
    </ScrollView>
  );
}
