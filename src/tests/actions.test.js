import { setAlbums, setUsers, setNamedAlbums, setPhotos } from "../redux"

describe("setAlbums", () => {
    it("should create an action to set the albums in the store", () => {
        const albums = [{ album: "test" }]
        const expectedAction = {
            type: "SET_ALBUMS",
            payload: albums
        }
        expect(setAlbums(albums)).toEqual(expectedAction)
    })
})

describe("setUsers", () => {
    it("should create an action to set the users in the store", () => {
        const users = [{ user: "test" }]
        const expectedAction = {
            type: "SET_USERS",
            payload: users
        }
        expect(setUsers(users)).toEqual(expectedAction)
    })
})

describe("setNamedAlbums", () => {
    it("should create an action to set the albums with names in the store", () => {
        const namedAlbums = [{ album: "test" }]
        const expectedAction = {
            type: "SET_NAMED_ALBUMS",
            payload: namedAlbums
        }
        expect(setNamedAlbums(namedAlbums)).toEqual(expectedAction)
    })
})

describe("setPhotos", () => {
    it("should create an action to set the photos in the store", () => {
        const photos = [{ photo: "test" }]
        const expectedAction = {
            type: "SET_PHOTOS",
            payload: photos
        }
        expect(setPhotos(photos)).toEqual(expectedAction)
    })
})
