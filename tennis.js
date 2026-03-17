const news = [
    {
    img: "images/sinner2.avif",
    headline: "Jannik Sinner says arriving early and thorough planning helped Indian Wells title triumph",
    path: "sinner2.html",
    // time: "57 min",
    date: "2026-03-16T22:10:00"
  },

  {
    img: "images/sabalenka.avif",
    headline: "Aryna Sabalenka showcases versatility to eventually find way to Indian Wells title",
    path: "sabalenka.html",
    // time: "57 min",
    date: "2026-03-16T21:56:00"
  },

  {
    img: "images/sinner.avif",
    headline: "Jannik Sinner rallies against Daniil Medvedev to win first Indian Wells title",
    path: "sinner.html",
    // time: "57 min",
    date: "2026-03-16T21:41:00"
  },

  {
    img: "images/raducanu.avif",
    headline: "Henman urges Raducanu to become 'physically more resilient' in order to climb rankings",
    path: "raducanu.html",
    // time: "57 min",
    date: "2026-03-11T14:20:00"
  },

  {
    img: "images/djokovic.avif",
    headline: "Novak Djokovic confident Serena Williams will return to tennis tour",
    path: "djokovic.html",
    // time:"3 h",
    date: "2026-03-10T15:10:04"
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