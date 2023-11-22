import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import axios from 'axios';
import { useEffect, useState } from "react";

export default function ModifierOffre({ offreId, offreData, onClose, onModificationSuccess }) {
  const [open, setOpen] = useState(true);
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    setFormData({
      name: offreData.name || "",
      description: offreData.description || "",
      experience: offreData.experience || null,
      imageSrc: offreData.imageSrc || "",
      date: offreData.date || null,
    });
  }, [offreData]);

  const ModifierOffre = (e) => {
    e.preventDefault(); 
    axios
      .put(`http://localhost:3001/offre/${offreId}`, formData)
      .then((response) => {
        console.log('Offre modifiée avec succès');
        onClose();
        onModificationSuccess();
      })
      .catch((error) => {
        alert('Erreur lors de la modification de l\'offre : ' + error.message);
      });
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const cancelButtonRef = useRef(null);


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-400 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-1xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-3xl font-semisemibold leading-6 text-blue-950 mb-8">
                        Modifier l'Offre
                      </Dialog.Title>
                      <div className="mt-2">
                        <form className="w-full max-w-lg">
                          <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                              <label className="block  tracking-wide text-gray-700 text-1xl font-semisemibold mb-2" htmlFor="grid-first-name">
                                Nom
                              </label>
                              <input
                                name='name'
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-gray-400 focus:bg-gray-200"
                                id="grid-first-name"
                                type="text"
                                onChange={handleChange}
                                value={formData.name} />
                            </div>
                          </div>
                          <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                              <div className="w-96">
                                <div className="relative w-full min-w-[200px]">
                                  <textarea
                                    name='description'
                                    onChange={handleChange}
                                    value={formData.description}
                                    className="peer bg-gray-200 h-full min-h-[100px] w-full resize-none rounded-[7px] border border-gray-300 px-3 py-2.5 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-400 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                  ></textarea>
                                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-2xl font-semisemibold leading-tight text-blue-gray-600 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-400 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-400">
                                    Description
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                              <label className="block  tracking-wide text-gray-700 text-1xl font-semisemibold mb-2" htmlFor="grid-city">
                                Image
                              </label>
                              <input
                                name='imageSrc'
                                onChange={handleChange}
                                value={formData.imageSrc}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-gray-400 focus:bg-gray-200 focus:border-gray-400"
                                id="grid-city"
                                type="text"
                                placeholder="" />
                            </div>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                              <label className="block  tracking-wide text-gray-700 text-1xl font-semisemibold mb-2" htmlFor="grid-state">
                                Experience
                              </label>
                              <div className="relative">
                                <input
                                  name='experience'
                                  onChange={handleChange}
                                  value={formData.experience}
                                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-gray-400 focus:bg-gray-200 focus:border-gray-400"
                                  id="grid-city"
                                  type="number"
                                  placeholder=""
                                />
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                </div>
                              </div>
                            </div>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                              <label className="block  tracking-wide text-gray-700 text-1xl font-semisemibold mb-2" htmlFor="grid-zip">
                                Date
                              </label>
                              <input
                                name='date'
                                onChange={handleChange}
                                value={formData.date}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-gray-400 focus:bg-gray-200 focus:border-gray-400"
                                id="grid-zip"
                                type="date"
                                placeholder="" />
                            </div>
                          </div>

                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-2 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-teal-600 px-3 py-2  font-semibold text-white shadow-sm hover:bg-blue-950 sm:ml-3 sm:w-auto"
                    onClick={(e) => {
                      ModifierOffre(e);
                      setOpen(false);
                    }}
                  >
                    Modifier
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-gray-100 px-2.5 py-1.5 text-teal-500 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Annuler
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
