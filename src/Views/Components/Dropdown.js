import { Button } from '@material-ui/core';
import React, { useState } from 'react'

import './Dropdown.css'

function Dropdown() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
  

    return (
        <>
         
        <div  className={click ? 'dropdown-menu' : 'dropdown-menu'}>
          <Button>hello</Button>
          <Button>hello</Button>
          <Button>hello</Button>
          <Button>hello</Button>
          
       </div>  
     
    </>
    )
}

export default Dropdown
