import { useState } from "react";

export default function StateUpdate1(){
    const [data,setData] = useState({
        'name':'Rohit',
        'age': 22
    })
    return(<>
    
        <h1>StateUpdate1 {data.name} {data.age}</h1>
        <button type="button" onClick={()=>setData({'name':'BhaiLog','age':66})}>Color</button>
        </>
    )
}