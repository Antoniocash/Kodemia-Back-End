import express from "express"
import userRouter from "./routers/users.router.js"
import postRouter from "./routers/post.router.js"
import authRouter from "./routers/auth.router.js"

const server = express()

//Middlewares
server.use(express.json())


//Routers
server.use("/user", userRouter)
server.use("/posts", postsRouter)
server.use("/uath", authRouter)

export { server }