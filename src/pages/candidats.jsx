import Header from "../Header";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Candidats(){
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  const [candidatInfo, setCandidatInfo] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    sexe:'',
    situation:'',
    domaine:'',
  niveau: '',
    experiences: '',
adresse:'',
    cv: null
  });

 /* useEffect(() => {
     // Récupérez le contenu du PDF depuis la base de données, par exemple avec une requête HTTP
     axios.get(`http://localhost:3001/get-pdf/${id}`)
     .then((response) => {
       setPdfData(response.data);
     })
     .catch((error) => {
       console.error('Erreur lors de la récupération du PDF :', error);
     });
 }, []);

 const handleFileUpload = () => {
  // This function handles uploading the PDF to the server
  // Include your file upload logic here
  // ...

  // After successful upload, set the PDF data
  const uploadedPdfData = pdfData; // Replace with actual PDF data

  setPdfData(uploadedPdfData);
};

 const handleDownload = () => {
  if (pdfData) {
    // Create a blob and an object URL for the PDF data
    const blob = new Blob([pdfData], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);

    // Create an anchor element and simulate a click to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document.pdf'; // Specify the file name for the download
    a.click();

    // Release the object URL
    window.URL.revokeObjectURL(url);
  }
 };
  const [attachmentFile, setAttachmentFile] = useState(null);

  /*const envoyerEmail = async (message, attachment) => {
    try {
      const formData = new FormData();
      formData.append("message", message);
      formData.append("attachment", attachment);
      const response = await axios.post('http://localhost:3001/envoyer-email', formData);
      alert('E-mail envoyé avec succès'); // Display a confirmation message
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail', error);
      alert('Erreur lors de l\'envoi de l\'e-mail');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();*/
  
    // Télécharge l'attachement
    /*const attachment = await axios.post('http://localhost:3001/attachments', {
      attachment: attachment,
    });
  
    // Ajoute l'attachement à l'objet candidat
    const candidate = {
      ...candidatInfo,
      attachment: attachment.data.filename,
    };
  
    // Envoie les informations du candidat au back-end
    envoyerEmail(candidate);
  };
  
  if (attachmentFile) {
    // Prepare email message (you can customize this part)
    const message = "Your email message here.";

    // Send email with attachment
    envoyerEmail(message, attachmentFile);
  } else {
    alert('Veuillez sélectionner un fichier d\'attachement.');
  }*/


  useEffect(() => {
     axios.get(`http://localhost:3001/candidat/${id}`)
       .then((response) => {
        //const cv = response.data.cv;
         setCandidatInfo(response.data);
       })
       .catch((error) => {
         console.error('Erreur' + error);
    })
  } , [id]);

  const handleDownload = (fileName) => {
    // Faites une requête GET vers votre backend pour télécharger le fichier
    axios({
      url: `http://localhost:3001/download/${fileName}`, // Remplacez par votre endpoint de téléchargement
      method: 'GET',
      responseType: 'blob', // Le type de réponse est un blob
    })
      .then((response) => {
        // Créez un objet URL pour le blob
        const url = window.URL.createObjectURL(new Blob([response.data]));
        // Créez un lien invisible et cliquez dessus pour télécharger le fichier
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName); // Nom du fichier lors du téléchargement
        document.body.appendChild(link);
        link.click();
        // Nettoyez l'URL de l'objet après le téléchargement
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error('Erreur lors du téléchargement du fichier', error);
        // Gérez l'erreur de téléchargement
      });
  };

       
    return(
            <div className="">
                <Header/>
                <div className="mr-30 ml-30 p-4">
              <div className="px-4 sm:px-0 mt-20 ">
              
                <h3 className="text-3xl font-bold leading-7 text-blue-950"> Informations sur le candidat</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Details sur la candidature et les informations personnelles</p>
              
              </div>
              <div className="mt-6 border-t border-gray-200">
                <dl className="divide-y divide-gray-100">
                {Array.isArray(candidatInfo) && candidatInfo.map((callout, index) => (
                <div key={index}>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Nom </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{callout.nom}</dd>
                  </div>
                  
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 mt-6 border-t border-gray-200">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Prenom</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{callout.prenom}</dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 mt-6 border-t border-gray-200">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Email </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{callout.email}</dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 mt-6 border-t border-gray-200">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Telephone</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{callout.telephone}</dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 mt-6 border-t border-gray-200">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Situation matrimoniale</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{callout.situation}</dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 mt-6 border-t border-gray-200">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Sexe</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{callout.sexe}</dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 mt-6 border-t border-gray-200">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Domaine d'étude</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{callout.domaine}</dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 mt-6 border-t border-gray-200">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Niveau d'etude</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{callout.niveau}</dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 mt-6 border-t border-gray-200">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Experiences</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{callout.experience}</dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 mt-6 border-t border-gray-200">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Adresse</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{callout.adresse}</dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 mt-6 border-t border-gray-200">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 mt-6 border-t border-gray-200">
      <dt className="text-sm font-medium leading-6 text-gray-900">CV</dt>
      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
        {callout.cv}
        <button onClick={() => handleDownload(callout.cv)}><b>Télécharger</b></button>
      </dd>
    </div>
    
    </div>

                  </div>  
                  <div className=" mt-6 border-t border-gray-200">
  
  <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link to={'/home'} type="button" className="rounded-md bg-gray-100 px-2.5 py-1.5 text-teal-500 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Annuler
        </Link>
        <button
  type="button"
  onClick={() => envoyerEmail(document.querySelector('textarea').value)}
  className="rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
>
  Envoyer
</button>
        </div>
                  </div>
                  </div>
              ))}
                </dl>
      </div>
      </div>
              </div>
    );
                }
          