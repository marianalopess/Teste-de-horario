function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 21
    var min = 10
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}.`
    if(hora < 6) {
        console.log('Boa madrugada...')
        img.src = 'imagens/madrugada260.jpg'
        document.body.style.background = '#283c43'
    } else if (hora < 12) {
        console.log('Bom dia!')
        img.src = 'imagens/manha260.jpg'
        document.body.style.background = '#f2e5c0'
    } else if (hora==12) {
        console.log('Hora do almoço')
        img.src = 'imagens/almoço260.jpg'
        document.body.style.background = '#b3c7a4'
    }else if (hora <= 18) {
        console.log('Boa tarde!')
        img.src = 'imagens/pordosol260.jpg'
        document.body.style.background = '#f7dc8c'
    } else if (hora < 24) {
        console.log('Boa noite!')
        img.src = 'imagens/noite260.jpg'
        document.body.style.background = '#2a1c68'
    } else {
        console.log('Por favor, insira uma hora válida.')
    }
}