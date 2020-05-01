import React, { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { connect } from "react-redux"
import { setPhotos } from "../redux/index"
import "../styles/AlbumPage.scss"

export const AlbumPage = ({ state, setPhotos }) => {
    const { albumId } = useParams()

    useEffect(() => {
        axios
            .get(
                "http://jsonplaceholder.typicode.com/albums/" +
                    albumId +
                    "/photos"
            )
            .then((response) => setPhotos(response.data))
    }, [albumId, setPhotos])

    return (
        <div className="album-page">
            {state.photos.map((photo) => (
                <Link to={"/" + albumId + "/photo/" + photo.id} key={photo.id}>
                    <div className="photo">
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                    </div>
                </Link>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = {
    setPhotos
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPage)
