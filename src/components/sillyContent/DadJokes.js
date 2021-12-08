import React from "react"
import { useEffect, useState } from "react"


export const DadJokes = () => {
    const [dadJokes, setJokes] = useState ([])
    useEffect(
        () => {
            fetch("http://localhost:8098/dadjokes")
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
        </>
    )
}