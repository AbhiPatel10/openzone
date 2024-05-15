import React from 'react';

const ProjectDescriptionSection: React.FC = () => {
  return (
    <section className="py-12 text-center border-b border-gray-300">
      <div className="container mx-auto px-5">
        <h1 className="text-5xl font-bold text-primary my-10">Welcome to the OpenZone!</h1>
        <p className="text-2xl md:text-2xl text-gray-700">
          This platform aims to simplify the process of finding and contributing to open-source projects. Whether you're a seasoned contributor or just starting out, this platform will help you discover projects aligned with your interests and skills.
        </p>
      </div>
    </section>
  );
};

export default ProjectDescriptionSection;