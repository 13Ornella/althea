import { Link } from "react-router-dom";
import React from "react";
import { useState, useEffect } from 'react';
import Header from "../Header";
import axios from 'axios';

export default function loginPage(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/users', formData);
      console.log('Response from server:', response.data);
      // Vous pouvez faire quelque chose avec la réponse du serveur ici
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

    return (
      <div className=" bg-no-repeat bg-cover h-full bg-center bg-[url('')]">
      <div className="flex mt-4  "> 
         <div className="justify-center flex flex-1 flex-col ">
         <img class="mx-auto h-10 w-auto mt-8 block" src="https://www.althea.mg/wp-content/themes/hello-theme-child/images/logo-althea-380x110.png"/>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border border-gray-300 shadow-md rounded-md w-min p-4">
            
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                          <h2 className="mt-1 mb-4 text-center text-2xl font-bold leading-9 tracking-tight text-blue-950">
              Se connecter
            </h2>
          </div>

            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Pseudo
                </label>
                <div className="mt-2">
                <input
                  id="pseudo"
                  name="name"
                  type="text"
                  autoComplete="pseudo"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                /> 
                </div>
              </div>

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
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
                  type="text"
                  autoComplete="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
              </div>

              <div>
                <Link to={'/offre'}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Connexion
                </Link>
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