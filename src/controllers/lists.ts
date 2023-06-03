import listService from "../db/lists"

export default {
    createList: async function (req, res) {
        const { id: userId } = req.user
        const list = req.body

        await listService
            .createList(userId, list)
            .then(() => {
                return res.sendStatus(200)
            })
            .catch(() => {
                return res.json({ error: "Could not create list" })
            })
    },

    getAllLists: async function (req, res) {
        const lists = await listService.getAllLists(req.user.id)

        if (lists) {
            return res.json({ lists })
        }
    },

    getAllListTitles: async function (req, res) {
        const lists = await listService.getAllListTitles(req.user.id)

        if (lists) {
            return res.json({ lists })
        }
    },

    searchListByTitle: async function (req, res) {
        const { userId } = req.user
        const searchString = req.params.searchString
        const lists = await listService.searchListbyTitle(userId, searchString)

        if (!lists) return res.status(404).json({ error: "No match found" })
        return res.json({ lists })
    },

    getList: async function (req, res) {
        const { id: userId } = req.user

        const list = await listService.getList(userId, req.params.listId)

        if (list) {
            return res.json({ list })
        }

        return res.status(404).json({ error: "List not found" })
    },

    updateList: async function (req, res) {
        const list = req.body
        const { id: userId } = req.user
        const { listId } = req.params
        await listService
            .updateList(userId, listId, list)
            .then(() => {
                return res.sendStatus(200)
            })
            .catch((e) => {
                return res
                    .status(400)
                    .json({ error: "Could not update list", dbg: e })
            })
    },

    deleteList: async function (req, res) {
        const { listId } = req.params
        await listService
            .deleteList(listId)
            .then(() => {
                return res.sendStatus(200)
            })
            .catch(() => {
                return res.status(400).json({ error: "Could not delete list" })
            })
    },
}
