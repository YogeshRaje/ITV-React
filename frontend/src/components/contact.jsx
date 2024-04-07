import { useState } from "react"
export default function Contact(){
    const [inputs, setInputs] = useState(null)
    console.log(inputs)
    return(
        <>
        <div className="container">
            <form>
                Name:<input type="text" value={inputs} class="form-control" onChange={(e)=>setInputs(e.target.value)} />
            </form>
        </div>
        </>
    )
}