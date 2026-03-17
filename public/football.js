const news = [

    {
    img: "images/dowman.avif",
    headline: "Max Dowman should be allowed to enjoy the moment, insists Wayne Rooney",
    path: "dowman.html",
    // time: "57 min",
    date: "2026-03-16T20:24:00"
  },

    {
    img: "images/james.avif",
    headline: "Chelsea captain Reece James to miss PSG clash with hamstring injury",
    path: "james.html",
    // time: "57 min",
    date: "2026-03-16T20:11:00"
  },

  {
    img: "images/tudor.avif",
    headline: "'You can cry or you can fight': Spurs manager Tudor sends clear message to his players",
    path: "tudor.html",
    // time: "57 min",
    date: "2026-03-14T14:20:00"
  },

  {
    img: "images/maguire2.jpg",
    headline: "Harry Maguire handed 15-month suspended sentence for 2020 Mykonos brawl",
    path: "maguire.html",
    // time:"3 h",
    date: "2026-03-13T15:10:04"
  },

  {
    img: "images/osimhen1.jpg",
    headline: "Bayern Munich interested in Galatasaray's Victor Osimhen if Harry Kane leaves club",
    path:"osimhen.html",
    // time: "4 h",
    date: "2026-03-12T12:35:56"
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
        <img src="${item.img}" alt="">
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