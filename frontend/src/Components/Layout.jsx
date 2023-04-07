import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Get_Matrix } from '../Redux/action';
import "./Layout.css";

const Layout = () => {
    const [array,setArray]=useState([]);
    const dispatch=useDispatch();
    const selector=useSelector(store=>store);
    console.log(selector,"selector")
    useEffect(()=>{
        let arr=new Array(80).fill(0);
        console.table(arr,"arr")
        setArray(arr)
        dispatch(Get_Matrix)
    },[])
  return (
    <div className='container'>
            {array.length>0 && array.map((item,ind)=>{
                return (
                    (ind+1>=70?<div key={ind} className={"blue"}>{ind+1}</div>:((ind+1-3)%7===0?<div key={ind}  className={"gap"}>{ind+1}</div>:<div key={ind} className={item===0?'child':'child1'}>{ind+1}</div> ))     
                )
            })}
    </div>
  )
}

export default Layout