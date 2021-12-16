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
            {
                quotes.map(quote => {
                    return <p style={{fontSize: "24px", color: "seagreen",backgroundColor: "pink", borderStyle: "dotted",
                    width: "30%", display: "flex", alignItems: "center"}}
                    key={quote.id}>"{quote.text}" by {quote.author}
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
        </>
    )
}