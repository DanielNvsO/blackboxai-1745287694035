import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import * as mockApi from '../api/mockApi';

export default function OpenJobsScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await mockApi.getJobs();
      setJobs(data);
      setFilteredJobs(data);
    };
    fetchJobs();
  }, []);

  useEffect(() => {
    if (search === '') {
      setFilteredJobs(jobs);
    } else {
      setFilteredJobs(
        jobs.filter((job) =>
          job.title.toLowerCase().includes(search.toLowerCase()) ||
          job.company.toLowerCase().includes(search.toLowerCase()) ||
          job.location.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, jobs]);

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
      <TextInput
        placeholder="Pesquisar vagas"
        value={search}
        onChangeText={setSearch}
        className="border border-gray-300 rounded p-2 mb-4"
      />
      <FlatList
        data={filteredJobs}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
