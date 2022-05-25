function checaRenovacaoRG():any {
    const anoAtual:any =  process.argv[2]
    const anoNascimento:any = process.argv[3]
    const anoEmissao:any = process.argv[4]
 
    const idade:any = anoAtual - anoNascimento
    const tempoCarteira:any = anoAtual - anoEmissao
 
    const cond1 = idade <= 20 && tempoCarteira >= 5
    const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3 = idade > 50 && tempoCarteira >= 15
 
    return (cond1 || cond2 || cond3)
 }

 console.log(checaRenovacaoRG())
 