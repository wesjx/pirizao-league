fetch("./data/data.json")
  .then((response) => response.json())
  .then((data) => {
    const clubTable = makeClubTable(data);
    const playerTable = makePlayerTable(data);

    const classificationSection = document.querySelector(
      ".table_container-classification"
    );
    const playersSection = document.querySelector(".table_container-players");

    classificationSection.appendChild(clubTable);
    playersSection.appendChild(playerTable);
  })
  .catch((error) => console.error("Erro ao carregar JSON:", error));
