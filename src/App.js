import React, { useEffect } from "react"
import { Route, Switch, Link } from "react-router-dom"
import { connect } from "react-redux"
import { setAlbums, setUsers, setNamedAlbums } from "./redux/index"
import axios from "axios"
import AlbumItem from "./components/AlbumItem"
import AlbumPage from "./components/AlbumPage"
import Photo from "./components/Photo"
import "./styles/App.scss"

export const App = ({ state, setAlbums, setUsers, setNamedAlbums }) => {
    useEffect(() => {
        axios
            .get("http://jsonplaceholder.typicode.com/albums")
            .then((response) => setAlbums(response.data))
        axios
            .get("http://jsonplaceholder.typicode.com/users")
            .then((response) => setUsers(response.data))
    }, [setAlbums, setUsers])

    useEffect(() => {
        let albumsWithNames = []
        state.albums.forEach((album) => {
            state.users.forEach((user) => {
                if (album.userId === user.id) {
                    albumsWithNames.push({ ...album, name: user.name })
                }
            })
        })
        setNamedAlbums(albumsWithNames)
    }, [state.albums, state.users, setNamedAlbums])

    return (
        <div className="App">
            <Link to="/">
                <h1>Photos</h1>
            </Link>
            <Switch>
                <Route exact path="/">
                    {state.namedAlbums.map((album) => (
                        <Link to={"/" + album.id} key={album.id}>
                            <AlbumItem title={album.title} name={album.name} />
                        </Link>
                    ))}
                </Route>
                <Route exact path="/:albumId">
                    <AlbumPage />
                </Route>
                <Route exact path="/:albumId/photo/:photoId">
                    <Photo />
                </Route>
            </Switch>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = {
    setAlbums,
    setUsers,
    setNamedAlbums
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
