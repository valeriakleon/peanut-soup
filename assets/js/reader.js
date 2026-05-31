/*
  COMIC READER
  ------------
  You normally do not need to edit this file.
  Edit assets/js/comic-data.js to change the actual comic content.

  URL format:
    comic.html?book=1&chapter=1&page=1
    comic.html?book=2&chapter=2&page=1

  Old links without book= still work. They default to Book 2 first, then Book 1.
*/

const params = new URLSearchParams(window.location.search);
let bookNumber = Number(params.get("book"));
let chapterNumber = Number(params.get("chapter")) || 1;
let pageNumber = Number(params.get("page")) || 1;
let mode = localStorage.getItem("comicMode") || "page";

const books = window.COMIC_DATA || [];

// If an older link only has chapter/page, prefer Book 2 because that is the main chaptered story.
let book = books.find(b => b.book === bookNumber) || books.find(b => b.book === 2) || books[0];
let chapter = book.chapters.find(c => c.chapter === chapterNumber) || book.chapters[0];
let page = chapter.pages.find(p => p.page === pageNumber) || chapter.pages[0];
const reader = document.getElementById("comic-reader");

function getFlatPages() {
  return books.flatMap(b =>
    b.chapters.flatMap(ch =>
      ch.pages.map(p => ({
        ...p,
        book: b.book,
        bookTitle: b.title,
        chapter: ch.chapter,
        chapterTitle: ch.title,
        chapterShortTitle: ch.shortTitle,
        kicker: ch.kicker
      }))
    )
  );
}

function urlFor(item) {
  return `comic.html?book=${item.book}&chapter=${item.chapter}&page=${item.page}`;
}

function setLink(id, item, label) {
  const el = document.getElementById(id);
  if (!el) return;

  if (!item) {
    el.href = "#";
    el.classList.add("disabled");
  } else {
    el.href = urlFor(item);
    el.classList.remove("disabled");
  }

  if (label) el.textContent = label;
}

function setMode(nextMode) {
  mode = nextMode;
  localStorage.setItem("comicMode", mode);
  render();
}

function render() {
  if (!reader) return;

  reader.className = `comic-reader ${mode}-mode`;

  document.querySelectorAll("[data-mode]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
    btn.setAttribute("aria-pressed", String(btn.dataset.mode === mode));
  });

  if (mode === "page") {
    reader.innerHTML = `<img class="comic-page" src="${page.image}" alt="${page.alt || page.title}">`;
  } else {
    reader.innerHTML = chapter.pages
      .map(p => `<img class="comic-page" src="${p.image}" alt="${p.alt || p.title}">`)
      .join("");
  }
}

/*
  Left sidebar episode menu.
  This uses `p.icon`, not the full comic page, whenever an icon exists.
*/
function renderEpisodes() {
  const list = document.getElementById("episode-list");
  if (!list) return;

  list.innerHTML = chapter.pages.map(p => `
    <a class="episode-link ${p.page === page.page ? "active" : ""}" href="comic.html?book=${book.book}&chapter=${chapter.chapter}&page=${p.page}">
      <img class="episode-thumb" src="${p.icon || p.thumb || p.image}" alt="">
      <span>
        <span class="episode-no">${String(p.page).padStart(2, "0")}</span>
        <span class="episode-title">${p.title}</span>
      </span>
    </a>`).join("");
}

const comicTitle = document.getElementById("comic-title");
if (comicTitle) {
  comicTitle.innerHTML = `${book.shortTitle || book.title} · ${String(chapter.chapter).padStart(2, "0")} - ${page.title} <img class="tiny-star" src="assets/visuals/starfish.svg" alt="">`;
}

const chapterKicker = document.getElementById("chapter-kicker");
if (chapterKicker) chapterKicker.textContent = chapter.kicker || `Book ${book.book} · Chapter ${chapter.chapter}`;

const chapterName = document.getElementById("chapter-name");
if (chapterName) chapterName.textContent = chapter.shortTitle || chapter.title;

const pageCount = document.getElementById("page-count");
if (pageCount) pageCount.textContent = `${String(page.page).padStart(2, "0")} / ${String(chapter.pages.length).padStart(2, "0")}`;

document.querySelectorAll("[data-mode]").forEach(btn => {
  btn.addEventListener("click", () => setMode(btn.dataset.mode));
});

const flat = getFlatPages();
const currentFlatIndex = flat.findIndex(p => p.book === book.book && p.chapter === chapter.chapter && p.page === page.page);

setLink("prev-link-bottom", flat[currentFlatIndex - 1], "← Prev Page");
setLink("next-link-bottom", flat[currentFlatIndex + 1], "Next Page →");
setLink("first-link-bottom", flat[0], "⇤ First");
setLink("latest-link-bottom", flat[flat.length - 1], "Latest ⇥");

renderEpisodes();
render();
