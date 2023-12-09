import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Header from "../Header";
import Candidature from "./candidature";
import Flydash1 from "./flydash1";
import { RingLoader } from 'react-spinners';

export default function accountPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const offreId = searchParams.get("id");
  const [file, setFile] = useState();
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
    postule:'',
    offreId: offreId
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const formD = new FormData()
      formD.append('nom', formData.nom)
      formD.append('prenom', formData.prenom)
      formD.append('email', formData.email)
      formD.append('telephone', formData.telephone)
      formD.append('situation', formData.situation)
      formD.append('sexe', formData.sexe)
      formD.append('domaine', formData.domaine)
      formD.append('niveau', formData.niveau)
      formD.append('experience', formData.experience)
      formD.append('adresse', formData.adresse)
      formD.append('postule', formData.postule)
      formD.append('offreId', offreId)
      formD.append('file',file)
      const response = await axios.post('http://localhost:3001/account', formD);
      console.log('Response from server:', response.data);
      alert ("Informations enregistrées avec succes! Vous allez recevoir un message d'alerte pour l'entretien si vous avez les compétences requises")
      // Vous pouvez faire quelque chose avec la réponse du serveur ici

      /*const formD = new FormData()
      formD.append('formData', formData)
      formD.append('file',file)
      axios.post('http://localhost:3001/account', formD)
      .then(res => {})
      .catch(err => console.log(err));*/

      setIsLoading(false);

    } catch (error) {
      console.error('Error:', error);

      setIsLoading(false);
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
     
    <div className="relative" >
      <Flydash1/>
    <Header/>
    <form  onSubmit={handleSubmit} method="POST">
      
      <div className="space-y-12 mt-6 mr-30 ml-30 place-content-center p-4">
          <h2 className=" font-bold leading-7 text-blue-950 text-3xl mt-20">Informations personnelles</h2>
         
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
                  className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  placeholder="Selectionner ici..."
                  className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
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
                  placeholder="Selectionnez ici..."
                  className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
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
                  className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
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
                  className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.experience}
                  onChange={handleChange}/>
              </div>
            </div>
          </div>
        
 <div className="flex gap-x-10 mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="domaine" className="block text-sm font-medium leading-6 text-gray-900">
                Adresse
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="adresse"
                  id="adresse"
                  className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.adresse}
                  onChange={handleChange}
                />
              </div>
              </div>

              <div className="sm:col-span-2 ">
              <label htmlFor="domaine" className="block text-sm font-medium leading-6 text-gray-900">
                Date
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="postule"
                  id="postule"
                  className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.postule}
                  onChange={handleChange}
                />
              </div>
              </div>
              </div>
            <div className="sm:col-span-2 sm:col-start-1">
            <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                Votre CV
              </label>
              <div className="mt-2 flex">
                <input 
                  type="file"
                  name="file"
                  id="cv"
                  className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e)=>setFile(e.target.files[0])}
                />
              </div>
              </div> 

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link to={'/home'} type="button" className="rounded-md bg-gray-100 px-2.5 py-1.5 text-teal-500 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Annuler
        </Link>
        <button
            type="submit"
            className="rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 relative"
            disabled={isLoading} // Disable the button when isLoading is true
          >
            {isLoading && (
              <span className="absolute inset-0 flex items-center justify-center">
                {/* Use the RingLoader from react-spinners */}
                <RingLoader color={'#ffffff'} loading={isLoading} size={30} />
              </span>
            )}
            Enregistrer
          </button>
        </div>
      </div>
    
    </form>
    </div>
    </div>
  )
}

