import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import TabNavigator from '../components/TabNavigator';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';

import { useExpenses } from '../context/ExpenseContext';
const Form = () => {
  const { addExpense, expenses } = useExpenses();

  const [formData, setFormData] = useState({
    amount: '',
    description: '',
    category: '',
    date: '',
  });

  const handleSubmit = () => {
    const newExpense = {
      id: uuid.v4(),
      amount: parseFloat(formData.amount),
      description: formData.description,
      category: formData.category,
      date: formData.date,
    };
    addExpense(newExpense);
    setFormData({
      amount: '',
      description: '',
      category: '',
      date: '',
    });
  };
  const navigation = useNavigation();
  return (
    <View className="rounded- flex-1 items-center justify-center bg-gray-900 p-6">
      {/**  form*/}
      <View className="w-[95%] items-center rounded-xl bg-gray-950 p-6">
        <Text className="mb-6 text-xl font-bold text-white">Ajouter une dépense</Text>

        <TextInput
          value={formData.amount}
          onChangeText={(text) => setFormData({ ...formData, amount: text })}
          keyboardType="number-pad"
          placeholder="Montant(€)"
          className="mb-4 w-full rounded-lg bg-gray-800 p-4 text-white"></TextInput>
        <TextInput
          onChangeText={(text) => setFormData({ ...formData, description: text })}
          value={formData.description}
          placeholder="Ex:KFC"
          className="mb-4 w-full rounded-lg bg-gray-800 p-4 text-white"
        />
        <TextInput
          onChangeText={(text) => setFormData({ ...formData, category: text })}
          value={formData.category}
          placeholder="Category"
          className="mb-4 w-full rounded-lg bg-gray-800 p-4 text-white"
        />
        <TextInput
          value={formData.date}
          onChangeText={(text) => setFormData({ ...formData, date: text })}
          placeholder="Nom de la dépense"
          className="mb-4 w-full rounded-lg bg-gray-800 p-4 text-white"
        />
        <TouchableOpacity
          className=" mb-3 w-full rounded-md bg-blue-700 p-4 "
          onPress={() => handleSubmit()}>
          <Text className="text-center text-white ">Enregistrer la dépense </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="w-full rounded-md bg-gray-800 p-4"
          onPress={() => handleSubmit()}>
          <Text className="text-center text-white">Annuler</Text>
        </TouchableOpacity>
      </View>

      <View></View>
      <TabNavigator />
    </View>
  );
};

export default Form;
