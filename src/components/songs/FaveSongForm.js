import React from "react";
import { useState } from "react";

export const FaveSongForm = ({ songSetter }) => {
    const [faveSong, updateSongs] = useState({
        artist: "",
        title: "",
        userId: 1
    })

    const addNewSong = (evt) => {
        evt.preventDefault()
        const newSong = {
            artist: faveSong.artist,
            title: faveSong.title,
            userId: parseInt(localStorage.getItem("feelings_user"))
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newSong)
        }

        return fetch("http://localhost:8098/faveSongs", fetchOption)
            .then(res => res.json())
            .then(() => {
                fetch("http://localhost:8098/faveSongs")
                    .then(res => res.json())
                    .then((data) => {
                        songSetter(data)
                        updateSongs({
                            artist: "",
                            title: "",
                            userId: 1
                        })
                    })
            })
    }

    return (
        <form className="SongForm">
            <h2 className="SongForm__title">What's your favorite song?</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Artist</label>
                    <input style={{width: "30%"}} value={faveSong.artist}
                        onChange={
                            (evt) => {
                                const copy = { ...faveSong }
                                copy.artist = evt.target.value
                                updateSongs(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Who sings it?"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Title</label>
                    <input style={{width: "30%"}} value={faveSong.title}
                        onChange={
                            (evt) => {
                                const copy = { ...faveSong }
                                copy.title = evt.target.value
                                updateSongs(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Title" />
                </div>
            </fieldset>
            <button style={{fontSize: "large", color: "seagreen",backgroundColor: "pink", borderStyle: "ridge"}}
            onClick={addNewSong} className="btn btn-primary">
                Save
            </button>

        </form>
    )
}