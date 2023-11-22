import { useState } from 'react';

const useAuthentication = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (credentials) => {
    try {
      // Utilisez ici votre logique d'authentification avec une requête vers votre serveur
      const response = await axios.post('http://localhost:3001/login', credentials);
      if (response.data === 'Success') {
        setLoggedIn(true);
        return true; // Authentification réussie
      } else {
        return false; // Échec de l'authentification
      }
    } catch (error) {
      console.error('Error:', error);
      return false; // Échec de l'authentification en cas d'erreur
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return { isLoggedIn, handleLogin, handleLogout };
};

export default useAuthentication;
