import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import * as mockApi from '../api/mockApi';

export default function FavoritesScreen({ navigation }: any) {
  const [favorites, setFavorites] = useState<mockApi.Job[]>([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const data = await mockApi.getFavorites();
      setFavorites(data);
    };
    fetchFavorites();
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
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Favoritas / Salvas</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
