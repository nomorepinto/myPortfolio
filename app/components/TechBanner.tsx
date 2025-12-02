'use client';

import React from 'react';
import { Code2 } from 'lucide-react';

export interface TechItem {
    name: string;
    category: 'Frontend' | 'Backend' | 'Technologies';
}

interface TechBannerProps {
    technologies: TechItem[];
}

const categoryColors = {
    Frontend: 'bg-blue-900 text-blue-100 border-blue-700 hover:border-blue-500 hover:text-white',
    Backend: 'bg-green-900 text-green-100 border-green-700 hover:border-green-500 hover:text-white',
    Technologies: 'bg-purple-900 text-purple-100 border-purple-700 hover:border-purple-500 hover:text-white',
};

const TechBanner: React.FC<TechBannerProps> = ({ technologies }) => {
    return (
        <div className="w-full bg-gray-100 py-6 border-y border-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
                    <div className="flex items-center text-gray-400 font-medium shrink-0">
                        <Code2 className="w-5 h-5 mr-2 text-amber-500" />
                        <span>Tech Stack & Tools:</span>
                    </div>

                    <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className={`px-3 py-1 rounded-md text-sm font-medium border transition-colors cursor-default ${categoryColors[tech.category]}`}
                                title={tech.category}
                            >
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechBanner;
