import React from 'react';

const Contact = () => {
    return (
        <div
            name="contact"
        className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Contact
                    </p>
                    <p className="py-6">Submit the form below to get in touch with me</p>
                </div>
                <div className="flex justify-center items-center">
                    <form
                        action="https://getform.io/f/bmdpqmoa"
                        method="POST"
                        className="flex flex-col w-full max-w-md mx-auto" 
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 transition duration-300"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 transition duration-300"
                        />
                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            rows="5" 
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 transition duration-300"
                        ></textarea>
                        <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300">
                            Let's Talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;

