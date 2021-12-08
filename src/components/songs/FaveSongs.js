import React from "react"
import { useEffect, useState } from "react"

export const FaveSongs = () => {
    const [faveSongs, setSongs] = useState ([])
    useEffect(
        () => {
            fetch("http://localhost:8098/favesongs")
                .then(res => res.json())
                .then((songsArray) => {
                    setSongs(songsArray)
        }
    )
}, []
    )
    return (
        <>
        <h3>Everyone's Fave Songs</h3>
        <h4>Grab a song and give it a listen and make sure to leave a song for someone else!</h4>
        {
            faveSongs.map(song => {
            return <p key= {song}>"{song.title}" by {song.artist}</p>})
        }
        </>
    )}