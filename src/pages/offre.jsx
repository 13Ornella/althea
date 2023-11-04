import { Link } from "react-router-dom"
import Header from "../Header";
import { useEffect, useState } from "react";
import axios from "axios";
import ModalOffre from "./modalOffre";
import ModifierOffre from "./ModifierOffre";
  
  export default function offre() {
    const [search, setSearch] = useState('');
    const [filteredOffre, setFilteredOffre] = useState([]);
    const [setDeleteOffre]=useState('')
  
    const handleSearchInputChange = (event) => {
      setSearch(event.target.value);
    };

    const [offre, setOffre] = useState([]);
    const [nombreOffre, setNombreOffre] = useState(0);
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };

    const [isModalOpenUpdate, setModalOpenUpdate] = useState(false);

    const openModalUpdate = () => {
      setModalOpenUpdate(true);
    };
  
    const closeModalUpdate = () => {
      setModalOpenUpdate(false);
    };

    const deleteOffre = (offreId) => {
      axios.delete(`http://localhost:3001/offre/${offreId}`)
        .then((response) => {
          // Update the local state to remove the deleted "offre"
          setOffre(offre.filter(item => item.id !== offreId));
        })
        .catch((error) => {
          console.error('Error deleting "offre":', error);
        });
    };

    useEffect(()=>{
      axios.get('http://localhost:3001/offre')
      .then((response) => {
        setOffre(response.data);
      })
      .catch((error)=>{
        console.error('Erreur'+error);
      });
    },[]); 

    /*useEffect(()=>{
      axios.get('http://localhost:3001/modifierOffre/:id')
      .then((response) => {
        setOffre(response.data);
      })
      .catch((error)=>{
        console.error('Erreur'+error);
      });
    },[]); */

    useEffect(()=>{
      axios.get('http://localhost:3001/nbParOffre')
      .then((response) => {
        setNombreOffre(response.data);
      })
      .catch((error)=>{
        console.error('Erreur'+error);
      });
    },[]); 

    useEffect(() => {
      if (search) {
        const filtered = offre.filter((offre) => {
        const lowerCaseName = offre.name.toLowerCase();
        const lowerCaseDate = offre.date.toLowerCase();
          return lowerCaseName.includes(search.toLowerCase()) || lowerCaseDate.includes(search.toLowerCase()) ;
        });
        setFilteredOffre(filtered);
      } else {
        setFilteredOffre(offre);
      }
    }, [search, offre]);
    
    offre.filter((item) => {
      const dataToSearch = `${item.name} ${item.description} ${item.experience} ${item.date}`.toLowerCase();
      return dataToSearch.includes(search.toLowerCase());
    });


  
    return (
      <div className="">
        <Header/>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative fixed ml-[30rem]">
<form method="POST" action="/search">
        <input type="text" 
        placeholder="Recherche..."
        value={search}
        onChange={handleSearchInputChange}
        className="pl-8 bg-inherit text-sm focus:outline-none active:outline-none mt-2.5 ml-2.5 h-10 w-[24rem] border border-gray-300 
        rounded-md shadow-md px-4" />
   <svg class="w-5 h-5 text-gray-800 dark:text-gray-400 absolute mt-1 ml-4 top-1/2 -translate-y-1/2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>  
        </form> 
</div>
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <button className="mt-4 float-right inline-flex w-full justify-center rounded-md bg-teal-600 px-3 py-2  font-semibold text-white shadow-sm hover:bg-blue-950 sm:ml-3 sm:w-auto ml-18"
          onClick={openModal}>
                    Ajouter
          </button>
            <h2 className="text-4xl font-bold text-blue-950">Nos offres</h2>
           
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 ">
              
                
                <ul className="flex w-[80rem] gap-4 grid grid-cols-3">
                {Array.isArray(offre) && offre.map((callout, index) => (
                  <div className="max-w-sm rounded overflow-hidden shadow-lg" key={index}>
                    <img className="w-full" src={callout.imageSrc} alt={callout.imageAlt} />
                    <div className="px-6 py-4">
                      <input type="hidden" name="identifiant" id="" value={callout.id}/>
                      <div className="font-bold text-xl mb-2">{callout.name}</div>
                      <p className="text-gray-700 text-base">
                        {callout.description}
                      </p>
                      <p className="text-gray-700 text-base"> {callout.experience} ans d'experience</p>
                      <p> {callout.date}</p>

                    </div>
                    <div className="px-6 pt-4 pb-2 mb-20">
                   <span  className="mt-20 border rounded-md px-2 py-2 border-gray-50 bg-50 font-bold texr-1xl text-blue-950 ">Postulants: {callout.Postulant}</span>
                    <div  className="flex gap-4 float-right text-white font-semibold py-2 px-4 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" 
                      onClick={openModalUpdate}>
                    <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 
      51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8
       24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 
       96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32
        32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" /></svg>
                    
                    <svg 
                    onClick={() => deleteOffre(callout.id)}
                    xmlns="http://www.w3.org/2000/svg" 
                    height="1em" viewBox="0 0 448 512"
                   ><path d="M135.2 17.7L128 
      32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 
      0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                    </div>
                    </div>
                  </div>
              
                ))}
                </ul>
              
            </div>
            {isModalOpen && (
            <ModalOffre /> 
          )}
               {isModalOpenUpdate && (
            <ModifierOffre/> 
          )}
          </div>
        </div>
      </div>
    )
  } 
