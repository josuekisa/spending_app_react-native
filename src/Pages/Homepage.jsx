import { Pressable, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TabNavigator from '../components/TabNavigator';
import { useNavigation } from '@react-navigation/native';
import { useExpenses } from '../context/ExpenseContext';
import Dashboard from './Dashboard';
export default function HomePage() {
  const navigation = useNavigation();
  const { expenses } = useExpenses();
  return (
    <View className="flex-1  bg-gray-900 ">
      <ScrollView
        className="flex-1 pt-16"
        contentContainerStyle={{ top: 100, alignItems: 'center', paddingBottom: 100 }}>
        {/* gros container */}
        <View className="w-[90%] items-center">
          {/* bloc violet */}
          <View
            className="w-full items-center rounded-md p-6"
            style={{ backgroundColor: '#a736b9' }}>
            <Text className="text-xl font-bold text-red-300">Bienvenue ! 👋🏼</Text>
            <Text className="mb-4 text-white">Gérez vos dépenses grâce à cette app !</Text>
            <View className="flex-row">
              <TouchableOpacity
                onPress={() => navigation.navigate('Form')}
                className="mr-2 rounded-lg bg-white px-4 py-2">
                <Text className=" ml-4 text-[#a736b9]">+ Ajouter une dépense</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Dashboard')}
                className="rounded-lg bg-white px-4 py-2">
                <Text className="font-bold text-[#a736b9]">Tableau de bord</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* grid de 4 */}
          <View className="  mt-3 w-full flex-row flex-wrap justify-between gap-4 ">
            <View className=" w-[48%] items-center justify-center rounded-xl bg-gray-950 p-5">
              <Text>💰</Text>
              <Text className="font-bold text-white">Total dépensé</Text>
              <Text className="text-red-600">2807</Text>
              <Text className="text-xs text-gray-200">Ce mois-ci</Text>
            </View>
            <View className=" w-[48%] items-center justify-center rounded-xl bg-gray-950 p-5">
              <Text>💰</Text>
              <Text className="font-bold text-white">Total dépensé</Text>
              <Text className="text-red-600">2807</Text>
              <Text className="text-xs text-gray-200">Ce mois-ci</Text>
            </View>
            <View className=" w-[48%] items-center justify-center rounded-xl bg-gray-950 p-5">
              <Text>💰</Text>
              <Text className="font-bold text-white">Total dépensé</Text>
              <Text className="text-red-600">2807</Text>
              <Text className="text-xs text-gray-200">Ce mois-ci</Text>
            </View>
            <View className=" w-[48%] items-center justify-center rounded-xl bg-gray-950 p-5">
              <Text>💰</Text>
              <Text className="font-bold text-white">Total dépensé</Text>
              <Text className="text-red-600">2807</Text>
              <Text className="text-xs text-gray-200">Ce mois-ci</Text>
            </View>
          </View>
          {/** container activité recente */}
          <View className="mt-3 w-full rounded-xl bg-gray-950">
            <Text className="ml-3 mt-3 font-bold text-white"> ⚡️ Activité récente</Text>
            <View className="p-4">
              {expenses.slice(-3).map((e) => (
                <View className="mb-3  rounded-lg bg-gray-400 p-3" key={e.id}>
                  <View className="flex-row justify-between ">
                    <Text className="text-white"> {e.description}</Text>

                    <Text className="text-red-500"> -{e.amount}</Text>
                  </View>
                </View>
              ))}
              <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                <Text className="p-3 text-center text-blue-600 ">
                  Voir toutes les autres transactions{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <TabNavigator />
    </View>
  );
}
