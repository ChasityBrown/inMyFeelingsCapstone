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
            <h3>Silly Content</h3>
            <DadJokes content={jokeContent} />
            <Memes memeContent={memeContent} />
            <SillyContentForm contentSetter={setJokeContent} anotherContentSetter={setMemeContent} />
        </>
    )
}