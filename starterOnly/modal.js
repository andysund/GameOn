// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeModalCross = document.getElementById("cross");
const form = document.querySelector("form");

// Lancer l'affichage de la modal lors d'un clic sur un bouton d'ouverture
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalbg.style.display = "block";
}

// Gestion de la fermeture de la modal avec la croix
closeModalCross.addEventListener("click", CloseModal);

function CloseModal() {
  if (!modalbg) throw new Error("Aucune modal trouvée");
  modalbg.style.display = "none";
}

// Écoute de l'événement submit sur le formulaire
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Empêche l'envoi automatique du formulaire

  if (validateForm()) {
    // Si le formulaire est valide, vous pouvez afficher une confirmation,
    // fermer la modal, ou effectuer d'autres actions.
    CloseModal();
    // Optionnel : vider le formulaire si vous souhaitez réinitialiser après validation
    // form.reset();
  }
});

function validateForm() {
  // Récupération des éléments du formulaire
  const firstNameInput = document.getElementById("first");
  const lastNameInput = document.getElementById("last");
  const emailInput = document.getElementById("email");
  const quantityInput = document.getElementById("quantity"); // Champ "nombre de concours"
  const termsCheckbox = document.getElementById("checkbox1"); // Case des conditions générales
  const radios = document.getElementsByName("location");

  let isValid = true;

  // Validation du prénom (min 2 caractères)
  const firstNameValue = firstNameInput.value.trim();
  if (firstNameValue.length < 2) {
    alert("Le prénom doit contenir au moins deux caractères.");
    isValid = false;
  }

  // Validation du nom (min 2 caractères)
  const lastNameValue = lastNameInput.value.trim();
  if (lastNameValue.length < 2) {
    alert("Le nom doit contenir au moins deux caractères.");
    isValid = false;
  }

  // Validation de l'adresse e-mail
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailValue)) {
    alert("Veuillez entrer une adresse e-mail valide.");
    isValid = false;
  }

  // Validation du champ "nombre de concours" (doit être numérique)
  const quantityValue = quantityInput.value.trim();
  if (quantityValue === "" || isNaN(quantityValue)) {
    alert("Veuillez entrer une valeur numérique pour le nombre de concours.");
    isValid = false;
  }

  // Vérification qu'au moins un bouton radio est sélectionné
  let radioChecked = false;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      radioChecked = true;
      break;
    }
  }
  if (!radioChecked) {
    alert("Veuillez sélectionner au moins une localisation.");
    isValid = false;
  }

  // Vérification que la case des conditions générales est cochée
  if (!termsCheckbox.checked) {
    alert("Vous devez accepter les conditions générales.");
    isValid = false;
  }
  if (isValid) {
    alert("Merci ! Votre réservation a été reçue.");
  }

  return isValid; ;
}
