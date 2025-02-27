function shareOnly(event, link) {
    event.preventDefault(); // Impede que o link seja acessado
    event.stopPropagation(); // Impede que o clique afete o <a>

    navigator.clipboard.writeText(link).then(() => {
        const notification = document.getElementById("copy-notification");

        // Remove qualquer classe para resetar o estado
        notification.classList.remove("hidden");

        // Exibe o banner com animação
        setTimeout(() => {
            notification.classList.add("show");
        }, 50); // Pequeno delay para ativar a transição

        // Aguarda 2 segundos e remove a notificação
        setTimeout(() => {
            notification.classList.remove("show");

            // Aguarda a animação e esconde a notificação
            setTimeout(() => {
                notification.classList.add("hidden");
            }, 300);
        }, 2000);
    }).catch(err => console.error("Erro ao copiar link", err));
}
