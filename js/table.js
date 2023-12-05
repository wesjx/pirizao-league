function makeClubTable(data) {
  const table = document.createElement("table");
  table.classList.add("table");

  const header = document.createElement("tr");
  header.classList.add("table_title");

  const clubNameColumn = document.createElement("th");
  clubNameColumn.classList.add("table_club-name");
  clubNameColumn.textContent = "Clubes";
  header.appendChild(clubNameColumn);

  const pointsColumn = document.createElement("th");
  pointsColumn.textContent = "P";
  header.appendChild(pointsColumn);

  const matches = document.createElement("th");
  matches.textContent = "J";
  header.appendChild(matches);

  const wins = document.createElement("th");
  wins.textContent = "V";
  header.appendChild(wins);

  const draws = document.createElement("th");
  draws.textContent = "E";
  header.appendChild(draws);

  const loses = document.createElement("th");
  loses.textContent = "D";
  header.appendChild(loses);

  const golsColumn = document.createElement("th");
  golsColumn.textContent = "GP";
  header.appendChild(golsColumn);

  const golsContra = document.createElement("th");
  golsContra.textContent = "GC";
  header.appendChild(golsContra);

  const saldoGols = document.createElement("th");
  saldoGols.textContent = "SG";
  header.appendChild(saldoGols);

  table.appendChild(header);

  const sortedClubs = data.championship.clubs.sort(
    (a, b) => b.points - a.points
  );

  sortedClubs.forEach((clube, index) => {
    const line = document.createElement("tr");

    const clubNameCell = document.createElement("td");
    clubNameCell.classList.add("table_club-classification");

    const positionSpan = document.createElement("span");
    positionSpan.classList.add("position");
    positionSpan.textContent = `${index + 1} `;

    const clubSpan = document.createElement("span");
    clubSpan.classList.add("club-name");
    clubSpan.textContent = clube.club;

    clubNameCell.appendChild(positionSpan);
    clubNameCell.appendChild(clubSpan);

    line.appendChild(clubNameCell);

    const pointsCell = document.createElement("td");
    pointsCell.textContent = clube.points;
    line.appendChild(pointsCell);

    const matchesColumn = document.createElement("td");
    const matchesCell = clube.matches;
    matchesColumn.textContent = matchesCell;
    line.appendChild(matchesColumn);

    const winsColumn = document.createElement("td");
    const winsCell = clube.wins;
    winsColumn.textContent = winsCell;
    line.appendChild(winsColumn);

    const drawsColumn = document.createElement("td");
    const drawsCell = clube.draws;
    drawsColumn.textContent = drawsCell;
    line.appendChild(drawsColumn);

    const losesColumn = document.createElement("td");
    const losesCell = clube.loses;
    losesColumn.textContent = losesCell;
    line.appendChild(losesColumn);

    const golsCell = document.createElement("td");
    const allGols = clube.players.reduce(
      (total, jogador) => total + jogador.gols,
      0
    );
    golsCell.textContent = allGols;
    line.appendChild(golsCell);

    const golsContraColuna = document.createElement("td");
    const golsContraAll = clube.golsContra;
    golsContraColuna.textContent = golsContraAll;
    line.appendChild(golsContraColuna);

    const saldoGolsCell = document.createElement("td");
    const saldoGolsAll = clube.players.reduce(
      (total, jogador) => total + jogador.gols - golsContraAll,
      0
    );
    saldoGolsCell.textContent = saldoGolsAll;
    line.appendChild(saldoGolsCell);

    table.appendChild(line);
  });

  return table;
}
