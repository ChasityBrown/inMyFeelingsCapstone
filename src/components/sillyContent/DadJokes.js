import React from "react"
import { useEffect, useState } from "react"
import { SillyContentForm } from "./SillyContentForm"


export const DadJokes = () => {
    const [dadJokes, setJokes] = useState ([])
    useEffect(
        () => {
            fetch("http://localhost:8098/dadJokes")
                .then(res => res.json())
                .then((dadJokesArray) => {
                    setJokes(dadJokesArray)
        }
    )
}, []
    )
    return (
        <>
        <h3>Jokes</h3>
        {
            dadJokes.map(dadJoke => {
            return <p key= {dadJoke}>"{dadJoke.joke}"</p>})
        }
        <SillyContentForm dadJokeSetter={setJokes} />
        </>
    )
}