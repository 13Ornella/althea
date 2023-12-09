import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

export default function Sidebar(){
  return( 
<div className="flex flex-row h-screen w-screen overflow-hidden mr-[11rem]">

        <div className="bg-clip-color bg-gradient-to-b from-teal-400 to-blue-950 w-[11rem] fixed "> 

    <div className="flex-shrink-0  justify-center mt-6 mr-12 ml-12 pb-2">
      <img class="h-12 w-30 text-center" 
      src="https://www.althea.mg/wp-content/themes/hello-theme-child/images/logo-althea-380x110.png"/>
    </div>
    <div className=" sm:ml-6">
     
        </div>
<div className="space-y-4 items-center">
        
        <Link to={"/store"} className="text-gray-300 hover:bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-semibold flex" aria-current="page">
        <svg className="w-6 h-6 text-white dark:text-white p-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
</svg> Accueil</Link>

        <Link to={"/offre"} className="text-gray-300 hover:bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-semibold flex">
        <svg className="w-6 h-6 text-white dark:text-white p-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z"/>
<path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z"/>
</svg>Offres</Link>

        <Link to={"/candidature"} className="text-gray-300 hover:bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-semibold flex">
        <svg className="w-6 h-6 text-white dark:text-white p-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
<path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
</svg> Candidatures</Link>

        <Link to={"/stat"} className="text-gray-300 hover:bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-semibold flex "> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white mb-1 pl-1">
  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z" clipRule="evenodd" />
</svg>

        Statistique</Link>
      </div>

      <div className="border-b border-gray-100 pt-36 mt-60  mx-2 mb-3"></div>
 
<div className="flex gap-8 text-blue-gray-900 sm:justify-center mb-30">
  
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100 text-white flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mt-0.5 text-white">
            <path fillRule="evenodd" d="M15.22 3.22a.75.75 0 011.06 0L18 4.94l1.72-1.72a.75.75 0 111.06 1.06L19.06 6l1.72 1.72a.75.75 0 01-1.06 1.06L18 7.06l-1.72 1.72a.75.75 0 11-1.06-1.06L16.94 6l-1.72-1.72a.75.75 0 010-1.06zM1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                        </svg>
                        <Link to={'/contact'} className="ml-2 mb-10 font-semibold text-sm hover:underline">Nous contacter</Link>
            </Typography>
          </div>
  </div>
  </div>
  )
}

