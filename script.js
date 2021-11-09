"use strict"

const apiPixabay = async (imagem) => {
    const chaveApi = "key=24046852-a032b367f81c95aa3f833c3d4"
    const url = `https://pixabay.com/api/?${chaveApi}&q=${imagem}&image_type=photo&pretty=true&lang=pt`

    const response = await fetch(url)
    const imgAchadas = await response.json()
    // console.log(url)
    // console.log(response)
    return imgAchadas
}

const limpaBusca = (elemento) => {
    // document.querySelector('.input_pesquisa').value = ""
    while(elemento.firstChild){
        elemento.removeChild(elemento.lastChild)
    }
}

const buscarImagens = async (evento) => 
{
    if(evento.key === 'Enter'){
        const imagemPesquisa = evento.target.value
        const infoImagens = await apiPixabay(imagemPesquisa)
        const array = infoImagens.hits
        limpaBusca(document.querySelector('.galeria_container'))
        carregarResultados(array)
        console.log(infoImagens)
        console.log(array)
        console.log(imagemPesquisa)
    
    }
}

const criaCard = async (elemento, indice, array) => {
    const imagens = elemento.largeImageURL

    const qtdeLike = elemento.likes

    const qtdeComentarios = elemento.comments

    const qtdeColecoes = elemento.collections

    console.log(qtdeComentarios)


    const tags = elemento.tags

    const container = document.querySelector(".galeria_container")
        const novaDiv = document.createElement("div")
        // novaDiv.classList.add('galeria')
        novaDiv.innerHTML = `<div class="galeria">
                                <div class="galeria_imagem">
                                    <img src="${imagens}" alt="" href="">
                                </div>
                            <div class="galeria_info">
                                <div class="itens_relacionados">
                                    <a href="">${tags}</a>
                                </div>
                                <div class="itens_interacao">
                                    <em class="itens">
                                        <ion-icon name="thumbs-up"></ion-icon>${qtdeLike}
                                    </em>
                                    <em class="itens">
                                        <ion-icon name="star-outline">${qtdeComentarios}</ion-icon>
                                    </em>
                                    <em class="itens">
                                        <ion-icon name="cloud-outline">${qtdeColecoes}</ion-icon>
                                    </em>
                                </div>
                            </div>
                        </div>`
                        container.appendChild(novaDiv)

}
const carregarResultados = (array) => {
    array.forEach(criaCard)
}


document.querySelector(".input_pesquisa").addEventListener('keypress', buscarImagens)