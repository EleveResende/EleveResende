document.addEventListener('DOMContentLoaded', function() {
    const agendaItems = document.querySelectorAll('.agenda li');
    const currentTime = new Date();

    const schedule = [
        "08:30",
        "09:00",
        "09:25",
        "10:00",
        "10:15",
        "11:00",
        "11:30",
        "12:15",
        "13:45",
        "14:00",
        "15:10",
        "17:00",
        "19:00",
        "21:20"
    ];

    function checkAgenda() {
        const now = new Date();
        agendaItems.forEach((item, index) => {
            const itemTime = new Date(now.toDateString() + ' ' + schedule[index]);
            if (now >= itemTime) {
                item.classList.add('checked');
            } else {
                item.classList.remove('checked');
            }
        });
    }

    // Verifica a agenda a cada minuto
    setInterval(checkAgenda, 60000);

    // Checa uma vez ao carregar a página
    checkAgenda();
});
