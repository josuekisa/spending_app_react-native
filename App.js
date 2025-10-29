import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import './global.css';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Form from './src/Pages/Form';
import Homepage from './src/Pages/Homepage';
import { ExpenseProvider } from './src/context/ExpenseContext';
import Dashboard from './src/Pages/Dashboard';
import Graph from './src/Pages/Graph';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <ExpenseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Homepage" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Homepage" component={Homepage} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Form" component={Form} />
          <Stack.Screen name="Graph" component={Graph} />
        </Stack.Navigator>
      </NavigationContainer>
    </ExpenseProvider>
  );
}
