function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        img.src = 'imagens/manha.jpg'
        document.body.style.background = 'yellow'
    }else if (hora >= 12 && hora < 18){
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = 'orange'
    }else{
        img.src = 'imagens/noite.jpg'
        document.body.style.background = 'black'
    }
  }
 