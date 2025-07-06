let webhook = "https://alvarodev12.app.n8n.cloud/webhook-test/animacao-css";

async function cliqueiNoBotao() {
  let textoInput = document.querySelector(".input-animacao").value;
  let codigo = document.querySelector(".area-codigo");
  let areaResultado = document.querySelector(".area-resultado");

  let resposta = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pergunta: textoInput }),
  });

  let resultado = await resposta.json();

  let info = JSON.parse(resultado.resposta);

  codigo.innerHTML = info.code;
  areaResultado.innerHTML = info.preview;

  document.head.insertAdjacentHTML("beforeend", `<style>${info.style}</style>`);
}
