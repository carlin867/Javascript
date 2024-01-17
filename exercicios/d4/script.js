function gerarTabuada(){
    var res = document.getElementById('tab')
    var num = document.getElementById('num')
    
    if(num.value.length == 0){
        alert('A caixa está vazia!!!')
    }else{
        var n = Number(num.value)
        var c = 1
        res.innerHTML = ''
        while(c <=10 ){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            res.appendChild(item)
            c = c + 1
        }
    }
}