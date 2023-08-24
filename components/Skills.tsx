import React from 'react';
import {SiReact, SiSpringboot, SiTailwindcss} from "react-icons/si";
import {TbBrandNextjs} from "react-icons/tb";
import {DiJava} from "react-icons/di";
import {BiLogoTypescript} from "react-icons/bi";

const skills = [
    {
        title: "Java",
        icon: <DiJava size={50}/>
    },
    {
        title: "Spring Boot",
        icon: <SiSpringboot size={40}/>
    },
    {
        title: "ReactJs",
        icon: <SiReact size={40}/>
    },
    {
        title: "NextJs",
        icon: <TbBrandNextjs size={40}/>
    },
    {
        title: "Tailwind CSS",
        icon: <SiTailwindcss size={40}/>
    },
    {
        title: "TypeScript",
        icon: <BiLogoTypescript size={40}/>
    }
]

const Skills = () => {
    return (
        <div className="h-[100vh] min-h-[400px] bg-custom-gray">
            <div className="flex justify-center h-[3%]">
                <div className="h-auto w-1 bg-custom-blue"/>
            </div>
            <div className="flex flex-col justify-center items-center h-[97%] gap-10 md:gap-32">
                <p className="text-4xl text-custom-blue font-bold text-center">Technos</p>
                <div className="flex justify-center flex-wrap gap-10 w-[80%]">
                    {skills.map((skill, index) => (
                        <div className="flex justify-center items-center gap-5 bg-custom-black rounded p-3" key={index}>
                            <p className="text-xl text-custom-blue font-bold">{skill.title}</p>
                            {skill.icon}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;