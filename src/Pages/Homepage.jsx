import { Pressable, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TabNavigator from '../components/TabNavigator';

export default function HomePage() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-900 pt-16 ">
      {/* gros container */}
      <View className="w-[90%] items-center">
        {/* bloc violet */}
        <View className="w-full items-center rounded-md p-6" style={{ backgroundColor: '#a736b9' }}>
          <Text className="text-xl font-bold text-red-300">Bienvenue ! 👋🏼</Text>
          <Text className="mb-4 text-white">Gérez vos dépenses grâce à cette app !</Text>
          <View className="flex-row">
            <TouchableOpacity className="mr-2 rounded-lg bg-white px-4 py-2">
              <Text className=" ml-4 text-[#a736b9]">+ Ajouter une dépense</Text>
            </TouchableOpacity>
            <TouchableOpacity className="rounded-lg bg-white px-4 py-2">
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
        <View className="w-full bg-gray-950">
          <Text className="font-bold text-white">
            ⚡️ Activité récenteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
          </Text>
        </View>
      </View>

      <TabNavigator />
    </View>
  );
}
