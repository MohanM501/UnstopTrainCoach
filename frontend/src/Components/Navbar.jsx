import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from '@chakra-ui/react';
import "./Navbar.css";

const Navbar = () => {

  return (
    <div className="nav-container" >
        {/* to Navigate to Home page */}
        <Link to="/" ><Button _hover={{bg:"teal"}}>Home</Button></Link>
         {/* to Navigate to User page */}
        <Link to="/user"><Button _hover={{bg:"teal"}}>User</Button></Link>  
    </div>
  )
}

export default Navbar