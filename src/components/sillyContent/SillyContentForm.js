import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router";

export const SillyContentForm = ({memeSetter, dadJokeSetter}) => {
    const [meme, updateMemes ] = useState({
        caption: "",
        memeUrl: "",
        userId: 1,
        datePosted: ""
    })
    const [dadJoke, updateDadJokes] = useState({
        joke:"",
        userId: 1
    })
    const [sillyContent, changeSelectedContent] = useState (0)
    const history = useHistory()
    useEffect(
        ()=> {
            fetch("http://localhost:8098/memes")
                .then(res => res.json())
                .then((data) => {
                    updateMemes(data)
                })
    }, [] 
    )
    useEffect(
        ()=> {
            fetch("http://localhost:8098/dadJokes")
                .then(res => res.json())
                .then((data) => {
                    updateDadJokes(data)
                })
    }, [] 
    )
    
    const addNewMeme = (evt) => {
        evt.preventDefault()
        const newMeme = {
            caption: meme.caption,
            memeUrl: meme.memeUrl,
            userId: meme.userId,
            datePosted: new Date().toLocaleDateString()
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMeme)
        }

        return fetch("http://localhost:8098/memes", fetchOption)
        .then(res => res.json())
        .then(() => {
            fetch("http://localhost:8098/memes")
            .then(res => res.json())
            .then((data) => {
                memeSetter(data)
                updateMemes({
                    caption: "",
                    memeUrl: "",
                    userId: 1,
                    datePosted: ""
                })
            })    
            })
        }
    const addNewDadJoke = (evt) => {
        evt.preventDefault()
        const newDadJoke = {
            joke: dadJoke.joke,
            userId: dadJoke.userId
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newDadJoke)
        }

        return fetch("http://localhost:8098/dadJokes", fetchOption)
        .then(res => res.json())
        .then(() => {
            fetch("http://localhost:8098/dadJokes")
            .then(res => res.json())
            .then((data) => {
                dadJokeSetter(data)
                updateDadJokes({
                    joke:"",
                    userId: 1
                })
                })
            })
        }

        const memeOption = () => {
            return(
                <>
                <fieldset>
                <div className="form-group">
                <label htmlFor="name">Meme</label>
                <input
                onChange={
                    (evt) => {
                    const copy = {...meme}
                    copy.caption = evt.target.value
                    updateMemes(copy)
                    }
                }
                required autoFocus
                type="text"
                className="form-control"
                placeholder="Caption"/>
                </div>
                </fieldset>
                <fieldset>
                <div className="form-group">
                <label htmlFor="name">Meme</label>
                <input
                onChange={
                    (evt) => {
                    const copy = {...meme}
                    copy.memeUrl = evt.target.value
                    updateMemes(copy)
                    }
                }
                required autoFocus
                type="text"
                className="form-control"
                placeholder="Meme Url"/>
                <button onClick={addNewMeme} className="btn btn-primary">
                Save
            </button>
                </div>
                </fieldset>
                </>
            )}
            const dadJokeOption = () => {
                return(
                    <><fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Dad Joke</label>
                        <input 
                            onChange={
                                (evt) => {
                                    const copy = {...dadJoke}
                                    copy.joke = evt.target.value
                                    updateMemes(copy)
                                }
                        }
                        required autoFocus
                        type="text" 
                        className="form-control"
                        placeholder="Insert corny joke" />
                        <button onClick={addNewDadJoke} className="btn btn-primary">
                Save
            </button>
                    </div>
                </fieldset>
                </>
                )}
            
            
        
    
    return (
        <>
        <form className="SillyContentForm">
            <h2 className="SillyContentForm__title">Brighten someone's day with your own silliness</h2>
            <fieldset>
            <div className="form-group">
                <label htmlFor="sillyContent">What do you want to post?</label>
                <select
                    defaultValue=""
                    name="sillyContent"
                    id="sillyContentId"
                    className="form-control"
                    onChange={
                        (evt) => {
                        changeSelectedContent(parseInt(evt.target.value))

                    }}
                >
                    <option value={0} >Select an option</option>
                    <option value={1}>Meme/GIF</option>
                    <option value={2}>Dad Joke</option>
                </select>
            </div>
            </fieldset>
            
            {sillyContent === 1 && memeOption()}
            {sillyContent === 2 && dadJokeOption()}
            
        </form>
        </>
    )        
                }
