
function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    var min = data.getMinutes()  
    var seg = data.getSeconds()
    hora = adicionar0(hora)
    min = adicionar0(min)
    seg = adicionar0(seg)
      
 
    if ( hora > 0 && hora < 12){
        
        img.src = "../imagens/manha.png"
        document.body.style.background = '#8987B6'
        msg.innerHTML = ` Relógio ${hora}: ${min}:${seg} da manhã! `

    } else if (hora >= 12 && hora <= 18) {

        img.src = "../imagens/tarde.png"
        document.body.style.background = '#FAB454'
        msg.innerHTML = `Relógio ${hora}:${min}:${seg} da tarde!`

    } else {

        img.src = "../imagens/noite.png"
        document.body.style.background = '#304F63'
        msg.innerHTML = `Relógio ${hora}:${min}:${seg} da noite!`
    }
}

function adicionar0 (HrMinSeg) {
    if (HrMinSeg < 10){
        HrMinSeg = `0${HrMinSeg}`
    }

    return HrMinSeg
}


setInterval(carregar,1000)