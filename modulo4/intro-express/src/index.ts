import express, { Request, Response } from "express";
import cors from "cors";


const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});
app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Hello from Express")
})
// ===============================================================
type User = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}
let users: User[] = [{
    id: 7,
    name: "eric felipe",
    phone: 74999334703,
    email: "erifelipess07@gmail.com",
    website: "https://github.com/efss7"
},

{
    id: 10,
    name: "Aparecida",
    phone: 74999719229,
    email: "mariaaparecidacal@gmail.com",
    website: "http://seila.com/aparecida"
}]
app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(users)
})
// ===========================================================================

type Post = {
    id: number
    title: string
    body: string
    userId: number
}

let posts: Post[] = [
    {
        id: 1,
        title: "Khaleesi",
        body: "Dracarys",
        userId: 10
    },
    {
        id: 2,
        title: "Rick Sanchez",
        body: "Wubba lubba dub dub",
        userId: 7
    }
]
app.get("/posts", (req: Request, res: Response) => {
    res.status(200).send(posts)
})

app.get(`/post/:id`, (req: Request, res: Response) => {
    const userId = Number(req.params.id)
    const filterList =
        posts.filter(
            (post: Post) => {
                return post.userId === userId
            }
        )

        res.status(200).send(filterList)
})

// JUSTIFICATIVA: fica mais organizado criar um array para cada endpoint

app.delete(`/delete/post/:userId/:postId`, (req: Request, res: Response) => {
    const postId = Number(req.params.postId)
    const userId = Number(req.params.userId)
    const deletePost =
        posts.filter(
            (post: Post) => {
                return post.userId !== postId && post.id !== userId
            }
        )
        posts = deletePost
        res.status(200).send(deletePost)
})

// =========================================================================

app.delete(`/delete/user/:userId`, (req: Request, res: Response) => {
    const userId = Number(req.params.userId)
    const deleteUser =
        users.filter(
            (user: User) => {
                return user.id !== userId
            }
        )
        users = deleteUser
        res.status(200).send(deleteUser)
})
