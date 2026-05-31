const archive = document.getElementById("archive-list");
window.COMIC_DATA.forEach(chapter => {
  const card = document.createElement("section");
  card.className = "archive-card";
  card.innerHTML = `
    <span class="card-kicker">${chapter.kicker || `Chapter ${chapter.chapter}`}</span>
    <h2>${chapter.shortTitle || chapter.title}</h2>
    <div class="archive-pages">
      ${chapter.pages.map(page => `<a href="comic.html?chapter=${chapter.chapter}&page=${page.page}">${String(page.page).padStart(2,'0')} · ${page.title}</a>`).join("")}
    </div>`;
  archive.appendChild(card);
});
