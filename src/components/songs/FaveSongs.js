import React from "react"
import { useEffect, useState } from "react"
import { FaveSongForm } from "./FaveSongForm"

export const FaveSongs = () => {
    const [faveSongs, setSongs] = useState([])
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
            method: "DELETE"
        }
        ).then(() => {
            fetch("http://localhost:8098/faveSongs")
                .then(res => res.json())
                .then((songsArray) => {
                    setSongs(songsArray)
                })
        })
    }

    const loggedInUser = parseInt(localStorage.getItem("feelings_user"))
    return (
        <>
            <h2>Everyone's Fave Songs: Grab a song and give it a listen and make sure to leave a song for someone else!</h2>
            <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-around", borderSpacing: "5", textAlign: "center" }}>
                {

                    faveSongs.map(song => {
                        return <p style={{display: "flex", alignItems: "center", fontSize: "16px", color: "seagreen", backgroundColor: "pink", borderStyle: "solid", borderRadius: "50%",
                            marginTop: "50px", height: "40%"}}
                            key={song.id}>
                            "{song.title}" by {song.artist}
                            {loggedInUser === song.userId
                                ?
                                <div>
                                    <button style={{ fontSize: "large", color: "seagreen", backgroundColor: "pink", borderStyle: "ridge" }}
                                        onClick={() => {
                                            deleteSong(song.id)
                                        }}>Delete
                                    </button>
                                </div>
                                : ""}
                        </p>
                    })
                }
        
                <FaveSongForm songSetter={setSongs}/>
            </div>
        </>
    )
}