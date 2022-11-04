function createGame(player1, hour, player2, group ) {
    return `
    <p>${group}</p>
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
        ${createCard("24/11", "quinta", createGame('switzerland', '07:00', 'cameroon', 'Group G'))}
        ${createCard("24/11", "quinta", createGame('brazil', '16:00', 'serbia', 'Group G'))}
        ${createCard("28/11", "segunda", createGame('switzerland', '13:00', 'brazil', 'Grupo G'))}
        ${createCard("02/12", "sexta", createGame('brazil', '16:00', 'cameroon' ,'Grupo G'))}
        </main>
`