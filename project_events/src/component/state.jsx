import { useState } from "react";

export default function State(){
    const [dell,setDell] = useState("Computer")

    return<>
    <h1>I have {dell}</h1>
    </>
}

 function State1(){
    const[color,setColor] = useState(
        {
            name :"Rohit",
            age : 43,
            dob : "19/12/1997"
        }
    )
    return <>
       <h1> My name is {color.name} and my age is {color.age}</h1>
    </>
}

export {State1}
