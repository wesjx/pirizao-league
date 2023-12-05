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
      });
    });
  });

  const sortedPlayers = allPlayers.sort((a, b) => b.goals - a.goals);

  sortedPlayers.forEach((jogador) => {
    const line = document.createElement("tr");
    const playerNameCell = document.createElement("td");
    playerNameCell.textContent = jogador.playerName;
    line.appendChild(playerNameCell);
    const goalsCell = document.createElement("td");
    goalsCell.textContent = jogador.goals;
    goalsCell.classList.add("table_goals-column");
    line.appendChild(goalsCell);
    table.appendChild(line);
  });

  return table;
}
