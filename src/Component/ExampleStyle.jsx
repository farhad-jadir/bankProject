import { useState } from "react"

function StyleExample(){
    const [IsActive,SetIsActive]=useState(true)
    const Activity=()=>{
        SetIsActive(!IsActive)
    }
    return(
        <>
        <button className={IsActive?"Btn-Active": "Btn-InActive"} onClick={Activity}>{IsActive?"Active Button": "InActive Button"}</button>

        </>
    )
}
export default StyleExample;