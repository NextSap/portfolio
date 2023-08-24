import React from 'react';
import Image from "next/image";

const Cv = () => {
    return (
        <div className="flex items-center justify-center h-[100vh]">
            <Image src={"/CV Louis.png"} alt={"CV"} width={600} height={100}/>
        </div>
    );
};

export default Cv;