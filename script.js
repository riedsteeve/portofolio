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
 
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Empêche le rechargement de la page
    const form = e.target;
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            alert("✅ Merci ! Votre message a été envoyé.");
            form.reset(); // Réinitialise le formulaire
        } else {
            alert("❌ Oups, une erreur est survenue. Réessayez plus tard.");
        }
    }).catch(error => {
        alert("❌ Oups, une erreur est survenue. Réessayez plus tard.");
    });
});
 

 



 

