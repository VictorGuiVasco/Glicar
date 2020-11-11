import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { VictoryLine, VictoryChart, VictoryAxis, VictoryZoomContainer, VictoryBrushContainer } from "victory-native";

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  handleZoom(domain) {
    this.setState({ selectedDomain: domain });
  }

  handleBrush(domain) {
    this.setState({ zoomDomain: domain });
  }

  render() {
    return (
      <View style={styles.container}>
        <VictoryChart
          width={380}
          height={250}
          scale={{ x: "time" }}
          containerComponent={
            <VictoryZoomContainer responsive={false}
              zoomDimension="x"
              zoomDomain={this.state.zoomDomain}
              onZoomDomainChange={this.handleZoom.bind(this)}
            />
          }
        >
          <VictoryLine
            style={{
              data: { stroke: "#42AEFF" }
            }}
            data={[
              { x: new Date(1982, 1, 1), y: 130 },
              { x: new Date(1987, 1, 1), y: 257 },
              { x: new Date(1993, 1, 1), y: 345 },
              { x: new Date(1997, 1, 1), y: 515 },
              { x: new Date(2001, 1, 1), y: 132 },
              { x: new Date(2005, 1, 1), y: 305 },
              { x: new Date(2011, 1, 1), y: 270 },
              { x: new Date(2015, 1, 1), y: 470 }
            ]}
          />


        </VictoryChart>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#6DDDD0',
    marginBottom: 5,
    marginHorizontal: '5%',
  },

  title: {
    paddingLeft: 12,
    paddingTop: 12,
    fontWeight: 'bold',
  },
});