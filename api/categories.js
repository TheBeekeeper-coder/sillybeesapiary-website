export default async function handler(req, res) {
  try {
    const response = await fetch("https://thebeekeeper.app.n8n.cloud/webhook/get-categories", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });

    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Proxy error", details: err.message });
  }
}
