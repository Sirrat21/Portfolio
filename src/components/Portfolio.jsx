import React from 'react';
import project1 from '../assert/portfolio/Project_01.JPG';
import project2 from '../assert/portfolio/Project_02.JPG';
import project3 from "../assert/portfolio/Project_03.jpeg";
import project4 from "../assert/portfolio/Project_04.jpeg";
import project5 from "../assert/portfolio/Project_05.jpeg";
import project6 from "../assert/portfolio/Project_06.jpeg";

function App() {
  const projects = [
    {
      title: "Project 1",
      description: "Mini Project - HTML & CSS Website",
      image: project1,
      liveLink: "https://mickeymouseweb.vercel.app/", 
    },
    {
      title: "Project 2",
      description: "Multi-page website for a fictional business.",
      image: project2,
      liveLink: "https://jocular-cascaron-972e6e.netlify.app/",
    },
    {
      title: "Project 3",
      description: "AI Agent - Image Recognition and Information Retrieval.",
      image: project3,
      liveLink: "http://localhost:8501/",
    },
    {
      title: "Project 4",
      description: "Llamarag - ChatBot",
      image: project4,
      liveLink: "http://localhost:8501/",
    },
    {
      title: "Project 5",
      description: "Instagram Caption Generator AI",
      image: project5,
      liveLink: "http://localhost:8501/",
    },
    {
      title: "Project 6",
      description: "GROQ - Poem and Image Generator",
      image: project6,
      liveLink: "https://your-groq-app.vercel.app",
    }
  ];

  return (
    <div className="h-auto w-full bg-gradient-to-b from-black via-black to-gray-800">
      <header className="text-white py-5 text-center">
        <h1 className="text-4xl font-bold">My Portfolio</h1>
        <p className="mt-2">Welcome to my project showcase</p>
      </header>    

      <main className="p-10">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
              <div className="p-5">
                <h2 className="text-white text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-white mb-3">{project.description}</p>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;