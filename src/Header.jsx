import React from "react";
import FlyoutMenu from "./pages/flyoutMenu";
import './App.css';
import Flydash from "./pages/Flydash";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="gap-20 fixed w-full">
      <Flydash/>
      <nav className="bg-clip-color text-transparent bg-gradient-to-r from-teal-400 to-blue-950 justify-between  ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center sm:mr-4 md:mr-8 lg:mr-12">
               <Link to={'/dashboard'}> <img
                  className="h-8 w-auto"
                  src="https://www.althea.mg/wp-content/themes/hello-theme-child/images/logo-althea-380x110.png"
                  alt="Your Company"
                /> </Link>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Contenu des éléments du côté droit du header */}
            </div>
          </div>
        </div>

        <div className="sm:hidden " id="mobile-menu">
          {/* Votre menu mobile */}
        </div>
      </nav>
    </div>
  );
}

