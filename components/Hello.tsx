import React from 'react';
import {FaLaptopCode} from "react-icons/fa";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";

const Hello = () => {
    return (
        <div className="h-[100vh] min-h-[500px]">
            <div className="flex flex-col justify-center text-3xl md:text-4xl tracking-wider text-white font-thin md:ml-16 ml-10 h-[97%] gap-3">
               <FaLaptopCode color="#2487e3" size={150}/>
                <p>Bonjour, je suis</p>
                <p className="text-5xl md:text-7xl text-custom-blue font-bold">Louis Di Ilio</p>
                <p>Développeur Java</p>
                <div className="flex gap-5">
                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/louis-diilio">
                        <AiFillLinkedin color="#2487e3" size={50}/>
                    </a>
                    <a rel="noreferrer" target="_blank" href="https://github.com/NextSap">
                        <AiFillGithub color="#2487e3" size={50}/>
                    </a>
                </div>
            </div>
            <div className="flex justify-center h-[3%]">
                <div className="h-auto w-1 bg-custom-blue"/>
            </div>
        </div>
    );
};

export default Hello;