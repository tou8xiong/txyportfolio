

export default function Skills(props: { pagemode: string, setPagemode: (pagemode: string) => void }) {
    const { pagemode, setPagemode } = props;
    return (
        <div id="skills"  className="border-0" >
            <h1 className="text-center font-bold text-2xl">Skills</h1> 
            <div  className="flex justify-center  p-10 ">
                <div className="flex flex-col gap-7 border-0">
                    <div className="flex border-0 gap-7 ">
                        <div  className={`${pagemode === "light"? "bg-sky-200 px-14 rounded-md hover:bg-sky-300 py-10" : "bg-gray-600 text-white px-14 rounded-md hover:bg-gray-500 py-10" }`}>
                            <h3 className="font-bold text-xl">LANGUAGES</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Java Script</li>
                                <li>Typescript</li>
                                <li>React</li>
                                <li>React-native</li>
                                <li>Tailwind-css</li>
                            </ul>
                        </div>
                        <div className={`${pagemode === "light"? "bg-sky-200 px-14 rounded-md hover:bg-sky-300 py-10" : "bg-gray-600 text-white px-14 rounded-md hover:bg-gray-500 py-10" }`}>
                            <h3 className="font-bold text-xl">TECHNICAL SKILLS</h3>
                            <ul>
                                <li>Graphic Design</li>
                                <li>App & Website Development</li>
                                <li>UX-UI design</li>
                            </ul>
                        </div> 
                        <div className={`${pagemode === "light"? "bg-sky-200 px-14 rounded-md hover:bg-sky-300 py-10" : "bg-gray-600 text-white px-14 rounded-md hover:bg-gray-500 py-10" }`}>
                            <h3 className="font-bold text-xl">TOOLS</h3>
                            <ul>
                                <li>VS Code</li>
                                <li>Github</li>
                                <li>Firebase</li>
                                <li>Expo</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex border-0 gap-7 justify-between flex-row">
                        <div className={`${pagemode === "light"? "bg-sky-200 px-14 rounded-md hover:bg-sky-300 py-10 w-full" :
                             "bg-gray-600 text-white px-14 rounded-md hover:bg-gray-500 py-10 w-full" }`}>
                            <h3 className="font-bold text-xl">DATA BASES</h3>
                            <ul>
                                <li>Firebase Database</li>
                                <li>MySQL</li>
                            </ul>
                        </div>
                        <div className={`${pagemode === "light"? "bg-sky-200 px-14 w-full rounded-md hover:bg-sky-300 py-10" : "bg-gray-600 text-white w-full px-14 rounded-md hover:bg-gray-500 py-10" }`} >
                            <h3 className="font-bold text-xl">SOFT SKILLS</h3>
                            <ul>
                                <li>Time management</li>
                                <li>Caomunication</li>
                                <li>Team Work</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}