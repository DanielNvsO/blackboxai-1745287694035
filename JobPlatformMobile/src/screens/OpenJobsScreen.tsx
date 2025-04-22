import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import * as mockApi from '../api/mockApi';

export default function OpenJobsScreen({ navigation }: any) {
  const [search, setSearch] = useState('');
  const [jobs, setJobs] = useState<mockApi.Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<mockApi.Job[]>([]);

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
      <TextInput
        placeholder="Pesquisar vagas"
        value={search}
        onChangeText={setSearch}
        style={{ borderColor: '#ccc', borderWidth: 1, borderRadius: 4, padding: 8, marginBottom: 16 }}
      />
      <FlatList
        data={filteredJobs}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
