import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import * as mockApi from '../api/mockApi';

export default function RecommendedJobsScreen({ navigation }) {
  const [recommendedJobs, setRecommendedJobs] = useState([]);

  useEffect(() => {
    const fetchRecommendedJobs = async () => {
      const data = await mockApi.getRecommendedJobs();
      setRecommendedJobs(data);
    };
    fetchRecommendedJobs();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      className="p-4 border-b border-gray-200"
      onPress={() => navigation.navigate('JobDetails', { job: item })}
    >
      <Text className="text-lg font-semibold">{item.title}</Text>
      <Text className="text-gray-600">{item.company} - {item.location}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-3xl font-bold mb-4">Vagas Recomendadas</Text>
      <FlatList
        data={recommendedJobs}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
