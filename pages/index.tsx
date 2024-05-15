import React from 'react';
import Hello from "@/components/Hello";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Hello/>
            <About/>
            <Projects/>
            <Skills/>
        </div>
    );
};

export default Home;