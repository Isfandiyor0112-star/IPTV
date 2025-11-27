import fetch from "node-fetch";

// список токенов
const TOKENS = [
  "https://str2.tvcom.uz/33/index.m3u8?token=9434ef3586d692e38f8f46e6a7933151"
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
