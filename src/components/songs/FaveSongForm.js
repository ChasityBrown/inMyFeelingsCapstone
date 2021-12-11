import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router";

export const FaveSongForm = ({songSetter}) => {
    const [faveSong, updateSongs] = useState({
        artist: "",
        title: "",
        userId:1
    }) 

    const history = useHistory()
    
    const addNewSong = (evt) => {
        evt.preventDefault()
        const newSong = {
            artist: faveSong.artist,
            title: faveSong.title,
            userId: faveSong.userId
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
                    userId:1
                })
            })
        })}
    
    return (
        <form className="SongForm">
            <h2 className="SongForm__title">What's your favorite song?</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Artist</label>
                    <input value={faveSong.artist}
                        onChange={
                            (evt) => {
                                const copy = {...faveSong}
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
                    <input value={faveSong.title}
                        onChange={
                            (evt) => {
                                const copy = {...faveSong}
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
            <button onClick={addNewSong} className="btn btn-primary">
                Save
            </button>
            
        </form>
    )            
}