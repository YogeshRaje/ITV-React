import { useEffect, useState } from "react";

export default function UseEffect(){
    const[data,setData] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setData((data)=>data+1)
        },1000)
    },[])
    return <>
    <h1>Hello Check This Count {data}</h1>
    </>
}