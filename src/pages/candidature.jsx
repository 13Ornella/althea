import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import SupprimerCandidat from "./supprimerCandidat";
import Flydash2 from "./flydash2";

export default function Candidature(){
  const [candidature, setCandidature] = useState([]);
  const [nbOffre, setNbOffre] = useState([]);
  const [isOpenSuppr, setOpenSuppr] = useState(false);
  const [candidatures, setCandidatures] = useState([]);
  const [selectedCandidateId, setSelectedCandidateId] = useState(null);
  const [filteredCandidatures, setFilteredCandidatures] = useState([]);
  const [selectedOffreId, setSelectedOffreId] = useState(null);
  const [search, setSearch] = useState('');


  const openSuppr = (offreId) => {
    setSelectedCandidateId(offreId);
    setOpenSuppr(true);
  };

  const handleSearchInputChange = (event) => {
    setSearch(event.target.value);
  };
 
  const closeSuppr = () => {
    setOpenSuppr(false);
  };

  useEffect(() => {
    axios.get('http://localhost:3001/nbOffre')
      .then((response) => {
        setNbOffre(response.data);
      })
      .catch((error) => {
        console.error('Erreur' + error);
      });
  }, []);

  useEffect(() => {
    if (search) {
      const filtered = candidatures.filter((candidature) => {
        return candidature.nom.toLowerCase().includes(search.toLowerCase());
      });
      setFilteredCandidatures(filtered);
    } else {
      setFilteredCandidatures(candidatures);
    }
  }, [search, candidatures]);

  const deleteCandidat = (id) => {
    axios.delete(`http://localhost:3001/candidature/${id}`)
      .then((response) => {
        // Update the local state to remove the deleted "offre"
        setCandidatures(candidatures.filter(item => item.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting "candidature":', error);
      });
  };

  useEffect(()=>{
    axios.get('http://localhost:3001/candidature')
    .then((response) => {
      setCandidature(response.data);
    })
    .catch((error)=>{
      console.error('Erreur'+error);
    });
  },[]); 

  useEffect(() => {
    if (selectedOffreId) {
      axios.get(`http://localhost:3001/candidature/offre/${selectedOffreId}`)
        .then((response) => {
          setCandidatures(response.data);
        })
        .catch((error) => {
          console.error('Erreur' + error);
        });
    } else {
      axios.get('http://localhost:3001/candidature')
        .then((response) => {
          setCandidatures(response.data);
        })
        .catch((error) => {
          console.error('Erreur' + error);
        });
    }
  }, [selectedOffreId]);

    return(
  <div>
    <Header/>
    <Flydash2/>
        <div className="p-5 h-screen ">
        <div className="relative fixed float-right mt-10">
<form method="POST" action="/search" className="lg:w-[24rem]">
        <input type="text" 
        placeholder="Recherche..."
        value={search}
        onChange={handleSearchInputChange}
        className="pl-8 bg-inherit text-sm focus:outline-none active:outline-none mt-2.5 ml-2.5 h-10 w-[24rem] border border-gray-300 
        rounded-md shadow-md px-4" />
   <svg className="w-5 h-5 text-gray-800 dark:text-gray-400 absolute mt-1 ml-4 top-1/2 -translate-y-1/2" 
   aria-hidden="true" 
   xmlns="http://www.w3.org/2000/svg" 
   fill="none" 
   viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>  
        </form> 
</div> <br /> <br />
<div class=" gap-4 grid grid-cols-2 ">
            <div className="flex gap-2 bg-white rounded-sm pt-1 flex-1 border-gray-200 shadow-md ronded-md h-10">
            <svg class="w-8 h-8 text-gray-800 dark:text-blue-950 border border-gray-100 bg-gray-100 rounded-full p-1"
             aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z"/>
<path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z"/>
</svg> 
{Array.isArray(nbOffre) && (
  <div className="font-bold text-xl text-blue-950 mb-10">

    Offres: {nbOffre.length}
    <select
      value={selectedOffreId}
      onChange={(e) => setSelectedOffreId(e.target.value)}
      className="ml-10"
    >
      <option value="" className="text-sm font-semibold text-blue-950"></option>
      {nbOffre.map((callout, index) => (
        <option key={index} value={callout.id}  className="text-sm font-semibold text-blue-950">
          {callout.name}
        </option>
      ))}
    </select>
  </div>
)}

</div>
          
 
</div>
          <div className="overflow-auto rounded-lg shadow mt-4">
<table class="w-full">
  <thead className="bg-gray-300 boder-b-2 border-gray-300">
    <tr>
      <th className="p-3 text-sm font-semibold tracking-wide text-left">Nom</th>
      <th className="p-3 text-sm font-semibold tracking-wide text-left">Prenom</th>
      <th className="p-3 text-sm font-semibold tracking-wide text-left">Email</th>
      <th className="p-3 text-sm font-semibold tracking-wide text-left">Telephone</th>
      <th className="p-3 text-sm font-semibold tracking-wide text-left">Situation matrimoniale</th>
      <th className="p-3 text-sm font-semibold tracking-wide text-left">Sexe</th>
      <th className="p-3 text-sm font-semibold tracking-wide text-left">Domaine d'etude</th>
      <th className="p-3 text-sm font-semibold tracking-wide text-left">Niveau d'etude</th>
      <th className="p-3 text-sm font-semibold tracking-wide text-left">Experience</th>
      <th className="p-3 text-sm font-semibold tracking-wide text-left">Adresse</th>
      <th className="p-3 text-sm font-semibold tracking-wide text-left">Date</th>
      <th className="p-3 text-sm font-semibold tracking-wide text-left">Voir</th>
      <th className="p-3 text-sm font-semibold tracking-wide text-left">Supprimer</th>
    </tr>
  </thead>

  {Array.isArray(filteredCandidatures) &&
  filteredCandidatures.map((callout, index) => (
    <tbody key={index}>
      <tr key={index}>
    <td className="hidden">{callout.id}</td>
    <td className="p-3 text-sm text-gray-600">{callout.nom}</td>
    <td className="p-3 text-sm text-gray-600">{callout.prenom}</td>
      <td className="p-3 text-sm text-gray-600 flex">{callout.email}</td>
      <td className="p-3 text-sm text-gray-600">{callout.telephone}</td>
      <td  className="p-3 text-sm text-gray-600">{callout.situation}</td>
      <td  className="p-3 text-sm text-gray-600">{callout.sexe}</td>
      <td  className="p-3 text-sm text-gray-600">{callout.domaine}</td>
      <td  className="p-3 text-sm text-gray-600"> {callout.niveau}</td>
      <td  className="p-3 text-sm text-gray-600">{callout.experience} ans </td>
      <td  className="p-3 text-sm text-gray-600">{callout.adresse}</td>
      <td  className="p-3 text-sm text-gray-600">{new Date(callout.postule).toLocaleDateString()}</td>
      <td className="p-4 text-sm text-gray-600"><Link to={`/candidat?id=${callout.id}`}>
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
      <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
      </Link></td>
      <td className="p-4 text-sm text-gray-600">
    <svg xmlns="http://www.w3.org/2000/svg" 
    height="1.5em" 
    viewBox="0 0 448 512"
    onClick={() => openSuppr(callout.id)}><path d="M135.2 17.7L128 
      32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 
      0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
    </td>
    </tr>
      </tbody>
       ))}
       </table>
      
</div>
{isOpenSuppr && (
  <SupprimerCandidat
    setSelectedCandidateId={selectedCandidateId} // Pass the selectedOffreId as a prop
    onDelete={() => {
      // Define your delete functionality here
      deleteCandidat(selectedCandidateId);
      setOpenSuppr(false); // Close the modal after deletion
    }}
    onClose={() => setOpenSuppr(false)} // Close the modal on cancel
  />
)}
</div>
</div>
    );
}