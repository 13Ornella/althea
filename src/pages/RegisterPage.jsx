import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Header from "../Header";
import axios from 'axios';


export default function RegisterPage(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/users', formData);
      console.log('Response from server:', response.data);
      navigate('/login');
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

  /*const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        history.push('/login'); // Redirect to login page after registration
      } else {
        // Handle registration error
      }
    } catch (error) {
      console.error(error);
    }
  };*/
  
    return (  
      <div> 
<div className="flex">
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
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 w-1/2">
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
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                     onChange={handleChange} 
                  required
                  className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                 </label>
                <div className="mt-2">
                  <input id="email" name="email" type="email" 
                     value={formData.email}
                     onChange={handleChange} 
                   required 
                   className="block w-full p-3 rounded-md border-0 p-1 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
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
                    value={formData.password}
                    onChange={handleChange}  autoComplete="current-password" required 
                  className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-500 p-1 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
              </div>
  
              <div>
                <button
                  type="Submit"
                  className="flex w-full justify-center rounded-md bg-gradient-to-r from-teal-400  to-blue-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white 
                  shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Créer
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-blue-950 ">
              Vous êtes déjà membre?{' '}
              <Link to={'/login'} className="font-bold leading-6 text-teal-500 ">
                Se connecter
              </Link>
            </p>
          </div>
        </div>
        </div> 
        </div> 
    );
}
