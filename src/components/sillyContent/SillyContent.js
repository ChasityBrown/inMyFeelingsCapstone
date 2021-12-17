import React from "react"
import { useEffect, useState } from "react"
import { DadJokes } from "./DadJokes"
import { Memes } from "./Memes"
import { SillyContentForm } from "./SillyContentForm"
import "./SillyContent.css"

export const SillyContent = () => {
    const [memeContent, setMemeContent] = useState([])
    const [jokeContent, setJokeContent] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8098/dadJokes")
                .then(res => res.json())
                .then((dadJokesArray) => {
                    setJokeContent(dadJokesArray)
                }
                )
        }, [])
    useEffect(
        () => {
            fetch("http://localhost:8098/memes")
                .then(res => res.json())
                .then((memesArray) => {
                    setMemeContent(memesArray)
                }
                )
        }, []
    )

    return (
        <>
            <h2 style={{backgroundColor: "black", fontWeight: "bolder", display: "flex", textAlign: "center"}}>Here's some silly content to make you smile. Scroll to the bottom if you've got something you'd like to post. You might just make someone's day!</h2>
            <DadJokes content={jokeContent} />
            <Memes memeContent={memeContent} />
            <SillyContentForm contentSetter={setJokeContent} anotherContentSetter={setMemeContent} />
        </>
    )
}