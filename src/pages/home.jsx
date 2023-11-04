import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { FooterWithSocialLinks } from "./footer";

export default function home(){
    return (

      <div className="text-center w-full  bg-no-repeat bg-cover h-full bg-center bg-full 
       bg-[url('https://img.freepik.com/photos-gratuite/entreprise-concept-entrevue-emploi_1421-77.jpg?w=996&t=st=1697183418~exp=1697184018~hmac=b36a205278c40a6207578ff5e678209b83d876b530844798d6da4cc36438fe50')]
       ">
       
        <nav className="bg-clip-color text-transparent bg-gradient-to-r from-teal-400 to-blue-950 justify-between">
        
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex">
        
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center sm:mr-4 md:mr-8 lg:mr-12">
                <img
                  className="h-8 w-auto"
                  src="https://www.althea.mg/wp-content/themes/hello-theme-child/images/logo-althea-380x110.png"
                  alt="Your Company"
                />
              </div>
              <div className="sm:float-right ml-[60rem] pb-12 pr-20">
          <FooterWithSocialLinks/>
          </div>    
              </div>
              </div>
              </div>

         
              </nav>
    
     <div className="mt-48">
    
        <h1 className="font-bold text-7xl text-blue-950 items-center pt-22 pb-10">Bienvenue! <br/> Cherchez-vous un emplois?</h1>
      <span className="text-3xl font-semibold text-blue-950  ">Veillez cliquer sur le boutton ci-dessous pour consulter les offres que notre société vous propose</span> <br /> <br /> <br />
      <br /> <br />
      <Link to={'/login'} className="inline-flex w-full justify-center mb-28 rounded-md bg-teal-600 px-3 py-2 text-2xl font-semibold text-white shadow-sm hover:bg-blue-950 sm:ml-3 sm:w-auto "> 
      Consulter </Link>
     </div>
   
      </div>

    );
  };
  