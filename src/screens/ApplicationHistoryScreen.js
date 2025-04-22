import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import * as mockApi from '../api/mockApi';

export default function ApplicationHistoryScreen() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const data = await mockApi.getApplicationHistory();
      setHistory(data);
    };
    fetchHistory();
  }, []);

  const renderItem = ({ item }) => (
    <View className="p-4 border-b border-gray-200">
      <Text className="text-lg font-semibold">{item.jobTitle}</Text>
      <Text>Data: {item.date}</Text>
      <Text>Status: {item.status}</Text>
    </View>
  );

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-3xl font-bold mb-4">Histórico de Candidaturas</Text>
      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
