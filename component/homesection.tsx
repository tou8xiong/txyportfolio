"use client"
import Myimage from "@/public/mypicture.png";
import Image from "next/image";
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareGithub } from "react-icons/fa6";

export default function HomeSection() {
    return (
        <div className="border-0 flex justify-center flex-col font-serif ">
            <div id="homesection" className="flex justify-around border-0 pt-10">
                <div className="border-0 p-5 ">
                    <p className="text-md">Hey, I'm   <strong className="text-3xl">TouXiong</strong>
                    </p>
                    <span >My social</span><br></br>
                    <div className="flex border-0 w-fit gap-1 bg-amber-100 justify-center rounded">
                        <a href="https://www.facebook.com/share/1Fmimk9RSG/"  ><IoLogoFacebook size={45} color="#113aef" /></a>
                        <a href="https://github.com/tou8xiong"  ><FaSquareGithub size={45} /></a>
                    </div>
                </div>
                <div className=" h-fit" >
                    <Image src={Myimage} alt="image" className="w-70 rounded-2xl  transition  duration-300 hover:shadow-md shadow-black hover:scale-105" />
                </div>
                <div>
                    <p className="font-bold">ASPIRING</p>
                    <h2 className="text-orange-500 font-bold ">FULL-STACK Developer </h2>
                    <p className="w-[370px] border-0">I am a student aspiring to become a full-stack developer, building skills in both
                        front-end and back-end.
                        I enjoy creating projects that connect design, logic, and real-world problem solving.
                        My goal is to grow into a developer who delivers complete and impactful solutions.</p>
                    <p ><span >Tech</span> is my passion <span>building</span> is my drive<span>Growth </span> is my Goal.</p>
                </div>

            </div>
            <div className="w-full flex justify-center">
                <hr className="text-black-500 w-[500px] border-2 border-solid border-black- items-center text-center mt-30 font-bold"></hr>
                </div>
        </div>
    )
}