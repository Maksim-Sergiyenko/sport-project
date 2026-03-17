const news = [

      {
    img: "images/lalakers.avif",
    headline: "NBA roundup: LA Lakers edge Denver Nuggets as San Antonio Spurs continue to roll",
    path: "lalakers.html",
    // time: "57 min",
    date: "2026-03-16T21:20:00"
  },

    {
    img: "images/wembanyama.avif",
    headline: "The Spurs hope to get back on track against the Hornets, Wembanyama uncertain",
    path: "wembanyama.html",
    // time: "57 min",
    date: "2026-03-16T20:51:00"
  },

  {
    img: "images/curry.avif",
    headline: "Steph Curry set to miss at least 10 days more due to sore knee, Warriors confirm",
    path: "curry.html",
    // time: "57 min",
    date: "2026-03-16T20:35:00"
  },

  {
    img: "images/cleavland.avif",
    headline: "NBA roundup: Cleveland Cavaliers stun Detroit Pistons as San Antonio Spurs dominate",
    path: "cleveland.html",
    // time: "57 min",
    date: "2026-03-14T14:20:00"
  },

  {
    img: "images/maxey.avif",
    headline: "From doubted to the history books: The journey of Tyrese Maxey",
    path: "maxey.html",
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