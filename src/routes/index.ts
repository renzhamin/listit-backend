import express from "express"
import { authRouter } from "./auth"
import { userRouter } from "./users"
import { listRouter } from "./lists"

const router = express.Router()

router.use(authRouter)
router.use(userRouter)
router.use(listRouter)
router.use("/api", router)

export default router
