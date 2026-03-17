const news = [
  {
    img: "images/jackquinn.jpg",
    headline: "NHL roundup: Jack Quinn scores first hat trick as Sabres keep rolling",
    path: "jackquinn.html",
    // time: "57 min",
    date: "2026-03-14T14:20:00"
  },

  {
    img: "images/roy.avif",
    headline: "Avalanche stock up after acquiring Nicolas Roy from Maple Leafs",
    path: "roy.html",
    // time:"3 h",
    date: "2026-03-11T15:10:04"
  },

  {
    img: "images/dowd.avif",
    headline: "Golden Knights acquire veteran Nic Dowd in a trade with Capitals",
    path:"dowd.html",
    // time: "4 h",
    date: "2026-03-10T12:35:56"
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