const escapeHtml = (text) => {
    if (!text) {
        return "Utilisateur ne saisie pas de valeur"; 
    }
    return text.replace(/&/g, "&amp;")
               .replace(/</g, "&lt;")
               .replace(/>/g, "&gt;")
               .replace(/"/g, "&quot;")
               .replace(/'/g, "&#039;");
}

const keyTransFrench = {
    firstName: "nom",
    lastName: "prénom",
    birthdate: "date de naissance",
    zip: "code postal",
    city: "ville",
    financerName: "nom du financeur",
    financerContact: "contact du financeur",
    financerPhone: "tel du financeur",
    financerEmail: "email du financeur",
};

const keysToIgnore = ["sessionChoisie", "niveauIntensifMarseille", "niveauVacances", "lieuVacances", "niveauHebdomadaire", "lieuHebdomadaire", "niveauSoir", "lieuSoir"];

exports.createHtmlContent = (data) => {
    return Object.entries(data).filter(([key]) => !keysToIgnore.includes(key)).map(([key, value]) => {
        const escapedValue = escapeHtml(value);
        const frenchKey = keyTransFrench[key] || key;
        return `<p>${frenchKey}: ${escapedValue}</p>`;
    }).join('');
}