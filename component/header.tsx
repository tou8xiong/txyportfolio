"use client"
import { CgProfile } from "react-icons/cg";
import { useCallback, useState } from "react";
import Image from "next/image";
import QRImage from "@/public/myQR.jpg";
import { AiOutlineDingding } from "react-icons/ai";
import { FaRegLightbulb } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa6";


export default function Header(props: { pagemode: string, setPagemode: (pagemode: string) => void }) {
    const [image, setImage] = useState(false);
    const { pagemode, setPagemode } = props;

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
        setImage(!image);
    }

    const handleMode = () => {
        if (pagemode === "light") {
            setPagemode("dark");
        } else {
            setPagemode("light");
        }
    };
    return (
        <div className="bg-gray-900 text-white sticky top-0 z-10
             h-[50px] w-full p-2 flex justify-between items-center">
            <div><AiOutlineDingding size={43} /></div>
            <div className="flex gap-19  border-amber-50">
                <button
                    onClick={() => handleScrollToAbout("homesection")}
                    className="hover:underline decoration-amber-400 decoration-2 "  >Home</button>
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
            <div className="w-[120px]  flex justify-between ">
                <button onClick={handleMode}>{pagemode === "light"? <FaRegLightbulb size={30}/> : <FaLightbulb size={30}/> }</button>
                <button onClick={handleInage} className="bg-gray-500 py-1 px-4 hover:bg-gray-600 cursor-pointer rounded">Contect</button>
                {image &&
                    <Image src={QRImage} alt="qr" className=" absolute top-13 right-0 w-[400px]" />}
            </div>
        </div>
    )
}