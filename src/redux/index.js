import { createStore } from "redux"

export const setAlbums = (albums) => {
    return {
        type: "SET_ALBUMS",
        payload: albums
    }
}

export const setUsers = (users) => {
    return {
        type: "SET_USERS",
        payload: users
    }
}

export const setNamedAlbums = (namedAlbums) => {
    return {
        type: "SET_NAMED_ALBUMS",
        payload: namedAlbums
    }
}

export const setPhotos = (photos) => {
    return {
        type: "SET_PHOTOS",
        payload: photos
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ALBUMS":
            return { ...state, albums: action.payload }
        case "SET_USERS":
            return { ...state, users: action.payload }
        case "SET_NAMED_ALBUMS":
            return { ...state, namedAlbums: action.payload }
        case "SET_PHOTOS":
            return { ...state, photos: action.payload }
        default:
            return state
    }
}

const initialState = {
    albums: [],
    users: [],
    namedAlbums: [],
    photos: []
}

const store = createStore(reducer)
export default store
