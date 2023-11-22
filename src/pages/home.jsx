import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { FooterWithSocialLinks } from "./footer";

export default function home(){
    return (

      <div className="text-center w-full  bg-no-repeat bg-cover bg-center bg-full 
       bg-[url('https://t4.ftcdn.net/jpg/03/13/81/29/240_F_313812975_F9Cwe0FC5sjYjFy1UylgNSP6U2pBQygV.jpg')]
       ">
       
        <nav className="bg-clip-color text-transparent bg-gradient-to-r from-teal-400 to-blue-950 justify-between">
        
        <div className="mx-auto max-w-10xl sm:px-6 lg:px-8 flex">
        
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center sm:mr-4 md:mr-8 lg:mr-12">
                <img
                  className="h-8 w-auto"
                  src="https://www.althea.mg/wp-content/themes/hello-theme-child/images/logo-althea-380x110.png"
                  alt="Your Company"
                />
              </div>
              <div className="sm:float-right ml-[65rem] mt-1">
  <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100 text-white flex">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mt-0.5 text-white">
  <path fillRule="evenodd" d="M15.22 3.22a.75.75 0 011.06 0L18 4.94l1.72-1.72a.75.75 0 111.06 1.06L19.06 6l1.72 1.72a.75.75 0 01-1.06 1.06L18 7.06l-1.72 1.72a.75.75 0 11-1.06-1.06L16.94 6l-1.72-1.72a.75.75 0 010-1.06zM1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
              <Link to={'/contact'} className="ml-2 mt-0.5 font-semibold text-base hover:underline">Nous contacter</Link>
  </Typography>
</div>  
              </div>
              </div>
              </div>

         
              </nav>
    
     <div className="mt-48">
    
        <h1 className="font-bold text-7xl text-blue-950 items-center pt-22 pb-10">Bienvenu(e)! <br/> Cherchez-vous un emplois?</h1>
      <span className="text-3xl font-semibold text-blue-950  ">Veillez cliquer sur le boutton ci-dessous pour consulter les offres que notre société vous propose</span> <br /> <br /> <br />
      <br /> <br />
      <Link to={'/canoffre'} className="inline-flex w-full justify-center mb-28 rounded-md bg-teal-600 px-3 py-2 text-2xl font-semibold text-white shadow-sm hover:bg-blue-950 sm:ml-3 sm:w-auto "> 
      Consulter </Link>
     </div>
   
      </div>

    );
  };
  