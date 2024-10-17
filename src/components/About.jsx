import React from 'react'

const About = () => {
  return  <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
  >
    <div className='max-w-screen-lg p-5 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-9'>
            <h1 className='text-4xl font-bold inline border-b-4 border-gray-500'>About</h1>
        </div>
      
        <br  />
        <p className='text-xl'> 
        Hello! I'm a passionate BSCS student at Lahore College for Women University 
        (LCWU), constantly striving to deepen my knowledge in the tech world. I 
        recently completed an exciting course in Artificial Intelligence, which 
        sparked my interest in innovative problem-solving. Currently, I'm honing 
        my skills in front-end web development, creating dynamic and responsive 
        websites. My goal is to merge my AI expertise with web development to build
         intelligent, user-friendly applications. I'm always eager to learn and 
         take on new challenges that push the boundaries of technology.</p>
        </div>
  </div>;
  
};

export default About
