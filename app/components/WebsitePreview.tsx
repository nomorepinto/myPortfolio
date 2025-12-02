'use client';

import React, { useState } from 'react';
import { RefreshCw, XCircle, ArrowUpRight } from 'lucide-react';

interface WebsitePreviewProps {
  url: string;
  title: string;
  techStack?: string[];
  contribution?: string;
  isLive?: boolean;
  statusText?: string;
}

/**
 * The WebsitePreview component renders an iframe inside a styled, responsive container
 * to simulate a desktop browser view for portfolio presentation.
 * It includes a warning about common cross-origin embedding issues.
 */
const WebsitePreview: React.FC<WebsitePreviewProps> = ({ url, title, techStack, contribution, isLive = true, statusText }) => {
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const iframeKey = url; // Use URL as key to force remount/reload when URL changes

  const handleIframeLoad = () => {
    setIsIframeLoading(false);
    // Note: We cannot reliably detect if a security block occurred here.
    // We only know if the initial loading process finished.
  };

  const handleIframeError = () => {
    setIsIframeLoading(false);
    setLoadError(true);
  }

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-2xl transition-all duration-300 hover:shadow-3xl border border-gray-100 w-full group">
      <div className="flex justify-between items-start mb-3">
        <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{title}</h2>
        {contribution && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 border border-purple-200">
            My Contribution: {contribution}
          </span>
        )}
      </div>

      {/* Browser Frame Container */}
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border-b-4 border-gray-900 mb-4 w-full h-80 sm:h-96 relative ring-1 ring-gray-900/5">
        {/* Browser Top Bar */}
        <div className="flex items-center p-3 border-b border-gray-700 bg-gray-800">
          <div className="flex space-x-2 mr-4">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <div className="flex-1 bg-gray-900/50 text-xs text-gray-400 px-3 py-1.5 rounded-md truncate flex justify-between items-center font-mono">
            {url}
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 ml-2 transition-colors" title="Open in new tab">
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Iframe Content Area */}
        <div className="w-full h-full relative bg-white">
          {isIframeLoading && (
            <div className="absolute inset-0 bg-gray-50 flex flex-col items-center justify-center z-10">
              <RefreshCw className="w-8 h-8 text-blue-500 animate-spin mb-3" />
              <p className="text-gray-500 font-medium animate-pulse">Loading preview...</p>
            </div>
          )}

          {loadError ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-50 p-6 text-center">
              <XCircle className="w-12 h-12 text-red-500 mb-3" />
              <p className="text-lg font-semibold text-red-700 mb-1">Preview Unavailable</p>
              <p className="text-red-600 text-sm max-w-xs mx-auto">This website cannot be embedded due to security restrictions.</p>
              <a href={url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium">
                Visit Website <ArrowUpRight size={14} className="ml-1.5" />
              </a>
            </div>
          ) : (
            <iframe
              key={iframeKey}
              src={url}
              title={`Preview of ${title}`}
              className="w-full h-full border-0"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
            />
          )}
        </div>
      </div>

      {/* Tech Stack */}
      {techStack && techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span key={index} className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Footer / Status */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center">
          <div className={`w-2 h-2 rounded-full mr-2 ${isLive ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
          {isLive ? 'Live Project' : (statusText || 'Not Live')}
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group-hover:underline">
          Visit Site <ArrowUpRight size={14} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default WebsitePreview;
