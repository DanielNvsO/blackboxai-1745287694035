import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import * as mockApi from '../api/mockApi';

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const data = await mockApi.getNotifications();
      setNotifications(data);
    };
    fetchNotifications();
  }, []);

  const renderItem = ({ item }) => (
    <View className="p-4 border-b border-gray-200">
      <Text>{item.message}</Text>
    </View>
  );

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-3xl font-bold mb-4">Notificações</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
