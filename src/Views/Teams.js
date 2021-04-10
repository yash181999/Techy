import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context';
import Navbar from './Components/Navbar';
import './Teams.css'
import ReactModal from 'react-modal'
import { customStyles, modalBtnStyle, modalInputStyle } from './Components/TaskContainer'
import { useStateValue } from '../StateProvider';
import { Button, IconButton } from '@material-ui/core'
import { Add, Close } from '@material-ui/icons';
import { db } from '../firebase';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';


function Teams() {
    const {isSidebarOpen, openSidebar} = useGlobalContext();
    const [openTeamModal,setOpenTeamModal] = useState(false);
    

    const [{user},dispatch] = useStateValue();

    const [teamName, setTeamName] = useState('');
    const [teamDesc, setTeamDesc] = useState('');

    const [loading, setLoading] = useState(false);

    const [teamId, setTeamId] = useState(); 

    const [snapShot, setSnapShot] = useState([]);

    const history = useHistory();

    const {setCurrentTeamData} = useGlobalContext();


    useEffect(() => {
        getTeams();
    },[])

    

    const createTeam = () =>{ 
        if(user) {
            setLoading(true);
           try{
              if(teamName !== '' && teamDesc !== '') {
                db.collection('Teams').add({
                    teamName : teamName,
                    teamDesc : teamDesc,
                    createdBy: user.uid,
                    time : Date.now(),
                    teamId : teamName + Date.now(),

                });
              }
                
                setOpenTeamModal(false);

                setTeamName('');
                setTeamDesc('');
                setLoading(false);
            
           }
           catch(e) {
               console.log(e);
               setLoading(false);
           }

        


        }
    }

    const getTeams = () => {
        
       user && db.collection('Teams').where('createdBy' , '==', user.uid ).onSnapshot((querySnapshot)=>{
                  setSnapShot(querySnapshot.docs);  
       });
    }

    const openTeam = (data) => {
        dispatch({
            type : 'SET_TEAM_DATA',
            teamData : data,
        })
        history.push('/team');

       
    }

    return (
      
        <div className={isSidebarOpen ? 'team-with-sidebar team': 'team'}>
            <Navbar title={'Teams'}/>
            
            <ReactModal   onRequestClose = {() => setOpenTeamModal(false)}  style={customStyles} isOpen = {openTeamModal}>
                    <div style = {{color : 'black' , width : '100%'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between',alignItems: 'center'}}>  
                      <h3>Add Project</h3>
                      <IconButton style = {{cursor : 'grab', }} onClick = {()=>setOpenTeamModal(false)}>
                      <Close ></Close>
                      </IconButton>
                     
                    </div>
                   
                      <div style={{height : '0px', border : '0.1px solid gray', marginTop: '5px'}}></div>

                      <div style={{marginTop : '10px'}}>

                          <input type =  'text' placeholder = 'Team Name' value = {teamName} onChange = {(e)=>setTeamName(e.target.value)}  style={modalInputStyle}></input>
                          
  
                          <textarea type =  'text' value = {teamDesc} onChange = {(e)=>setTeamDesc(e.target.value)} placeholder = 'Team Description'  style={modalInputStyle}></textarea>
  
                       
                          <Button onClick = {createTeam} style = {modalBtnStyle}>Submit</Button> 
                           

                      </div>
                      

                    </div>
              
                  </ReactModal>

                  <div className = 'team-center'>
                    <div class='team-btn-container'>
                        <Button onClick={() => setOpenTeamModal(true)}>
                            
                            Create Team
                        </Button>
                        <Button>
                            
                           Join Team
                        </Button>
                    </div>
                    
 
                    
                    {snapShot &&  <table>

                        <tr>
                            <th>Team Name</th>
                            <th>Description</th>
                            <th>Sharing Link</th>
                        </tr>  

                          

                        {snapShot.map((value) => {
                           return value ?  ( 
                           
                          
                            
                              
                                <tr onClick= {()=> openTeam(value.data())}>
                                    <td>{value.data().teamName}</td>
                                    <td>{value.data().teamDesc}</td>
                                    <td>{value.data().teamId}</td>
                                </tr> 
                            
                 
                            
                           

                             
                                  
                                
                           ): <h1>No Teams Yet</h1>
                        } )}

                      </table>}  
                    


                  </div>

                 

         
      
      

        </div>
    )
}

export default Teams
