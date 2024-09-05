import React from 'react';

const CVPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-8">My CV</h1>
      <div className="w-full h-screen flex justify-center items-center">
        <iframe
          src="/docs/cv_bayle_matheo-1.pdf"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          title="My CV"
        />
      </div>
    </div>
  );
};

export default CVPage;