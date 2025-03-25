let timeout;
function searchCards() {
    clearTimeout(timeout); // Limpa o timeout anterior
    timeout = setTimeout(() => {
        const query = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const title = card.getAttribute('data-title').toLowerCase();
            const description = card.getAttribute('data-description').toLowerCase();
            const info = card.getAttribute('psi-info').toLowerCase();
            const stats = card.getAttribute('hm-psi-stats').toLowerCase();

            if (title.includes(query) || description.includes(query) || info.includes(query) || stats.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }, 300); // Espera 300ms após o último input antes de realizar a pesquisa
}
