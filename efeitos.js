//variáveis
// pega o doc dentro da var , que tem o id "bonito"
const bonito = document.getElementById("bonito");

// pega o doc dentro da variável, que tem o id "feio"
const feio = document.getElementById("feio");

// pega o doc dentro da variável, que tem o id "frente" que é a imagem do gato de botas.
const foto = document.getElementById("foto");

/*
//Função, está quebrada, vai verificar o nome das imagens 
function isLampBroken() {

    //vai procurar pela palavra "quebrada", se encontra retona 1.
    return lamp.src.indexOf("quebrada") > -1
}
*/

//Função, para mudar a imagem pra "ligada"
function negoBonito() {

    //se, (não está quebrada) . "quebrada na texto"
    //if (!isLampBroken()) {

    // dentro da variável "lamp" coloca a imagem selecionada.
    foto.src = "nego2.png";
    //}
}


//Função, que vai desligar
function guiFeio() {

    //se , não estiver a palavra "quebrada"
    //if (!isLampBroken()) {

    //dentro da variável "lamp" coloca a imagem selecionada.
    foto.src = "guii2.png";
    // }
}

//ao clicar, vai acionar essa função
bonito.addEventListener("click", negoBonito);

feio.addEventListener("click", guiFeio);

