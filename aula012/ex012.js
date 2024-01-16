
var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas`)

if(hora >= 5 && hora <= 12.20){
    console.log('Bom Dia!')
}else{
    if(hora >= 12.21 && hora <= 17.30){
        console.log('Boa Tarde')
    }else{
        console.log('Boa Noite')
    }
}