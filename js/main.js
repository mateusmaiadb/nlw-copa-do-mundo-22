function createGame(player1, hour, player2, details) {
    return `
    <p>${details}</p>
      <li>
        <img src="./assets/bandeiras-dos-países/icon=${player1}.svg" alt="Bandeira do ${player1}" />
        <strong>${hour}</strong>
        <img src="./assets/bandeiras-dos-países/icon=${player2}.svg" alt="Bandeira da ${player2}" />
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


document.querySelector("#app").innerHTML = `
    <header>
        <img src="./assets/logo.svg" alt="Logo da NLW" />
    </header>
        <main id="cards">
        ${createCard("24/11", "quinta", createGame('switzerland', '07:00', 'cameroon', 'Grupo G')
        + createGame('brazil', '16:00', 'serbia', '1ª Rodada'))}
        
        ${createCard("28/11", "segunda", createGame('cameroon', '07:00', 'serbia', 'Grupo G')
        + createGame('brazil', '13:00', 'switzerland', '2ª Rodada'))}

        ${createCard("02/12", "sexta", createGame('switzerland', '16:00', 'serbia', 'Grupo G')
        + createGame('cameroon', '16:00', 'brazil', '3ª Rodada'))}

        ${createCard("21/11", "segunda", createGame("england", "10:00", "iran", "Grupo B")
        + createGame("senegal", "13:00", "netherlands", "Grupo A") + createGame("united states", "16:00", "wales", "Grupo B"))}

        ${createCard("22/11", "terça", createGame("argentina", "7:00", "saudi arabia", "Grupo C") + createGame("denmark", "10:00", "tunisia", "Grupo D") + createGame("mexico", "13:00", "poland", "Grupo C") + createGame("france", "16:00", "australia", "Grupo D"))}

        ${createCard("23/11", "quarta", createGame("morocco", "07:00", "croatia", "Grupo F"))}
        </main>
`