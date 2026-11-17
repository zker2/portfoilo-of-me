fetch("data.json")
  .then((response) => response.text())
  .then((text) => {
    const name1 = JSON.parse(text);
    name1.textContent = competition.Thaipbs.date
    console.log(name1)
  });