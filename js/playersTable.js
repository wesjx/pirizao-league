function makePlayerTable(data) {
  const table = document.createElement("table");
  table.classList.add("table-players");

  const header = document.createElement("tr");
  header.classList.add("table_title");

  const allPlayers = [];

  data.championship.clubs.forEach((club) => {
    club.players.forEach((jogador) => {
      allPlayers.push({
        playerName: jogador.nome,
        goals: jogador.gols,
        escudo: `./assets/escudo-${club.club}.jpg`,
      });
    });
  });

  const sortedPlayers = allPlayers.sort((a, b) => b.goals - a.goals);

  sortedPlayers.forEach((jogador) => {
    const line = document.createElement("tr");

    const playerNameAndEscudoCell = document.createElement("td");

    playerNameAndEscudoCell.innerHTML = `
      <img src="${jogador.escudo}" alt="Escudo do Clube" class="escudo">
      <span>${jogador.playerName}</span>
    `;

    line.appendChild(playerNameAndEscudoCell);

    const goalsCell = document.createElement("td");
    goalsCell.textContent = jogador.goals;
    goalsCell.classList.add("table_goals-column");
    line.appendChild(goalsCell);

    table.appendChild(line);
  });

  return table;
}
