import React from "react"
import { useEffect, useState } from "react"

export const DadJokes = ({content}) => {
    const [dadJokes, setJokes] = useState ([])
    useEffect(
        () => {
            setJokes(content)
        }, [content]
    )
    const deleteJoke = (id) => {
        fetch(`http://localhost:8098/dadJokes/${id}`, {
            method: "DELETE"}
         ).then(()=>{
            fetch("http://localhost:8098/dadJokes")
            .then(res => res.json())
            .then((data) => {
                setJokes(data)
         })
        })}
        const loggedInUser = parseInt(localStorage.getItem("feelings_user"))
    return (
        <>
        <h3>Jokes</h3>
        {
            dadJokes.map(dadJoke => {
            return <p key={dadJoke.id}>"{dadJoke.joke}"
            {loggedInUser === dadJoke.userId 
                    ? <button onClick={() => {
                deleteJoke(dadJoke.id)
                }}>Delete
            </button>
            : ""}</p>})
        }
        </>
    )
}