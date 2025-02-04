import React from "react";
import cert1 from "../assert/certificate/cert1.png";
import cert2 from "../assert/certificate/cert2.png";
import cert3 from "../assert/certificate/cert3.pdf";
import cert4 from "../assert/certificate/cert4.png";
import cert5 from "../assert/certificate/cert5.png";
import cert6 from "../assert/certificate/cert6.png";
import cert7 from "../assert/certificate/cert7.png";
import cert8 from "../assert/certificate/cert8.png";
import cert9 from "../assert/certificate/cert9.png";
import cert10 from "../assert/certificate/cert10.png";

const certificates = [
  {
    title: "Artificial Intelligence Certificate",
    issuer: "Arfa Karim Technology Incubator",
    date: "September 2024",
    image: cert1,
  },
  {
    title: "Web Development Certificate",
    issuer: "XOUNITY",
    date: "December 2024" ,
    image: cert2,
  },
  {
    title: "University Event",
    issuer: "Data Seekho",
    date: " november 2024",
    image: cert3,
  },
  {
    title: "ChatGPT & Transformers",
    issuer: "Data Seekho",
    date: "December 2024",
    image: cert4,
  },
  {
    title: "Computer Vision",
    issuer: "Data Seekho",
    date: "January 2025",
    image: cert5,
  },
  {
    title: "Data Analysis",
    issuer: "Data Seekho",
    date: "January 2025",
    image: cert6,
  },
  {
    title: "AI & Digital Marketing",
    issuer: "Data Seekho",
    date: "January 2025",
    image: cert7,
  },
  {
    title: "Generative AI",
    issuer: "Data Seekho",
    date: "January 2025",
    image: cert8,
  },
  {
    title: "Langchain & LLMs",
    issuer: "Data Seekho",
    date: "January 2025",
    image: cert9,
  },
  {
    title: "RAG",
    issuer: "Data Seekho",
    date: "January 2025",
    image: cert10,
  },
];

export default function Certificate() {
  return (
    <div className="h-auto w-full bg-gradient-to-b from-black via-black to-gray-800 ">
      <h2 className="text-4xl py-4textfont-bold text-center mb-5 text-white">🎓 Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
        {certificates.map((cert, index) => (
          <div key={index} className="rounded-lg shadow-lg overflow-hidden bg-gray-900 hover:scale-105 transition-transform duration-300">
            <img src={cert.image} alt={cert.title} className="w-full h-48 object-cover" />
            <div className="p-5 text-center text-white">
              <h3 className="text-xl font-semibold">{cert.title}</h3>
              <p className="text-gray-400">{cert.issuer}</p>
              <p className="text-sm text-gray-500">{cert.date}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
