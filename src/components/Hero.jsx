import React from 'react';
import Image from "next/image";

const Hero = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <Image src="/images/gif/coffee.gif" alt="coffee" height={150} width={150}></Image>
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-blue-500">
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
                        <button type="button"
                                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here
                        </button>
                        <button type="button"
                                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;