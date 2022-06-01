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
    listaDeProdutos.push(novoProduto)
    res.status(201).send(listaDeProdutos)
})

app.get("/produtos", (req:Request, res:Response)=>{
    res.status(200).send(listaDeProdutos)
})

app.put("/produto/:id/editar", (req:Request, res:Response)=>{
    const id = (req.params.id)
    const editarProduto = listaDeProdutos.map(produto=>produto.id === id ? 
        {...produto,
        name:req.body.name,
        price: req.body.price } 
        : produto)
    res.status(201).send(editarProduto)
})

app.delete("/produto/delete/:id", (req:Request, res:Response)=>{
    const id = (req.params.id)
    const indexDelete = 
    listaDeProdutos.findIndex((produto:Produtos)=>{
        return produto.id !== id
    }
    )
    listaDeProdutos.splice
    res.status(200).send(deletarProduto)
})