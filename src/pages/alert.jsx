import { Link } from "react-router-dom";
import React from "react";
import FlyoutMenu from "./flyoutMenu";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Alert(){
  const form = useRef();
  const styleDuBouton = {
    backgroundImage: "url(https://pin.it/32bQY2G)",
    backgroundSize: 'cover', // pour ajuster la taille de l'image
    // Ajoute d'autres styles si nécessaire
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l54z0x6', 'template_ezy29dm', form.current, 'HETaDvmapxk2EF1wE')
      .then((result) => {
          alert("Email envoyé")
          console.log(result.text);
      }, (error) => {
          alert("Email non envoyé")
          console.log(error.text);
      });
  };

    return(
        <div className="flex gap-8">
          <FlyoutMenu/>
             <div className="w-1/2 h-screen" >
          <div className="flex items-center justify-center h-full bg-no-repeat bg-cover h-full bg-center bg-full bg-opacity-{20}
       bg-[url('https://t3.ftcdn.net/jpg/00/69/01/08/240_F_69010872_d212KiOYPjJ0AE1dgI5ppSaWPoH3VI2z.jpg')]
       ">
            <div className="px-4 py-6 mx-4 md:mx-8 text-white">
            <h1 className="text-4xl font-bold text-blue-950 my-40">Envoyer un email pour l'entretien</h1>
            
             
              <p className="text-xl text-blue-950 font-semibold text-center">
               Ecrivez 
               <br/> Veillez ecrire votre message pour l'entretien
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 pt-[8rem]">
          <div className="text-center items-center justify-center">
            <img
              src="https://www.althea.mg/wp-content/themes/hello-theme-child/images/logo-althea-380x110.png"
              alt="logo"
              className="w-48 mx-auto"
            />
            <h4 className="mt-1 mb-5 pb-1 text-2xl text-white font-bold">
              
            </h4>
          </div>
       
          <div className=" h-screen justify-center" >
    <form ref={form} onSubmit={sendEmail} className="w-full">
      <button class='imageTest' style={styleDuBouton}>Clic</button>
      <div className="p-4">
      <input
         className="w-full p-2 mt-4 border border-gray-400 rounded-md focus:outline-none focus:border-indigo-500"
          type="text"
          placeholder="Nom de l'expediteur"
          name="user_name"
          required
        />
        <input
         className="w-full p-2 mt-4 border border-gray-400 rounded-md focus:outline-none focus:border-indigo-500"
          type="email"
          placeholder="Email"
          name="user_email"
          required
        />
        <input
         className="w-full p-2 mt-4 border border-gray-400 rounded-md focus:outline-none focus:border-indigo-500"
          type="text"
          placeholder="Subject"
          name="Subject"
          required
        />
        <textarea
         className="w-full h-40 p-2 mt-4 border border-gray-400 rounded-md focus:outline-none focus:border-indigo-500"
          placeholder="Write your message here"
          name="message"
          required
        />
        <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link to={'/home'} type="button" className="rounded-md bg-gray-100 px-2.5 py-1.5 text-teal-500 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Annuler
        </Link>
        <button
  type="submit"
  className="rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 hover:bg-blue-950 "
>
  Envoyer
</button>
        </div>
      </div>
    </form>
</div>
    
        </div>

        </div>
    )
}