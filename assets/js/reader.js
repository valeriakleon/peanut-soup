const params = new URLSearchParams(window.location.search);
let chapterNumber = Number(params.get("chapter")) || 1;
let pageNumber = Number(params.get("page")) || 1;
let mode = localStorage.getItem("comicMode") || "page";

const chapters = window.COMIC_DATA;
const chapter = chapters.find(c => c.chapter === chapterNumber) || chapters[0];
const page = chapter.pages.find(p => p.page === pageNumber) || chapter.pages[0];
const pageIndex = chapter.pages.findIndex(p => p.page === page.page);
const reader = document.getElementById("comic-reader");

function getFlatPages() {
  return chapters.flatMap(ch => ch.pages.map(p => ({...p, chapter: ch.chapter, chapterTitle: ch.title})));
}
function urlFor(item) { return `comic.html?chapter=${item.chapter}&page=${item.page}`; }
function setLink(id, item, label) {
  const el = document.getElementById(id);
  if (!el) return;
  if (!item) { el.href = "#"; el.classList.add("disabled"); }
  else { el.href = urlFor(item); el.classList.remove("disabled"); }
  if (label) el.textContent = label;
}
function setMode(nextMode) {
  mode = nextMode;
  localStorage.setItem("comicMode", mode);
  render();
}
function render() {
  reader.className = `comic-reader ${mode}-mode`;
  document.querySelectorAll("[data-mode]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
    btn.setAttribute("aria-pressed", String(btn.dataset.mode === mode));
  });
  if (mode === "page") {
    reader.innerHTML = `<img class="comic-page" src="${page.image}" alt="${page.alt}">`;
  } else {
    reader.innerHTML = chapter.pages.map(p => `<img class="comic-page" src="${p.image}" alt="${p.alt}">`).join("");
  }
}
/*
  Renders the left sidebar episode menu.
  It uses p.icon first, then p.thumb, then p.image as a last fallback.
  For the intended look, set a unique `icon` file for every page in comic-data.js.
*/
function renderEpisodes() {
  const list = document.getElementById("episode-list");
  if (!list) return;
  list.innerHTML = chapter.pages.map(p => `
    <a class="episode-link ${p.page === page.page ? 'active' : ''}" href="comic.html?chapter=${chapter.chapter}&page=${p.page}">
      <img class="episode-thumb" src="${p.icon || p.thumb || p.image}" alt="">
      <span><span class="episode-no">${String(p.page).padStart(2, '0')}</span><span class="episode-title">${p.title}</span></span>
    </a>`).join("");
}

document.getElementById("comic-title").innerHTML = `${String(chapter.chapter).padStart(2,'0')} - ${page.title} <img class="tiny-star" src="assets/visuals/starfish.svg" alt="">`;
document.getElementById("chapter-kicker").textContent = chapter.kicker || `Chapter ${chapter.chapter}`;
document.getElementById("chapter-name").textContent = chapter.shortTitle || chapter.title;
document.getElementById("page-count").textContent = `${String(page.page).padStart(2,'0')} / ${String(chapter.pages.length).padStart(2,'0')}`;

document.querySelectorAll("[data-mode]").forEach(btn => btn.addEventListener("click", () => setMode(btn.dataset.mode)));

const flat = getFlatPages();
const currentFlatIndex = flat.findIndex(p => p.chapter === chapter.chapter && p.page === page.page);
setLink("prev-link-bottom", flat[currentFlatIndex - 1], "← Prev Page");
setLink("next-link-bottom", flat[currentFlatIndex + 1], "Next Page →");
setLink("first-link-bottom", flat[0], "⇤ First");
setLink("latest-link-bottom", flat[flat.length - 1], "Latest ⇥");
renderEpisodes();
render();
