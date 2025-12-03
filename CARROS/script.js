
class Carro {
    constructor(imagem, marca, modelo, ano, cor, velocidadeMaxima) {
        this.imagem = imagem
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.cor = cor
        this.velocidadeMaxima = velocidadeMaxima
    }

}

var todosCarros = []

todosCarros.push(new Carro("https://s2-autoesporte.glbimg.com/EWGcFdcTuSsYeouAfsvtFsWB6UA=/0x0:1300x792/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/w/h/ksAU8xQ7Kj5cqys4YSDw/audi-r8gt-03.jpg", "Audi 8"))
todosCarros.push(new Carro("https://cdn.motor1.com/images/mgl/BXxB0M/s3/ferrari-f80.jpg" , "Ferrari"))

function listarCarros(){
for (var i = 0; i < todosCarros.length; i++) {
    document.querySelector("#resultados").innerHTML += `
<div class="card" style="width: 18rem;">
  <img src="${todosCarros[i].imagem}" class="card-img-top" alt="...">
  <div class="card-body">
        <h5 class="card-title">${todosCarros[i].modelo}</h5>
        <p class="card-text">${todosCarros[i].ano}</p>
  </div>
</div>`
}
}


document.querySelector("#bntCadastro").addEventListener("click", () => {
    var imagem = document.querySelector("#imagem").value
    var marca = document.querySelector("#marca").value
    var modelo = document.querySelector("#modelo").value
    var ano = document.querySelector("#ano").value
    var cor = document.querySelector("#cor").value
    var velocidadeMaxima = document.querySelector("#velocidadeMaxima").value


    todosCarros.push(new Carro(imagem,marca,modelo,ano, cor, velocidadeMaxima))

    document.querySelector("#resultados").innerHTML += ""
    listarCarros()
})
