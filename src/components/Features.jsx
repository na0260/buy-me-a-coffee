import React from 'react';

const Features = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
                        Raw Denim Heirloom Man Braid
                    </h1>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div
                            className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-slate-800 text-blue-500 mb-5 flex-shrink-0">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-10 h-10"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                            </svg>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-white text-lg title-font font-medium mb-3">
                                Shooting Stars
                            </h2>
                            <p className="leading-relaxed text-gray-400">
                                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                                taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
                                pug VHS try-hard.
                            </p>
                            <a href="#" className="mt-3 text-blue-500 inline-flex items-center">
                                Learn More
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div
                            className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-slate-800 text-blue-500 mb-5 flex-shrink-0">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-10 h-10"
                                viewBox="0 0 24 24"
                            >
                                <circle cx={6} cy={6} r={3}/>
                                <circle cx={6} cy={18} r={3}/>
                                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/>
                            </svg>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-white text-lg title-font font-medium mb-3">
                                The Catalyzer
                            </h2>
                            <p className="leading-relaxed text-gray-400">
                                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                                taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
                                pug VHS try-hard.
                            </p>
                            <a href="#" className="mt-3 text-blue-500 inline-flex items-center">
                                Learn More
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div
                            className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-slate-800 text-blue-500 mb-5 flex-shrink-0">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-10 h-10"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                                <circle cx={12} cy={7} r={4}/>
                            </svg>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-white text-lg title-font font-medium mb-3">
                                Neptune
                            </h2>
                            <p className="leading-relaxed text-gray-400">
                                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                                taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
                                pug VHS try-hard.
                            </p>
                            <a href="#" className="mt-3 text-blue-500 inline-flex items-center cupo">
                                Learn More
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;