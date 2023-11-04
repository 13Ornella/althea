import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Header from "../Header";
import Candidature from "./candidature";

export default function accountPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const offreId = searchParams.get("id");
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone:'',
    situation:'',
    sexe:'',
    domaine:'',
    niveau:'',
    experience:'',
    adresse:'',
    cv:'',
    offreId: offreId
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/account', formData);
      console.log('Response from server:', response.data);
      alert ("Informations enregistrées avec succes!")
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
    <div>
      
    <div >
    <form className="mt-30" onSubmit={handleSubmit} method="POST">
      
      <div className="space-y-12 mt-6 mr-30 ml-30 place-content-center p-4">
        

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className=" font-bold leading-7 text-blue-950 text-2xl">Informations personnelles</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Utilisez une adresse permanente pour recevoir les emails.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
          <input
            type="hidden"
            id="offreId"
            name="offreId"
            value={formData.offreId}
            readOnly
          />
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Nom
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="nom"
                  id="nom"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.nom}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Prénom
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="prenom"
                  id="prenom"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.prenom}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="sm:col-span-3 ">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="sm:col-span-3 ">
            <label htmlFor="telephone" className="block text-sm font-medium leading-6 text-gray-900">
                Téléphone
              </label>
              <div className="mt-2">
                <input
                  id="telephone"
                  name="telephone"
                  type="number"
                  autoComplete=""
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.telephone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="situation" className="block text-sm font-medium leading-6 text-gray-900">
                Situation matrimoniale
              </label>
              <div className="mt-2">
                <select
                  id="situation"
                  name="situation"
                  autoComplete="country-name"
                  placeholder="Selectionner ici..."
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  value={formData.situation}
                  onChange={handleChange}
                >
                  <option>  </option>
                  <option> Célibataire </option>
                  <option>  Marié(e) </option>
                  <option>  Veuf(ve) </option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3 ">
            <label htmlFor="sexe" className="block text-sm font-medium leading-6 text-gray-900">
                Sexe
              </label>
              <div className="mt-2">
                <select
                  id="sexe"
                  name="sexe"
                  autoComplete="country-name"
                  placeholder="Selectionnez ici..."
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  value={formData.sexe}
                  onChange={handleChange}
                >
                  <option>  </option>
                  <option>  Féminin </option>
                  <option>  Masculin </option>
                 
                </select>
                </div>
            </div>
            
            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                Domaine d'etude
              </label>
              <div className="mt-2 flex">
                <input
                  type="text"
                  name="domaine"
                  id="domaine"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.domaine}
                  onChange={handleChange}/>
              </div>
            </div>
           
        

            <div className="sm:col-span-2">
              <label htmlFor="niveau" className="block text-sm font-medium leading-6 text-gray-900">
                Niveau d'étude
              </label>
              <div className="mt-2">
              <select
                  id="niveau"
                  name="niveau"
                  autoComplete=""
                
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                  value={formData.niveau}
                  onChange={handleChange}
                >
                  <option placeholder="Selectionnez ici..." >   </option>
                  <option>  CEPE </option>
                  <option>  BEPC </option>
                  <option>  BAC </option>
                  <option> Licence</option>
                  <option> Master</option>
                  <option> Doctorat</option>
                  <option> professorat</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="exp" className="block  text-sm font-medium leading-6 text-gray-900">
                Experiences
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="experience"
                  id="experience"
                  autoComplete="postal-code"
                  className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.experience}
                  onChange={handleChange}/>
              </div>
            </div>
          </div>
        </div>
 
        <div className="sm:col-span-2 ">
              <label htmlFor="domaine" className="block text-sm font-medium leading-6 text-gray-900">
                Adresse
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="adresse"
                  id="adresse"
                  autoComplete=""
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.adresse}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
            <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                Votre CV
              </label>
              <div className="mt-2 flex">
                <input 
                  type="file"
                  name="cv"
                  id="cv"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.cv}
                  onChange={handleChange}
                />
              </div>
              </div> 

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link to={'/home'} type="button" className="rounded-md bg-gray-100 px-2.5 py-1.5 text-teal-500 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Annuler
        </Link>
        <button 
          type="submit"
          className="rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline 
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
        >
          Enregistrer
        </button>
        </div>
      </div>
    
    </form>
    </div>
    </div>
  )
}

