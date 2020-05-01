import {
    reducer,
    setAlbums,
    setUsers,
    setNamedAlbums,
    setPhotos
} from "../redux"

describe("reducer", () => {
    it("should return the initial state", () => {
        expect(reducer(undefined, {})).toEqual({
            albums: [],
            users: [],
            namedAlbums: [],
            photos: []
        })
    })

    it("should handle SET_ALBUMS", () => {
        expect(reducer(undefined, setAlbums([{ album: "test" }]))).toEqual({
            albums: [{ album: "test" }],
            users: [],
            namedAlbums: [],
            photos: []
        })

        expect(
            reducer(
                {
                    albums: [{ album: "test" }],
                    users: [],
                    namedAlbums: [],
                    photos: []
                },
                setAlbums([{ album: "test" }, { album: "test2" }])
            )
        ).toEqual({
            albums: [{ album: "test" }, { album: "test2" }],
            users: [],
            namedAlbums: [],
            photos: []
        })
    })

    it("should handle SET_USERS", () => {
        expect(reducer(undefined, setUsers([{ user: "test" }]))).toEqual({
            albums: [],
            users: [{ user: "test" }],
            namedAlbums: [],
            photos: []
        })

        expect(
            reducer(
                {
                    albums: [],
                    users: [{ user: "test" }],
                    namedAlbums: [],
                    photos: []
                },
                setUsers([{ user: "test" }, { user: "test2" }])
            )
        ).toEqual({
            albums: [],
            users: [{ user: "test" }, { user: "test2" }],
            namedAlbums: [],
            photos: []
        })
    })

    it("should handle SET_NAMED_ALBUMS", () => {
        expect(
            reducer(
                undefined,
                setNamedAlbums([{ album: "test", name: "tester" }])
            )
        ).toEqual({
            albums: [],
            users: [],
            namedAlbums: [{ album: "test", name: "tester" }],
            photos: []
        })

        expect(
            reducer(
                {
                    albums: [],
                    users: [],
                    namedAlbums: [{ album: "test", name: "tester" }],
                    photos: []
                },
                setNamedAlbums([
                    { album: "test", name: "tester" },
                    { album: "test2", name: "testerino" }
                ])
            )
        ).toEqual({
            albums: [],
            users: [],
            namedAlbums: [
                { album: "test", name: "tester" },
                { album: "test2", name: "testerino" }
            ],
            photos: []
        })
    })

    it("should handle SET_PHOTOS", () => {
        expect(reducer(undefined, setPhotos([{ photo: "test.png" }]))).toEqual({
            albums: [],
            users: [],
            namedAlbums: [],
            photos: [{ photo: "test.png" }]
        })

        expect(
            reducer(
                {
                    albums: [],
                    users: [],
                    namedAlbums: [],
                    photos: [{ photo: "test.png" }]
                },
                setPhotos([{ photo: "test.png" }, { photo: "test2.png" }])
            )
        ).toEqual({
            albums: [],
            users: [],
            namedAlbums: [],
            photos: [{ photo: "test.png" }, { photo: "test2.png" }]
        })
    })
})
