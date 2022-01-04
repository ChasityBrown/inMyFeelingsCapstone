import React, { useEffect, useState } from "react"
import { QuoteForm } from "./QuoteForm"


export const Quotes = () => {
    const [quotes, setQuotes] = useState([])
    useEffect(
        () => {
            fetch("http://localhost:8098/quotes")
                .then(res => res.json())
                .then((quotesArray) => {
                    setQuotes(quotesArray)
                }
                )
        }, []
    )
    const deleteQuote = (id) => {
        fetch(`http://localhost:8098/quotes/${id}`, {
            method: "DELETE"
        }
        ).then(() => {
            fetch("http://localhost:8098/quotes")
                .then(res => res.json())
                .then((data) => {
                    setQuotes(data)
                })
        })
    }
    const loggedInUser = parseInt(localStorage.getItem("feelings_user"))

    return (
        <>
            <h2>Quotes</h2>
        <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-around", borderSpacing: "5", textAlign: "center"}} >
            {
                quotes.map(quote => {
                    return <p style={{ display: "flex", justifyContent: "space-around", fontSize: "16px", color: "seagreen",backgroundColor: "pink", borderStyle: "solid",
                    width: "30%"}}
                    key={quote.id}>
                        "{quote.text}" by {quote.author}
                        {loggedInUser === quote.userId
                            ? 
                            <div>
                            <button style={{fontSize: "large", color: "seagreen",backgroundColor: "pink", borderStyle: "ridge"}} onClick={() => {
                                deleteQuote(quote.id)
                            }}>Delete
                            </button>
                            </div>
                            : ""}
                    </p>
                })
            }
           
            <QuoteForm quoteSetter={setQuotes} />
        </div>
        </>
    )
}
