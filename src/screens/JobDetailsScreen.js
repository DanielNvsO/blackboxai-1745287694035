import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';

export default function JobDetailsScreen({ route, navigation }) {
  const { job } = route.params;

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-3xl font-bold mb-2">{job.title}</Text>
      <Text className="text-lg text-gray-700 mb-4">{job.company} - {job.location}</Text>
      <Text className="mb-4">
        Descrição da vaga: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Button title="Candidatar-se" onPress={() => alert('Candidatura enviada (mock)')} />
    </ScrollView>
  );
}
