import { useState } from "react"




export default function DesignImg() {
    const [imgclickzoom, setclickzoom] = useState(false);

    const dsimg = [
        "/dsimg1.png",
        "/dsimg1.png",
        "/dsimg1.png",
        "/dsimg1.png",
        "/dsimg1.png",
        "/dsimg1.png",
        "/dsimg1.png",
        "/dsimg1.png",
        "/dsimg1.png",
        "/dsimg1.png",
        "/dsimg1.png",
        "/dsimg1.png",

    ]

    return (
        <div>
            <div className="flex flex-wrap gap-10 justify-center p-8">
                {dsimg.map((src, index) => (
                    <button onClick={() => setclickzoom(!imgclickzoom) } key={index} className="border-2 border-blue-400 cursor-pointer ">
                        <img
                        style={imgclickzoom === true ? {width: "800px"} : {width: "400px"}}
                            key={index}
                            src={src} alt="Design Image"
                            className="w-[400px] hover:shadow-2xl shadow-gray-600 hover:scale-105" /></button>
                ))}
            </div>
        </div>

    )
}