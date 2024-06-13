const key = "8ad2ba2b7dc6c35c946afa0e7dbeec81";

function coletarDados(dados) {
  document.querySelector(".cidades").innerHTML = "tempo em  " + dados.name;
  document.querySelector(".temperatura").innerHTML =
    Math.floor(dados.main.temp) + "°C";

  document.querySelector(".min").innerHTML =
    "min " + Math.floor(dados.main.temp_min) + "°C";

  document.querySelector(".max").innerHTML =
    "max " + Math.floor(dados.main.temp_max) + "°C";

  document.querySelector(".descriçao").innerHTML = dados.weather[0].description;
  document.querySelector(
    ".img-previsao"
  ).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;

  document.querySelector(".umidade").innerHTML =
    "Umidade: " + Math.floor(dados.main.humidity) + "%";
}

async function buscarCidade(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then((resposta) => resposta.json());
  coletarDados(dados);
  console.log(dados);
}

function cliqueiNoBotao() {
  const cidade = document.querySelector("input").value;
  buscarCidade(cidade);
}
