import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import * as mockApi from '../api/mockApi';

export default function RecommendedJobsScreen({ navigation }: any) {
  const [recommendedJobs, setRecommendedJobs] = useState<mockApi.Job[]>([]);

  useEffect(() => {
    const fetchRecommendedJobs = async () => {
      const data = await mockApi.getRecommendedJobs();
      setRecommendedJobs(data);
    };
    fetchRecommendedJobs();
  }, []);

  const renderItem = ({ item }: { item: mockApi.Job }) => (
    <TouchableOpacity
      style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
      onPress={() => navigation.navigate('JobDetails', { job: item })}
    >
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
      <Text style={{ color: '#666' }}>{item.company} - {item.location}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Vagas Recomendadas</Text>
      <FlatList
        data={recommendedJobs}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
