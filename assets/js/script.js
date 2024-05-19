
function buscarLoli(event) {
  event.preventDefault(); 

  const nomeDaLoli = document.getElementById("anime-input").value;

  fetch(`https://nekos.best/api/v2/${nomeDaLoli}`)
      .then(response => {
          if (!response.ok) {
              throw new Error('Erro');
          }
          return response.json();
      })
      .then(json => mostrarLoli(json.results[0]))
      .catch(error => console.error("Erro:", error));
}

function mostrarLoli(data) {
  const animeConter = document.getElementById("anime-conter");
  animeConter.innerHTML = "";

  if (!data, !data.url) {
      animeConter.innerHTML = "";
      return;
  }

  const animeDiv = document.createElement("div");
  animeDiv.classList.add("anime");

  const imagem = document.createElement("img");
  imagem.src = data.url;
  imagem.alt = data.anime_name;

  if (imagem.src.endsWith(".gif")){

    imagem.classList.add("anime-gif");
} 
  else{

    imagem.classList.add("anime-img");
}

  animeDiv.appendChild(imagem);
  animeConter.appendChild(animeDiv);
}

//botão que limpa

document.getElementById('anime-limpar').addEventListener('click', animeLimpar);

function animeLimpar() {
    const animeConter = document.getElementById('anime-conter');
    animeConter.innerHTML = ''; //conteudo em si(gif/img)

    const animeInput = document.getElementById('anime-input');
    animeInput.value = '';  // input
}

// || -> serve como um ou, ex: isso OU aquilo
//event.preventDefault() -> serve para evitar que a parte do botão do formulario recarregue a pagina
//.then(json => mostrarLoli(json.results[0])) -> descrito no site
//image.src.endswith -> verifica se a gif/img é uma url
