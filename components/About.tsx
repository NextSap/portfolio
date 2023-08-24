import React from 'react';
import Image from "next/image";
import {AiFillGithub, AiFillLinkedin, AiOutlineArrowRight} from "react-icons/ai";
import {useRouter} from "next/router";

const About = () => {

    const router = useRouter();

    return (
        <div className={`h-[100vh] min-h-[900px] bg-custom-gray`}>
            <div className="flex justify-center h-[3%]">
                <div className="h-auto w-1 bg-custom-blue"/>
            </div>
            <div className="flex flex-col justify-center items-center h-[94%] gap-10">
                <p className="text-4xl text-custom-blue font-bold">A propos de moi</p>
                <div className="flex flex-col gap-5 md:gap-20 md:flex-row">
                    <div className="relative h-auto m-auto">
                        <Image src={"/Profile.jpg"} alt={"Personal photo"} width={250} height={600}
                               className="relative z-10 w-[200px] md:w-[250px]"/>
                        <div className="absolute border-4 border-custom-blue top-3 left-6 md:top-7 md:left-8 w-[200px] md:w-[250px] h-[275px] md:h-[335px] z-0"></div>
                    </div>
                    <div className="flex flex-col gap-5 tracking-wide mt-7 leading-[21px]">
                        <p className="text-xl font-bold">Je m'appelle <span
                            className="text-custom-blue">Louis Di Ilio</span></p>
                        <div className="flex flex-col w-80 gap-4 font-thin">
                            <p>Passionné d'informatique depuis plusieurs années et âgé de 20 ans, je suis sur le point
                                d'obtenir un diplôme de niveau bac +4 en Conception de logiciel.
                                Grâce à ma fibre d'autodidacte, j'ai pu acquérir des compétences solides dans ce
                                domaine.</p>
                            <a className="flex items-center gap-2 cursor-pointer" rel="noreferrer" target="_blank" onClick={() => router.push("/cv")}>
                                <AiOutlineArrowRight size={25} color="#2487e3"/>
                                <p className="flex flex-col text-custom-blue font-semibold">CV classique</p>
                            </a>
                            <p className="flex flex-col text-custom-blue font-semibold">Email: <span
                                className="text-[#fff] font-thin">louis.di.ilio.pro@outlook.com</span></p>
                            <p className="flex flex-col text-custom-blue font-semibold">Education: <span
                                className="text-[#fff] font-thin">Openclassrooms (BAC +4)</span></p>
                            <div className="flex gap-5">
                                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/louis-diilio">
                                    <AiFillLinkedin color="#2487e3" size={40}/>
                                </a>
                                <a rel="noreferrer" target="_blank" href="https://github.com/NextSap">
                                    <AiFillGithub color="#2487e3" size={40}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center h-[3%]">
                <div className="h-auto w-1 bg-custom-blue"/>
            </div>
        </div>
    );
};

export default About;