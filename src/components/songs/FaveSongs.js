import React from "react"
import { useEffect, useState } from "react"
import { FaveSongForm } from "./FaveSongForm"

export const FaveSongs = () => {
    const [faveSongs, setSongs] = useState ([])
    useEffect(
        () => {
            fetch("http://localhost:8098/faveSongs")
                .then(res => res.json())
                .then((songsArray) => {
                    setSongs(songsArray)
        }
    )
}, []
    )
    const deleteSong = (id) => {
        fetch(`http://localhost:8098/faveSongs/${id}`, {
            method: "DELETE"}
         ).then(()=>{
            fetch("http://localhost:8098/faveSongs")
            .then(res => res.json())
            .then((songsArray) => {
                setSongs(songsArray)
         })
        })}
    
        const loggedInUser = parseInt(localStorage.getItem("feelings_user"))
    return (
        <>
        <h2>Everyone's Fave Songs</h2>
        <h3>Grab a song and give it a listen and make sure to leave a song for someone else!</h3>
        {
            faveSongs.map(song => {
            return <p style={{fontSize: "24px", color: "seagreen",backgroundColor: "pink", borderStyle: "dotted",
            width: "30%", display: "flex", alignItems: "center"}}
            key={song.id}>"{song.title}" by {song.artist}
                    {loggedInUser === song.userId 
                    ? <button style={{fontSize: "large", color: "seagreen",backgroundColor: "pink", borderStyle: "ridge"}}
                    onClick={() => {
                deleteSong(song.id)
                }}>Delete
            </button>
            : ""}
            </p>
                })
        }
        <FaveSongForm songSetter={setSongs} />
        </>
    )}