import React from 'react';
import {Routes,Route} from "react-router-dom";
import Home from './Home';
import User from './User';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            {/* By default it returns Home component*/}
            <Route path="/" element={<Home/>}></Route>
            {/* for '/user' route it returns User component */}
            <Route path="/user" element={<User/>}></Route>
            {/* If user tries to access any routes other than the above mentioned('/'&'/user') means it will show Page didn't found*/}
            <Route path="*" element={<h2>Page didn't found</h2>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes