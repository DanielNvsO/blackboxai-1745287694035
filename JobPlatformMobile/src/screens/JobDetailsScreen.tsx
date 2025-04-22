import React from 'react';
import { View, Text, Button, ScrollView, Alert } from 'react-native';

export default function JobDetailsScreen({ route, navigation }: any) {
  const { job } = route.params;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white', padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>{job.title}</Text>
      <Text style={{ fontSize: 18, color: '#666', marginBottom: 16 }}>{job.company} - {job.location}</Text>
      <Text style={{ marginBottom: 16 }}>
        Descrição da vaga: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Button title="Candidatar-se" onPress={() => Alert.alert('Candidatura enviada (mock)')} />
    </ScrollView>
  );
}
