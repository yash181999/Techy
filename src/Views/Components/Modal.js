import React from 'react'


const customStyles = {
    content : {
      
      position: 'relative',
      backgroundColor : 'white',
      boxShadow :  '0 4px 8px 0 rgba(0,0,0,0.2)',
      borderRadius : '10px',
      display : 'flex',
      padding : '10px',
      width: '40%',
      top                   : '50%',
      left                  : '55%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  



function Modal() {
    return (
        <ReactModal onRequestClose = {() => setOpenModal(false)}  style={customStyles} isOpen = {opneModal}>
                    <div style = {{color : 'black' , width : '100%'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between',alignItems: 'center'}}>  
                      <h3>{modalHeading}</h3>
                      <IconButton style = {{cursor : 'grab', }} onClick = {()=>setOpenTaskAddModal(false)}>
                      <Close ></Close>
                      </IconButton>
                     
                    </div>
                   
                      <div style={{height : '0px', border : '0.1px solid gray', marginTop: '5px'}}></div>

                      <div style={{marginTop : '10px'}}>
                        <input type =  'text' placeholder = 'Task' value = {taskValue} onChange = {(e)=>setTaskValue(e.target.value)}  style={{border: '1px solid', height: '30px', width : '98%', position : 'relative', fontSize :' 16px',borderRadius:'3px', outline:'none',}}></input>
                          
                        <input type =  'text' value = {assigne} onChange = {(e)=>setAssigne(e.target.value)} placeholder = 'Assigne'  style={{border: '1px solid', marginTop: '10px', height: '30px', width : '98%', fontSize :' 16px', position : 'relative', borderRadius:'3px', outline:'none',}}></input>

                        <input type =  'date' value = {dueDate} onChange = {(e)=>setDueDate(e.target.value)} placeholder = 'Due Date'  style={{border: '1px solid', marginTop: '10px', height: '30px', width : '98%', fontSize :' 16px', position : 'relative', borderRadius:'3px', outline:'none',}}></input>

                        <input type =  'text' value = {description} onChange = {(e)=>setDescription(e.target.value)} placeholder = 'Description'  style={{border: '1px solid', marginTop: '10px', height: '30px', width : '98%', fontSize :' 16px', position : 'relative', borderRadius:'3px', outline:'none',}}></input>

                        <Button style = {{backgroundColor  : 'orange', color : 'white' , width : '80%' , marginLeft:'10%',marginTop : '10px'}}  onClick = {addTask} >Submit</Button>  

                      </div>
                      

                    </div>
              
                  </ReactModal>
    )
}

export default Modal
