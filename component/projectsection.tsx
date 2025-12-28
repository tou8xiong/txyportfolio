"use client";
import { useEffect, useState } from "react";

const images = [
    "/image1.png",
    "/image2.png",
    "/image3.png",
    "/image4.png",
    "/image5.png",
    "/image6.png",
    "/image7.png",
    "/image8.png",
    "/image9.png",

];

export default function Project() {
    const [current, setCurrent] = useState(0);

    // Auto slide every 3 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 10000);
        return () => clearInterval(timer);
    }, []);

    // Manual controls
    const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div id="project" className="pt-30 border-0 ">
            <h1 className="text-center p-6 text-4xl font-bold ">Project</h1>
            <div className="w-full flex justify-center ">
                <div className="relative w-full flex  max-w-2xl  overflow-hidden rounded-xl shadow-lg">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {images.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Slide ${index}`}
                                className="w-full "
                            />
                        ))}
                    </div>
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full hover:bg-black/60"
                    >
                        ‹
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full hover:bg-black/60"
                    >›
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-3 h-3 rounded-full ${current === index ? "bg-white" : "bg-gray-400/60"
                                    }`}
                            />
                        ))}
                    </div>

                </div>
                <div id="projectsection" className="ml-30">
                    <h1 className="text-lg font-bold">Todolist Project</h1>
                    <a href="https://www.todolifetask.xyz/" className="text-md text-sky-500 underline underline-offset-1">Visit the project</a>
                    <p className="text-amber-700 font-bold">Feature</p>
                    <ul className="ml-5">
                        <li>Addtasks</li>
                        <li>Listtasks</li>
                        <li>Donetasks</li>
                        <li>Editasks</li>
                        <li>Deletetasks</li>
                        <li>Note</li>
                        <li>Keep tasks in localstorage</li>
                        <li>Login logout use Firebase</li>
                    </ul>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <hr className="text-black-500 w-[500px] border-2 border-solid border-black- items-center text-center mt-30 font-bold"></hr>
                </div>
        </div>
    );
}
