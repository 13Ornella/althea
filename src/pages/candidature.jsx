import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

export default function Candidature(){
  const [candidature, setCandidature] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3001/candidature')
    .then((response) => {
      setCandidature(response.data);
    })
    .catch((error)=>{
      console.error('Erreur'+error);
    });
  },[]); 
    return(
  <div>
        <div className="p-5 h-screen ">
          <h1 className="text-3xl mb-2 text-blue-950 font-bold">Candidatures</h1>
          <div className="overflow-auto rounded-lg shadow">
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
      <th className="p-3 text-sm font-semibold tracking-wide text-left">Poste</th>
      <th className="p-3 text-sm font-semibold tracking-wide text-left">Modifier</th>
      <th className="p-3 text-sm font-semibold tracking-wide text-left">Supprimer</th>
    </tr>
  </thead>
  <tbody>
  {Array.isArray(candidature) && candidature.map((callout, index) => (
    <tr className="bg-white" key={index}>
    <td className="p-3 text-sm text-gray-600">{callout.nom}</td>
    <td className="p-3 text-sm text-gray-600">{callout.prenom}</td>
      <td className="p-3 text-sm text-gray-600 flex">{callout.email}</td>
      <td className="p-3 text-sm text-gray-600">{callout.telephone}</td>
      <td  className="p-3 text-sm text-gray-600">{callout.situation}</td>
      <td  className="p-3 text-sm text-gray-600">{callout.sexe}</td>
      <td  className="p-3 text-sm text-gray-600">{callout.domaine}</td>
      <td  className="p-3 text-sm text-gray-600"> {callout.niveau}</td>
      <td  className="p-3 text-sm text-gray-600">{callout.experience}</td>
      <td  className="p-3 text-sm text-gray-600">{callout.adresse}</td>
      <td  className="p-3 text-sm text-gray-600">{callout.poste}</td>
      <td  className="p-3 text-sm text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 
      51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8
       24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 
       96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32
        32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg> </td>
      <td  className="p-3 text-sm text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 
      32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 
      0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></td>
    </tr>))};
    
  </tbody>
</table>
</div>
</div>
</div>
    );
}