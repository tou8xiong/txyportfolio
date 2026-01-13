"use client"
import DesignImg from "@/component/designimg"
import { useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";



export default function DesignPage(){
    const [mode2, setMode2] = useState(true);
    return(
        <div style={mode2 === true ? {backgroundColor:"white", color:"black"} : {backgroundColor:"#141414", color:"white"}}>
            <button  
            
             onClick={() =>setMode2(!mode2)}>{mode2 === true ? <MdDarkMode size={30} /> : <MdOutlineDarkMode size={30} />}</button>
            <h1 className="text-center text-4xl font-bold ">Designing Performance</h1>
            <DesignImg />
        </div>
    )
}