const news = [
  {
    img: "images/makazze.avif",
    headline: "makazze claims career-first MVP at EPL S23 finals",
    path: "makazze.html",
    // time: "57 min",
    date: "2026-03-16T23:42:00"
  },

  {
    img: "images/navi.avif",
    headline: "w0nderful shines as NAVI beat Aurora to lift ESL Pro League Season 23 trophy",
    path: "navi.html",
    // time: "57 min",
    date: "2026-03-16T23:31:00"
  },

  {
    img: "images/astralis.avif",
    headline: "Astralis shut down FUT in OT to take bronze at ESL Pro League",
    path: "astralis.html",
    // time: "57 min",
    date: "2026-03-16T22:56:00"
  },

  {
    img: "images/device.avif",
    headline: "device: It was good for me to have a reset",
    path: "device.html",
    // time: "57 min",
    date: "2026-03-14T14:20:00"
  },

  {
    img: "images/xfloud.avif",
    headline: "HEROIC stun PARIVISION to reach EPL Stage 2",
    path: "heroic.html",
    // time:"3 h",
    date: "2026-03-13T15:10:04"
  },
]

showNews()

function showNews() {
  const newsContainer = document.querySelector(".news-feed-container")
  const articlesHTML = news.map(buildArticle).join("")
  
  newsContainer.insertAdjacentHTML("beforeend", articlesHTML)
}

function buildArticle(item) {
  const time = getTimePassed(item.date)

  return `
    <article class="news-item">
      <div class="news-image">
        <img src="${item.img}" alt="tudor">
      </div>
      <div class="news-content">
        <a href="${item.path}" class="news-headline">${item.headline}</a>
        <p class="news-time">${time} ago</p>
      </div>
    </article>
  `
}

function getTimePassed(isoDate) {
  const now = new Date();
  const past = new Date(isoDate);
  const diffMs = now - past;

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days} day${days > 1 ? "s" : ""}`;
  if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""}`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""}`;
  return `${seconds} second${seconds !== 1 ? "s" : ""}`;
}