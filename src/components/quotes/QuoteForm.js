import React from "react";
import { useState } from "react";

export const QuoteForm = ({ quoteSetter }) => {
    const [quote, updateQuotes] = useState({
        text: "",
        author: "",
        userId: 1,
        datePosted: ""
    })
    const addNewQuote = (evt) => {
        evt.preventDefault()
        const newQuote = {
            text: quote.text,
            author: quote.author,
            userId: parseInt(localStorage.getItem("feelings_user")),
            datePosted: new Date().toLocaleDateString()
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newQuote)
        }

        return fetch("http://localhost:8098/quotes", fetchOption)
            .then(res => res.json())
            .then(() => {
                fetch("http://localhost:8098/quotes")
                    .then(res => res.json())
                    .then((data) => {
                        quoteSetter(data)
                        updateQuotes({
                            text: "",
                            author: "",
                            userId: 1,
                            datePosted: ""
                        })
                    })
            }
            )
    }
    return (
        <form className="QuoteForm">
            <h2 style={{backgroundColor: "black"}} className="QuoteForm__title">Wanna leave a quote of your own?</h2>
            <fieldset>
                <div className="form-group">
                    <label style={{backgroundColor: "black", fontWeight: "bold"}} htmlFor="name">Quote</label>
                    <input value={quote.text}
                        onChange={
                            (evt) => {
                                const copy = { ...quote }
                                copy.text = evt.target.value
                                updateQuotes(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="What did they say?"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label style={{backgroundColor: "black", fontWeight: "bold"}} htmlFor="name">Author</label>
                    <input value={quote.author}
                        onChange={
                            (evt) => {
                                const copy = { ...quote }
                                copy.author = evt.target.value
                                updateQuotes(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Who said this?" />
                </div>
            </fieldset>
            <button style={{fontSize: "large", color: "seagreen",backgroundColor: "pink", borderStyle: "ridge"}} onClick={addNewQuote} className="btn btn-primary">
                Save
            </button>
        </form>
    )
}