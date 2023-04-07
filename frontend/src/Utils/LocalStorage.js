
const Store=(key,value)=>{
    let val=localStorage.setItem(key,JSON.stringify(value))||0;
    return val;
}

const Get=(key)=>{
    let val=JSON.parse(localStorage.getItem(key));
    return val;
}

export {Store,Get}