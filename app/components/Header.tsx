'use client';

import React from 'react';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="rounded-lg bg-amber-600 p-2 text-white">
                            <Code2 size={24} />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-gray-900">DevPortfolio</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="https://github.com/nomorepinto" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
                            <Github size={20} />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/jedrick-ocenar-18765b206/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors">
                            <Linkedin size={20} />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="mailto:bilogdino071@gmail.com" className="text-gray-500 hover:text-red-500 transition-colors">
                            <Mail size={20} />
                            <span className="sr-only">Email</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
