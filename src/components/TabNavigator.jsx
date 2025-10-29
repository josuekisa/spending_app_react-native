import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const TabNavigator = () => {
  const navigation = useNavigation();

  return (
    <View className="  absolute bottom-0 left-0 right-0 ">
      <View className=" flex-row items-center justify-around gap-4 border-gray-700 bg-gray-950 py-6 ">
        <TouchableOpacity onPress={() => navigation.navigate('Homepage')} className=" items-center">
          <Text className="mb-3 text-xl">🏠</Text>
          <Text className=" text-xs text-gray-200">Accueil</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} className="items-center">
          <Text className="mb-3 text-xl">📊</Text>
          <Text className="text-xs text-gray-200">Tableau</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Form')} className="items-center">
          <Text className="mb-3 text-xl">✚</Text>
          <Text className="text-xs text-gray-200">Ajouter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Graph')} className="items-center">
          <Text className="mb-3 text-xl">📈</Text>
          <Text className="text-xs text-gray-200 ">Graphiques</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TabNavigator;
