/* In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve:
Recuperare la ricetta da https://dummyjson.com/recipes/{id}
Estrarre la proprietà userId dalla ricetta
Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
Restituire la data di nascita dello chef


Note del docente
Scrivi la funzione getChefBirthday(id), che deve:
Essere asincrona (async).
Utilizzare await per chiamare le API.
Restituire una Promise con la data di nascita dello chef.
Gestire gli errori con try/catch */

async function getChefBirthday(id) {
  try {
    const dataRicetta = await fetch(`https://dummyjson.com/recipes/${id}`);
    if (!dataRicetta.ok)
      throw new Error("Errore nella richiesta per la ricetta");
    const ricetta = await dataRicetta.json();
    /*     console.log(ricetta);
     */ const idChef = ricetta.userId;
    /*     console.log(idChef);
     */ const userData = await fetch(`https://dummyjson.com/users/${idChef}`);
    const chef = await userData.json();
    /*     console.log(chef);
     */ const birth = chef.birthDate;
    const formattedBirth = dayjs(birth).format("DD/MM/YYYY");
    return formattedBirth;
    /*     console.log("La data di nascita dello chef e:", birth);
     */
  } catch (error) {
    throw error;
  } finally {
    console.log("Chiamate effettuate");
  }
}

getChefBirthday(4)
  .then((birth) => console.log("Data di nascita dello chef:", birth))
  .catch((error) => console.error("Errore:", error.message));

/*   🎯 Bonus 1
Attualmente, se la prima richiesta non trova una ricetta, la seconda richiesta potrebbe comunque essere eseguita causando errori a cascata.

Modifica getChefBirthday(id) per intercettare eventuali errori prima di fare la seconda richiesta. */
//? riga 18

/* 🎯 Bonus 2
Utilizza la libreria dayjs per formattare la data di nascita nel formato giorno/mese/anno. */
//? riga 28
