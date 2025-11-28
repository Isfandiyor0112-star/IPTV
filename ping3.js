import fetch from "node-fetch";

// список токенов
const TOKENS = [
  "https://st.uzlive.ru/futboltvuz/tracks-a1/mono.ts.m3u8",
  "https://st.uzlive.ru/sportuztv/tracks-v1a1/mono.ts.m3u8"
 
];

// базовый URL для пинга
const BASE_URL = "https://tvcom/api/keepalive?token=";

async function pingAll() {
  for (const token of TOKENS) {
    const url = `${BASE_URL}${token}`;
    try {
      const res = await fetch(url);
      console.log(`Ping ${token}:`, res.status);
    } catch (err) {
      console.error(`Ошибка пинга ${token}:`, err.message);
    }
  }
}

// каждые 10 секунд пингуем все токены
setInterval(pingAll, 5000);
