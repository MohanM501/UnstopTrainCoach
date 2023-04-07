import * as types from "./actionTypes";

const state={
    isLoading:false,
    isError:false,
    matrix:[]
}

const reducer=(oldState=state,action)=>{
    const {type,payload}=action;
    switch(type){

        case types.MATRIX_GET_REQUEST:
            return {...oldState,isLoading:true};
        
        case types.MATRIX_GET_SUCCESS:
            return {...oldState,isLoading:false,matrix:payload}

        case types.MATRIX_GET_FAILURE:
            return {...oldState,isLoading:false,isError:true}

        default:
            return oldState;
    }
}

export {reducer};