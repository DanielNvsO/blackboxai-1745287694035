import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from '../screens/LandingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import PasswordRecoveryScreen from '../screens/PasswordRecoveryScreen';
import OpenJobsScreen from '../screens/OpenJobsScreen';
import JobDetailsScreen from '../screens/JobDetailsScreen';

const Stack = createNativeStackNavigator();

export default function PublicStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="PasswordRecovery" component={PasswordRecoveryScreen} options={{ title: 'Recuperar Senha' }} />
      <Stack.Screen name="OpenJobs" component={OpenJobsScreen} options={{ title: 'Vagas Abertas' }} />
      <Stack.Screen name="JobDetails" component={JobDetailsScreen} options={{ title: 'Detalhes da Vaga' }} />
    </Stack.Navigator>
  );
}
