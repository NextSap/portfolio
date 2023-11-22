import React from 'react';
import {SiSpringboot, SiTailwindcss} from "react-icons/si";
import {TbBrandNextjs} from "react-icons/tb";
import {FiFigma} from "react-icons/fi";
import {BsGithub} from "react-icons/bs";
import {GrMysql} from "react-icons/gr";
import {FaDocker, FaJava} from "react-icons/fa";

const backend = [
    {
        title: "Java",
        icon: <FaJava size={30}/>
    },
    {
        title: "Spring Boot",
        icon: <SiSpringboot size={25}/>
    },
    {
        title: "MySQL",
        icon: <GrMysql size={30}/>
    }
]

const frontend = [
    {
        title: "Figma",
        icon: <FiFigma size={25}/>
    },

    {
        title: "NextJs",
        icon: <TbBrandNextjs size={30}/>
    },
    {
        title: "Tailwind",
        icon: <SiTailwindcss size={30}/>
    }
]

const other = [
    {
        title: "Git & Github",
        icon: <BsGithub size={25}/>
    },
    {
        title: "Docker",
        icon: <FaDocker size={30}/>
    }
]

const Skills = () => {
    return (
        <div className="h-[100vh] min-h-[800px] bg-custom-gray">
            <div className="flex justify-center h-[3%]">
                <div className="h-auto w-1 bg-custom-blue"/>
            </div>
            <div className="flex flex-col justify-center items-center h-[97%] gap-10 md:gap-32">
                <p className="text-4xl text-custom-blue font-bold text-center">Skills</p>
                <div className="flex flex-col gap-16 ml-6 md:ml-0 md:justify-around md:w-[70%] md:flex-row">
                    <div className="flex flex-col gap-3">
                        <p className="text-[28px]">Backend</p>
                        <div className="flex flex-col items-start gap-2">
                            {backend.map((skill, index) => (
                                <div className="flex justify-center items-center gap-2 rounded" key={index}>
                                    <div className="flex justify-start items-center h-8 w-8">
                                        {skill.icon}
                                    </div>
                                    <p className="flex justify-center items-center text-[16px] h-8">{skill.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-[28px]">Frontend</p>
                        <div className="flex flex-col items-start gap-2">
                            {frontend.map((skill, index) => (
                                <div className="flex justify-center items-center gap-2 rounded" key={index}>
                                    <div className="flex justify-start items-center h-8 w-8">
                                        {skill.icon}
                                    </div>
                                    <p className="flex justify-center items-center text-[16px] h-8">{skill.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-[28px]">Other</p>
                        <div className="flex flex-col items-start gap-2">
                            {other.map((skill, index) => (
                                <div className="flex justify-center items-center gap-2" key={index}>
                                    <div className="flex justify-start h-8 w-8">
                                        {skill.icon}
                                    </div>
                                    <p className="text-[16px] h-8">{skill.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;