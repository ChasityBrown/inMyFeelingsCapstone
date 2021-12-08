import React, {useEffect, useState } from "react"


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
    return (
        <>
        <h3>Quotes</h3>
        {
            quotes.map(quote => {
            return <p key= {quote}>"{quote.text}" by {quote.author}</p>})
        }
        </>
    )
}