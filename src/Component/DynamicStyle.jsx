import { useState } from "react"

function DynamicStyle(){
    const [IsActive, SetIsActive]=useState(true)
    const Style = {
        backgroundColor: IsActive ? "green" : "red",
        color: "white",
        padding: "10px",
        borderRadius:"5px",
        cursor:"pointer"
    }
    const Activity =()=>{
        SetIsActive(!IsActive)
    }
    return(
        <>
            <button style={Style} onClick={Activity}>
                {IsActive ? "Active": "InActive"}

            </button>

        </>
    )
}
export default DynamicStyle;