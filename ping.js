import fetch from "node-fetch";

// список токенов
const TOKENS = [
  "https://str2.tvcom.uz/27/tracks-v2a1/mono.m3u8?token=bdb64e7a073e7efde3638f447518c38c",
  "https://str2.tvcom.uz/33/index.m3u8?token=c26ad385a02e2a86876064a6c553d794"
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
setInterval(pingAll, 10000);
