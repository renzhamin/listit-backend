import cookieParser from "cookie-parser"
import cors from "cors"
import express from "express"
import path from "path"
import router from "./routes"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(
    cors({
        origin: true,
        credentials: true,
    })
)

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "dist")))

app.use(router)

const port = process.env.PORT || 5000

app.listen(port, () => console.log("Server running at port", port))
