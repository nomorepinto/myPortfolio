'use client';

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} DevPortfolio. All rights reserved.
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</a>
                        <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
