import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";

export default function LineChart() {
  return (
    <View style={styles.container} >
      <VictoryChart width={350} height={250} domainPadding={25} theme={VictoryTheme.material}>
      <Text style={styles.title} >Glicemia</Text>
        <VictoryLine
          style={{
            data: { stroke: "#42AEFF" },
          }}
          data={[
            { x: '01/01', y: 99 },
            { x: '01/02', y: 115 },
            { x: '01/03', y: 100 },
            { x: '01/04', y: 100 },
            { x: '01/05', y: 89 },
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