import React from "react"
import { useEffect, useState } from "react"

export const Memes = ({memeContent}) => {
    const [memes, setMemes] = useState ([])
    useEffect(
        () => {
                    setMemes(memeContent)
        }, [memeContent]
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
            return <div className="post__tagline" key={meme.id}>
                    <img className="post__image" src={meme.memeUrl} alt=""></img> <p>"{meme.caption}"</p>
                    {loggedInUser === meme.userId 
                    ? <button onClick={() => {
                deleteMeme(meme.id)
                }}>Delete
            </button>
            : ""}
                    </div>})
        }
        </>
    )
}