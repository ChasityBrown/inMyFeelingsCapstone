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
        <>
            <h2>Dad Jokes</h2>
        <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-around", borderSpacing: "5", alignItems: "center"}}>
            {
                dadJokes.map(dadJoke => {
                    return <p style={{fontSize: "20px", color: "seagreen",backgroundColor: "pink", borderStyle: "solid",
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
        </>
    )
}