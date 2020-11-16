import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { VictoryLine, VictoryChart, VictoryZoomContainer } from "victory-native";

import api from '../../services/api'

export default function App() {

  const [data, setData] = useState([])

  async function loadData() {
    const response = await api.get('/glicemia');

    setData(response.data)
    console.log(data)
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      
      <Text style={styles.title} >Glicemia</Text>
      <VictoryChart
        width={390}
        height={250}
        scale={{ x: "time" }}
        domainPadding={{ y: [0, 25] }}
        containerComponent={
          <VictoryZoomContainer responsive={false}
            zoomDimension="x"
          />
        }
      >
        <VictoryLine
          style={{
            data: { stroke: "#42AEFF" }
          }}
          data={data}
          x='date' y='glic'
          labels={({ datum }) => datum.y}
        />
      </VictoryChart>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#6DDDD0',
    marginBottom: 5,
  },

  title: {
    paddingLeft: 12,
    paddingTop: 12,
    fontWeight: 'bold',
  },
});