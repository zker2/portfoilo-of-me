const listBody = document.querySelector("#list-body");
const count = document.querySelector("#count");

fetch("data.json")
  .then((response) => response.text())
  .then((text) => {

    // ---------- Level 1 ----------
    const da = JSON.parse(text);
    count.textContent = `${da.length} anime`;

    // ---------- Level 2 + 3 (+ Bonus A) ----------
    for (const info of da) {

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><img class="cover" src="${image}" alt="${name}"></td>
        <td class="title">${name}</td>
        <td class="info">${info}</td>
        <td class="date">${Date}</td>
      `;
    }
    document.querySelector("#tab-all").addEventListener("click", () => showOnly("all"));
    document.querySelector("#tab-watching").addEventListener("click", () => showOnly("watching"));
    document.querySelector("#tab-completed").addEventListener("click", () => showOnly("completed"));
    document.querySelector("#tab-planned").addEventListener("click", () => showOnly("planned"));
  });
