import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import './global.css';
import Form from './src/Pages/Form';
import Homepage from './src/Pages/Homepage';
import { ExpenseProvider } from './src/context/ExpenseContext';

export default function App() {
  return (
    <ExpenseProvider>
      <View className="flex-1 ">
        <Form />
      </View>
    </ExpenseProvider>
  );
}
