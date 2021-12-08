import React from "react"
import { useEffect, useState } from "react"


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
    return (
        <>
        <h3>Memes</h3>
        {
            memes.map(meme => {
            return <p class="post__tagline" key= {meme}>"{meme.caption}"
                    <img class="post__image" src={meme.memeUrl}></img> </p>})
        }
        </>
    )
}