import express, {Request, Response} from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});
app.get("/ping", (req:Request, res:Response) => {          
    res.send("Pong! 🏓")
})

type Tasks = {
    userId:number
    id:number
    title:string
    completed:boolean
}

const afazeres :Tasks[]=[  {
    "userId": 1,
    "id": 1,
    "title": "tomar café",
    "completed": true
  },
  {
    "userId": 1,
    "id": 2,
    "title": "fazer warm up",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "almoçar",
    "completed": true
  },
  {
    "userId": 1,
    "id": 4,
    "title": "fazer exercício",
    "completed": false
  },
  {
    "userId": 1,
    "id": 5,
    "title": "comer dnv",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "tomar banho",
    "completed": true
  }]

  app.get("/tarefas", (req:Request, res:Response) => {          
    res.send(afazeres)
})

app.get(`/filtro-de-tarefas`, (req: Request, res: Response) => {
    // const completed = Boolean (req.params.completed)
    const filterCompleted =
        afazeres.filter(
            (afazer: Tasks) => {
                return afazer.completed === false
            }
        )

        res.status(200).send(filterCompleted)
})
app.post("/adicionar-tarefa", (req: Request, res: Response) => {
    const novaTarefa:Tasks = {
        id: Date.now(),
        userId: (req.body.id),
        title:(req.body.title),
        completed: (req.body.completed)
    }
        afazeres.push(novaTarefa)

        res.status(200).send(afazeres)
})

