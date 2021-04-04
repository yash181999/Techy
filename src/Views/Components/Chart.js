
import React from 'react'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from 'victory'
import data from '../../chartData'

function Chart() {
  return (
    <VictoryChart
     
    // domainPadding will add space to each side of VictoryBar to
    // prevent it from overlapping the axis
    domainPadding={40}
   
    
    style = {{backgroundColor : 'red'}}
    
  >
    <VictoryAxis
      // tickValues specifies both the number of ticks and where
      // they are placed on the axis
      tickValues={[1, 2, 3, 4]}

      style={{
        axis: {stroke: "#756f6a"},
        axisLabel: {fontSize: 20, padding: 30, fontFamily: 'Roboto'},
        
        }}
      
      tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
    />
    <VictoryAxis
      dependentAxis
      // tickFormat specifies how ticks should be displayed
      tickFormat={(x) => (`${x / 1000}`)}
    />
    <VictoryBar
      style = {
        {
          data: { fill: "#7d72fe", width: 18,},
          
        }
      }
      data={data}
      x="quarter"
      y="earnings"
    />
  </VictoryChart>
  )
}

export default Chart
