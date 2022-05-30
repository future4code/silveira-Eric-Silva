import { type } from "os"

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    nome:string
    lancamento:number
    genero:GENERO
    nota?:number
}


function filme(nome:string, lancamento:number, genero:GENERO, nota?:number):Filme{
const movie:Filme={
    nome:nome,
    lancamento:lancamento,
    genero:genero,
    nota:nota
}
return movie
}

console.log(filme("Watchmen", 2009, GENERO.ACAO, 100));
console.log(filme("Interestelar", 2014, GENERO.ACAO)); 
