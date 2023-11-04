import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import axios from 'axios';

export default function RegisterPage(){
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const handleSubmit= (e) => {
    e.preventDefault()
   axios.get('http://localhost:8080/register',{name, email, password})
   .then(result => console.log(result))
   .catch(err=> console.log(err))
  }

    return (  
      <div> 
<div className="flex mt-4">
  
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <img class="mx-auto h-10 w-auto mb-8 block" src="https://www.althea.mg/wp-content/themes/hello-theme-child/images/logo-althea-380x110.png"/>
          <div className=" sm:mx-auto sm:w-full sm:max-w-sm border border-gray-300 shadow-md rounded-md w-min p-4">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm flex ">
           
           <h2 className="mt-1 mx-auto mb-4 text-center text-2xl font-bold leading-9 tracking-tight text-blue-950">
             Créer votre compte
           </h2>
         </div>

            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>

            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Pseudo
                </label>
                <div className="mt-2">
                  <input id="pseudo" name="Pseudo" type="text" 
                  value={name} 
                  onChange={e => setName(e.target.value)} 
                  autoComplete="pseudo" required className="block w-full rounded-md p-1 border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                 </label>
                <div className="mt-2">
                  <input id="email" name="email" type="email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                   autoComplete="email" required className="block w-full rounded-md border-0 p-1 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium  leading-6 text-gray-900">
                    Mot de passe
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-teal-500 hover:text-blue-950">
                      Créer un mot de passe
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input id="password" name="password" type="password" 
                  value={password} 
                  onChange={e => setPassword(e.target.value)}  autoComplete="current-password" required 
                  className="block w-full rounded-md border-0 py-1.5 text-gray-500 p-1 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
              </div>
  
              <div>
                <button
                  type="Submit"
                  className="flex w-full justify-center rounded-md bg-blue-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white 
                  shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Créer
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-blue-950 ">
              Vous êtes déjà membre?{' '}
              <Link to={'/index'} className="font-bold leading-6 text-teal-500 ">
                Se connecter
              </Link>
            </p>
          </div>
        </div>
        </div> 
        </div> 
    );
}