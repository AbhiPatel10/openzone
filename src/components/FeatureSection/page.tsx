import React from 'react';
import { Search, User, Activity, Calendar, Users, IconType } from 'lucide-react';

interface Feature {
    title: string;
    description: string;
    icon: IconType;
}

const FeatureSection: React.FC = () => {
    const features: Feature[] = [
        {
            title: "Project Discoverability",
            description: "Easily search for open-source projects based on various criteria such as programming language, tags, and project activity.",
            icon: Search,
        },
        {
            title: "Personalized User Profiles",
            description: "Maintain a comprehensive profile showcasing your contributions to open-source projects. Your profile will highlight the projects you've contributed to and your impact on them.",
            icon: User,
        },
        {
            title: "Track Your Contributions",
            description: "Keep track of your contributions, including pull requests, commits, and issues opened or resolved.",
            icon: Activity,
        },
    ];

    return (
        <section className='py-12'>
            <div className='flex justify-center text-center'>
                <h1 className='text-5xl text-primary font-bold font-primary mb-16'>Features</h1>
            </div>
            <div className="container mx-auto px-5">
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <div key={index} className="flex flex-col sm:flex-row items-center mb-20"> 
                            <div className="flex items-center justify-center h-20 w-20 sm:h-32 sm:w-32 bg-secondary text-indigo-500 rounded-full mb-6 sm:mb-0 sm:mr-10 flex-shrink-0">
                                <Icon size={48} />
                            </div>
                            <div className="flex-grow text-center sm:text-left">
                                <h2 className="text-xl md:text-2xl text-white font-medium bg-primary inline-block py-2 px-5 rounded-full mb-4">{feature.title}</h2> 
                                <p className="text-xl md:text-2xl text-gray-700">{feature.description}</p> 
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default FeatureSection;