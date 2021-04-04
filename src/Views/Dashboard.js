
import React from 'react'
import { useGlobalContext } from '../context';
import Chart from './Components/Chart';
import Navbar from './Components/Navbar';
import './Dashboard.css'

import data from '../chartData';
import PieChart from './Components/PieChart';
import pieData from '../peiData';
import { Card } from '@material-ui/core';
import { VictoryContainer, VictoryPie } from 'victory';



function Dashboard() {

 

    

    const {isSidebarOpen, openSidebar} = useGlobalContext();




    return (
        <div className={isSidebarOpen ? 'dashboard-with-sidebar dashboard': 'dashboard'}>
           <Navbar title={'Dashboard'}  className='navbar'/>
           <div className='dashboard-center'>

           <div className='task-cardContainer'>
                    <Card style= {{backgroundColor: "#FF6666", color: 'white'}} className='task-card'>
                        <h4>Total Tasks Created</h4>
                        <span>24</span>
                    </Card>
                    <Card style= {{backgroundColor: "#35BDD0", color: 'white'}}   className='task-card'>
                        <h4>Average tasks per day</h4>
                        <span>10</span>
                    </Card>
                    <Card style= {{backgroundColor: "#1FAA59", color: 'white'}} className='task-card'>
                        <h4>Productivity Average</h4>
                        <span>8 hours 24 minutes</span>
                    </Card>
                    <Card style= {{backgroundColor: "#E07C24", color: 'white'}} className='task-card'>
                        <h4>Projects Created</h4>
                        <span>5</span>
                    </Card>
                    <Card style= {{backgroundColor: "#E6425E", color: 'white'}} className='task-card'>
                        <h4>Projects Completed</h4>
                        <span>4</span>
                    </Card>
                </div>

            
               <div className='chart-container'>
               <Card style={{backgroundColor:'#CAD5E2'}} className='barchart-container'>
                     <Chart data={data}></Chart>
                  </Card>  
                <Card className='piechart-container'>

                      <PieChart className='pie-char'/> 
                </Card>
             </div>
                 
              
              
               

         
          

                
                
            </div>
        </div>
    )
}

export default Dashboard
