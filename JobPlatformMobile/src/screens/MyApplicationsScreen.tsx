import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import * as mockApi from '../api/mockApi';

export default function MyApplicationsScreen() {
  const [applications, setApplications] = useState<mockApi.Application[]>([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const data = await mockApi.getApplications();
      setApplications(data);
    };
    fetchApplications();
  }, []);

  const renderItem = ({ item }: { item: mockApi.Application }) => (
    <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.jobTitle}</Text>
      <Text>Status: {item.status}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Minhas Candidaturas</Text>
      <FlatList
        data={applications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
