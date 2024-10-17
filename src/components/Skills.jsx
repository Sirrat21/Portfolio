import React from 'react';

const Skills = () => {
  const skills = [ 
    { name: "C++", level: "Advanced" },
    { name: "Python", level: "Intermediate" },
    { name: "Machine Learning", level: "Intermediate" },
    { name: "Deep Learning", level: "Intermediate" },
    { name: "Data Analysis", level: "Advanced" },
    { name: "HTML", level: "Intermediate" },
    { name: "CSS", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Intermediate" },
  ];
  
  return (
    <div name="skills" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg mx-auto px-7">
        <h2 className="text-4xl font-bold text-center">My Skills</h2>
        <p className="text-center text-gray-400 mt-4">Here's a list of my technical skills</p>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center py-9 px-12 sm:px-0">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold">{skill.name}</h3>
              <p className="text-gray-400 mt-2">Proficiency: {skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
