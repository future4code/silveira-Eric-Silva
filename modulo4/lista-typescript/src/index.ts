function pessoa(nome:string, data:string) {


const separa = data.split("/")

return `Olá me chamo ${nome}, nasci no dia ${separa[0]} do mês de ${separa[1]} do ano de ${separa[2]}`

} 

console.log(pessoa( "eric", "31/07/2002"))