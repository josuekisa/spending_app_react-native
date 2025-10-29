import { View, Text, ScrollView, Dimensions } from 'react-native';
import { React, useMemo } from 'react';
import TabNavigator from '../components/TabNavigator';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import { useExpenses } from '../context/ExpenseContext';

const Graph = () => {
  const { totalByCategory, expenses } = useExpenses();

  const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9C27B0'];
  const screenWidht = Dimensions.get('screen').width;
  const chartData = useMemo(() => {
    return Object.entries(totalByCategory || {}).map(([category, total], index) => ({
      name: category,
      population: parseFloat(total) || 0,
      color: COLORS[index % COLORS.length],
      legendFontColor: '#FFF',
      legendFontSize: 12,
    }));
  }, [totalByCategory]);
  return (
    <View className="flex-1 bg-gray-900">
      <ScrollView
        className="flex-1 "
        contentContainerStyle={{ alignItems: 'center', top: 100, paddingBottom: 100 }}>
        <View className="rounded-xl bg-gray-950 p-5">
          <LineChart
            data={{
              labels: ['Jan', 'Fév', 'Mar'],
              datasets: [{ data: [300, 450, 200] }],
            }}
            width={350}
            height={220}
            yAxisLabel="€"
            chartConfig={{
              backgroundGradientFrom: '#1E2923',
              backgroundGradientTo: '#08130D',
              color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            }}
          />
        </View>
        <View className="mt-5 rounded-xl bg-gray-950 p-5">
          {chartData.length === 0 ? (
            <Text className="text-gray-400">Aucune donnée disponible</Text>
          ) : (
            <PieChart
              data={chartData}
              width={360}
              height={250}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="10"
              center={[0, 0]}
              chartConfig={{
                backgroundGradientFrom: '#1E1E1E',
                backgroundGradientTo: '#1E1E1E',
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              }}
              absolute
            />
          )}
        </View>
      </ScrollView>
      <TabNavigator />
    </View>
  );
};

export default Graph;
