import fetch from "node-fetch";

// список токенов
const TOKENS = [
  "https://str5.tvcom.uz/27/index.m3u8?token=4e4a6baa3b358812bbc1072aeb92ddb1",
  "https://str2.tvcom.uz/33/index.m3u8?token=e85ffd9ac9c44649eb995943c11609f2"
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
