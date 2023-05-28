import db from "./connect"

const createList = (userId: string, title: string, content) => {
    return db.list.create({
        data: {
            userId,
            title,
            content,
        },
    })
}

const getAllLists = (userId: string) => {
    return db.list.findMany({
        where: {
            userId,
        },
        select: {
            id: true,
            title: true,
            content: true,
        },
    })
}

const searchListbyTitle = (userId: string, searchString: string) => {
    return db.list.findMany({
        where: {
            userId,
            title: {
                contains: searchString,
                mode: "insensitive",
            },
        },
        select: {
            id: true,
            title: true,
            content: true,
        },
    })
}

const getList = (id: string) => {
    return db.list.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            title: true,
            content: true,
        },
    })
}

const updateList = (id: string, title: string, content) => {
    return db.list.update({
        where: {
            id,
        },
        data: {
            title,
            content,
        },
    })
}

const deleteList = (id: string) => {
    return db.list.delete({
        where: {
            id,
        },
    })
}

export default {
    createList,
    getList,
    getAllLists,
    searchListbyTitle,
    updateList,
    deleteList,
}
