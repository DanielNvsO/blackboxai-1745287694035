import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import * as mockApi from '../api/mockApi';

export default function MyApplicationsScreen() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const data = await mockApi.getApplications();
      setApplications(data);
    };
    fetchApplications();
  }, []);

  const renderItem = ({ item }) => (
    <View className="p-4 border-b border-gray-200">
      <Text className="text-lg font-semibold">{item.jobTitle}</Text>
      <Text>Status: {item.status}</Text>
    </View>
  );

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-3xl font-bold mb-4">Minhas Candidaturas</Text>
      <FlatList
        data={applications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
