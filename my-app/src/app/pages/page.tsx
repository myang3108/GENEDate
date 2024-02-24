"use client";
import React from 'react';

interface LinkItem {
  name: string;
  url: string;
}

const links: LinkItem[] = [
  { name: 'OpenAI', url: 'https://www.openai.com' },
  { name: 'GitHub', url: 'https://github.com' },
  { name: 'Stack Overflow', url: 'https://stackoverflow.com' },
  // Add more links as needed
];

const LinksPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Links</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100"
          >
            <h2 className="text-lg font-semibold">{link.name}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinksPage;