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
    firstName: "Nom",
    email: "Email",
    phone: "Téléphone",
    sujet: "Sujet",
    message: "Message",
};

exports.createHtmlContent = (data) => {
    return Object.entries(data).map(([key, value]) => {
        const escapedValue = escapeHtml(value);
        const frenchKey = keyTransFrench[key] || key;
        return `<p>${frenchKey}: ${escapedValue}</p>`;
    }).join('');
}