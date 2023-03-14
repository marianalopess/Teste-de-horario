function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora < 6) {
        img.src = ''
    } else if (hora < 12) {
        console.log('Bom dia!')
    } else if (hora=12) {
        console.log('Hora do almoço')
    }else if (hora <= 18) {
        console.log('Boa tarde!')
    } else if (hora < 24) {
        console.log('Boa noite!')
    } else {
        console.log('Por favor, insira uma hora válida.')
    }
}