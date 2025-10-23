import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import Homepage from './src/Pages/Homepage';
import TabNavigator from './src/components/TabNavigator';
import './global.css';
import Form from './src/Pages/Form';

export default function App() {
  return (
    <View className="flex-1 ">
      <Homepage />
    </View>
  );
}
