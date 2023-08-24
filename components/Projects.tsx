import React, {ReactNode} from 'react';
import {RiMoneyDollarCircleLine} from "react-icons/ri";
import {GiHealthNormal} from "react-icons/gi";
import {FaUserDoctor} from "react-icons/fa6";
import {AiFillHome} from "react-icons/ai";

const projects = [
    {
        title: "PayMyBuddy",
        description: "Un clône de l'application web Paypal qui lie un front NextJs et un back SpringBoot",
        githubLink: "https://github.com/NextSap/JAVA.oc-6.back",
        icon: <RiMoneyDollarCircleLine color={"#2487e3"} size={40}/>
    },
    {
        title: "SafetyNet",
        description: "Une application backend de gestion de données pour les services de sécurité réalisé avec SpringBoot",
        githubLink: "https://github.com/NextSap/JAVA.oc-5",
        icon: <GiHealthNormal color={"#2487e3"} size={40}/>
    },
    {
        title: "MédiLabo Solutions",
        description: "Solution microservices de gestion de notes de patient et de prédiction du diabète réalisé avec SpringBoot",
        githubLink: "https://github.com/NextSap/JAVA.oc-9",
        icon: <FaUserDoctor color={"#2487e3"} size={40}/>
    },
    {
        title: "Kasa",
        description: "Une simple application frontend de location de logements entre particuliers réalisé avec ReactJs",
        githubLink: "https://github.com/NextSap/oc-6",
        icon: <AiFillHome color={"#2487e3"} size={40}/>
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
}
const Project = (props: ProjectProps) => {
    return (
        <a href={props.githubLink} target="_blank">
            <div
                className="flex flex-col justify-center items-center gap-1 md:gap-3 text-center bg-[#191919] cursor-pointer w-[300px] h-[160px] md:w-[320px] md:h-[220px] rounded">
                {props.icon}
                <p className="text-xl md:text-2xl font-semibold text-custom-blue">{props.title}</p>
                <p className="w-[80%] font-thin text-[15px] md:text-[16px]">{props.description}</p>

            </div>
        </a>
    );
};

export default Projects;