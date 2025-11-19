document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.getElementById('link-input');
    const buttonElement = document.getElementById('verify-button');
    const resultElement = document.getElementById('result');

    buttonElement.addEventListener('click', () => {
        const link = inputElement.value.trim(); // Récupère le texte de l'input et enlève les espaces

        // Réinitialise l'affichage
        resultElement.className = 'message';
        resultElement.textContent = 'Vérification en cours...';

        if (link === '') {
            resultElement.textContent = 'Veuillez saisir un lien à vérifier.';
            return;
        }

        // Convertit le lien en minuscules pour la vérification
        const lowerCaseLink = link.toLowerCase();

        if (lowerCaseLink.startsWith('https://')) {
            // Le site est sécurisé (HTTPS)
            resultElement.textContent = 'Le site est protégé ✅️ (Le site utilise HTTPS)';
            resultElement.classList.add('secure'); // Ajoute la classe de style vert/sécurisé
        } else if (lowerCaseLink.startsWith('http://')) {
            // Le site n'est pas sécurisé (HTTP)
            resultElement.textContent = 'Vos données peuvent être volées par des pirates ⚠️ (Le site utilise HTTP)';
            resultElement.classList.add('insecure'); // Ajoute la classe de style jaune/non-sécurisé
        } else {
            // Le lien ne commence ni par http:// ni par https://
            resultElement.textContent = 'Le format du lien n\'est pas reconnu. Assurez-vous qu\'il commence par http:// ou https://';
        }
    });
});