function countItems(arr:any) {
  const countMap = Object.create(null);

  for (const element of arr) {
    if (!countMap[element]) {
      // Se ainda não existir elemento, definimos como um, já que
      // estamos na primeira ocorrência.
      countMap[element] = 1;
    } else {
      // Caso contrário, incrementamos um no número atual.
      countMap[element] += 1;
    }
  }
    let Unique:string[] = []
     Object.entries(countMap).forEach((UniqueNumber)=>{
    if(UniqueNumber[1]===1){
        Unique.push(UniqueNumber[0])
    }
  });
    return Unique
}

const arr = ["1", "1", "2", "2", "2", "3", "4", "5"];
console.log(countItems(arr));
