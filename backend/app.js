const express = require("express");
const mysql = require("mysql");
const multer = require("multer");
const path = require('path');
const cors = require("cors");
const nodemailer = require('nodemailer');
const PDFDocument = require("pdfkit");
const fs = require("fs");
const os = require("os");
const bodyParser = require('body-parser');
const mailgunTransport = require('nodemailer-mailgun-transport');
const jwt = require('jsonwebtoken');

require('dotenv').config();


const app = express();
app.use(bodyParser.json());
/*app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));*/
app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

const DOSSIER_FICHIERS = path.join(__dirname, "uploads");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gesrec",
});

db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected");
  }
});

app.get('/',(req,res)=>{
  if(req.session.role){
    return res.json({valid: true, role: req.session.role})
  }else{
    return res.json({valid: false})
  }
})




app.post("/users", (req, res) => {
  const sql = "INSERT INTO users (`name`,`email`,`password`) VALUES (?)";

  const values = [req.body.name, req.body.email, req.body.password];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

app.post("/ajoutOffre", (req, res) => {
  const sql =
    "INSERT INTO offre (`name`,`description`,`experience`,`imageSrc`,`date`) VALUES (?)";

  const values = [
    req.body.name,
    req.body.description,
    req.body.experience,
    req.body.imageSrc,
    req.body.date,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.put("/offre/:id", (req, res) => {
  const id = req.params.id;
  const sql =
    "UPDATE offre SET `name`=?,`description`=?,`experience`=?,`imageSrc`=?,`date`=? WHERE id=?";
  db.query(
    sql,
    [
      req.body.name,
      req.body.description,
      req.body.experience,
      req.body.imageSrc,
      req.body.date,
      id,
    ],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Server Error" });
      }
      return res.status(200).json(result);
    }
  );
});

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    return cb(null, "./uploads")
  },
  filename: function (req, file, cb){
    return cb(null, `${Date.now()}_${file.originalname}`)
  }
})

const upload = multer({storage})

 //accountPage.jsx
 app.post('/account',upload.single('file'), (req, res) =>{
  const sql= "INSERT INTO account (`nom`,`prenom`,`email`,`telephone`,`situation`,`sexe`,`domaine`,`niveau`,`experience`,`adresse`,`postule`,`cv`,`offreId`) VALUES (?)";
  const sql2 = "UPDATE offre o JOIN (SELECT offreId, COUNT(*) AS compteur FROM account GROUP BY offreId) a ON o.id = a.offreId SET o.Postulant = a.compteur";
  
  const values = [
     req.body.nom,
     req.body.prenom,
     req.body.email,
     req.body.telephone,
     req.body.situation,
     req.body.sexe,
     req.body.domaine,
     req.body.niveau,
     req.body.experience,
     req.body.adresse,
     req.body.postule,
     req.file.filename,
     req.body.offreId
  ]
  db.query(sql, [values], (err, data) => {
     if (err) {
       return res.json("Error");
     }
 
     // La première requête SQL a réussi, exécutez maintenant la deuxième requête SQL (sql2)
     db.query(sql2, (err2, data2) => {
       if (err2) {
         return res.json("Error executing SQL2");
       }
       
       // Les deux requêtes SQL ont réussi
       console.log(req.body);
       return res.json(data2);
     });
   });
 });

 app.get('/download/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, 'uploads', fileName); // Chemin vers le fichier

  // Envoyer le fichier en réponse à la requête
  res.download(filePath, (err) => {
    if (err) {
      // Gérer les erreurs
      console.error('Erreur lors du téléchargement du fichier :', err);
      res.status(404).json({ error: 'Fichier non trouvé' });
    }
  });
});

app.post('/login', (req, res) =>{
  const sql= "SELECT * FROM users WHERE `email` = ? AND `password` = ?";
  
db.query(sql, [req.body.email, req.body.password], (err, data)=>{
if(err){
  return res.json("Error");
}
else if (data.length > 0){
  console.log(data[0].role);
  return res.json({Login: true, role: data[0].role})
}
else{
  return res.json({Login: false})
}
})
})

app.get("/offre", (req, res) => {
  db.query("SELECT * FROM offre", (err, results) => {
    if (err) {
      console.error("Erreur!" + err);
      res.status(500).json({ error: "Erreur" });
    } else {
      res.json(results);
    }
  });
});

app.get("/nbParOffre", (req, res) => {
  const value = req.body.offreId;
  db.query(
    "SELECT COUNT(*) AS offerCount FROM account WHERE offreId = ?",
    value,
    (err, results) => {
      if (err) {
        console.error("Erreur!" + err);
        res.status(500).json({ error: "Erreur" });
      } else {
        res.json(results);
      }
    }
  );
});

app.delete("/offre/:id", (req, res) => {
  const offreId = req.params.id;

  const sql = "DELETE FROM offre WHERE id = ?";

  db.query(sql, [offreId], (err, result) => {
    if (err) {
      console.error("Error deleting 'offre':", err);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the 'offre'." });
    } else {
      if (result.affectedRows === 0) {
        res
          .status(404)
          .json({ error: "The 'offre' with the specified ID was not found." });
      } else {
        res.status(204).send();
      }
    }
  });
});

//suppresion candidature
app.delete('/candidature/:id', (req, res) => {
  const offreId = req.params.id;
  
  // Use SQL to delete the "offre" with the specified ID from your database
  const sql = "DELETE FROM account WHERE id = ?";
  
  db.query(sql, [offreId], (err, result) => {
    if (err) {
      console.error("Error deleting 'candidature':", err);
      res.status(500).json({ error: "An error occurred while deleting the 'candidature'." });
    } else {
      // Check if any rows were affected; if not, the "offre" with the provided ID doesn't exist
      if (result.affectedRows === 0) {
        res.status(404).json({ error: "The 'candidature' with the specified ID was not found." });
      } else {
        // Successful deletion
        res.status(204).send();
      }
    }
  });
});

/*app.put('/modifierOffre', (req, res) => {
  const { id, name, description, experience, imageSrc, date } = req.body;
  
  // Use a SQL UPDATE statement to modify the offer
  const sql = 'UPDATE offers SET name = ?, description = ?, experience = ?, imageSrc = ?, date = ? WHERE id = ?';
  const values = [name, description, experience, imageSrc, date, id];
  
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error:', err);
      return res.status(500).json({ message: 'Server error' });
    }

    return res.json({ message: 'Offer modified successfully' });
  });
});

/*app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});*/

app.post("/nbPostulant", (req, res) => {
  const sql = "INSERT INTO offre (`Postulant`) VALUES (?)";

  const values = [req.body.Postulant];
});

app.get("/nbOffre", (req, res) => {
  db.query("SELECT * FROM offre", (err, results) => {
    if (err) {
      console.error("Erreur!" + err);
      res.status(500).json({ error: "Erreur" });
    } else {
      res.json(results);
    }
  });
});

app.get("/candidature/offre/:offreId", (req, res) => {
  const offreId = req.params.offreId;
  const query = "SELECT * FROM account WHERE offreId = ?";
  db.query(query, [offreId], (err, results) => {
    if (err) {
      console.error(
        "Erreur lors de la récupération des candidatures : " + err.message
      );
      res.status(500).json({ error: "Erreur serveur" });
    } else {
      console.log(results);
      res.json(results);
    }
  });
});

app.get("/candidat/:id", (req, res) => {
  const id = req.params.id;
  const query = "SELECT * FROM account WHERE id = ?";
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error(
        "Erreur lors de la récupération des candidatures : " + err.message
      );
      res.status(500).json({ error: "Erreur serveur" });
    } else {
      console.log(results);
      res.json(results);
    }
  });
});

app.get("/candidat/:id/cv", (req, res) => {
  const candidatId = req.params.id;

  // Utilisez une requête SQL pour récupérer le blob PDF en fonction de l'ID du candidat
  const query = "SELECT cv FROM candidats WHERE id = ?";

  db.query(query, [candidatId], (err, result) => {
    if (err) {
      console.error("Erreur lors de la récupération du blob PDF : " + err);
      res.status(500).send("Erreur lors de la récupération du blob PDF");
    } else {
      if (result.length > 0) {
        // Le blob PDF a été récupéré avec succès
        const pdfBlob = result[0].cv;

        // Envoyez le blob PDF en réponse au client avec le bon type MIME
        res.setHeader("Content-Type", "application/pdf");
        res.status(200).send(pdfBlob);
      } else {
        // Aucun candidat trouvé avec cet ID
        res.status(404).send("Candidat non trouvé");
      }
    }
  });
});

app.get("/candidature", (req, res) => {
  db.query("SELECT * FROM account", (err, results) => {
    if (err) {
      console.error("Erreur!" + err);
      res.status(500).json({ error: "Erreur" });
    } else {
      res.json(results);
    }
  });
});

app.get("/nbCandidature", (req, res) => {
  db.query("SELECT COUNT(*) as nbCandidature FROM account", (err, results) => {
    if (err) {
      console.error("Erreur!" + err);
      res.status(500).json({ error: "Erreur" });
    } else {
      res.json(results);
    }
  });
});


app.put("/modifierOffre/:id", async (req, res) => {
  const offreId = req.params.id;
  const { name, description, experience, imageSrc, date } = req.body;

  try {
    const connection = await mysql.createConnection(dbConfig);

    // Effectuer la requête SQL pour mettre à jour l'offre
    const updateQuery = `
      UPDATE offre
      SET name = ?, description = ?, experience = ?, imageSrc = ?, date = ?
      WHERE id = ?
    `;

    const [results] = await connection.execute(updateQuery, [
      name,
      description,
      experience,
      imageSrc,
      date,
      offreId,
    ]);

    connection.end();

    if (results.affectedRows > 0) {
      res.json({ message: "Offre mise à jour avec succès" });
    } else {
      res.status(404).json({ error: "L'offre spécifiée n'existe pas" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur lors de la mise à jour de l'offre" });
  }
});


const auth = {
  auth: {
    api_key: 'pubkey-4afb898a4a6172fbda53380ffcd024f4', 
    domain: 'sandbox4a518deb3e8a4408a289819e9d795ff6.mailgun.org' 
  }
}


const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    user: "process.env.phytaratsimbazafy@gmail.com",
    pass: "process.env.13ORNELLA",
  },
});

app.post("/envoyer-email", async (req, res) => {
  try {
    const { to, subject, text } = req.body;

    const info = await transporter.sendMail({
      from: '"Phyta" <${phytaratsimbazafy@gmail.com}>',
      to,
      subject,
      text,
    });

    console.log("Message sent: %s", info.messageId);

    // Insert the email data into the MySQL 'emails' table
    const insertSql = "INSERT INTO emails (recipient, subject, message) VALUES (?, ?, ?)";
    db.query(insertSql, [to, subject, text], (insertErr, result) => {
      if (insertErr) {
        console.error("Failed to insert data into the 'emails' table:", insertErr);
        res.status(500).json({ error: "Failed to send email" });
      } else {
        res.status(200).json({ message: "Email sent and data inserted successfully" });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});



// const transporter = nodemailer.createTransport({
//   service: "gmail", 
//   auth: {
//     user: "phytaratsimbazafy@gmail.com", // Votre adresse e-mail
//     pass: "13ORNELLA", // Votre mot de passe
//   },
// });


// app.post("/envoyer-email", (req, res) => {
//   const message = req.body.message; // Récupérez le message du formulaire
  
//   const mailOptions = {
    // from: "phytaratsimbazafy@gmail.com",
    // to: "miantsaiarilanja@gmail.com", // Remplacez par l'e-mail de callout.email
    // subject: "Nouveau message de formulaire",
    // text: message,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error(error);
//       res.status(500).send("Erreur lors de l'envoi de l'e-mail");
//     } else {
//       console.log("E-mail envoyé : " + info.response);
//       res.status(200).send("E-mail envoyé avec succès");
//     }
//   });
// });

app.listen(3001, () => {
  console.log("Server listen to the port 3001");
});
