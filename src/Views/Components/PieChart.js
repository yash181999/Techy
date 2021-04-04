import { Autorenew } from '@material-ui/icons'
import React from 'react'
import {VictoryContainer, VictoryPie } from 'victory'
import pieData from '../../peiData'

function PieChart() {
    return (
        <VictoryContainer
        style = {{height : '100%', width : '100%', marginRight :'20px', marginLeft :'auto'}}
     >

     <VictoryPie
      colorScale="blue"
             standalone={false}
             width={600}
             height={300}
             standalone={false}
             color = {'red'}
     innerRadius={40}
     data={pieData}
         />

     </VictoryContainer>
    
    )
}

export default PieChart
