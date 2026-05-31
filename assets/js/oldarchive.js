/*
  ARCHIVE PAGE BUILDER
  --------------------
  You normally do not need to edit this file.
  Edit assets/js/comic-data.js to change books, chapters, pages, and images.

  IMPORTANT:
  The archive intentionally does NOT show episode icons.
  Icons are only used in the comic reader sidebar by assets/js/reader.js.

  This script reads window.COMIC_DATA and turns it into:
    Book 1 section
      - clean page links for the short story
    Book 2 section
      - clean chapter cards and page links
*/

const archive = document.getElementById("archive-list");

function pageUrl(book, chapter, page) {
  return `comic.html?book=${book.book}&chapter=${chapter.chapter}&page=${page.page}`;
}

function renderPageLink(book, chapter, page) {
  return `
    <a href="${pageUrl(book, chapter, page)}">
      ${String(page.page).padStart(2, "0")} · ${page.title}
    </a>`;
}

function renderChapterCard(book, chapter) {
  const card = document.createElement("section");
  card.className = "archive-card";

  card.innerHTML = `
    <span class="card-kicker">${chapter.kicker || `Book ${book.book} · Chapter ${chapter.chapter}`}</span>
    <h2>${chapter.shortTitle || chapter.title}</h2>
    ${chapter.description ? `<p>${chapter.description}</p>` : ""}

    <div class="archive-pages">
      ${chapter.pages.map(page => renderPageLink(book, chapter, page)).join("")}
    </div>`;

  return card;
}

if (archive && window.COMIC_DATA) {
  window.COMIC_DATA.forEach(book => {
    const bookSection = document.createElement("section");
    bookSection.className = "archive-book";

    bookSection.innerHTML = `
      <div class="archive-book-heading">
        <span class="card-kicker">Book ${book.book}</span>
        <h2>${book.title}</h2>
        ${book.description ? `<p>${book.description}</p>` : ""}
      </div>`;

    const chapterGrid = document.createElement("div");
    chapterGrid.className = "archive-book-grid";

    book.chapters.forEach(chapter => {
      chapterGrid.appendChild(renderChapterCard(book, chapter));
    });

    bookSection.appendChild(chapterGrid);
    archive.appendChild(bookSection);
  });
}
