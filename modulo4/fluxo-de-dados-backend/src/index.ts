import express, {Request, Response} from "express";
import cors from "cors";
import { listaDeProdutos, Produtos } from "./data"

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Pai ta online 😎 ")
});

app.get("/test", (req:Request, res:Response)=>{
    res.status(200).send("Positivo e operante 👍 ")
})

app.post("/adicionar-produto", (req:Request, res:Response)=>{
    const novoProduto:Produtos={
        id: (req.body.id),
        name: (req.body.name),
        price: (req.body.price)
    }
    let erroMsg = 400
    try{
        if(!req.body.name || !req.body.price){
            erroMsg = 401
            throw new Error ("Um dos parâmetros não condiz")
        }
        if( typeof req.body.name !== "string"){
            erroMsg = 422
            throw new Error ("name não condiz com o tipo")
        }
        if (typeof (req.body.price) !== "number"){
            erroMsg = 422
            throw new Error ("price não condiz com o tipo")
        }
        if (req.body.price <= 0){
            erroMsg = 422
            throw new Error("price com o valor menor ou igual a 0")
        }
    listaDeProdutos.push(novoProduto)
    res.status(201).send(listaDeProdutos)
} catch (error:any){
    if (erroMsg==200)
    res.status(500).send("Erro, tente novamente!")
    else
    res.status(erroMsg).send(error.message)
}
})

app.get("/produtos", (req:Request, res:Response)=>{
    res.status(200).send(listaDeProdutos)
})

app.put("/produto/:id/editar", (req:Request, res:Response)=>{
    const id = (req.params.id)
    const indexProduto = listaDeProdutos.findIndex(produto=>produto.id === id)
    let erroMsg:number = 400
    try{
        if (!req.body.price){
            erroMsg = 401
            throw new Error('nenhum valor declarado no price')
        }
        if (typeof(req.body.price) !== "number" ){
            erroMsg = 422
            throw new Error("price não é do tipo number")
        }
        if (req.body.price <= 0){
            erroMsg = 422
            throw new Error("price com o valor menor ou igual a 0")
        }
        if (!id) {
            erroMsg = 404
            throw new Error('Id não foi recebido')
        }
        if (!indexProduto) {
            erroMsg= 404
            throw new Error('Product não encontrado')
        }

    

    listaDeProdutos[indexProduto].name = req.body.name 
    listaDeProdutos[indexProduto].price = req.body.price
    res.status(201).send(listaDeProdutos)

        } catch(error:any) {
            if (erroMsg===200)
                res.status(500).send("Erro, tente novamente!")
            else
                res.status(erroMsg).send(error.message)
        }
}

)

app.delete("/produto/delete/:id", (req:Request, res:Response)=>{
    const id = (req.params.id)
    const indexDelete = 
    listaDeProdutos.findIndex((produto:Produtos)=>{
        return produto.id === id
    }
    )
    let erroMsg:number = 400
    try{
        if (!id){
            erroMsg= 404
            throw new Error("Id não encontrado")
        }
        if (!indexDelete){
            erroMsg = 404
            throw new Error("Produto não encontrado")
        }
    
    listaDeProdutos.splice(indexDelete, 1)
    res.status(200).send(listaDeProdutos)
    }catch (error:any){
        if (erroMsg === 200)
        res.status(500).send("Erro, tente novamente!")
    }
})