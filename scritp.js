let webhook = "https://alvarodev12.app.n8n.cloud/webhook/animacao-css";

async function cliqueiNoBotao() {
  let textoInput = document.querySelector(".input-animacao").value;
  let codigo = document.querySelector(".area-codigo");
  let areaResultado = document.querySelector(".area-resultado");

  let button = document.querySelector(".botao-magico");
  button.disabled = true;
  button.innerHTML = "Criando...";
  button.style.backgroundColor = "#ccc";

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

  setTimeout(() => {
    button.disabled = false;
    button.innerHTML = "Criar Mágica 🧙‍♂️";
  });
  button.style.backgroundColor = "#37E539";
}

// ("beforeend", "<style>"+ info.style +"</style>")

// button.disabled = false;
// button.innerHTML = "Criar Mágica 🧙‍♂️";
// button.style.backgroundColor = "#37E539";
