/*
  COMIC DATA — EDIT THIS FILE FIRST
  ----------------------------------
  This file controls the books, chapters, archive list, reader pages,
  and the small sketch icons in the left episode/sidebar menu. The archive page does not use these icons.

  IMPORTANT FOLDER RULE:
  - Comic pages go in: assets/comics/
  - Small decorative episode icons go in: assets/visuals/archive-icons/ (reader sidebar only).

  IMPORTANT IMAGE RULE:
  - `image` is the actual full comic page shown in the reader.
  - `icon` is the small reader-sidebar image. It should be a DIFFERENT file from the comic page image. The archive does not display icons.

  Book organization used here:
    Book 1 = short story, one chapter-like section
    Book 2 = longer story, many chapters

  To add a new Book 2 chapter:
  1. Copy one chapter object inside Book 2's `chapters` array.
  2. Change `chapter`, `title`, `shortTitle`, `kicker`, and `pages`.
  3. Put the comic page images in assets/comics/book-2/chapter-XX/
  4. Put the reader sidebar icon images in assets/visuals/archive-icons/
*/

window.COMIC_DATA = [
  {
    book: 1,
    slug: "book-1",
    title: "Peanut Soup",
    shortTitle: "Short Story",
    description: "A sleepover visit changes things for Merritt and Nikolai.",

    chapters: [
      {
        chapter: 1,
        title: "Chapter 1: Friends From School",
        shortTitle: "Friends From School",
        kicker: "Chapter 1",
   
        pages: [
          {
            page: 1,
            title: "Cover Page",
            date: "2026-01-01",
            image: "assets/comics/book-1/page-001.svg",
            icon: "assets/visuals/archive-icons/book-1-page-001.svg",
            alt: "Book 1 placeholder comic page 1"
          },
          {
            page: 2,
            title: "A Small Turn",
            date: "2026-01-08",
            image: "assets/comics/book-1/page-002.svg",
            icon: "assets/visuals/archive-icons/book-1-page-002.svg",
            alt: "Book 1 placeholder comic page 2"
          },
          {
            page: 3,
            title: "Ending Note",
            date: "2026-01-15",
            image: "assets/comics/book-1/page-003.svg",
            icon: "assets/visuals/archive-icons/book-1-page-003.svg",
            alt: "Book 1 placeholder comic page 3"
          },
          {
            page: 4,
            title: "Ending",
            date: "2026-01-16",
            image: "assets/comics/book-1/page-003.svg",
            icon: "assets/visuals/archive-icons/book-1-page-003.svg",
            alt: "Book 1 placeholder comic page 4"
          }
          
        ]
      }
    ]
  },

  {
    book: 2,
    slug: "book-2",
    title: "Peanut Soup: Worst Case Scenario",
    shortTitle: "Main Story",
    description: "As they face the challenges of family, identity, and growing up, will Merritt and Nikolai be brave enough to hold on to their feelings?",

    chapters: [
      {
        chapter: 1,
        title: "Prologue",
        shortTitle: "Prologue",
        kicker: "Prologue",

        pages: [
          {
            page: 1,
            title: "Page 1",
            date: "2026-02-01",
            image: "assets/comics/book-2/chapter-01/page-001.svg",
            icon: "assets/visuals/archive-icons/book-2-chapter-01-page-001.svg",
            alt: "Book 2 chapter 1 placeholder comic page 1"
          },
          {
            page: 2,
            title: "Page 2",
            date: "2026-02-08",
            image: "assets/comics/book-2/chapter-01/page-002.svg",
            icon: "assets/visuals/archive-icons/book-2-chapter-01-page-002.svg",
            alt: "Book 2 chapter 1 placeholder comic page 2"
          },
          {
            page: 3,
            title: "Page 3",
            date: "2026-02-15",
            image: "assets/comics/book-2/chapter-01/page-003.svg",
            icon: "assets/visuals/archive-icons/book-2-chapter-01-page-003.svg",
            alt: "Book 2 chapter 1 placeholder comic page 3"
          }
        ]
      },

      {
        chapter: 1,
        title: "Chapter 1: Beginnings",
        shortTitle: "Beginnings",
        kicker: "Chapter 1",

        pages: [
          {
            page: 1,
            title: "Lanterns",
            date: "2026-03-01",
            image: "assets/comics/book-2/chapter-02/page-001.svg",
            icon: "assets/visuals/archive-icons/book-2-chapter-02-page-001.svg",
            alt: "Book 2 chapter 2 placeholder comic page 1"
          },
          {
            page: 2,
            title: "Low Tide",
            date: "2026-03-08",
            image: "assets/comics/book-2/chapter-02/page-002.svg",
            icon: "assets/visuals/archive-icons/book-2-chapter-02-page-002.svg",
            alt: "Book 2 chapter 2 placeholder comic page 2"
          }
        ]
      }
    ]
  }
];
