import { useState } from "react";

export default function UpdateState(){
    const [data,setData] = useState("Rohit")
    return <>
        <h1>My name is {data}</h1>
        <button type="button" className="btn btn-success" onClick={()=>setData("Rahul")} >Change Data</button>
    </>
}