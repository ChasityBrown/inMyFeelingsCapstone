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
    const updateSong = faveSong => {
            return fetch(`http://localhost:8098/faveSongs/${faveSong.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(faveSong)
            })
              .then(getAnimals)
          }
        const loggedInUser = parseInt(localStorage.getItem("feelings_user"))
    return (
        <>
        <h3>Everyone's Fave Songs</h3>
        <h4>Grab a song and give it a listen and make sure to leave a song for someone else!</h4>
        {
            faveSongs.map(song => {
            return <p key= {song}>"{song.title}" by {song.artist}
                    {loggedInUser === song.userId 
                    ? <button onClick={() => {
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