import React from "react";
import Alan from "../assets/portfolio/Alan.jpg";
import GooleKeep from "../assets/portfolio/google keep.jpg";
import CRED from "../assets/portfolio/CRED.png";
import Movie from "../assets/portfolio/Movie.jpg";
import Nike from "../assets/portfolio/Nike Ecommerce.avif";
import Disney from "../assets/portfolio/disney.jpg"


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "DisneyPlus Clone",
      src: Disney,
      href: "https://disney-plus-clone-gilt-six.vercel.app/",
    },
    {
      id: 2,
      title: "News Reader AI",
      src: Alan,
      href: "https://devadharsan-k.github.io/news-reader-ai/",
    },
    {
      id: 3,
      title: "Google Keep Clone",
      src: GooleKeep,
      href: "https://devadharsan-k.github.io/Google-keep-clone/",
    },
    {
      id: 4,
      title: "Nike Ecommerce",
      src: Nike,
      href: "https://devadharsan-k.github.io/Shoe_Ecommerce/",
    },
    {
      id: 5,
      title: "Movie Streaming",
      src: Movie,
      href: "https://devadharsan-k.github.io/bs-movie/#",
    },
    {
      id: 6,
      title: "CRED UI",
      src: CRED,
      href: "https://devadharsan-k.github.io/CRED-clone/"
    },
  ];

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen py-7"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-24">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 sm:px-0">
          {portfolios.map(({ id, src, title, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-full h-40 object-cover"
              />
              <div className=" items-center justify-center">
                <p className="text-center mt-4 text-lg ">{title}</p>
                <button className="w-full px-6 text-center py-4 m-2 duration-200 hover:scale-105">
                 <a target="_blank" rel="noreferrer" href={href}>Demo</a>  
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
