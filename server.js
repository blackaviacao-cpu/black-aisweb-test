import express from "express";

const app = express();
app.use(express.json());
app.use(express.static("."));

app.post("/api/check", async (req, res) => {
  const {icao, eobt} = req.body;

  // 🔥 POR ENQUANTO FAKE (vamos ligar no AISWEB depois)
  res.json({
    icao,
    eobt,
    status: "OK",
    pista: "1500m",
    noturno: "NÃO",
    alerta: "Simulação inicial"
  });
});

app.listen(3000, () => {
  console.log("Rodando em http://localhost:3000");
});
