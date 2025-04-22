import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import * as mockApi from '../api/mockApi';

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState<mockApi.Notification[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const data = await mockApi.getNotifications();
      setNotifications(data);
    };
    fetchNotifications();
  }, []);

  const renderItem = ({ item }: { item: mockApi.Notification }) => (
    <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>{item.message}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Notificações</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
