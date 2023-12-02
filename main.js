
function tocaSom (seletorAudio) {
    document.querySelector(seletorAudio).play();
    
    if(elemnto === null) {
        //alert('Elemento nao encontrado');
        console.log('Elemento não encontrado')
    
    }
    //elemento.play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    
    tecla.onkeydown = function(evento) {
       


        if (evento.code === 'Space' || evento.code ==='Enter') {
            tecla.classList.add('Ativa');
        }


        }
       
        

       tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
       }
    
    }
        
