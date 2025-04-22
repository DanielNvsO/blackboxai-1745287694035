import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../screens/DashboardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditResumeScreen from '../screens/EditResumeScreen';
import MyApplicationsScreen from '../screens/MyApplicationsScreen';
import RecommendedJobsScreen from '../screens/RecommendedJobsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ApplicationHistoryScreen from '../screens/ApplicationHistoryScreen';
import MessagesScreen from '../screens/MessagesScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

export default function PrivateStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditResume" component={EditResumeScreen} options={{ title: 'Editar Currículo' }} />
      <Stack.Screen name="MyApplications" component={MyApplicationsScreen} options={{ title: 'Minhas Candidaturas' }} />
      <Stack.Screen name="RecommendedJobs" component={RecommendedJobsScreen} options={{ title: 'Vagas Recomendadas' }} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} options={{ title: 'Favoritas / Salvas' }} />
      <Stack.Screen name="ApplicationHistory" component={ApplicationHistoryScreen} options={{ title: 'Histórico de Candidaturas' }} />
      <Stack.Screen name="Messages" component={MessagesScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
