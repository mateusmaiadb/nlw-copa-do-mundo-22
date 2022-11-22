function createGame(player1, hour, player2, details) {
  return `
    <p>${details}</p>
      <li>
        <p>${player1}</p>
        <img src="./assets/bandeiras-dos-países/icon=${player1}.svg" alt="Bandeira do ${player1}" />
        <strong>${hour}</strong>
        <img src="./assets/bandeiras-dos-países/icon=${player2}.svg" alt="Bandeira da ${player2}" />
        <p>${player2}</p>
      </li>
    `
}

function createCard(date, day, games) {
  return `
       <div class="card">
       <h2>${date}<span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
        </div>
    `
}


document.querySelector("#cards").innerHTML = 
        
        createCard("21/11", "segunda", createGame("england", "10:00", "iran", "Grupo B") + 
        createGame("senegal", "13:00", "netherlands", "Grupo A") + 
        createGame("united states", "16:00", "wales", "Grupo B"))

        +

        createCard("22/11", "terça", createGame("argentina", "7:00", "saudi arabia", "Grupo C") + 
        createGame("denmark", "10:00", "tunisia", "Grupo D") + createGame("mexico", "13:00", "poland", "Grupo C") + 
        createGame("france", "16:00", "australia", "Grupo D"))
        +
        createCard("23/11", "quarta", createGame("morocco", "07:00", "croatia", "Grupo F") + 
        createGame("germany", "10:00", "japan", "Grupo E") + 
        createGame("spain", "13:00", "costa rica", "Grupo E") + createGame("belgium", "16:00", "canada", "Grupo F"))
        +
        createCard("24/11", "quinta", createGame('switzerland', '07:00', 'cameroon', 'Grupo G') + 
        createGame('brazil', '16:00', 'serbia', 'Grupo G') + 
        createGame('uruguay', "10:00", 'south korea', 'Grupo H') + 
        createGame('portugal', '13:00', 'ghana', 'Grupo H'))
        +
        createCard("25/11", "sexta", createGame('wales', '07:00', 'iran', 'Grupo B') + 
        createGame('qatar', '10:00', 'senegal', 'Grupo A') + 
        createGame('netherlands', ' 13:00', 'ecuador', 'Grupo A') + 
        createGame('england', '16:00', 'united states', 'Grupo B'))
        +
        createCard("26/11", "sábado", createGame('tunisia', '07:00', 'australia', 'Grupo D') + 
        createGame('poland', '10:00', 'saudi arabia', 'Grupo C') + 
        createGame('france', ' 13:00', 'denmark', 'Grupo D') + 
        createGame('argentina', '16:00', 'mexico', 'Grupo C'))
        +
        createCard("27/11", "domingo", createGame('japan', '07:00', 'costa rica', 'Grupo E') + 
        createGame('belgium', '10:00', 'morocco', 'Grupo F') + 
        createGame('croatia', ' 13:00', 'canada', 'Grupo F') + 
        createGame('spain', '16:00', 'germany', 'Grupo E'))
        +
        createCard("28/11", "segunda", createGame('cameroon', '07:00', 'serbia', 'Grupo G') + 
        createGame('south korea', '10:00', 'ghana', 'Grupo H') + 
        createGame('brazil', '13:00', 'switzerland', 'Grupo G') + 
        createGame('portugal', '16:00', 'uruguay', 'Grupo H'))
        +
        createCard("29/11", "terça", createGame('ecuador', '12:00', 'senegal', 'Grupo A') + 
        createGame('netherlands', '12:00', 'qatar', 'Grupo A') + 
        createGame('iran', '16:00', 'united states', 'Grupo B') + 
        createGame('wales', '16:00', 'england', 'Grupo B'))
        +
        createCard("30/11", "quarta", createGame('australia', '12:00', 'denmark', 'Grupo D') + 
        createGame('tunisia', '12:00', 'france', 'Grupo D') + 
        createGame('saudi arabia', '16:00', 'mexico', 'Grupo C') + 
        createGame('poland', '16:00', 'argentina', 'Grupo C'))
        +
        createCard("01/12", "quinta", createGame('canada', '12:00', 'morocco', 'Grupo F') + 
        createGame('croatia', '12:00', 'belgium', 'Grupo F') + 
        createGame('costa rica', '16:00', 'germany', 'Grupo E') + 
        createGame('japan', '16:00', 'spain', 'Grupo E'))
        +
        createCard("02/12", "sexta", createGame('south korea', '12:00', 'portugal', 'Grupo H') + 
        createGame('ghana', '12:00', 'uruguay', 'Grupo H') + 
        createGame('cameroon', '16:00', 'brazil', 'Grupo G') + 
        createGame('serbia', '16:00', 'switzerland', 'Grupo G'))
        
