import fetch from "node-fetch";

const URL = "https://st.uzlive.ru/futboltvuz/tracks-v1a1/mono.ts.m3u8";

async function ping() {
  try {
    const res = await fetch(URL);
    console.log("Ping:", res.status);
  } catch (err) {
    console.error("Ошибка:", err.message);
  }
}

setInterval(ping, 5000); // каждые 10 секунд
