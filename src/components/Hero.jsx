import React from 'react';
import Image from "next/image";

const Hero = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <Image src="/images/gif/coffee.gif" alt="coffee" height={150} width={150}></Image>
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        BUY ME @ COFFEE!
                    </h1>
                    <p className="mb-8 leading-relaxed text-gray-400">
                        Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
                        tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt
                        ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over
                        meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af
                        fingerstache pitchfork.
                    </p>
                    <div className="flex justify-center">
                        <button
                            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span
    className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-300 dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
Start Here
</span>
                        </button>
                        <button
                            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span
    className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-300 dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
Learn More
</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;