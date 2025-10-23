import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const TabNavigator = () => {
  return (
    <View className="  absolute bottom-0 left-0 right-0 ">
      <View className=" flex-row items-center justify-around gap-4 border-gray-700 bg-gray-950 py-6 ">
        <TouchableOpacity className=" items-center">
          <Text className="mb-3 text-xl">🏠</Text>
          <Text className=" text-xs text-gray-200">Accueil</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Text className="mb-3 text-xl">📊</Text>
          <Text className="text-xs text-gray-200">Tableau</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Text className="mb-3 text-xl">✚</Text>
          <Text className="text-xs text-gray-200">Ajouter</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Text className="mb-3 text-xl">📈</Text>
          <Text className="text-xs text-gray-200 ">Graphiques</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TabNavigator;
