import types from "./actionTypes";
import axios from "axios";

const URL=`${process.env.REACT_APP_API_URL}`;

const Get_Request=()=>{
    return{
        type:types.MATRIX_GET_REQUEST
    }
}
const Get_Success=(payload)=>{
    return{
        type:types.MATRIX_GET_SUCCESS,
        payload
    }
}

const Get_Failure=()=>{
    return{
        type:types.MATRIX_GET_FAILURE
    }
}


const Get_Matrix=(dispatch)=>{
    dispatch(Get_Request());
    return axios.get(`${URL}/seats`)
    .then((r)=>{
        console.log(r.data,"r.data in get request");
        dispatch(Get_Success(r.data))
    })
    .catch((err)=>{
        dispatch(Get_Failure())
    })
    
}

export {Get_Matrix}

