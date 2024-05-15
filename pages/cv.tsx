import React from 'react';
import Image from "next/image";

const Cv = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <Image src={"/CV.png"} alt={"CV"} width={450} height={50}/>
        </div>
    );
};

export default Cv;