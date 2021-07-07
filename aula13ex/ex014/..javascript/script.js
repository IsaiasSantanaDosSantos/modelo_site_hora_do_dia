
    function carregar(){ //Criar uma função
        var msg = window.document.getElementById('msg') //Criei uma variável pegando o valor do id "msg" do HTML
        var img = window.document.getElementById('imagem') //Criei uma caviável pegando o valor do id "imagem" do HTML
        var data = new Date() //Variável para pegar hora atual
        
        var hora = data.getHours() //Variável para pegar o valor da variável "data"    
        msg.innerHTML = `Agora são ${hora} horas.` //Vai aparecer está mensagem ao invés da mensagem com id "msg" que está no HTML
        if (hora >= 0 && hora < 12) { //Se a hora for maior ou igual a 0 ou menor que 12...
             img.src = 'img/manha.png' //Vai mostrar essa imagem
             document.body.style.background = "#EDD4A9" //A cor de fundo vai ser essa
        } else if (hora >= 12 && hora <= 18) { //Se a hora for maior ou igual a 12 ou menor que 18...
              img.src = 'img/tarde.png'//Vai mostrar essa imagem
              document.body.style.background = "#b9846f" //A cor de fundo vai ser essa
        } else { //Se nenhuma das opções acima for verdadeira...
            img.src = 'img/noite.png' //Vai mostrar essa imagem
            document.body.style.background = "#515154" //A cor de fundo vai ser essa
        }

    }

