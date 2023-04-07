import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from '@chakra-ui/react';

const Navbar = () => {

  return (
    <div style={{"width":"20%",display:"flex",gap:"20px",margin:"auto",padding:"20px"}}>
        <Link to="/" ><Button _hover={{bg:"teal"}}>Home</Button></Link>
        <Link to="/user"><Button _hover={{bg:"teal"}}>User</Button></Link>  
    </div>
  )
}

export default Navbar