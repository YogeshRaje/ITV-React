import { useState } from "react"

export default function About(){
    const [color,setColor] = useState("Red")
    return <>
    <h1 className="text-danger">About Page {color}</h1>
    </>
}