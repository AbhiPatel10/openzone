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
            description: "Easily discover projects aligned with your interests and skill set. Our intuitive search tools allow you to filter through a diverse array of open-source projects by language, difficulty level, and tags. Find your next challenge or passion project in just a few clicks.",
            icon: Search,
        },
        {
            title: "Personalized User Profiles",
            description: "Create a dynamic profile that showcases your contributions and achievements in the open-source community. Highlight the projects you’ve impacted, share your skills, and grow your network.",
            icon: User,
        },
        {
            title: "Track Your Contributions",
            description: "Our platform provides comprehensive tracking tools to monitor your involvement in projects. From pull requests and commits to managing issues, keep a detailed record of your contributions and milestones.",
            icon: Activity,
        },
        {
            title: "Events",
            description: "Stay connected and informed with the latest happenings in the open-source world. Whether you're looking for hackathons, workshops, or webinars, our events calendar is your go-to resource for community gatherings. Enhance your skills, meet like-minded developers, and get involved in exciting collaborations.",
            icon: Calendar,
        },
        {
            title: "Communities",
            description: "Join vibrant communities that match your interests and expertise. Our platform helps you find the best community for networking, learning, and contributing. Whether you are a beginner or an experienced developer, being part of a community can amplify your impact and provide valuable support.",
            icon: Users,
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
