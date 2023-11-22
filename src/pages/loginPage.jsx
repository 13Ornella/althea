import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useState } from 'react';
import Header from "../Header";
import axios from 'axios';
import Validation from "./loginValidation";
import useAuthentication from "./Authentification";

export default function loginPage(){
  const { handleLogin } = useAuthentication();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({}); // Utilisation d'un objet pour les erreurs
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = Validation(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const isAuthenticated = await handleLogin(formData);
      if (isAuthenticated) {
        navigate("/dashboard");
      } else {
        alert("Erreur d'authentification");
      }
    }
  };

    return (
      <div className=" flex">
          <div className="w-1/2 h-screen" >
          <div className="flex items-center justify-center h-full bg-no-repeat bg-cover h-full bg-center bg-full bg-opacity-{20}
       bg-[url('https://t3.ftcdn.net/jpg/03/57/42/44/240_F_357424456_opkWVSfxNmiFdQe4tRoWsXxZa8IRSkH7.jpg')]
       ">
            <div className="px-4 py-6 mx-4 md:mx-8 text-white">
              <h4 className="mb-4 text-4xl text-blue-950 font-bold">GESTION DE RECRUTEMENT ALTHEA</h4>
              <p className="text-2xl text-blue-950 font-bold text-center"> 
               Bienvenu! administrateur 
              </p> <br /> <br />
              <p className="text-xl text-blue-950 font-semibold text-center">
               Pour acceder a votre tableau de bord, veillez vous connectez a votre compte.
               <br/> Si vous etes nouveau, cliquez sur le lien et creez votre compte
              </p>
            </div>
          </div>
        </div>
      <div className="flex mt-4 w-1/2 "> 
         <div className="justify-center flex flex-1 flex-col ">
         <img className="mx-auto h-10 w-auto mt-8 block" src="https://www.althea.mg/wp-content/themes/hello-theme-child/images/logo-althea-380x110.png"/>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border border-gray-300 shadow-md rounded-md w-min p-4">
            
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                          <h2 className="mt-1 mb-4 text-center text-2xl font-bold leading-9 tracking-tight text-blue-950">
              Se connecter
            </h2>
          </div>

            <form className="space-y-6" action="" method="POST" onSubmit={handleSubmit} >
                          <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  onChange={handleInput}
                  required
                  className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email && <span>{errors.email}</span>}
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Mot de passe
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-teal-500 hover:text-indigo-500">
                      Mot de passe oublié?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  onChange={handleInput}
                  className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-gradient-to-r from-teal-400  to-blue-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Connexion
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Vous n'êtes pas encore membre?{' '}
              <Link to={'/register'} className=" text-teal-500 font-bold" >
                 Creer un nouveau compte 
              </Link>
            </p>
          </div>
        </div>  
        </div> 
        </div>
        
    );
    }