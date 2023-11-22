import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header";
import { Link } from "react-router-dom";
import Flydash from "./Flydash";

export default function CanOffre() {
  const [offre, setOffre] = useState([]);
  const [selectedId, setSelectedId] = useState(""); // État pour stocker la valeur de l'input caché sélectionné

  useEffect(() => {
    axios.get("http://localhost:3001/offre")
      .then((response) => {
        setOffre(response.data);
      })
      .catch((error) => {
        console.error("Erreur" + error);
      });
  }, []);

  // Gestionnaire d'événements pour le clic sur le lien "Postuler"
  const handlePostulerClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="">
      <Flydash/>
      <Header />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-4xl font-bold text-blue-950">Nos offres</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 ">
            <ul className="flex w-[80rem] gap-4 grid grid-cols-3">
              {Array.isArray(offre) &&
                offre.map((callout, index) => (
                  <div className="max-w-sm rounded overflow-hidden shadow-lg" key={index}>
                    <img className="w-full" src={callout.imageSrc} alt={callout.imageAlt} />
                    <input type="hidden" name="identifiant" value={callout.id} />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{callout.name}</div>
                      <p className="text-gray-700 text-base">{callout.description}</p>
                      <p className="text-gray-700 text-base">Ayant au moins {callout.experience} ans d'experience</p>
                      <p>Expire le: {new Date(callout.date).toLocaleDateString()}</p>
                    </div>
                    {/* Utilisez le gestionnaire d'événements pour le clic sur le lien "Postuler" */}
                    <Link
                      to={`/account?id=${callout.id}`} // Ajoutez l'ID de l'offre à l'URL
                      className="mr-10 mb-10 float-right inline-flex w-full justify-center rounded-md bg-teal-600 px-3 py-2  font-semibold text-white shadow-sm hover:bg-blue-950 sm:ml-3 sm:w-auto ml-18"
                    >
                      Postuler
                    </Link>
                  </div>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
