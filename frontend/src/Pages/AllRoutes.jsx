import React from 'react';
import {Routes,Route} from "react-router-dom";
import Home from './Home';
import User from './User';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/user" element={<User/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes