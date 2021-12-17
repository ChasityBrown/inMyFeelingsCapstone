import React from "react"
import { useEffect, useState } from "react"

export const DadJokes = ({ content }) => {
    const [dadJokes, setJokes] = useState([])
    useEffect(
        () => {
            setJokes(content)
        }, [content]
    )
    const deleteJoke = (id) => {
        fetch(`http://localhost:8098/dadJokes/${id}`, {
            method: "DELETE"
        }
        ).then(() => {
            fetch("http://localhost:8098/dadJokes")
                .then(res => res.json())
                .then((data) => {
                    setJokes(data)
                })
        })
    }
    const loggedInUser = parseInt(localStorage.getItem("feelings_user"))
    return (
        <div style={{display: "flex", flexWrap: "wrap", flexDirection: "column", justifyContent: "space-around", borderSpacing: "5", alignItems: "center"}}>
            <h3 style={{backgroundColor: "black", fontWeight: "bold" }}>Dad Jokes</h3>
            {
                dadJokes.map(dadJoke => {
                    return <p style={{fontSize: "24px", color: "seagreen",backgroundColor: "pink", borderStyle: "dotted",
                    width: "30%", display: "flex", alignItems: "center"}}
                    key={dadJoke.id}>"{dadJoke.joke}"
                        {loggedInUser === dadJoke.userId
                            ? <button style={{fontSize: "large", color: "seagreen",backgroundColor: "pink", borderStyle: "ridge"}}
                            onClick={() => {
                                deleteJoke(dadJoke.id)
                            }}>Delete
                            </button>
                            : ""}</p>
                })
            }
        </div>
    )
}