import listService from "../db/lists"

export default {

    createList : async function (req, res) {
        const { id: userId } = req.user
        const { title, content } = req.body

        await listService
        .createList(userId, title, content)
        .then(() => {
            return res.sendStatus(200)
        })
        .catch((e) => {
            return res.json({ error: "Could not create list" })
        })
    },

    getAllLists : async function (req, res) {
        const lists = await listService.getAllLists(req.user.id)

        if (lists) {
            return res.json({ lists })
        }
    },

    getList : async function (req, res) {
        const list = await listService.getList(req.params.listId)

        if (list) {
            return res.json({ list })
        }

        return res.status(404).json({error : "List not found"})
    },

    updateList : async function (req, res) {
        const { title, content } = req.body
        const { listId } = req.params
        await listService.updateList(listId, title, content)
        .then(()=>{
            return res.sendStatus(200)
        })
        .catch(()=>{
            return res.status(400).json({error : "Could not update list"}) 
        })
    },


    deleteList : async function (req, res) {
        const { listId } = req.params
        await listService.deleteList(listId)
        .then(()=>{
            return res.sendStatus(200)
        })
        .catch(()=>{
            return res.status(400).json({error: "Could not delete list"})
        })
    },

}
