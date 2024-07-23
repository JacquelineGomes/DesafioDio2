function VerificarNivel(vitorias, derrotas){
    let rankingVitorias = vitorias - derrotas
    let nivel

    switch(true){
        case rankingVitorias<=10:
            nivel = "Ferro"
            break

        case rankingVitorias>=11 && rankingVitorias<=20:
            nivel = "Bronze"
            break

        case rankingVitorias>=21 && rankingVitorias<=50:
            nivel = "Prata"
            break

        case rankingVitorias>=51 && rankingVitorias<=80:
            nivel = "Ouro"
            break
        
        case rankingVitorias>=81 && rankingVitorias<=90:
            nivel = "Diamante"
            break

        case rankingVitorias>=91 && rankingVitorias<=100:
            nivel = "Lendário"
            break

        case rankingVitorias>=101:
            nivel = "Imortal"
            break
        
        default:
            nivel = "não determinado"
    }
    return `O herói tem saldo de ${rankingVitorias} vitórias e está no nível ${nivel}`
  
}
let resultado = VerificarNivel(21,2)
console.log(resultado)