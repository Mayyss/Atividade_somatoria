"use strict"

const apiPixabay = async (imagem) => {
    const chaveApi = "key=24046852-a032b367f81c95aa3f833c3d4"
    const url = `https://pixabay.com/api/?${chaveApi}&q=${imagem}&image_type=photo&pretty=true&lang=pt`

    const response = await fetch(url)
    const imgAchadas = await response.json()
    // console.log(url)
    // console.log(response)
    console.log(imgAchadas)
}

const limpaBusca = () => {
    document.querySelector('.input_pesquisa').value = ""
}

const buscarImagens = async(evento) => 
{
    if(evento.key === 'Enter'){
        const imagemPesquisa = evento.target.value
        const infoImagens = await apiPixabay(imagemPesquisa)
        const arrayResultados = infoImagens.hits
        limpaBusca(document.querySelector('.galeria_container'))
        carregarResultados(arrayResultados)
        //console.log(infoImagens)
        //console.log(arrayResultados)
        //console.log(imagemPesquisa)
    
    }
}

const criaCard = async (elemento, indice, array) => {
    
}


document.querySelector(".input_pesquisa").addEventListener('keypress', buscarImagens)