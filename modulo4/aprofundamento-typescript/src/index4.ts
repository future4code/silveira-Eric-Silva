import { SignatureKind } from "typescript"

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) utilizando o "tsc && node".
// c) sim, além de "tsc && node", teria que especificar o diretório do arquivo que você quer compilar 
// d)tsc arquivo1.ts arquivo2.ts arquivo3.ts