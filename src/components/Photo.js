import React from "react"
import { useParams } from "react-router-dom"
import { connect } from "react-redux"

export const Photo = ({ photos }) => {
    const { photoId } = useParams()

    const photo = photos.find((photo) => photo.id === parseInt(photoId))
    return (
        <div>
            <img src={photo.url} alt={photo.title} />
        </div>
    )
}

const mapStateToProps = ({ photos }) => {
    return {
        photos
    }
}

export default connect(mapStateToProps)(Photo)
