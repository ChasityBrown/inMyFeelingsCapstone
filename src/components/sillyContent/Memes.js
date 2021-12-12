import React from "react"
import { useEffect, useState } from "react"
import { SillyContentForm } from "./SillyContentForm"

export const Memes = () => {
    const [memes, setMemes] = useState ([])
    useEffect(
        () => {
            fetch("http://localhost:8098/memes")
                .then(res => res.json())
                .then((memesArray) => {
                    setMemes(memesArray)
        }
    )
}, []
    )
    const deleteMeme = (id) => {
        fetch(`http://localhost:8098/memes/${id}`, {
            method: "DELETE"}
         ).then(()=>{
            fetch("http://localhost:8098/memes")
            .then(res => res.json())
            .then((data) => {
                setMemes(data)
         })
        })}
    const loggedInUser = parseInt(localStorage.getItem("feelings_user"))
    return (
        <>
        <h3>Memes</h3>
        {
            memes.map(meme => {
            return <p class="post__tagline" key= {meme}>"{meme.caption}"
                    <img class="post__image" src={meme.memeUrl}></img> 
                    {loggedInUser === meme.userId 
                    ? <button onClick={() => {
                deleteMeme(meme.id)
                }}>Delete
            </button>
            : ""}
                    </p>})
        }
        <SillyContentForm memeSetter={setMemes} />
        </>
    )
}