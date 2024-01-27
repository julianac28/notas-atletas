// FUNÇÃO CALCULAR A SOMA DAS NOTAS VÁDIAS E A MÉDIA
// RETORNA UM OBJETO nome, notasObtidas, mediaValida

function obterMediaNotas(atletas) {
    let resultado = []
    
    for (let i = 0; i< atletas.length; i++){
      let soma = 0
      let notasComputadas = atletas[i].notas.sort().slice(1,4)
        
      notasComputadas.forEach(function(nota){        
        return soma =  soma + nota
      })
      
      let atleta = {
        nome: atletas[i].nome,
        notasObtidas: atletas[i].notas,
        mediaValida:soma/notasComputadas.length 
      }
      //media.push(soma/notasComputadas.length)
      resultado.push(atleta)

    }
    return resultado
} 

// OBJETO DE ENTRADA LISTA DOS ATLETAS
let atletas = [
  { nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]},
  { nome: "Fernando Puntel",
   notas: [8, 10, 10, 7, 9.33]},
  {nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]},
  {nome: "Bruno Castro",
  notas: [10, 10, 10, 9, 9.5]}
];


//FUNÇÃO IMPRIMIR RESULTADO FORMATADO
               
function imprimirResultado(objAtletas) {
    let resultado = (obterMediaNotas(objAtletas));
    let imprimir = ""
    
    resultado.forEach(function(atleta){        
        return imprimir = imprimir         
                          + `\nNome: ${atleta.nome}` 
                          + `\nNotas Obtidas: ${atleta.notasObtidas}` 
                          + `\nMédia Válida: ${atleta.mediaValida}\n`
      })
     return imprimir
     } 

//RESULTADO

console.log(imprimirResultado(atletas))
