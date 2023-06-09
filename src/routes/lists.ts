import express from "express"
import listController from "../controllers/lists"
import { verifyAccessToken } from "../middlewares/verifyTokens"

const router = express.Router()

/* router.get("/lists", verifyAccessToken, listController.getAllLists) */
router.get("/lists", verifyAccessToken, listController.getAllListTitles)
router.get("/list/:listId", verifyAccessToken, listController.getList)
router.get(
    "/list/search/:searchString",
    verifyAccessToken,
    listController.searchListByTitle
)

router.post("/list", verifyAccessToken, listController.createList)
router.delete("/list/:listId", verifyAccessToken, listController.deleteList)
router.put("/list/:listId", verifyAccessToken, listController.updateList)

export { router as listRouter }
