

export type Conta={
    nome:string
    cpf:string
    dataDeNascimento:string
    saldo:number
    extrato: Extrato[] | []
}
export type Extrato={
    valor:number
    data:string
    descricao:string
}


export const contas:Conta[]=[
    {
        "nome": "Luis",
        "cpf": "773.705.960-20",
        "dataDeNascimento": "22/07/1995",
        "saldo": 0,
        "extrato": []
    },
    {
        "nome": "Eduardo",
        "cpf": "183.302.493-20",
        "dataDeNascimento": "12/12/1990",
        "saldo": 0,
        "extrato": []
    }

]


