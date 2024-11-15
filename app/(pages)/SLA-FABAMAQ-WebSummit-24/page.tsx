"use client"

// pages/SLA-FABAMAQ-WebSummit-24.tsx
// pages/SLA-FABAMAQ-WebSummit-24.tsx

import { useState, useEffect } from 'react';

const SLAFabamaqWebSummit24 = () => {
  const [password, setPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const correctPassword = 'WEBSUMMIT24FABAMAQ'; // Replace with actual password

  useEffect(() => {
    // Detect if the user is on a mobile device
    setIsMobile(window.innerWidth <= 768);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthorized(true);
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 p-4">
      {!isAuthorized ? (
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
          <h2 className="text-2xl font-semibold mb-4">Protected Document</h2>
          <p className="mb-6 text-gray-600">Enter the password to view this document.</p>
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Password"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Unlock Document
            </button>
          </form>
        </div>
      ) : (
        <div className="w-full h-screen flex justify-center items-center bg-gray-100">
          {isMobile ? (
            <a
              href="/SLA-FABAMAQ-WebSummit-24.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Open PDF in New Tab
            </a>
          ) : (
            <div className="w-full h-full max-w-4xl max-h-screen overflow-auto">
              <iframe
                src="/SLA-FABAMAQ-WebSummit-24.pdf"
                className="w-full h-full min-h-[80vh] lg:min-h-full border"
                title="Protected PDF Document"
                style={{
                  minHeight: '80vh',
                  height: '100%',
                  width: '100%',
                  border: 'none',
                }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SLAFabamaqWebSummit24;
