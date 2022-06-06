import express, {Request, Response} from "express";
import cors from "cors";
import { Conta, Extrato, contas} from "./data";
import {checkCPFFormat, checkAge} from "./verificacoes"

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("vo ve e te aviso 👍")
});


app.get("/contas", (req:Request, res:Response)=>{
    res.status(200).send(contas)
})


app.post("/contas", (req:Request, res:Response)=>{
    let errorCode:number = 400
    const [dia, mes, ano] = req.body.dataDeNascimento.split("/")
   
    try{ 
        let verificando = 2022 - Number(ano) >=18
        // if(verificando === false){
        // errorCode = 422;
        // throw new Error("Idade inválida")
        // }
        if (!checkAge(req.body.dataDeNascimento)){
            errorCode = 422
            throw new Error("Idade insuficiente, tente de novo com 18 👍")
        }
        if (!checkCPFFormat(req.body.cpf)){
            errorCode = 422;
            throw new Error("CPF inválido")
        }
        const { nome, cpf, dataDeNascimento, saldo, extrato} = req.body
        if (!nome || !cpf || (!dataDeNascimento )   || (!saldo && saldo !== 0) || !extrato){
            errorCode = 422
            throw new Error("Please check the fields!")
        }
        const novaConta: Conta ={
            nome,
            cpf,
            dataDeNascimento,
            saldo,
            extrato
        }
        contas.push(novaConta)
        res.status(201).send({contas})

    }catch(error:any){
        res.status(errorCode).send({mensagem: error.message})
    }
})



app.get("/conta/:nome/:cpf", (req:Request, res:Response)=>{
    let errorCode:number = 400
    try{
        const nome:string = (req.params.nome)
        const cpf:string = (req.params.cpf)
            if (!nome){
            errorCode = 422
            throw new Error ("Nome inválido")
            
        }
            if (!cpf){
            errorCode = 422
            throw new Error ("CPF inválido")
        }
           
        const conta = contas.find((conta)=>{
            return conta.nome === nome && conta.cpf === cpf
        })
        
        res.status(200).send(conta)
    }catch(error:any){
        res.status(errorCode).send({mensagem: error.message})
    }
})

// app.post("/adicionar-saldo/:nome/:cpf", (req:Request, res:Response)=>{
//     const nome:string=(req.params.name)
//     const cpf:string =(req.params.cpf)
//     const adicionarSaldo:Extrato={
//         valor: (req.body.valor),
//         data: (req.body.data),
//         descricao: (req.body.descricao)
//     }
//     listaDeProdutos.push(novoProduto)
//     res.status(201).send(listaDeProdutos)
// })