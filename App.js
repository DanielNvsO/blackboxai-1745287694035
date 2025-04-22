import React, { useState, useEffect, createContext, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PublicStack from './src/navigation/PublicStack';
import PrivateStack from './src/navigation/PrivateStack';
import { View, ActivityIndicator } from 'react-native';

// Contexts
const AuthContext = createContext();

export { AuthContext };

export default function App() {
  const [state, setState] = useState({
    isLoading: true,
    isSignout: false,
    userToken: null,
    user: null,
  });

  useEffect(() => {
    // Simulate fetching token from storage
    setTimeout(() => {
      setState({ ...state, isLoading: false });
    }, 1000);
  }, []);

  const authContext = {
    signIn: async (data) => {
      setState({
        ...state,
        isSignout: false,
        userToken: data.token,
        user: data.user,
      });
    },
    signOut: async () => {
      setState({
        ...state,
        isSignout: true,
        userToken: null,
        user: null,
      });
    },
    user: state.user,
  };

  if (state.isLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {state.userToken == null ? <PublicStack /> : <PrivateStack />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
