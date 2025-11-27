import fetch from "node-fetch";

// сюда вставь токен, который скопировал через F12
const TOKEN = "https://str2.tvcom.uz/27/tracks-v2a1/mono.m3u8?token=bdb64e7a073e7efde3638f447518c38c";
const PING_URL = `https://tvcom/api/keepalive?token=${TOKEN}`;

async function ping() {
  try {
    const res = await fetch(PING_URL);
    console.log("Ping:", res.status);
  } catch (err) {
    console.error("Ошибка пинга:", err.message);
  }
}

// каждые 10 секунд
setInterval(ping, 10000);
