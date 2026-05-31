/*
  COMIC DATA — EDIT THIS FILE FIRST
  ----------------------------------
  This file controls the chapter list, episode menu, comic page images,
  and the small sketch icons in the left sidebar.

  IMPORTANT:
  - `image` is the actual full comic page shown in the reader.
  - `icon` is the small sidebar/archive sketch. It should be a DIFFERENT file
    from the comic page image, so your episode menu can use cute hand-drawn icons
    instead of shrinking down full pages.
  - You can replace the demo SVG files with your own .png, .jpg, .webp, or .svg files.

  Recommended folder setup:
    assets/comics/chapter-1/page-001.png
    assets/comics/chapter-1/page-002.png
    assets/comics/chapter-1/icons/episode-001.png
    assets/comics/chapter-1/icons/episode-002.png

  To add a new page, copy one page object and change:
    page, title, date, image, icon, alt
*/

window.COMIC_DATA = [
  {
    chapter: 1,
    title: "Chapter 1: Evening Breeze",
    shortTitle: "Evening Breeze",
    kicker: "Chapter 1",

    // Each object below is one episode/page in this chapter.
    pages: [
      {
        page: 1,
        title: "Sunset Arrival",
        date: "2026-01-01",
        image: "assets/comics/chapter-1/page-001.svg",           // Full comic page image
        icon: "assets/comics/chapter-1/icons/episode-001.svg",   // Separate sidebar sketch icon
        alt: "Warm sunset seaside establishing panels"
      },
      {
        page: 2,
        title: "The Boardwalk",
        date: "2026-01-08",
        image: "assets/comics/chapter-1/page-002.svg",
        icon: "assets/comics/chapter-1/icons/episode-002.svg",
        alt: "A quiet seaside street and sunset over a brick wall"
      },
      {
        page: 3,
        title: "Familiar Faces",
        date: "2026-01-15",
        image: "assets/comics/chapter-1/page-003.svg",
        icon: "assets/comics/chapter-1/icons/episode-003.svg",
        alt: "Placeholder comic page"
      },
      {
        page: 4,
        title: "Salt & Memory",
        date: "2026-01-22",
        image: "assets/comics/chapter-1/page-001.svg",
        icon: "assets/comics/chapter-1/icons/episode-004.svg",
        alt: "Placeholder duplicate page for demo"
      },
      {
        page: 5,
        title: "Promises",
        date: "2026-01-29",
        image: "assets/comics/chapter-1/page-002.svg",
        icon: "assets/comics/chapter-1/icons/episode-005.svg",
        alt: "Placeholder duplicate page for demo"
      },
      {
        page: 6,
        title: "A Quiet Moment",
        date: "2026-02-05",
        image: "assets/comics/chapter-1/page-003.svg",
        icon: "assets/comics/chapter-1/icons/episode-006.svg",
        alt: "Placeholder duplicate page for demo"
      },
      {
        page: 7,
        title: "To Be Continued",
        date: "2026-02-12",
        image: "assets/comics/chapter-1/page-001.svg",
        icon: "assets/comics/chapter-1/icons/episode-007.svg",
        alt: "Placeholder duplicate page for demo"
      }
    ]
  }
];
