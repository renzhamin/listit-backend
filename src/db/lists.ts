import db from "./connect"

const createList = (userId: string, list) => {
    return db.list.create({
        data: {
            userId,
            title: list.title,
            content: list.content,
        },
    })
}

const getAllLists = (userId: string) => {
    return db.list.findMany({
        where: {
            userId,
        },
    })
}

const getAllListTitles = (userId: string) => {
    return db.list.findMany({
        where: {
            userId,
        },
        select: {
            id: true,
            title: true,
        },
    })
}

const searchListbyTitle = (userId: string, searchString: string) => {
    return db.list.findMany({
        where: {
            title: {
                contains: searchString,
                mode: "insensitive",
            },
        },
        select: {
            id: true,
            userId: true,
            title: true,
            content: true,
        },
    })
}

const getList = (userId: string, id: string) => {
    return db.list.findFirst({
        where: {
            AND: [{ id }, { OR: [{ userId }, { isPublic: true }] }],
        },
    })
}

const updateList = (userId: string, id: string, list: any) => {
    return db.list.updateMany({
        where: {
            AND: [{ userId }, { id }],
        },
        data: {
            title: list.title,
            content: list.content,
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
    getAllListTitles,
    searchListbyTitle,
    updateList,
    deleteList,
}
