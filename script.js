// Script pour le menu burger
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
        
burger.addEventListener('click', () => {
    // Toggle la classe active sur le menu nav
    navLinks.classList.toggle('active');
    // Toggle la classe active sur le burger pour l'animation
    burger.classList.toggle('active');
});

// Fermer le menu lorsqu'un lien est cliqué
const navLinkElements = document.querySelectorAll('.nav-links a');
navLinkElements.forEach(link => {
    link.addEventListener('click', () => {
        // Ferme le menu sur mobile quand un lien est cliqué
        navLinks.classList.remove('active');
        burger.classList.remove('active');
    });
});

// Fonction pour afficher l'alerte
function showAlert() {
    alert("Mon mail est tout juste en haut ! 😊. Merci de me contacter !");
}
        
// Pour empêcher la soumission automatique du formulaire après l'alerte
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire immédiatement
    showAlert();
    // Si vous voulez toujours envoyer le formulaire après l'alerte, décommentez la ligne suivante
    // setTimeout(() => this.submit(), 500);
});
 