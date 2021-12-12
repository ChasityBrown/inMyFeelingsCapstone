import React, {useEffect, useState } from "react"
import { QuoteForm } from "./QuoteForm"


export const Quotes = () => {
    const [quotes, setQuotes] = useState ([])
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
            method: "DELETE"}
         ).then(()=>{
            fetch("http://localhost:8098/quotes")
            .then(res => res.json())
            .then((data) => {
                setQuotes(data)
         })
        })}
    const loggedInUser = parseInt(localStorage.getItem("feelings_user"))
    return (
        <>
        <h3>Quotes</h3>
        {
            quotes.map(quote => {
            return <p key= {quote}>"{quote.text}" by {quote.author}
            {loggedInUser === quote.userId 
                    ? <button onClick={() => {
                deleteQuote(quote.id)
                }}>Delete
            </button>
            : ""}
            </p>})
        }
        <QuoteForm quoteSetter={setQuotes} />
        </>
    )
}