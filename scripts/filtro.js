document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('.checkbox input');
    const cards = document.querySelectorAll('.card-psi');
    const noResultsCard = document.getElementById('no-results-card'); // Card "Nenhum Resultado"

    function filtrarCards() {
        const especialidadesSelecionadas = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.getAttribute('data-speciality').toLowerCase());

        let algumCardVisivel = false;

        // Se nenhum filtro for selecionado, mostra todos os cards
        if (especialidadesSelecionadas.length === 0) {
            cards.forEach(card => {
                card.style.display = "block"; // Torna todos os cards visíveis
            });
            noResultsCard.style.display = "none"; // Esconde o card "Nenhum Resultado"
        } else {
            // Caso algum filtro esteja selecionado, faz o filtro
            cards.forEach(card => {
                const especialidadesCard = Array.from(card.querySelectorAll('.hm-psi-stats'))
                    .map(tag => tag.getAttribute('data-speciality').toLowerCase());

                const deveAparecer = especialidadesSelecionadas.some(especialidade =>
                    especialidadesCard.includes(especialidade)
                );

                if (deveAparecer) {
                    card.style.display = "block"; // Exibe o card se ele corresponder ao filtro
                    algumCardVisivel = true; // Marca que pelo menos um card está visível
                } else {
                    card.style.display = "none"; // Esconde o card
                }
            });
        }
    }

    // Adiciona evento de mudança nos checkboxes
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filtrarCards);
    });

    // Inicializa a filtragem ao carregar a página
    filtrarCards();
});

function AbrirFiltro() {
    const filtro = document.getElementById('filtro-checkbox');
    const seta = document.getElementById('seta-checkbox');

    filtro.classList.toggle('show'); // Adiciona ou remove a classe para ativar a transição
    seta.style.transform = filtro.classList.contains('show') ? 'rotate(90deg)' : 'rotate(0deg)';
}