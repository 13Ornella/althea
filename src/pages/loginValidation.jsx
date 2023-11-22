export default function Validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  
    if (values.email === "") {
      error.email = "Veuillez remplir";
    } else if (!email_pattern.test(values.email)) {
      error.email = "Email non valide";
    } // Pas besoin d'else ici pour effacer l'erreur, laissez-la vide
  
    if (values.password === "") {
      error.password = "Mot de passe incorrect";
    } // De même ici, ne pas assigner de valeur si le mot de passe est valide
  
    return error;
  }
  