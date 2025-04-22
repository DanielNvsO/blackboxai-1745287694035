import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import * as mockApi from '../api/mockApi';

export default function ApplicationHistoryScreen() {
  const [history, setHistory] = useState<(mockApi.Application & { date?: string })[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const data = await mockApi.getApplicationHistory();
      setHistory(data);
    };
    fetchHistory();
  }, []);

  const renderItem = ({ item }: { item: mockApi.Application & { date?: string } }) => (
    <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.jobTitle}</Text>
      <Text>Data: {item.date ?? 'N/A'}</Text>
      <Text>Status: {item.status}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Histórico de Candidaturas</Text>
      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
