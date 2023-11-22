import React, {ReactNode} from 'react';
import {RiMoneyDollarCircleLine} from "react-icons/ri";
import {GiHealthNormal} from "react-icons/gi";
import {FaUserDoctor} from "react-icons/fa6";
import {SiReact, SiSpringboot} from "react-icons/si";
import {TbBrandNextjs} from "react-icons/tb";
import {GrMysql} from "react-icons/gr";
import {FaDocker} from "react-icons/fa";

const ReactSkill = () => {
    return (
        <div className="flex justify-center gap-1 px-2 bg-custom-blue rounded-full">
            <div className="flex justify-center items-center h-6 w-5">
                <SiReact size={20}/>
            </div>
            <p className="flex items-center text-[13px] h-full">React</p>
        </div>
    );
}

const NextJsSkill = () => {
    return (
        <div className="flex justify-center gap-1 px-2 bg-custom-blue rounded-full">
            <div className="flex justify-center items-center h-6 w-5">
                <TbBrandNextjs size={20}/>
            </div>
            <p className="flex items-center text-[13px] h-full">NextJs</p>
        </div>
    );
}

const SpringBootSkill = () => {
    return (
        <div className="flex justify-center gap-1 px-2 bg-custom-blue rounded-full">
            <div className="flex justify-center items-center h-6 w-5">
                <SiSpringboot size={20}/>
            </div>
            <p className="flex items-center text-[13px] h-full">SpringBoot</p>
        </div>
    );
}

const MySqlSkill = () => {
    return (
        <div className="flex justify-center gap-1 px-2 bg-custom-blue rounded-full">
            <div className="flex justify-center items-center h-6 w-5">
                <GrMysql size={20}/>
            </div>
            <p className="flex items-center text-[13px] h-full">MySQL</p>
        </div>
    );
}

const DockerSkill = () => {
    return (
        <div className="flex justify-center gap-1 px-2 bg-custom-blue rounded-full">
            <div className="flex justify-center items-center h-6 w-5">
                <FaDocker size={20}/>
            </div>
            <p className="flex items-center text-[13px] h-full">Docker</p>
        </div>
    );
}

const projects = [
    {
        title: "PayMyBuddy",
        description: "Un clône de l'application web Paypal qui lie un front NextJs et un back SpringBoot",
        githubLink: "https://github.com/NextSap/JAVA.oc-6.back",
        icon: <RiMoneyDollarCircleLine color={"#2487e3"} size={40}/>,
        skills: [<SpringBootSkill/>, <MySqlSkill/>, <NextJsSkill/>, <DockerSkill/>]
    },
    {
        title: "SafetyNet",
        description: "Une application backend de gestion de données pour les services de sécurité réalisé avec SpringBoot",
        githubLink: "https://github.com/NextSap/JAVA.oc-5",
        icon: <GiHealthNormal color={"#2487e3"} size={40}/>,
        skills: [<SpringBootSkill/>, <MySqlSkill/>, <DockerSkill/>]
    },
    {
        title: "MédiLabo Solutions",
        description: "Solution microservices de gestion de notes de patient et de prédiction du diabète réalisé avec SpringBoot",
        githubLink: "https://github.com/NextSap/JAVA.oc-9",
        icon: <FaUserDoctor color={"#2487e3"} size={40}/>,
        skills: [<SpringBootSkill/>, <MySqlSkill/>, <DockerSkill/>]
    }
]

const Projects = () => {

    return (
        <div className="h-[100vh] min-h-[1000px]">
            <div className="flex justify-center h-[3%]">
                <div className="h-auto w-1 bg-custom-blue"/>
            </div>
            <div className="flex flex-col justify-center items-center h-[94%] gap-10 md:gap-32">
                <p className="text-4xl text-custom-blue font-bold">Projets</p>
                <div className="flex justify-center flex-wrap gap-10">
                    {projects.map((project, index) => (
                        <Project title={project.title} description={project.description} githubLink={project.githubLink}
                                 icon={project.icon}
                                 skills={project.skills}
                                 key={index}/>
                    ))}
                </div>
            </div>
            <div className="flex justify-center h-[3%]">
                <div className="h-auto w-1 bg-custom-blue"/>
            </div>
        </div>
    );
};

type ProjectProps = {
    title: string;
    description: string;
    githubLink: string;
    icon?: ReactNode;
    skills: ReactNode[];
}
const Project = (props: ProjectProps) => {
    return (
        <div
            className="relative flex flex-col justify-center items-center gap-1 md:gap-3 text-center bg-[#191919] w-[300px] h-[240px] md:w-[320px] md:h-[280px] rounded">
            <a href={props.githubLink} target="_blank" className="cursor-pointer right-5 top-5 absolute">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
            {props.icon}
            <p className="text-xl md:text-2xl font-semibold text-custom-blue">{props.title}</p>
            <p className="w-[80%] font-thin text-[15px] md:text-[16px]">{props.description}</p>
            <div className="flex flex-wrap gap-2 w-[80%]">
                {props.skills.map((skill) => (
                    skill
                ))}
            </div>
        </div>
    );
};

export default Projects;