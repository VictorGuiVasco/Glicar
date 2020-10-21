import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

export default function LineChart() {
  return (
    <View style={styles.container} >
      <VictoryChart width={350} height={250} domainPadding={100} name='CHO' theme={VictoryTheme.material}>
      <Text style={styles.title} >CHO</Text>
        <VictoryBar 
          style={{
            data: { fill: "#42AEFF" },
            parent: { border: "1px solid #ccc" }
          }}
          data={[
            { x: '01/01', y: '19.1g' },
            { x: '01/02', y: '47.5g' },
          ]}
          labels={({ datum }) => datum.y}
        />
      </VictoryChart>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#6DDDD0',
    marginBottom: 5
  },

  title: {
    marginLeft: 12,
    paddingTop: 12,
    fontWeight: 'bold',
  },
});