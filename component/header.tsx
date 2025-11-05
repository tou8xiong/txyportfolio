"use client"
import { CgProfile } from "react-icons/cg";
import { useCallback, useState } from "react";
import Image from "next/image";
import QRImage from "@/public/myQR.jpg"

export default function Header() {
    const [image, setImage] = useState(false);
  
        const handleScrollToAbout = useCallback((targetId: string) => {
        if (targetId === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [])

    const handleInage = () => {
        setImage(!image)

    }

        return (
            <div className="bg-gray-800 text-white sticky top-0 z-10 h-[50px] w-full p-2 flex justify-between items-center">
                <div><CgProfile size={39} /></div>
                <div className="flex gap-4">
                    <button 
                    onClick={() => handleScrollToAbout("homesection")} 
                    className="hover:underline decoration-amber-400 decoration-2" >Home</button>
                    <button 
                    onClick={() => handleScrollToAbout("projectsection")} 
                    className="hover:underline decoration-amber-400 decoration-2">Project</button>
                    <button 
                    onClick={() => handleScrollToAbout("education")} 
                    className="hover:underline decoration-amber-400 decoration-2">Education</button>
                    <button 
                    onClick={() => handleScrollToAbout("skills")} 
                    className="hover:underline decoration-amber-400 decoration-2">Skills</button>
                </div>
                <div>
                    <button onClick={handleInage} className="bg-gray-500 p-2 rounded">contect</button>
                    {image &&
                    <Image src={QRImage} alt="qr" className=" absolute top-13 right-0 w-[400px]"/>}
                </div>
            </div>
        )
    }