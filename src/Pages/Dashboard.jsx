import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useExpenses } from '../context/ExpenseContext';
import TabNavigator from '../components/TabNavigator';

const Dashboard = () => {
  const { expenses, totalByCategory } = useExpenses();

  const categoryArray = Object.entries(totalByCategory).map(([category, total]) => ({
    category,
    total,
  }));

  return (
    <View className="flex-1    bg-gray-900">
      <ScrollView
        className=" flex-1 "
        contentContainerStyle={{
          top: 100,
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 100,
        }}>
        {/**1st card */}
        <View
          className=" w-[90%] rounded-xl bg-gray-950 p-4
      ">
          <View className="flex-row justify-between">
            <Text className="font-bold text-white ">Dépense récente</Text>
            <TouchableOpacity>
              <Text className="text-blue-600">Voir tout</Text>
            </TouchableOpacity>
          </View>
          <View className="my-4 h-[1px] w-full bg-gray-400" />
          <View className="">
            {expenses.map((e) => (
              <View className="mb-3  rounded-lg bg-gray-400 p-2" key={e.id}>
                <View className="flex-row justify-between ">
                  <Text className="text-white"> {e.description}</Text>

                  <Text className="text-red-500"> -{e.amount}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        {/** 2nd card */}
        <View className=" my-4 w-[90%] rounded-xl bg-gray-950 p-4">
          <View
            className=" 
      ">
            <Text className="text-xl font-semibold text-white">Category</Text>
            <View className="my-4 h-[1px] w-full bg-gray-400" />

            {categoryArray.length === 0 ? (
              <Text className="text-center text-white">Aucune catégorie pour l’instant</Text>
            ) : (
              categoryArray.map((cate) => (
                <View
                  className="mb-3  flex-row justify-between rounded-lg  p-2 text-white"
                  key={cate.category}>
                  <Text className="text-white">{cate.category}</Text>
                  <Text className="text-gray-400">{cate.total}</Text>
                </View>
              ))
            )}
          </View>

          {console.log(totalByCategory)}
        </View>
      </ScrollView>
      <TabNavigator />
    </View>
  );
};

export default Dashboard;
