import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-[80%] bg-gradient-to-b from-gray-800 to-black text-white py-7"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline  border-gray-500">
            <span className="border-b-4 border-gray-500">About</span> 
          </p>
        </div>

        <p className="text-xl mt-20 mb-12">
          I am Currently Pursuing my Undergraduate in Dr.Mahalingam College of Engineering & Technology , I am Majoring in Computer Science . I'm involved as a member in Institution's Innovation Council of MCET , where i can enrich & explore my skill and knowledge with an community. I also serve as a Frontend Developer  in Team TechSquad Organizing were i could explore & experiment about web developing. I am open to opportunities for the same.
        </p>

        <br />
      </div>
    </div>
  );
};

export default About;
