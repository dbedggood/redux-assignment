import React from "react"
import "../styles/AlbumItem.scss"

export const AlbumItem = ({ title, name }) => {
    return (
        <div className="album">
            <h2>{title}</h2>
            <h3>{name}</h3>
        </div>
    )
}

export default AlbumItem
